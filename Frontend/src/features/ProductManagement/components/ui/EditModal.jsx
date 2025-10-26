import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { X } from "lucide-react";

const EditModal = ({ open, onClose, entityType, item, onSave }) => {
  const {
    control,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm({
    defaultValues: item || {},
  });

  useEffect(() => {
    reset(item || {});
  }, [item, reset]);

  const onSubmit = (data) => {
    onSave(entityType, { ...item, ...data });
    onClose();
  };

  const fields = Object.keys(item || {}).filter(
    (k) => !["_id", "id", "product_ids"].includes(k)
  );

  if (!open) return null;

  return (
    <div className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 flex items-center justify-center p-2 md:p-4 animate-in fade-in duration-300">
      <div className="bg-white rounded-2xl w-full max-w-2xl max-h-[95vh] flex flex-col shadow-2xl animate-in zoom-in-95 slide-in-from-bottom-4 duration-300">
        <div className="px-4 md:px-6 py-4 md:py-6 bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-t-2xl flex-shrink-0">
          <div className="flex items-center justify-between">
            <h3 className="text-lg md:text-2xl font-bold">Edit {entityType}</h3>
            <button onClick={onClose} className="p-2 hover:bg-white/20 rounded-xl transition-all duration-200 group">
              <X className="w-5 h-5 md:w-6 md:h-6 group-hover:rotate-90 transition-transform duration-300" />
            </button>
          </div>
        </div>

        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col flex-1 overflow-hidden">
          <div className="flex-1 overflow-y-auto p-4 md:p-6 space-y-4">
            {fields.map((key) => {
              const label = key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
              const isSelect = key === "target_role";

              return (
                <Controller
                  key={key}
                  name={key}
                  control={control}
                  render={({ field }) => (
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">{label}</label>
                      {isSelect ? (
                        <select
                          {...field}
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        >
                          <option value="customer">Customer</option>
                          <option value="retailer">Retailer</option>
                          <option value="both">Both</option>
                        </select>
                      ) : (
                        <input
                          {...field}
                          type="text"
                          className="w-full px-4 py-2 border-2 border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-blue-500 transition-all"
                        />
                      )}
                      {errors[key] && (
                        <p className="mt-1 text-sm text-red-600">{errors[key]?.message}</p>
                      )}
                    </div>
                  )}
                />
              );
            })}
          </div>

          <div className="px-4 md:px-6 py-4 md:py-6 bg-gray-50 rounded-b-2xl flex flex-col sm:flex-row gap-3 flex-shrink-0 border-t border-gray-200">
            <button
              type="button"
              onClick={onClose}
              className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base text-gray-700 bg-white border-2 border-gray-300 rounded-xl hover:border-gray-400 hover:shadow-lg transition-all duration-300 font-semibold w-full sm:flex-1"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="px-6 md:px-8 py-2 md:py-3 text-sm md:text-base bg-gradient-to-r from-blue-600 to-indigo-600 text-white rounded-xl hover:shadow-xl transform hover:scale-105 transition-all duration-300 font-semibold w-full sm:flex-1 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? 'Saving...' : 'Save Changes'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditModal;
