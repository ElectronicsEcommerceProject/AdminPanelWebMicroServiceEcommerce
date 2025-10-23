import React, { useState } from "react";
import { Box, Tabs, Tab, Typography, Fade } from "@mui/material";
import { Dashboard as DashboardIcon, AddBox as AddBoxIcon } from "@mui/icons-material";
import ProductDashboardPage from "./ProductDashboardPage";
import ProductFormPage from "./ProductFormPage";

const CombinedProductManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50">
      {/* Header Section */}
      <Box className="bg-white shadow-lg sticky top-0 z-10 border-b border-gray-200">
        <Box className="max-w-[1920px] mx-auto px-4 md:px-6 py-4">
          <Typography 
            variant="h4" 
            className="font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent mb-4 text-center md:text-left"
          >
            🚀 Product Management System
          </Typography>
          
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            variant="scrollable"
            scrollButtons="auto"
            className="border-b-0"
            sx={{
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                minHeight: 56,
                borderRadius: '8px',
                margin: '0 4px',
              },
              "& .Mui-selected": {
                color: "white",
                backgroundColor: 'primary.main',
              },
            }}
          >
            <Tab
              icon={<DashboardIcon />}
              iconPosition="start"
              label="Dashboard View"
              className="gap-2 transition-all duration-300"
            />
            <Tab
              icon={<AddBoxIcon />}
              iconPosition="start"
              label="Create Product"
              className="gap-2 transition-all duration-300"
            />
          </Tabs>
        </Box>
      </Box>

      {/* Content Section */}
      <Box className="max-w-[1920px] mx-auto px-4 md:px-6 py-6">
        <Fade in={activeTab === 0} timeout={500}>
          <Box sx={{ display: activeTab === 0 ? "block" : "none" }}>
            <ProductDashboardPage />
          </Box>
        </Fade>

        <Fade in={activeTab === 1} timeout={500}>
          <Box sx={{ display: activeTab === 1 ? "block" : "none" }}>
            <ProductFormPage />
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default CombinedProductManagement;
