import { useState, useMemo } from "react";
import { Search, Plus, X, Edit, Trash2 } from "lucide-react";

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



  return (
    <div className="h-full flex flex-col bg-white rounded-xl sm:rounded-2xl shadow-xl border-2 border-blue-100 hover:shadow-2xl transition-all duration-300">
      <div className="bg-gradient-to-r from-blue-600 to-indigo-600 px-4 sm:px-6 py-4 sm:py-5 rounded-t-xl sm:rounded-t-2xl">
        <div className="flex items-center justify-between">
          <h3 className="text-lg sm:text-xl font-bold text-white">{title}</h3>
          <div className="flex items-center gap-2">
            {activeFilter && (
              <button
                onClick={onClearFilter}
                className="flex items-center gap-1 px-2 py-1 bg-white/20 backdrop-blur-xl text-white rounded-lg text-xs font-medium hover:bg-white/30 transition-all"
              >
                Filtered
                <X className="w-3 h-3" />
              </button>
            )}
            <button
              onClick={onAdd}
              className="p-2 bg-white/20 backdrop-blur-xl text-white hover:bg-white/30 rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
              title={`Add ${title.toLowerCase()}`}
            >
              <Plus className="w-5 h-5" />
            </button>
          </div>
        </div>
      </div>

      <div className="flex flex-col flex-1 gap-3 p-3 sm:p-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
          <input
            type="text"
            placeholder={searchPlaceholder}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full pl-10 pr-3 py-2 text-sm border-2 border-gray-200 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
          />
        </div>

        <div className="flex-1 overflow-auto rounded-lg border border-gray-200">
          <table className="w-full">
            <thead className="bg-gray-50 border-b border-gray-200 sticky top-0">
              <tr>
                {columns.map((col) => (
                  <th key={col.field} className="px-3 py-2 text-left text-xs font-semibold text-gray-700 uppercase">
                    {col.headerName}
                  </th>
                ))}
                <th className="px-3 py-2 text-center text-xs font-semibold text-gray-700 uppercase">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              {filteredRows.map((row) => (
                <tr
                  key={row.id}
                  onClick={() => onRowClick(row)}
                  className={`hover:bg-blue-50 transition-colors cursor-pointer ${
                    selectedRow?.id === row.id ? 'bg-blue-100 border-l-4 border-blue-600' : ''
                  }`}
                >
                  {columns.map((col) => (
                    <td key={col.field} className="px-3 py-2 text-sm text-gray-900">
                      {col.renderCell ? col.renderCell({ row, value: row[col.field] }) : row[col.field]}
                    </td>
                  ))}
                  <td className="px-3 py-2">
                    <div className="flex items-center justify-center gap-1">
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onEdit(row.id, row);
                        }}
                        className="p-1.5 text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                        title="Edit"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={(e) => {
                          e.stopPropagation();
                          onDelete(row.id);
                        }}
                        className="p-1.5 text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Delete"
                      >
                        <Trash2 className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default EntityCard;
