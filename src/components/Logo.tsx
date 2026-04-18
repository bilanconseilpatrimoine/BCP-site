import Image from "next/image";

type LogoSize = "sm" | "md" | "lg";

interface LogoProps {
  size?: LogoSize;
  priority?: boolean;
  className?: string;
}

const SIZE_MAP: Record<LogoSize, { cls: string; px: number }> = {
  sm: { cls: "h-8 w-8", px: 32 },
  md: { cls: "h-10 w-10", px: 40 },
  lg: { cls: "h-12 w-12", px: 48 },
};

export const Logo = ({ size = "md", priority = false, className = "" }: LogoProps) => {
  const { cls, px } = SIZE_MAP[size];

  return (
    <span
      className={["logo-frame", "logo-frame--circle", "shrink-0", cls, className]
        .filter(Boolean)
        .join(" ")}
      aria-hidden={false}
    >
      <Image
        src="/logos/LOGO_BCP.jpg"
        alt="Bilan Conseil Patrimoine"
        width={px * 2}
        height={px * 2}
        priority={priority}
        sizes={`${px}px`}
      />
    </span>
  );
};

export default Logo;
