import { Box, Button, useTheme } from "@mui/material";
import { DataGrid } from "@mui/x-data-grid";
import { tokens } from "../../theme";
import { mockDataIAM } from "../../data/mockData";
import Header from "../../components/Header";
import DownloadOutlinedIcon from '@mui/icons-material/DownloadOutlined';

const ManageIAM = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  const columns = [
    { field: 'id', headerName: 'ID', width: 50 },
    { field: 'name', headerName: 'Name', width: 150 },
    { field: 'email', headerName: 'Email', width: 200 },
    { field: 'policyName', headerName: 'Policy Name', width: 150 },
    { field: 'permissionLevel', headerName: 'Permission Level', width: 130 },
    { field: 'associatedResources', headerName: 'Associated Resources', width: 200 },
    { field: 'cloudProvider', headerName: 'Cloud Provider', width: 120 },
    { field: 'lastAccessTime', headerName: 'Last Access Time', width: 150 },
    { field: 'mfaEnabled', headerName: 'MFA Enabled', width: 130, 
      valueGetter: (params) => (params.row.mfaEnabled ? 'Yes' : 'No') },
  ];

  return (
    <Box m="20px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Identity Access Management" subtitle="Manage IAM Across Platforms" />
        
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', alignItems: 'center' }}>
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
      <Box
        m="40px 0 0 0"
        height="75vh"
        sx={{
          "& .MuiDataGrid-root": {
            border: "none",
          },
          "& .MuiDataGrid-cell": {
            borderBottom: "none",
          },
          "& .name-column--cell": {
            color: colors.greenAccent[300],
          },
          "& .MuiDataGrid-columnHeaders": {
            backgroundColor: colors.primary[400],
            borderBottom: "none",
          },
          "& .MuiDataGrid-virtualScroller": {
            backgroundColor: colors.primary[400],
          },
          "& .MuiDataGrid-footerContainer": {
            borderTop: "none",
            backgroundColor: colors.primary[400],
          },
          "& .MuiCheckbox-root": {
            color: `${colors.greenAccent[200]} !important`,
          },
        }}
      >
        <DataGrid checkboxSelection rows={mockDataIAM} columns={columns} />
      </Box>
    </Box>
  );
};

export default ManageIAM;