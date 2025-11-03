import React, { useState } from "react";
import { Box, Tabs, Tab, Fade } from "@mui/material";
import { Dashboard as DashboardIcon, AddBox as AddBoxIcon, List as ListIcon } from "@mui/icons-material";
import { Package, Sparkles, RefreshCw } from "lucide-react";
import ProductListPage from "./ProductListPage";
import ProductDashboardPage from "./ProductDashboardPage";
import ProductFormPage from "./ProductFormPage";

const CombinedProductManagement = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <Box className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Header Section */}
      <Box className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 shadow-2xl relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI2MCIgaGVpZ2h0PSI2MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSAxMCAwIEwgMCAwIDAgMTAiIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS1vcGFjaXR5PSIwLjA1IiBzdHJva2Utd2lkdGg9IjEiLz48L3BhdHRlcm4+PC9kZWZzPjxyZWN0IHdpZHRoPSIxMDAlIiBoZWlnaHQ9IjEwMCUiIGZpbGw9InVybCgjZ3JpZCkiLz48L3N2Zz4=')] opacity-30"></div>
        <div className="px-4 md:px-6 lg:px-8 py-4 md:py-6 lg:py-8 relative">
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3 md:gap-4">
            <div className="flex items-center gap-2 md:gap-3 min-w-0 flex-1">
              <div className="w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 lg:w-16 lg:h-16 bg-white/20 backdrop-blur-xl rounded-xl md:rounded-2xl flex items-center justify-center shadow-2xl border border-white/30 flex-shrink-0 animate-pulse">
                <Package className="w-5 h-5 sm:w-6 sm:h-6 md:w-7 md:h-7 lg:w-8 lg:h-8 text-white" />
              </div>
              <div className="min-w-0 flex-1">
                <div className="flex items-center gap-1.5 md:gap-2">
                  <h1 className="text-lg sm:text-xl md:text-2xl lg:text-3xl font-bold text-white drop-shadow-lg truncate">Product Management Hub</h1>
                  <Sparkles className="w-4 h-4 md:w-5 md:h-5 text-yellow-300 animate-pulse flex-shrink-0" />
                </div>
                <p className="text-blue-100 text-xs sm:text-sm md:text-base mt-0.5 md:mt-1 font-medium hidden sm:block">Manage your entire product catalog with ease</p>
              </div>
            </div>
            <button
              onClick={() => window.location.reload()}
              className="flex items-center justify-center gap-1.5 md:gap-2 px-3 sm:px-4 md:px-5 lg:px-7 py-2 sm:py-2.5 md:py-3 lg:py-3.5 bg-white/20 backdrop-blur-xl text-white rounded-lg md:rounded-xl hover:bg-white/30 text-xs sm:text-sm md:text-base border border-white/30 shadow-xl hover:shadow-2xl transform hover:scale-105 transition-all duration-300 font-semibold w-full sm:w-auto group flex-shrink-0"
            >
              <RefreshCw className="w-3.5 h-3.5 sm:w-4 sm:h-4 md:w-5 md:h-5 group-hover:rotate-180 transition-transform duration-500" />
              <span className="hidden sm:inline">Refresh</span>
            </button>
          </div>
        </div>
      </Box>

      {/* Tabs Section */}
      <Box className="bg-white/80 backdrop-blur-xl shadow-lg border-b border-gray-200">
        <Box className="max-w-7xl mx-auto px-6">
          
          <Tabs
            value={activeTab}
            onChange={(e, newValue) => setActiveTab(newValue)}
            centered
            sx={{
              "& .MuiTabs-indicator": {
                height: 4,
                borderRadius: '4px 4px 0 0',
                background: 'linear-gradient(90deg, #3b82f6 0%, #8b5cf6 100%)',
              },
              "& .MuiTab-root": {
                textTransform: "none",
                fontSize: "1rem",
                fontWeight: 600,
                minHeight: 64,
                padding: '12px 32px',
                transition: 'all 0.3s ease',
                color: '#64748b',
                '&:hover': {
                  color: '#3b82f6',
                  backgroundColor: 'rgba(59, 130, 246, 0.05)',
                },
              },
              "& .Mui-selected": {
                color: "#3b82f6 !important",
                fontWeight: 700,
              },
            }}
          >
            <Tab
              icon={<ListIcon sx={{ fontSize: 28 }} />}
              iconPosition="start"
              label="Product List"
              className="gap-3"
            />
            <Tab
              icon={<DashboardIcon sx={{ fontSize: 28 }} />}
              iconPosition="start"
              label="Dashboard View"
              className="gap-3"
            />
            <Tab
              icon={<AddBoxIcon sx={{ fontSize: 28 }} />}
              iconPosition="start"
              label="Create Product"
              className="gap-3"
            />
          </Tabs>
        </Box>
      </Box>

      {/* Content Section */}
      <Box className="max-w-7xl mx-auto px-6 py-6">
        <Fade in={activeTab === 0} timeout={600}>
          <Box sx={{ display: activeTab === 0 ? "block" : "none" }}>
            <ProductListPage />
          </Box>
        </Fade>

        <Fade in={activeTab === 1} timeout={600}>
          <Box sx={{ display: activeTab === 1 ? "block" : "none" }}>
            <ProductDashboardPage />
          </Box>
        </Fade>

        <Fade in={activeTab === 2} timeout={600}>
          <Box sx={{ display: activeTab === 2 ? "block" : "none" }}>
            <ProductFormPage />
          </Box>
        </Fade>
      </Box>
    </Box>
  );
};

export default CombinedProductManagement;
