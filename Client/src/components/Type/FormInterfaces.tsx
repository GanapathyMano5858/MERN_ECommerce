// Define FormControl Interface
export interface FormControl {
  id?: string; // Add id as optional if not always present
  name: string;
  label: string;
  placeholder: string;
  componentType: "input" | "select" | "textarea";
  type: string;
  option?: { id: string; label: string }[];
}

// Define CommonFormProps interface
export interface CommonFormProps<T extends Record<string, any>> {
  formData: T;
  setFormData: React.Dispatch<React.SetStateAction<T>>;
  formControls: FormControl[];
  buttonText: string;
  onSubmit: (e: React.FormEvent) => void;
}
