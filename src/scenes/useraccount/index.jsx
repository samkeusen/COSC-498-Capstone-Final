import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { tokens } from '../../theme';
import AWSCredentialForm from './AWSCredentialForm';
import Header from '../../components/Header';

const APIintegration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isAWSCredentialFormOpen, setIsAWSCredentialFormOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'flex-start',
        minHeight: '100vh',
        backgroundColor: colors.theme,
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      {/* Header at the top of the page */}
      <Header title="API Integration" subtitle="Connect Your Cloud Provider" />

      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
          marginTop: '5px', 
        }}
      >
        
        {/* Azure */}
        <Box
          component={Button}
          onClick={() => setIsAWSCredentialFormOpen(true)}
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '500px',
            width: '100%',
            '&:hover': {
              backgroundColor: colors.grey[500],
            },
          }}
        >
          <img src="../../azure.png" alt="Microsoft Azure" style={{ height: '100px', marginBottom: '80px' }} />
          <Typography variant="h3" color={colors.grey[100]} textAlign="center" sx={{ textTransform: 'none' }}>
            Microsoft Azure
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} sx={{ textTransform: 'none' }}>
            Connect Cloud Provider
          </Typography>
        </Box>

        {/* Google Cloud */}
        <Box
          component={Button}
          onClick={() => setIsAWSCredentialFormOpen(true)}
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '500px',
            width: '100%',
            '&:hover': {
              backgroundColor: colors.grey[500],
            },
          }}
        >
          <img src="../../google.png" alt="Google Cloud" style={{ height: '100px', marginBottom: '80px' }} />
          <Typography variant="h3" color={colors.grey[100]} textAlign="center" sx={{ textTransform: 'none' }}>
            Google Cloud
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} sx={{ textTransform: 'none' }}>
            Connect Cloud Provider
          </Typography>
        </Box>

        {/* Amazon Web Services */}
        <Box
          component={Button}
          onClick={() => setIsAWSCredentialFormOpen(true)}
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '500px',
            width: '100%',
            '&:hover': {
              backgroundColor: colors.grey[600],
            },
          }}
        >
          <img src="../../aws.png" alt="Amazon Web Services" style={{ height: '100px', marginBottom: '80px' }} />
          <Typography variant="h3" color={colors.grey[100]} textAlign="center" sx={{ textTransform: 'none' }}>
            Amazon Web Services
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} sx={{ textTransform: 'none' }}>
            Connect Cloud Provider
          </Typography>
        </Box>
      </Box>

      {/* Render AWSCredentialForm modal */}
      <AWSCredentialForm open={isAWSCredentialFormOpen} onClose={() => setIsAWSCredentialFormOpen(false)} />
    </Box>
  );
};

export default APIintegration;