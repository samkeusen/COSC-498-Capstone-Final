import React from 'react';
import { useTheme } from '@mui/material/styles';
import { Box, Typography } from '@mui/material';
import { tokens } from '../../theme';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';

const APIintegration = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

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
          height: '100%',
          display: 'grid',
          gridTemplateColumns: '1fr 1fr 1fr',
          gap: '16px',
          gridTemplateAreas: `
            'box1 box2 box3'
          `,
        }}
      >
        <Box
          sx={{
            gridArea: 'box1',
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography variant="h3" color={colors.grey[100]} textAlign="center">
            Microsoft Azure
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 20, mb: "100px" }}>
            <AddCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body1" color={colors.grey[100]}>
              Connect Cloud Provider
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: 'box2',
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography variant="h3" color={colors.grey[100]} textAlign="center">
            Google Cloud
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 20, mb: "100px" }}>
            <AddCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body1" color={colors.grey[100]}>
              Connect Cloud Provider
            </Typography>
          </Box>
        </Box>
        <Box
          sx={{
            gridArea: 'box3',
            backgroundColor: colors.primary[400],
            borderRadius: '12px',
            p: 4,
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <Typography variant="h3" color={colors.grey[100]} textAlign="center">
            Amazon Web Services
          </Typography>
          <Box sx={{ display: 'flex', alignItems: 'center', mt: 20, mb: "100px" }}>
            <AddCircleOutlineOutlinedIcon sx={{ mr: 1 }} />
            <Typography variant="body1" color={colors.grey[100]}>
              Connect Cloud Provider
            </Typography>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default APIintegration;