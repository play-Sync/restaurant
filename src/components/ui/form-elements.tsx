// src/components/restaurant/ui/form-elements.tsx

import * as React from "react";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "./select";

// Label Component for reuse
interface FormLabelProps {
  children: React.ReactNode;
  required?: boolean;
  className?: string;
}

function FormLabel({
  children,
  required = false,
  className,
}: FormLabelProps) {
  return (
    <label
      className={cn(
        "block font-sans text-xs tracking-elegant text-muted-foreground uppercase",
        className
      )}
    >
      {children}
      {required && (
        <span className="text-primary ml-1">*</span>
      )}
    </label>
  );
}

// Styled Input
interface StyledInputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  required?: boolean;
  error?: string;
}

const StyledInput = React.forwardRef<
  HTMLInputElement,
  StyledInputProps
>(
  (
    {
      className,
      label,
      required = false,
      error,
      type = "text",
      ...props
    },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <FormLabel required={required}>{label}</FormLabel>
        <input
          ref={ref}
          type={type}
          className={cn(
            "w-full bg-background/50 border border-border px-4 py-3",
            "text-foreground font-serif text-sm",
            "placeholder:text-muted-foreground/50",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300",
            "hover:border-primary/50",
            error &&
              "border-destructive focus:border-destructive",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-destructive font-sans mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

StyledInput.displayName = "StyledInput";

// Styled Textarea
interface StyledTextareaProps
  extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  label: string;
  required?: boolean;
  error?: string;
}

const StyledTextarea = React.forwardRef<
  HTMLTextAreaElement,
  StyledTextareaProps
>(
  (
    { className, label, required = false, error, ...props },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <FormLabel required={required}>{label}</FormLabel>
        <textarea
          ref={ref}
          className={cn(
            "w-full bg-background/50 border border-border px-4 py-3",
            "text-foreground font-serif text-sm",
            "placeholder:text-muted-foreground/50",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300 resize-none",
            "hover:border-primary/50",
            error &&
              "border-destructive focus:border-destructive",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-destructive font-sans mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

StyledTextarea.displayName = "StyledTextarea";

// Select Option Type
interface SelectOption {
  value: string;
  label: string;
  disabled?: boolean;
}

// Styled Select
interface StyledSelectProps {
  label: string;
  required?: boolean;
  placeholder?: string;
  value: string;
  onValueChange: (value: string) => void;
  options: SelectOption[];
  className?: string;
  disabled?: boolean;
  error?: string;
}

function StyledSelect({
  label,
  required = false,
  placeholder = "Select an option",
  value,
  onValueChange,
  options,
  className,
  disabled = false,
  error,
}: StyledSelectProps) {
  const hasValue = value !== undefined && value !== "";

  return (
    <div className={cn("space-y-2", className)}>
      <FormLabel required={required}>{label}</FormLabel>
      <Select
        value={value}
        onValueChange={onValueChange}
        disabled={disabled}
      >
        <SelectTrigger
          className={cn(
            "w-full bg-background/50 border border-border px-4 py-3 h-auto",
            "text-foreground font-serif text-sm rounded-none",
            "focus:outline-none focus:ring-1 focus:ring-primary/20 focus:border-primary",
            "transition-all duration-300",
            "hover:border-primary/50",
            "disabled:opacity-50 disabled:cursor-not-allowed",
            "[&>span]:text-left",
            !hasValue &&
              "[&>span]:text-muted-foreground/50",
            error &&
              "border-destructive focus:border-destructive"
          )}
        >
          <SelectValue placeholder={placeholder} />
        </SelectTrigger>
        <SelectContent
          className={cn(
            "bg-card/95 backdrop-blur-xl border border-primary/20 rounded-none",
            "shadow-xl shadow-background/20"
          )}
        >
          {options.map((option) => (
            <SelectItem
              key={option.value}
              value={option.value}
              disabled={option.disabled}
              className={cn(
                "font-serif text-sm text-foreground cursor-pointer rounded-none",
                "focus:bg-primary/10 focus:text-primary",
                "hover:bg-primary/5",
                "transition-colors duration-200",
                "py-3 px-4"
              )}
            >
              {option.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
      {error && (
        <p className="text-xs text-destructive font-sans mt-1">
          {error}
        </p>
      )}
    </div>
  );
}

// Styled Date Input
interface StyledDateInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  label: string;
  required?: boolean;
  error?: string;
}

const StyledDateInput = React.forwardRef<
  HTMLInputElement,
  StyledDateInputProps
>(
  (
    { className, label, required = false, error, ...props },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <FormLabel required={required}>{label}</FormLabel>
        <input
          ref={ref}
          type="date"
          className={cn(
            "w-full bg-background/50 border border-border px-4 py-3",
            "text-foreground font-serif text-sm",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300",
            "hover:border-primary/50",
            "[&::-webkit-calendar-picker-indicator]:opacity-50",
            "[&::-webkit-calendar-picker-indicator]:hover:opacity-100",
            "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
            "[&::-webkit-calendar-picker-indicator]:transition-opacity",
            "[&::-webkit-calendar-picker-indicator]:duration-200",
            error &&
              "border-destructive focus:border-destructive",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-destructive font-sans mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

StyledDateInput.displayName = "StyledDateInput";

// Styled Time Input
interface StyledTimeInputProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  label: string;
  required?: boolean;
  error?: string;
}

const StyledTimeInput = React.forwardRef<
  HTMLInputElement,
  StyledTimeInputProps
>(
  (
    { className, label, required = false, error, ...props },
    ref
  ) => {
    return (
      <div className="space-y-2">
        <FormLabel required={required}>{label}</FormLabel>
        <input
          ref={ref}
          type="time"
          className={cn(
            "w-full bg-background/50 border border-border px-4 py-3",
            "text-foreground font-serif text-sm",
            "focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary/20",
            "transition-all duration-300",
            "hover:border-primary/50",
            "[&::-webkit-calendar-picker-indicator]:opacity-50",
            "[&::-webkit-calendar-picker-indicator]:hover:opacity-100",
            "[&::-webkit-calendar-picker-indicator]:cursor-pointer",
            "[&::-webkit-calendar-picker-indicator]:transition-opacity",
            "[&::-webkit-calendar-picker-indicator]:duration-200",
            error &&
              "border-destructive focus:border-destructive",
            className
          )}
          {...props}
        />
        {error && (
          <p className="text-xs text-destructive font-sans mt-1">
            {error}
          </p>
        )}
      </div>
    );
  }
);

StyledTimeInput.displayName = "StyledTimeInput";

// Styled Checkbox
interface StyledCheckboxProps
  extends Omit<
    React.InputHTMLAttributes<HTMLInputElement>,
    "type"
  > {
  label: string;
  description?: string;
}

const StyledCheckbox = React.forwardRef<
  HTMLInputElement,
  StyledCheckboxProps
>(({ className, label, description, ...props }, ref) => {
  return (
    <label
      className={cn(
        "flex items-start gap-3 cursor-pointer group",
        className
      )}
    >
      <input
        ref={ref}
        type="checkbox"
        className={cn(
          "mt-1 w-4 h-4 bg-background/50 border border-border rounded-none",
          "text-primary focus:ring-primary/20 focus:ring-offset-0",
          "cursor-pointer transition-all duration-200",
          "checked:bg-primary checked:border-primary"
        )}
        {...props}
      />
      <div className="space-y-1">
        <span className="font-serif text-sm text-foreground group-hover:text-primary transition-colors">
          {label}
        </span>
        {description && (
          <p className="text-xs text-muted-foreground font-sans">
            {description}
          </p>
        )}
      </div>
    </label>
  );
});

StyledCheckbox.displayName = "StyledCheckbox";

// Form Field Wrapper
interface FormFieldProps {
  children: React.ReactNode;
  className?: string;
}

function FormField({
  children,
  className,
}: FormFieldProps) {
  return (
    <div className={cn("space-y-2", className)}>
      {children}
    </div>
  );
}

// Form Row (for side-by-side fields)
interface FormRowProps {
  children: React.ReactNode;
  className?: string;
  cols?: 2 | 3 | 4;
}

function FormRow({
  children,
  className,
  cols = 2,
}: FormRowProps) {
  const colsClass = {
    2: "sm:grid-cols-2",
    3: "sm:grid-cols-3",
    4: "sm:grid-cols-4",
  };

  return (
    <div
      className={cn(
        "grid grid-cols-1 gap-5",
        colsClass[cols],
        className
      )}
    >
      {children}
    </div>
  );
}

export {
  FormLabel,
  StyledInput,
  StyledTextarea,
  StyledSelect,
  StyledDateInput,
  StyledTimeInput,
  StyledCheckbox,
  FormField,
  FormRow,
  type SelectOption,
  type StyledInputProps,
  type StyledTextareaProps,
  type StyledSelectProps,
  type StyledDateInputProps,
  type StyledTimeInputProps,
  type StyledCheckboxProps,
};
