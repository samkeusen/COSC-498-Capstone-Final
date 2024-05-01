import React, { useState, useEffect } from 'react';
import { Box, Button, useTheme } from '@mui/material';
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';
import { tokens } from "../../theme";
import Header from '../../components/Header';
import { fetchMetrics } from '../../services/AwsService';
import { describeEC2Instance } from '../../services/AwsService';
import { Chart as ChartJS, CategoryScale, LinearScale, LineElement, PointElement, Tooltip, Legend } from 'chart.js';
import { Line } from 'react-chartjs-2';

ChartJS.register(
    CategoryScale,
    LinearScale,
    LineElement,
    PointElement,
    Tooltip,
    Legend
);

const createChartData = (datapoints, metricName) => {
    if (!datapoints || !Array.isArray(datapoints) || datapoints.length === 0) {
        return {
            labels: [],
            datasets: []
        };
    }
    
    // Sort datapoints by Timestamp since CloudWatch can return them out of order
    datapoints.sort((a, b) => new Date(a.Timestamp) - new Date(b.Timestamp));

    return {
        labels: datapoints.map(dp => new Date(dp.Timestamp).toLocaleTimeString()),
        datasets: [
            {
                label: metricName || 'Metric',
                data: datapoints.map(dp => dp.Average),
                fill: false,
                borderColor: 'rgb(75, 192, 192)',
                tension: 0.1
            }
        ]
    };
};

const AWSDashboard = () => {

    const theme = useTheme();
    const colors = tokens(theme.palette.mode);

    const instanceId = 'i-0467bd34b66c620c0';  // EC2 instance ID
    const [metrics, setMetrics] = useState([]);
    const [instanceDetails, setInstanceDetails] = useState(null);

    useEffect(() => {
        const loadData = async () => {
            try {
                const metricData = await fetchMetrics(instanceId);
                console.log("Fetched Metric Data:", metricData);
                setMetrics(metricData);
            } catch (error) {
                console.error('Error fetching data from AWS: ', error);
            }
        };

        const loadInstanceDetails = async () => {
            try {
                const details = await describeEC2Instance(instanceId);
                console.log("EC2 Instance Details:", details);
                setInstanceDetails(details);
            } catch (error) {
                console.error('Error fetching EC2 instance details: ', error);
            }
        };
    
        loadData();
  loadInstanceDetails();
}, []);

return (
    <Box m="10px">
        {/* HEADER */}
        <Box display="flex" justifyContent="space-between" alignItems="center">
            <Header title="AWS Resource Dashboard"/>

            <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[800],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                            marginRight: "10px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Download Reports
                    </Button>
                </Box>
                <Box>
                    <Button
                        sx={{
                            backgroundColor: colors.blueAccent[800],
                            color: colors.grey[100],
                            fontSize: "14px",
                            fontWeight: "bold",
                            padding: "10px 20px",
                        }}
                    >
                        <DownloadOutlinedIcon sx={{ mr: "10px" }} />
                        Create Custom Dashboard
                    </Button>
                </Box>
            </Box>
        </Box>

        {/* EC2 Instance Widgets */}
        {instanceDetails ? (
            <Box display="flex" justifyContent="space-between" alignItems="center" flexWrap="wrap" sx={{ borderRadius: '10px' }}>
                <Box sx={{ 
                        flexGrow: 1,
                        p: 2, 
                        backgroundColor: colors.primary[400], 
                        borderRadius: '10px', 
                        minWidth: '30%', 
                        textAlign: 'center', 
                        m: 1, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        color: colors.greenAccent[500]
                    }}>
                    <div>Instance Type</div>
                    <div><strong>{instanceDetails.InstanceType}</strong></div>
                </Box>
                <Box sx={{ 
                        flexGrow: 1,
                        p: 2, 
                        backgroundColor: colors.primary[400], 
                        borderRadius: '10px', 
                        minWidth: '30%', 
                        textAlign: 'center', 
                        m: 1, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        color: colors.greenAccent[500]
                    }}>
                    <div>Instance ID</div>
                    <div><strong>{instanceDetails.InstanceId}</strong></div>
                </Box>
                <Box sx={{ 
                        flexGrow: 1,
                        p: 2, 
                        backgroundColor: colors.primary[400], 
                        borderRadius: '10px', 
                        minWidth: '30%', 
                        textAlign: 'center', 
                        m: 1, 
                        display: 'flex', 
                        flexDirection: 'column', 
                        justifyContent: 'center', 
                        alignItems: 'center',
                        color: colors.greenAccent[500]
                    }}>
                    <div>State</div>
                    <div><strong>{instanceDetails.State.Name}</strong></div>
                </Box>
            </Box>
        ) : (
            <Box>Loading instance details...</Box>
        )}

        {/* CHARTS AND METRICS */}
        {metrics.map(metric => (
            <Box key={metric.metricName} sx={{ mt: 4 }}>
                <h2>{metric.metricName}</h2>
                <Box style={{ height: '80px', width: '100%' }}>
                    <Line options={{ responsive: true, maintainAspectRatio: false }} data={createChartData(metric.datapoints, metric.metricName)} />
                </Box>
            </Box>
        ))}
    </Box>
);

};

export default AWSDashboard;