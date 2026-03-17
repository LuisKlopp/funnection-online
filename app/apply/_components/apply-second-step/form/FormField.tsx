interface FormFieldProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export const FormField = ({ label, description, children }: FormFieldProps) => {
  return (
    <div className="space-y-3">
      <div>
        <p className="text-base font-semibold text-white">{label}</p>
        {description && <p className="text-sm text-gray-400">{description}</p>}
      </div>

      {children}
    </div>
  );
};
