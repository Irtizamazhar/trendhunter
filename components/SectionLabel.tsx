type Props = {
  children: React.ReactNode;
  className?: string;
};

export function SectionLabel({ children, className = "" }: Props) {
  return (
    <p className={`section-label ${className}`}>{children}</p>
  );
}
