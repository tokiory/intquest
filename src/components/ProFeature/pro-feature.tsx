import { Card, Text } from "@/components/ui";
import { clsx } from "clsx";
import type { FC } from "react";

export interface ProFeatureProperties {
  title: string;
  text: string;
  className?: string;
}

export const ProFeature: FC<ProFeatureProperties> = ({ title, className, text }) => {
  return (
    <Card className={clsx("p-4", className)}>
  <Text className="font-semibold">{title}</Text>
    <Text className="mt-2 whitespace-break-spaces">{text}</Text>
    </Card>
)
}

