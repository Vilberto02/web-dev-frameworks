import type { ReactNode } from "react";

export type BadgeVariant =
  | "success"
  | "warning"
  | "danger"
  | "neutral"
  | "info";

export interface BadgeProps {
  variant?: BadgeVariant;
  status?: string | null;
  children?: ReactNode;
  className?: string;
}

const VARIANT_STYLES: Record<BadgeVariant, string> = {
  success: "bg-emerald-100 text-emerald-800 border-emerald-300",
  neutral: "bg-stone-100 text-stone-700 border-stone-300",
  warning: "bg-yellow-100 text-yellow-800 border-yellow-300",
  danger: "bg-red-100 text-red-800 border-red-300",
  info: "bg-blue-100 text-blue-800 border-blue-300",
};

const STATUS_MAP: Record<string, { label: string; variant: BadgeVariant }> = {
  activo: { label: "Activo", variant: "success" },
  archivado: { label: "Archivado", variant: "neutral" },
};

export function Badge({
  variant,
  status,
  children,
  className = "",
}: BadgeProps) {
  const currentStatus = status;

  if (!currentStatus && !children) {
    return <span className=" text-stone-400">-</span>;
  }

  let finalVariant: BadgeVariant = variant ?? "neutral";
  let content: ReactNode = children;

  if (currentStatus) {
    const key = currentStatus.toLowerCase();
    const mapped = STATUS_MAP[key];
    if (mapped) {
      finalVariant = variant ?? mapped.variant;
      content = children ?? mapped.label;
    } else {
      content = children ?? currentStatus;
    }
  }

  const labelText = typeof content === "string" ? content : "badge";

  return (
    <span
      role="status"
      aria-label={`Estado: ${labelText}`}
      className={`px-2.5 py-0.5 text-sm font-semibold rounded-full border inline-flex items-center justify-center whitespace-nowrap ${VARIANT_STYLES[finalVariant]} ${className}`}
    >
      {content}
    </span>
  );
}
