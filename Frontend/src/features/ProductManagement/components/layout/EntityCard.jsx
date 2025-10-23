import React, { useState, useMemo } from "react";
import {
  Card,
  CardHeader,
  CardContent,
  IconButton,
  InputAdornment,
  TextField,
  Tooltip,
  Chip,
  Box,
  Typography,
} from "@mui/material";
import {
  Edit as EditIcon,
  Delete as DeleteIcon,
} from "@mui/icons-material";
import { DataGrid } from "@mui/x-data-grid";
import {
  Search as LucideSearch,
  Plus as LucidePlus,
  X as LucideX,
} from "lucide-react";

const EntityCard = ({
  title,
  rows,
  columns,
  onAdd,
  onEdit,
  onDelete,
  onRowClick,
  activeFilter,
  onClearFilter,
  selectedRow,
  searchPlaceholder,
}) => {
  const [search, setSearch] = useState("");

  const filteredRows = useMemo(() => {
    if (!search) return rows;
    const term = search.toLowerCase();
    return rows.filter((r) =>
      Object.values(r).some(
        (v) => v && v.toString().toLowerCase().includes(term)
      )
    );
  }, [rows, search]);

  const enhancedColumns = [
    ...columns,
    {
      field: "actions",
      headerName: "Actions",
      width: 110,
      sortable: false,
      renderCell: (params) => (
        <div className="flex gap-1">
          <Tooltip title="Edit">
            <IconButton
              size="small"
              onClick={(e) => {
                e.stopPropagation();
                onEdit(params.row.id, params.row);
              }}
              className="text-blue-600 hover:bg-blue-50"
            >
              <EditIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Delete">
            <IconButton
              size="small"
              className="text-red-600 hover:bg-red-50"
              onClick={(e) => {
                e.stopPropagation();
                onDelete(params.row.id);
              }}
            >
              <DeleteIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </div>
      ),
    },
  ];

  return (
    <Card className="h-full flex flex-col shadow-lg border border-gray-200 hover:shadow-xl transition-all duration-300 rounded-xl">
      <CardHeader
        title={
          <div className="flex items-center justify-between">
            <Typography
              variant="h6"
              className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent font-bold"
            >
              {title}
            </Typography>
            <div className="flex items-center gap-2">
              {activeFilter && (
                <Chip
                  label="Filtered"
                  size="small"
                  color="primary"
                  onDelete={onClearFilter}
                  deleteIcon={<LucideX className="w-4 h-4" />}
                  className="bg-gradient-to-r from-blue-500 to-purple-500 text-white"
                />
              )}
              <Tooltip title={`Add ${title.toLowerCase()}`}>
                <IconButton
                  onClick={onAdd}
                  className="bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transition-all duration-300 rounded-lg"
                >
                  <LucidePlus className="w-5 h-5" />
                </IconButton>
              </Tooltip>
            </div>
          </div>
        }
        className="pb-2"
      />
      <CardContent className="flex flex-col flex-1 gap-3 pb-3">
        <TextField
          fullWidth
          size="small"
          placeholder={searchPlaceholder}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LucideSearch className="w-5 h-5 text-gray-500" />
              </InputAdornment>
            ),
          }}
          variant="outlined"
          className="rounded-lg"
        />

        <Box sx={{ flexGrow: 1, minHeight: 260 }}>
          <DataGrid
            rows={filteredRows}
            columns={enhancedColumns}
            getRowId={(row) => row.id}
            onRowClick={(params) => onRowClick(params.row)}
            rowSelectionModel={selectedRow ? [selectedRow.id] : []}
            disableRowSelectionOnClick={false}
            sx={{
              border: 'none',
              '& .MuiDataGrid-cell': {
                borderBottom: '1px solid #f3f4f6',
              },
              '& .MuiDataGrid-columnHeaders': {
                backgroundColor: '#f8fafc',
                borderBottom: '2px solid #e2e8f0',
                fontSize: '0.875rem',
                fontWeight: 600,
              },
              '& .MuiDataGrid-row:hover': { 
                backgroundColor: '#f1f5f9',
                cursor: 'pointer'
              },
              '& .MuiDataGrid-row.Mui-selected': {
                backgroundColor: '#dbeafe',
                borderLeft: '4px solid',
                borderColor: 'primary.main',
              },
              '& .MuiDataGrid-footerContainer': {
                borderTop: '1px solid #e2e8f0',
              },
            }}
          />
        </Box>
      </CardContent>
    </Card>
  );
};

export default EntityCard;
