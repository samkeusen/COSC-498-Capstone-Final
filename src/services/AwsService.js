import AWS from 'aws-sdk';
import { awsConfig } from './aws-credentials';

AWS.config.update({
    accessKeyId: awsConfig.accessKeyId,
    secretAccessKey: awsConfig.secretAccessKey,
    region: awsConfig.region
});

// Create the service objects after the configuration
const ec2 = new AWS.EC2();
const cloudwatch = new AWS.CloudWatch({ apiVersion: '2010-08-01' });

const fetchMetric = async (metricName, instanceId) => {
    const params = {
        MetricName: metricName,
        Namespace: 'AWS/EC2',
        Period: 300,
        Dimensions: [{ Name: 'InstanceId', Value: instanceId }],
        StartTime: new Date(new Date().getTime() - 3600 * 1000), // Display 1 hour ago
        EndTime: new Date(),
        Statistics: ['Average']
    };

    return cloudwatch.getMetricStatistics(params).promise();
};

export const describeEC2Instance = async (instanceId) => {
    const params = {
        InstanceIds: [instanceId],
    };

    try {
        const data = await ec2.describeInstances(params).promise();
        const instanceDetails = data.Reservations[0].Instances[0];
        return instanceDetails;
    } catch (error) {
        console.error("Error describing EC2 instance: ", error);
        throw error;
    }
};

export const fetchMetrics = async (instanceId) => {
    const metricsToFetch = ['CPUUtilization', 'DiskReadBytes', 'DiskWriteBytes', 'NetworkIn', 'NetworkOut'];
    try {
        const data = await Promise.all(metricsToFetch.map(metric => fetchMetric(metric, instanceId)));
        return data.map((metricData, i) => ({
            metricName: metricsToFetch[i],
            datapoints: metricData.Datapoints
        }));
    } catch (error) {
        console.error("AWS SDK error: ", error);
        throw error;
    }
};