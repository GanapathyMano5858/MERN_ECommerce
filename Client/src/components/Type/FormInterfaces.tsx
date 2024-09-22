// Define FormControl Interface
export interface FormControl {
  name: string;
  label: string;
  placeholder: string;
  componentType: string; // 'input' could be specified more strictly
  type: string; // 'text', 'email', 'password', etc.
  option: string[];
}

// Define CommonFormProps interface
export interface CommonFormProps {
  formControls: FormControl[];
  formData: { [key: string]: string };
  setFormData: React.Dispatch<React.SetStateAction<{ [key: string]: string }>>;
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
  buttonText?: string;
}
