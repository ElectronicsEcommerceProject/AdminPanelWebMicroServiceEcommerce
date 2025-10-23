import React, { useEffect } from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
} from "@mui/material";
import { useForm, Controller } from "react-hook-form";

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

  if (!open) return null;

  const fields = Object.keys(item || {}).filter(
    (k) => !["_id", "id", "product_ids"].includes(k)
  );

  return (
    <Dialog 
      open={open} 
      onClose={onClose} 
      maxWidth="sm" 
      fullWidth
      PaperProps={{
        className: "rounded-2xl"
      }}
    >
      <DialogTitle className="bg-gradient-to-r from-blue-600 to-purple-600 text-white font-bold">
        Edit {entityType}
      </DialogTitle>
      <form onSubmit={handleSubmit(onSubmit)}>
        <DialogContent dividers className="space-y-4 py-4">
          {fields.map((key) => {
            const label = key.replace(/_/g, " ").replace(/\b\w/g, (l) => l.toUpperCase());
            const isSelect = key === "target_role";

            return (
              <Controller
                key={key}
                name={key}
                control={control}
                render={({ field }) => (
                  <TextField
                    {...field}
                    select={isSelect}
                    label={label}
                    fullWidth
                    variant="outlined"
                    error={!!errors[key]}
                    helperText={errors[key]?.message}
                    SelectProps={{ native: true }}
                    className="rounded-lg"
                  >
                    {isSelect && (
                      <>
                        <option value="customer">Customer</option>
                        <option value="retailer">Retailer</option>
                        <option value="both">Both</option>
                      </>
                    )}
                  </TextField>
                )}
              />
            );
          })}
        </DialogContent>
        <DialogActions className="p-4">
          <Button 
            onClick={onClose} 
            variant="outlined"
            className="rounded-lg"
          >
            Cancel
          </Button>
          <Button 
            type="submit" 
            variant="contained" 
            disabled={isSubmitting}
            className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg"
          >
            {isSubmitting ? 'Saving...' : 'Save Changes'}
          </Button>
        </DialogActions>
      </form>
    </Dialog>
  );
};

export default EditModal;
