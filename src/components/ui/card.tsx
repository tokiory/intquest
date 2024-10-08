import { cn } from "@/utils/shadcn"
import { forwardRef, type HTMLAttributes } from "react";

const Card = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn(
      "rounded-xl border bg-card text-card-foreground shadow",
      className
    )}
    {...properties}
  />
))
Card.displayName = "Card"

const CardHeader = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, reference) => (
  <div
    ref={reference}
    className={cn("flex flex-col space-y-1.5 p-6", className)}
    {...properties}
  />
))
CardHeader.displayName = "CardHeader"

const CardTitle = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLHeadingElement>
>(({ className, ...properties }, reference) => (
  <h3
    ref={reference}
    className={cn("font-semibold leading-none tracking-tight", className)}
    {...properties}
  />
))
CardTitle.displayName = "CardTitle"

const CardDescription = forwardRef<
  HTMLParagraphElement,
  HTMLAttributes<HTMLParagraphElement>
>(({ className, ...properties }, ref) => (
  <p
    ref={ref}
    className={cn("text-sm text-muted-foreground", className)}
    {...properties}
  />
))
CardDescription.displayName = "CardDescription"

const CardContent = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, ref) => (
  <div ref={ref} className={cn("p-6 pt-0", className)} {...properties} />
))
CardContent.displayName = "CardContent"

const CardFooter = forwardRef<
  HTMLDivElement,
  HTMLAttributes<HTMLDivElement>
>(({ className, ...properties }, ref) => (
  <div
    ref={ref}
    className={cn("flex items-center p-6 pt-0", className)}
    {...properties}
  />
))
CardFooter.displayName = "CardFooter"

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent }
