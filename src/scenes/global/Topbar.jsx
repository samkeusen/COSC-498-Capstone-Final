import { Box, IconButton, Menu, MenuItem, useTheme } from "@mui/material";
import { useState } from "react";
import { useContext } from "react";
import { ColorModeContext, tokens } from "../../theme";
import { InputBase } from "@mui/material";
import LightModeOutlinedIcon from "@mui/icons-material/LightModeOutlined";
import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import SettingsOutlinedIcon from "@mui/icons-material/SettingsOutlined";
import PersonOutlinedIcon from "@mui/icons-material/PersonOutlined";
import SearchIcon from "@mui/icons-material/Search";

const Topbar =() => {
  const theme = useTheme();
  const colors = tokens(theme.palette.mode);
  const colorMode = useContext(ColorModeContext);

  const [anchorEl, setAnchorEl] = useState(null);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const handleAWSConnect = () => {
    // Directly redirect to the AWS Cognito Hosted UI
    const hostedUIUrl = 'https://dashboardapp.auth.us-east-2.amazoncognito.com/login?client_id=1n5v6u50vbc6ahh3t6733a3gqm&response_type=code&scope=email+openid+phone&redirect_uri=http%3A%2F%2Flocalhost%3A3000';
    window.location.href = hostedUIUrl;
  };
    
  return (
    <Box display="flex" justifyContent="space-between" p={2}>
        {/* SEARCH BAR */}
        <Box 
          display="flex" 
          backgroundColor={colors.primary[400]}
          borderRadius="6px"
        >
            <InputBase sx={{ ml: 2, flex: 1 }} placeholder ="Search" />
            <IconButton type="button" sx={{ p: 1 }}>
              <SearchIcon />
            </IconButton>
        </Box>

        {/* ICONS */}
        <Box display="flex">
          <IconButton onClick={colorMode.toggleColorMode}>
            {theme.palette.mode === 'dark' ? (
              <DarkModeOutlinedIcon />
            ) : (
              <LightModeOutlinedIcon />
            )}
          </IconButton>
          <IconButton>
            <NotificationsOutlinedIcon />
          </IconButton>
          <IconButton onClick={handleClick}> 
            <SettingsOutlinedIcon />
          </IconButton>
          <IconButton
            onClick={handleClick}
            aria-controls="account-menu"
            aria-haspopup="true"
          >
            <PersonOutlinedIcon />
          </IconButton>
          <Menu
            id="account-menu"
            anchorEl={anchorEl}
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClick}>Profile</MenuItem>
            <MenuItem onClick={handleAWSConnect}>My account</MenuItem>
            <MenuItem onClick={handleClick}>Logout</MenuItem>
          </Menu>
        </Box>
    </Box>
  );
};

export default Topbar;