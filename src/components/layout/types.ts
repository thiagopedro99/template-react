// src/components/layout/types.ts
export interface LayoutProps {
  children: React.ReactNode;
  pageTitle?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | '2xl' | 'full';
  padding?: boolean | string;
  hideNavbar?: boolean;
  hideFooter?: boolean;
}