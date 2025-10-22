import React, { useState } from "react";
import { Box, Tabs, Tab, Paper, Typography, Fade } from "@mui/material";
import { Dashboard as DashboardIcon, AddBox as AddBoxIcon } from "@mui/icons-material";
import ProductDashboard from "./temp";
import ProductCatalogManagement from "./temp1";

const CombinedProductManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <Box className="bg-white shadow-md sticky top-0 z-10">
        <Box className="max-w-[1920px] mx-auto px-4 md:px-6 py-4">
          <Typography 
            variant="h4" 
            className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4"
          >
            Product Management System
          </Typography>
          
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            className="border-b"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                minHeight: 56,
              },
              "& .Mui-selected": {
                color: "#2563eb",
              },
            }}
          >
            <Tab
              icon={<DashboardIcon />}
              iconPosition="start"
              label="Dashboard View"
              className="gap-2"
            />
            <Tab
              icon={<AddBoxIcon />}
              iconPosition="start"
              label="Create Product"
              className="gap-2"
            />
          </Tabs>
        </Box>
      </Box>

      {/* Content Section */}
      <Box className="max-w-[1920px] mx-auto">
        <Fade in={activeTab === 0} timeout={300}>
          <Box sx={{ display: activeTab === 0 ? "block" : "none" }}>
            <ProductDashboard />
          </Box>
        </Fade>

        <Fade in={activeTab === 1} timeout={300}>
          <Box sx={{ display: activeTab === 1 ? "block" : "none" }}>
            <ProductCatalogManagement />
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default CombinedProductManagement;
