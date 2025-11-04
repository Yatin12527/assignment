import * as React from "react";
import { FaChevronDown } from "react-icons/fa6";

function cn(...classes) {
  return classes.filter(Boolean).join(" ");
}

const AccordionContext = React.createContext({
  activeItem: null,
  setActiveItem: () => {},
  type: "single",
  collapsible: true,
});

export function Accordion({
  value,
  onValueChange,
  children,
  className,
  type = "single",
  collapsible = true,
}) {
  const [activeItem, setActiveItem] = React.useState(value ?? null);

  React.useEffect(() => {
    if (value !== undefined) setActiveItem(value);
  }, [value]);

  const ctx = React.useMemo(
    () => ({
      activeItem,
      type,
      collapsible,
      setActiveItem: (next) => {
        let newValue = next;
        if (type === "single") {
          if (collapsible && next === activeItem) {
            newValue = null;
          }
        }
        setActiveItem(newValue);
        onValueChange && onValueChange(newValue);
      },
    }),
    [activeItem, onValueChange, type, collapsible]
  );

  return (
    <AccordionContext.Provider value={ctx}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  );
}

const ItemValueContext = React.createContext(null);

export const AccordionItem = React.forwardRef(function AccordionItem(
  { className, value, children, ...props },
  ref
) {
  return (
    <ItemValueContext.Provider value={value}>
      <div
        ref={ref}
        data-value={value}
        className={cn("border-b", className)}
        {...props}
      >
        {children}
      </div>
    </ItemValueContext.Provider>
  );
});

export const AccordionTrigger = React.forwardRef(function AccordionTrigger(
  { className, children, value: explicitValue, ...props },
  ref
) {
  const itemValue = React.useContext(ItemValueContext);
  const value = explicitValue ?? itemValue;
  const { activeItem, setActiveItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;
  return (
    <button
      ref={ref}
      type="button"
      onClick={() => setActiveItem(isOpen ? null : value)}
      data-state={isOpen ? "open" : "closed"}
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline",
        className
      )}
      {...props}
    >
      {children}
      <FaChevronDown
        className={cn(
          "h-4 w-4 shrink-0 transition-transform duration-200",
          isOpen && "rotate-180"
        )}
      />
    </button>
  );
});

export const AccordionContent = React.forwardRef(function AccordionContent(
  { className, children, value: explicitValue, ...props },
  ref
) {
  const itemValue = React.useContext(ItemValueContext);
  const value = explicitValue ?? itemValue;
  const { activeItem } = React.useContext(AccordionContext);
  const isOpen = activeItem === value;
  if (!isOpen) return null;
  return (
    <div
      ref={ref}
      className={cn("overflow-hidden text-sm", className)}
      {...props}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  );
});

export default Accordion;
