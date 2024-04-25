import { Box, Button, IconButton, Typography, useTheme, Grid } from "@mui/material";
import { tokens } from "../../theme";
import { mockCommitments } from "../../data/mockData";
import DownloadOutlinedIcon from "@mui/icons-material/DownloadOutlined";

import Header from "../../components/Header";
import LineChart from "../../components/LineChart";
import GeographyChart from "../../components/GeographyChart";
import StatBox from "../../components/StatBox";
import ProgressCircle from "../../components/ProgressCircle";

const GoogleCloud = () => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);

  return (
    <Box m="10px">
      {/* HEADER */}
      <Box display="flex" justifyContent="space-between" alignItems="center">
        <Header title="Google Cloud"/>

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
        gap="10px"
      >
        {/* ROW 1 */}
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '10px' }}
        >
          <StatBox
            title="$386,230.64"
            subtitle="Amazon Web Services"
            progress="0.75"
            increase="+14%"

          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '10px' }}
        >
          <StatBox
            title="$173,762.49"
            subtitle="Google Cloud"
            progress="0.50"
            increase="+21%"

          />
        </Box>
        <Box
          gridColumn="span 4"
          backgroundColor={colors.primary[400]}
          display="flex"
          alignItems="center"
          justifyContent="center"
          sx={{ borderRadius: '10px' }}
        >
          <StatBox
            title="$63,760.52"
            subtitle="Microsoft Azure"
            progress="0.30"
            increase="+5%"

          />
        </Box>


        {/* ROW 2 */}
        <Box
          gridColumn="span 8"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          borderRadius= '10px'
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
                Total Multi-Cloud Spend (YTD)
              </Typography>
              <Typography
                variant="h3"
                fontWeight="bold"
                color={colors.greenAccent[500]}
              >
                $623,753.65
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
          borderRadius: '10px',
          '&::-webkit-scrollbar': {
            borderRadius: '10px',
          }
        }}
      >
        <Box
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          borderBottom={`4px solid ${colors.primary[500]}`}
          colors={colors.grey[100]}
          p="15px"
        >
          <Typography color={colors.grey[100]} variant="h5" fontWeight="600">
            Commitments 
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
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {commitment.txId}
              </Typography>
              <Typography color={colors.grey[100]}>
                {commitment.date}
              </Typography>
            </Box>
            <Box color={colors.grey[100]}>{commitment.platform}</Box>
            <Box>
              <Typography
                color={colors.greenAccent[500]}
                variant="h5"
                fontWeight="600"
              >
                {commitment.progress}
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
                  width={`${commitment.progress * 100}%`}
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
          p="30px"
          borderRadius= '10px'
        >
          <Typography variant="h5" fontWeight="600">
            Campaign
          </Typography>
          <Box
            display="flex"
            flexDirection="column"
            alignItems="center"
            mt="25px"
          >
            <ProgressCircle size="125" />
            <Typography
              variant="h5"
              color={colors.greenAccent[500]}
              sx={{ mt: "15px" }}
            >
              $48,352 revenue generated
            </Typography>
            <Typography>Includes extra misc expenditures and costs</Typography>
          </Box>
        </Box>
        <Box
          gridColumn="span 4"
          gridRow="span 2"
          backgroundColor={colors.primary[400]}
          p="30px"
          borderRadius= '10px'

        >
          <Typography
          variant="h5" fontWeight="600" sx={{ marginBottom: "15px" }} 
       >
          Global Infrastructure
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
  borderRadius='10px'
>
  <Typography variant="h5" fontWeight="600">
    Commitment Spending
  </Typography>
  <Grid container spacing={3}>
    <Grid item xs={4} container direction="column" alignItems="center">
      <ProgressCircle size="120" />
      <Typography variant="h6" color={colors.grey[100]} mt="15px">
        AWS
      </Typography>
      <Typography variant="h6" color={colors.grey[100]} mt="5px">
        $500,000
      </Typography>
    </Grid>
    <Grid item xs={4} container direction="column" alignItems="center">
      <ProgressCircle size="125" />
      <Typography variant="h6" color={colors.grey[100]} mt="15px">
        Google Cloud
      </Typography>
      <Typography variant="h6" color={colors.grey[100]} mt="5px">
        $300,000
      </Typography>
    </Grid>
    <Grid item xs={4} container direction="column" alignItems="center">
      <ProgressCircle size="125" />
      <Typography variant="h6" color={colors.grey[100]} mt="15px">
        Microsoft Azure
      </Typography>
      <Typography variant="h6" color={colors.grey[100]} mt="5px">
        $200,000
      </Typography>
    </Grid>
  </Grid>
</Box>



      </Box>
    </Box>
  ); 
};

export default GoogleCloud;