import { X } from "lucide-react";
import { useEffect, type ReactNode } from "react";

export type ModalMaxWidth = "sm" | "md" | "lg" | "xl" | "2xl";

export interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  title?: ReactNode;
  children: ReactNode;
  maxWidth?: ModalMaxWidth;
  className?: string;
  showCloseButton?: boolean;
  ariaLabelledBy?: string;
}

const MAX_WIDTH_STYLES: Record<ModalMaxWidth, string> = {
  sm: "max-w-sm",
  md: "max-w-md",
  lg: "max-w-lg",
  xl: "max-w-xl",
  "2xl": "max-w-2xl",
};

export function Modal({
  isOpen,
  onClose,
  title,
  children,
  maxWidth = "md",
  className = "",
  showCloseButton = true,
  ariaLabelledBy = "modal-title",
}: ModalProps) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <aside
      role="dialog"
      aria-modal="true"
      aria-labelledby={title ? ariaLabelledBy : undefined}
      onClick={(e) => {
        if (e.target === e.currentTarget) onClose();
      }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 p-4"
    >
      <section
        className={`bg-white p-6 rounded-lg shadow-xl w-full max-h-[90vh] overflow-y-auto ${MAX_WIDTH_STYLES[maxWidth]} ${className}`}
      >
        {(title || showCloseButton) && (
          <header className="flex justify-between items-center mb-4">
            {title ? (
              typeof title === "string" ? (
                <h2
                  id={ariaLabelledBy}
                  className="text-lg font-semibold text-stone-900"
                >
                  {title}
                </h2>
              ) : (
                title
              )
            ) : (
              <span />
            )}
            {showCloseButton && (
              <button
                type="button"
                onClick={onClose}
                aria-label="Cerrar modal"
                className="p-1 rounded-md text-stone-400 hover:text-stone-600 hover:bg-stone-100 transition-colors cursor-pointer focus-visible:ring-2 focus-visible:ring-stone-400 outline-none"
              >
                <X size={20} aria-hidden="true" />
              </button>
            )}
          </header>
        )}
        {children}
      </section>
    </aside>
  );
}