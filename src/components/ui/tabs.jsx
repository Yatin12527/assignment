import * as React from "react";

// Minimal className join helper
function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const TabsContext = React.createContext({
  activeValue: "",
  setActiveValue: () => {},
  onValueChange: undefined,
});

export function Tabs({ value, onValueChange, children, className }) {
  const [activeValue, setActiveValue] = React.useState(value ?? "");

  React.useEffect(() => {
    if (value !== undefined) setActiveValue(value);
  }, [value]);

  const ctx = React.useMemo(
    () => ({ activeValue, setActiveValue, onValueChange }),
    [activeValue, onValueChange]
  );

  return (
    <TabsContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}

export const TabsList = React.forwardRef(function TabsList(
  { className, ...props },
  ref
) {
  return (
    <div
      ref={ref}
      className={cn(
        "inline-flex h-10 items-center justify-center rounded-md bg-muted p-1 text-muted-foreground",
        className
      )}
      {...props}
    />
  );
});

export const TabsTrigger = React.forwardRef(function TabsTrigger(
  { className, value, children, ...props },
  ref
) {
  const { activeValue, setActiveValue, onValueChange } =
    React.useContext(TabsContext);
  const isActive = activeValue === value;
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => {
        setActiveValue(value);
        onValueChange && onValueChange(value);
      }}
      data-state={isActive ? "active" : "inactive"}
      className={cn(
        "inline-flex items-center justify-center whitespace-nowrap rounded-sm px-3 py-1.5 text-sm font-medium ring-offset-background transition-all data-[state=active]:bg-background data-[state=active]:text-foreground data-[state=active]:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50",
        className
      )}
      {...props}
    >
      {children}
    </button>
  );
});

export const TabsContent = React.forwardRef(function TabsContent(
  { className, value, children, ...props },
  ref
) {
  const { activeValue } = React.useContext(TabsContext);
  if (value !== activeValue) return null;
  return (
    <div
      ref={ref}
      className={cn(
        "mt-2 ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2",
        className
      )}
      {...props}
    >
      {children}
    </div>
  );
});
