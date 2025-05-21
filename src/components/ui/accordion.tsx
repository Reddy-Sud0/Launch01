"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface AccordionProps {
  type?: "single" | "multiple";
  collapsible?: boolean;
  className?: string;
  children: React.ReactNode;
}

interface AccordionItemProps {
  value: string;
  className?: string;
  children: React.ReactNode;
}

interface AccordionTriggerProps {
  className?: string;
  children: React.ReactNode;
}

interface AccordionContentProps {
  className?: string;
  children: React.ReactNode;
}

const AccordionContext = React.createContext<{
  expanded: string[];
  toggle: (value: string) => void;
}>({
  expanded: [],
  toggle: () => {},
});

export function Accordion({
  type = "single",
  collapsible = false,
  className,
  children,
}: AccordionProps) {
  const [expanded, setExpanded] = React.useState<string[]>([]);

  const toggle = (value: string) => {
    if (type === "single") {
      setExpanded(expanded.includes(value) ? [] : [value]);
    } else {
      setExpanded(
        expanded.includes(value)
          ? expanded.filter((item) => item !== value)
          : [...expanded, value]
      );
    }
  };

  return (
    <AccordionContext.Provider value={{ expanded, toggle }}>
      <div className={cn("space-y-1", className)}>{children}</div>
    </AccordionContext.Provider>
  );
}

export function AccordionItem({
  value,
  className,
  children,
}: AccordionItemProps) {
  return (
    <div className={cn("border-b", className)}>
      {React.Children.map(children, (child) => {
        if (React.isValidElement(child)) {
          return React.cloneElement(child as React.ReactElement, { value });
        }
        return child;
      })}
    </div>
  );
}

export function AccordionTrigger({
  className,
  children,
  value,
}: AccordionTriggerProps & { value?: string }) {
  const { expanded, toggle } = React.useContext(AccordionContext);

  return (
    <button
      className={cn(
        "flex w-full items-center justify-between py-4 font-medium transition-all hover:underline [&[data-state=open]>svg]:rotate-180",
        className
      )}
      onClick={() => value && toggle(value)}
      data-state={value && expanded.includes(value) ? "open" : "closed"}
    >
      {children}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-4 w-4 shrink-0 transition-transform duration-200"
      >
        <polyline points="6 9 12 15 18 9" />
      </svg>
    </button>
  );
}

export function AccordionContent({
  className,
  children,
  value,
}: AccordionContentProps & { value?: string }) {
  const { expanded } = React.useContext(AccordionContext);
  const isExpanded = value ? expanded.includes(value) : false;

  return isExpanded ? (
    <div
      className={cn(
        "overflow-hidden text-sm transition-all data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
        className
      )}
      data-state={isExpanded ? "open" : "closed"}
    >
      <div className="pb-4 pt-0">{children}</div>
    </div>
  ) : null;
} 