import { LucideIcon } from "lucide-react";

export interface FeatureCardProps {
  title: string;
  description: string;
  icon?: LucideIcon;
  image?: string;
  className?: string;
  large?: boolean;
}

export interface NavItem {
  label: string;
  href: string;
  children?: { label: string; href: string; desc: string }[];
}

export interface ComplianceFramework {
  id: string;
  name: string;
  checked: boolean;
}