import { LightModeOutlined, DarkModeOutlined, Menu as MenuIcon, Search, SettingsOutlined, ArrowDropDownOutlined } from "@mui/icons-material";
import FlexBetween from "../components/FlexBetween"
import { useDispatch } from "react-redux";
import { setMode } from "../state";
import profile from "../assets/profile.jpeg";
import { AppBar, Box, Button, IconButton, InputBase, Menu, MenuItem, Toolbar, Typography, useTheme } from "@mui/material";
import { useState } from "react";


const Navbar = ({ user, isSidebarOpen, setIsSidebarOpen }) => {
    const dispatch = useDispatch()
    const theme = useTheme()

    const [anchorEl, setAnchorEl] = useState(null)
    const isOpen = Boolean(anchorEl);
    const handleClick = (event) => setAnchorEl(event.currentTarget);
    const handleClose = () => setAnchorEl(null)


    return <AppBar
        sx ={{
            position: "static",
            background: "none",
            boxShadow: "none",
        }}
    > 
    <Toolbar sx ={{ justifyContent: "space-between" }}>
        {/*Left side */}
        <FlexBetween>
            <IconButton onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
               <MenuIcon />
            </IconButton>
            <FlexBetween backgroundColor = {theme.palette.background.alt}  borderRadius="9px" gap="3rem" p = "0.1rem 0.5rem">
                <InputBase placeholder="Search..." />
            </FlexBetween>
        </FlexBetween>

        {/*RIGHT SIDE */}
        <FlexBetween gap="1.5rem">
           <IconButton onClick={() => dispatch(setMode())}>
              {theme.palette.mode === 'dark' ? (
                <DarkModeOutlined sx={{ fontSize: "25px" }} />
              ):  (
                <LightModeOutlined sx={{ fontSize: "25px" }} />
              )}
           </IconButton>
           <IconButton>
                <SettingsOutlined sx={{ fontSize: "25px"}} />
           </IconButton>
           <FlexBetween>
            <Button sx={{display: "flex", justifyContent: "space-bewteen", alignItems: "center", textTransform: "none", gap: "1rem" }}  onClick={handleClick}>
            <Box
                component="img"
                alt ="profile"
                src={profile}
                height="32px"
                width="32px"
                borderRadius="50%"
                sx ={{
                    objectFit: "cover"
                }}
            />
            <Box textAlign="left">
                <Typography fontWeight="bold" fontSize="0.85rem" sx={{ color: theme.palette.secondary[100]}}>
                    {user.name}
                </Typography>
                <Typography fontWeight="bold" fontSize="0.75rem" sx={{ color: theme.palette.secondary[200]}}>
                    {user.occupation}
                </Typography>
            </Box>
                <ArrowDropDownOutlined
                  sx={{
                    color: theme.palette.secondary[300], fontSize: "25px"
                  }}
                />
            </Button>
            <Menu
                anchorEl={anchorEl} 
                open = {isOpen} 
                onClose= {handleClose} 
                anchorOrigin = {{ vertical: "bottom", horizontal: "center"}}
            >
            <MenuItem onClick={handleClose}>Log Out</MenuItem>
            </Menu>
           </FlexBetween>
        </FlexBetween>
    </Toolbar>
    </AppBar>
}

export default Navbar
