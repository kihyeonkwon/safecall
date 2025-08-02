import { ButtonHTMLAttributes, forwardRef } from "react";
import { cn } from "@/lib/utils";

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "xl";
  children: React.ReactNode;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    { className, variant = "primary", size = "md", children, ...props },
    ref
  ) => {
    const baseClasses =
      "inline-flex items-center justify-center font-semibold rounded-lg transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed";

    const variants = {
      primary:
        "bg-red-600 hover:bg-red-700 text-white shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 focus:ring-red-500",
      secondary:
        "bg-slate-100 hover:bg-slate-200 text-slate-900 border border-slate-300 focus:ring-slate-500",
      outline:
        "border-2 border-red-600 text-red-600 hover:bg-red-600 hover:text-white focus:ring-red-500",
      ghost:
        "text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:ring-slate-500",
    };

    const sizes = {
      sm: "px-4 py-2 text-sm",
      md: "px-6 py-3 text-base",
      lg: "px-8 py-4 text-lg",
      xl: "px-10 py-5 text-xl",
    };

    return (
      <button
        className={cn(baseClasses, variants[variant], sizes[size], className)}
        ref={ref}
        {...props}
      >
        {children}
      </button>
    );
  }
);

Button.displayName = "Button";

export { Button };
