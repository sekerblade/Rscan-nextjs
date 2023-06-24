import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from '@mui/icons-material/Menu';
import { useState } from "react";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  
  return (
    <Box sx={{ display: 'flex' }}>
      {/* Sizebar ที่เคลื่อนที่ไปด้านขวา */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            Side Panel
          </Typography>
        </Box>
      </Drawer>
      
      {/* เนื้อหาหลัก */}
      <Box component="main" sx={{ flexGrow: 1, p: 3, borderRight: '1px solid black' }}>
        {/* IconButton สำหรับเปิด sizebar */}
        <IconButton
          size='large'
          edge='start'
          color='inherit'
          aria-label='logo'
          onClick={() => setIsDrawerOpen(true)}
        >
          <MenuIcon />
        </IconButton>
        
        {/* เนื้อหาหลักอื่น ๆ */}
        <Typography paragraph>
          Your main content goes here.
        </Typography>
      </Box>
    </Box>
  );
};

