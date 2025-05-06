import React from "react";
import { Button } from "@headlessui/react";
import { cn } from "../../lib/utils";

type Props = React.ButtonHTMLAttributes<HTMLButtonElement> & {
  children: React.ReactNode;
  variant: "primary" | "secondary" | "accent" | "destructive";
};

const variantClasses: Record<Props["variant"], string> = {
  primary: "bg-primary text-primary-foreground border-primary hover:bg-primary-hover",
  secondary: "bg-secondary text-secondary-foreground border-secondary hover:bg-secondary-hover",
  accent: "bg-accent text-accent-foreground border-accent hover:bg-accent-hover",
  destructive: "bg-destructive border-destructive hover:bg-destructive-hover",
};

export const PrettyButton: React.FC<Props> = ({ children, variant, ...props }) => {
  return (
    <>
      <Button
        {...props}
        className={cn(
          "text-foreground border rounded px-3 py-1 transition-all",
          variantClasses[variant],
          props.className
        )}
      >
        {children}
      </Button>
    </>
  );
};
