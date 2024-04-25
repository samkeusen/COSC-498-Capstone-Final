import React, { useState } from 'react';
import AWS from 'aws-sdk';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const AWSCredentialForm = ({ open, onClose }) => {
  const [accessKeyId, setAccessKeyId] = useState('');
  const [secretAccessKey, setSecretAccessKey] = useState('');

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Initialize AWS SDK with user's credentials
    AWS.config.update({
      credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
      }
    });

    // Create an AWS service object
    const ec2 = new AWS.EC2();

    // Example: Describe instances using the AWS SDK
    try {
      const data = await ec2.describeInstances().promise();
      console.log('Instances:', data);
    } catch (error) {
      console.error('Error:', error);
    }

    // Close the modal
    onClose();
  };

  return (
    <Modal
      open={open}
      onClose={onClose}
      aria-labelledby="aws-credential-form-modal"
      aria-describedby="aws-credential-form"
    >
      <Box
        sx={{
          position: 'absolute',
          top: '50%',
          left: '50%',
          transform: 'translate(-50%, -50%)',
          width: 400,
          bgcolor: 'background.paper',
          boxShadow: 24,
          p: 4,
        }}
      >
        <Typography variant="h6" component="h2" gutterBottom>
          AWS Credential Form
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Access Key ID"
            value={accessKeyId}
            onChange={(e) => setAccessKeyId(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <TextField
            label="Secret Access Key"
            value={secretAccessKey}
            onChange={(e) => setSecretAccessKey(e.target.value)}
            required
            fullWidth
            margin="normal"
          />
          <Button type="submit" variant="contained" color="primary">
            Save Credentials
          </Button>
        </form>
      </Box>
    </Modal>
  );
};

export default AWSCredentialForm;
