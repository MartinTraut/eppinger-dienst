import Image from "next/image";
import { cn } from "@/lib/utils";

type Props = {
  className?: string;
  width?: number;
  variant?: "default" | "inverted";
  priority?: boolean;
};

/**
 * Renders the actual Eppinger logo PNG (1037x631). Aspect ratio ~1.645:1.
 * `inverted` flips the green to background-color via filter for dark surfaces.
 */
export function BrandMark({
  className,
  width = 180,
  variant = "default",
  priority,
}: Props) {
  const height = Math.round(width / 1.645);
  return (
    <Image
      src="/images/logo/logo.png"
      alt="Eppinger Gartenbau & Gebäudeservice"
      width={width}
      height={height}
      priority={priority}
      quality={100}
      className={cn(
        "select-none",
        variant === "inverted" && "invert brightness-200",
        className,
      )}
    />
  );
}
