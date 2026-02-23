interface InputProps extends React.InputHTMLAttributes<
  HTMLInputElement | HTMLTextAreaElement
> {
  label?: string;
  isTextArea?: boolean;
}

export const CustomInput = ({ isTextArea, ...props }: InputProps) => {
  const baseStyles =
    "p-2 bg-secondary/20 border border-accent rounded w-full outline-none focus:border-primary/50 transition-colors";

  return (
    <div className="w-full">
      {isTextArea ? (
        <textarea
          className={`${baseStyles} h-32 resize-none`}
          {...(props as React.TextareaHTMLAttributes<HTMLTextAreaElement>)}
        />
      ) : (
        <input
          className={baseStyles}
          {...(props as React.InputHTMLAttributes<HTMLInputElement>)}
        />
      )}
    </div>
  );
};
