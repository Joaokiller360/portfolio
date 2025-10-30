interface LayoutProps {
  style?: string;
  children: React.ReactNode;
}

export function Loyout({ children, style }: LayoutProps) {
  return (
    <div className={`w-full h-dvh flex items-center justify-center text-center from-secondary to-background relative ${style}`}>{children}</div>
  )
}

interface TitleProps {
  style?: string;
  children: React.ReactNode;
  title?: string
}

export function TitleProject({ children, style, title = '' }: TitleProps) {
  return (
    <div className="grid">
      <div className={`${style}`}>{title}</div>
      <div>
        {children}
      </div>
    </div>
  )
}