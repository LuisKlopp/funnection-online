interface FormFieldProps {
  label: string;
  description?: string;
  children: React.ReactNode;
}

export const FormField = ({ label, description, children }: FormFieldProps) => {
  return (
    <div className="space-y-3">
      <div className="flex flex-col gap-1">
        <p className="smd:text-base text-sm font-semibold text-white">
          {label}
        </p>
        {description && (
          <p className="smd:text-sm text-[13px] text-gray-400">{description}</p>
        )}
      </div>

      {children}
    </div>
  );
};
