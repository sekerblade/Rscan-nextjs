import { Drawer, Box, Typography, IconButton } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import { useState } from "react";
import { DataGridDemo } from "../tables/demoDataGrid";
import { BasicSelect } from "../filterBar/filterSelect";

export const MuiDrawer = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  return (
    <Box sx={{ display: "flex" }}>
      {/* Sizebar ที่เคลื่อนที่ไปด้านขวา */}
      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setIsDrawerOpen(false)}
      >
        <Box p={2} width="250px" textAlign="center" role="presentation">
          <Typography variant="h6" component="div">
            side panel
          </Typography>
          <Typography variant="h6" component="div">
            <BasicSelect />
          </Typography>
        </Box>
      </Drawer>

      {/* เนื้อหาหลัก */}
      <Box
        component="main"
        sx={{ flexGrow: 1, p: 0, display: "flex", flexDirection: "row" }}
      >
        <Box sx={{ flexGrow: 1 }}>
          <Typography paragraph sx={{ flexGrow: 1 }}>
            <DataGridDemo />
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
