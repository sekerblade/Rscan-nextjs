import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import DataGridDemo from "../tables/demoDataGrid"; // Corrected import
import { BasicSelect } from "../filterBar/filterSelect";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sidebar ที่เคลื่อนที่ไปด้านขวา */}
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
      <Box component="main" sx={{ flexGrow: 1, p: 0, display: "flex", flexDirection: "row" }}>
        <Box sx={{ flexGrow: 1 }}>
          <DataGridDemo />
        </Box>
      </Box>
    </Box>
  );
};
