import type { ReactNode } from "react";

/**
 * The single content container every section aligns to. One place to change
 * the max width or gutters, so nothing drifts off the shared grid.
 */
export default function Shell({
  children,
  className = "",
  id,
  as: Tag = "div",
}: {
  children: ReactNode;
  className?: string;
  id?: string;
  as?: "div" | "section" | "header" | "footer" | "main" | "nav";
}) {
  return (
    <Tag id={id} className={`mx-auto w-full max-w-shell px-6 sm:px-12 lg:px-16 ${className}`}>
      {children}
    </Tag>
  );
}
