import * as React from "react";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

function getVariantClasses(variant) {
  switch (variant) {
    case "destructive":
      return "bg-red-600 text-white hover:bg-red-700";
    case "outline":
      return "border border-gray-300 bg-transparent hover:bg-gray-50";
    case "secondary":
      return "bg-gray-800 text-white hover:bg-gray-700";
    case "ghost":
      return "bg-transparent hover:bg-gray-100";
    case "link":
      return "text-blue-600 hover:underline";
    default:
      return "bg-[#143F35] text-white hover:bg-[#0f332b]";
  }
}

function getSizeClasses(size) {
  switch (size) {
    case "sm":
      return "h-9 rounded-md px-3";
    case "lg":
      return "h-11 rounded-md px-8";
    case "icon":
      return "h-10 w-10 p-0";
    default:
      return "h-10 px-4 py-2";
  }
}

const Button = React.forwardRef(function Button(
  { className, variant = "default", size = "default", ...props },
  ref
) {
  const base = "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none disabled:pointer-events-none disabled:opacity-50";
  const classes = cn(base, getVariantClasses(variant), getSizeClasses(size), className);
  return <button ref={ref} className={classes} {...props} />;
});

export { Button };
