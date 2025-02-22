"use client";

import * as React from "react";
import {
  Root,
  Item,
  Header,
  Trigger,
  Content,
} from "@radix-ui/react-accordion";
import { ChevronDown } from "lucide-react";
import { twMerge } from "tailwind-merge";

const Accordion = Root;

const AccordionItem = React.forwardRef<
  React.ElementRef<typeof Item>,
  React.ComponentPropsWithoutRef<typeof Item>
>(({ className, ...props }, ref) => (
  <Item ref={ref} className={twMerge("border-b", className)} {...props} />
));
AccordionItem.displayName = "AccordionItem";

const AccordionTrigger = React.forwardRef<
  React.ElementRef<typeof Trigger>,
  React.ComponentPropsWithoutRef<typeof Trigger>
>(({ className, children, ...props }, ref) => (
  <Header className="flex">
    <Trigger
      ref={ref}
      className={twMerge(
        "flex flex-1 items-center justify-between text-left py-4 transition-all duration-300 ease-in-out [&[data-state=open]>svg]:rotate-180 font-gotham-medium text-lg hover:text-orange500/70",
        className
      )}
      {...props}
    >
      {children}
      <ChevronDown className="h-4 w-4 shrink-0 transition-transform duration-300 ease-in-out" />
    </Trigger>
  </Header>
));
AccordionTrigger.displayName = "AccordionTrigger";

const AccordionContent = React.forwardRef<
  React.ElementRef<typeof Content>,
  React.ComponentPropsWithoutRef<typeof Content>
>(({ className, children, ...props }, ref) => (
  <Content
    ref={ref}
    className={twMerge(
      "overflow-hidden text-sm transition-all duration-500 ease-in-out data-[state=closed]:animate-accordion-up-slow data-[state=open]:animate-accordion-down-slow",
      className
    )}
    {...props}
  >
    <div className={twMerge("pb-4 pt-0", className)}>{children}</div>
  </Content>
));
AccordionContent.displayName = "AccordionContent";

export { Accordion, AccordionItem, AccordionTrigger, AccordionContent };
