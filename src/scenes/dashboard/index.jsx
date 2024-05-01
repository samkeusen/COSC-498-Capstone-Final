import { Box, Button, IconButton, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import { mockCommitments } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";
import BarChart from "../../components/BarChart";

const Dashboard = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Main Dashboard"/>

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
      {/* GRID & CHARTS */}
      <Box
        display="grid"
        gridTemplateColumns="repeat(12, 1fr)"
        gridAutoRows="140px"
        gap="8px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '8px' }}
        >
          <StatBox
            title="$2,676,230.51"
            subtitle="Amazon Web Services"
            progress="0.35"
            increase="+14% YTD"

          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '8px' }}
        >
          <StatBox
            title="$1,473,762.49"
            subtitle="Google Cloud"
            progress="0.42"
            increase="+21% YTD"

          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '8px' }}
        >
          <StatBox
            title="$1,873,760.00"
            subtitle="Microsoft Azure"
            progress="0.34"
            increase="+5% YTD"
          />
        </Box>

        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius= '8px'
        >
          <Box
            mt="25px"
            p="0 30px"
            display="flex "
            justifyContent="space-between"
            alignItems="center"
          >
            <Box>
              <Typography
                variant="h5"
                fontWeight="600"
                color={colors.grey[100]}
              >
                Total Multi-Cloud Spend (FY24)
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $6,023,753.00
              </Typography>
            </Box>
            <Box>
              <IconButton>
                <DownloadOutlinedIcon
                  sx={{ fontSize: "26px", color: colors.greenAccent[500] }}
                />
              </IconButton>
            </Box>
          </Box>
          <Box height="250px" m="-20px 0 0 0">
            <LineChart isDashboard={true} />
          </Box>
        </Box>
      <Box
        gridColumn="span 4"
        gridRow="span 2"
        sx={{
          backgroundColor: colors.primary[400],
          overflow: "auto",
          borderRadius: '8px',
          '&::-webkit-scrollbar': {
            borderRadius: '8px',
          }
        }}
      >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        borderBottom={`4px solid ${colors.primary[500]}`}
        p="15px"
      >
        <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
          Enterprise Agreements
        </Typography>
      </Box>
      {mockCommitments.map((commitment, i) => (
        <Box
          key={`${commitment.txId}-${i}`}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          p="15px"
        >
          <Box flexGrow={1}>
            <Typography
              color={colors.greenAccent[500]}
              variant="h5"
              fontWeight="600"
            >
              {commitment.platform}
            </Typography>
            <Typography color={colors.grey[100]}>
              End: {commitment.endDate}
            </Typography>
            <Typography color={colors.grey[100]} sx={{ fontSize: '0.8rem' }}>
               {commitment.notes}
            </Typography>
          </Box>
          <Box>
            <Typography
              color={colors.grey[100]}
              variant="h6"
              fontWeight="600"
            >
              Remaining Balance: ${(commitment.totalCost - commitment.spentCost).toLocaleString()}
            </Typography>
            <Box
              width="100%"
              height="8px"
              borderRadius="5px"
              bgcolor={colors.grey[300]}
              mt="5px"
            >
              <Box
                height="100%"
                width={`${(commitment.spentCost / commitment.totalCost) * 100}%`}
                borderRadius="5px"
                bgcolor={colors.greenAccent[500]}
              />
            </Box>
          </Box>
        </Box>
      ))}
    </Box>

        {/* ROW 3 */}
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius= '8px'
        >
          <Typography
            variant="h5"
            fontWeight="600"
            sx={{ padding: "30px 30px 0 30px" }}
          >
            Marketplace Spending (FY24)
          </Typography>
          <Box height="250px" mt="-20px">
            <BarChart isDashboard={true} />
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius= '8px'

        >
          <Typography
          variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }} 
       >
          Global Cloud Infrastructure
          </Typography>
          <Box height="200px">
          <GeographyChart isDashboard={true} />
          </Box>
        </Box>
        <Box
  gridColumn="span 4"
  gridRow="span 2"
  backgroundColor={colors.primary[400]}
  p="30px"
  borderRadius='8px'
>
  <Typography variant="h5" fontWeight="600">
    Commitment Spending
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={4} container direction="column" alignItems="center">
      <Box mt={3}>
        <ProgressCircle size="125" progress="0.75" />
      </Box>
      <Typography variant="h6" color={colors.grey[100]} mt="15px">
        AWS
      </Typography>
      <Typography variant="h6" color={colors.grey[100]} mt="3px">
        $7,200,000
      </Typography>
    </Grid>
    <Grid item xs={4} container direction="column" alignItems="center">
      <Box mt={3}>
        <ProgressCircle size="125" progress="0.45"/>
      </Box>
      <Typography variant="h6" color={colors.grey[100]} mt="15px">
        Google Cloud
      </Typography>
      <Typography variant="h6" color={colors.grey[100]} mt="3px">
        $3,600,000
      </Typography>
    </Grid>
    <Grid item xs={4} container direction="column" alignItems="center">
      <Box mt={3}>
        <ProgressCircle size="125" progress="0.28"/>
      </Box>
      <Typography variant="h6" color={colors.grey[100]} mt="15px">
        Microsoft Azure
      </Typography>
      <Typography variant="h6" color={colors.grey[100]} mt="3px">
        $4,600,000
      </Typography>
    </Grid>
  </Grid>
</Box>

     </Box>
    </Box>
  ); 
};

export default Dashboard;