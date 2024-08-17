import { Card } from "@/components/ui";
import { clsx } from "clsx";
import type { FC } from "react";

export interface ProFeatureImageProperties {
  image: string;
  className?: string;
}

export const ProFeatureImage: FC<ProFeatureImageProperties> = ({
  image,
  className,
}) => {
  return (
    <Card className={clsx("flex items-center justify-center p-4", className)}>
      <img src={image} alt="feature" className="dark:invert" />
    </Card>
  );
};
