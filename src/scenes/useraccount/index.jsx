import React, { useState } from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography, Button } from '@mui/material';
import { tokens } from '../../theme';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import AWSCredentialForm from './AWSCredentialForm';

const APIintegration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const [isAWSCredentialFormOpen, setIsAWSCredentialFormOpen] = useState(false);

  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        backgroundColor: colors.theme,
        padding: '16px',
        boxSizing: 'border-box',
      }}
    >
      <Box
        sx={{
          width: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
        }}
      >
        {/* Microsoft Azure */}
        <Box
          sx={{
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            minHeight: '400px',
          }}
        >
          <img src="../../azure.png" alt="Microsoft Azure" style={{ height: '100px', marginBottom: '20px' }} />
          <Typography variant="h3" color={colors.grey[100]} textAlign="center">
            Microsoft Azure
          </Typography>
          <Box
            sx={{
              mt: 2,
              p: 1,
              border: `1px solid ${colors.grey[100]}`,
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
            }}
          >
            <AddCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body1" color={colors.grey[100]}>
              Connect Cloud Provider
            </Typography>
          </Box>
        </Box>

        {/* Google Cloud */}
        <Box
          component={Button}
          onClick={() => setIsAWSCredentialFormOpen(true)} // Open modal when AWS button is clicked
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
              backgroundColor: colors.grey[300],
            },
          }}
        >
          <img src="../../google.png" alt="Google Cloud" style={{ height: '100px', marginBottom: '80px' }} />
          <Typography variant="h3" color={colors.grey[100]} textAlign="center" sx={{ textTransform: 'none' }}>
            Amazon Web Services
          </Typography>
          <Typography variant="body1" color={colors.grey[100]} sx={{ textTransform: 'none' }}>
            Connect Cloud Provider
          </Typography>
        </Box>

        {/* Amazon Web Services */}
        <Box
          component={Button}
          onClick={() => setIsAWSCredentialFormOpen(true)} // Open modal when AWS button is clicked
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
              backgroundColor: colors.grey[300],
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
