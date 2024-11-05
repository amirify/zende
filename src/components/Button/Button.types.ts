import { ReactNode, CSSProperties } from 'react';

export type ButtonVariant = 'solid' | 'outlined' | 'text';
export type ButtonSize = 'small' | 'medium' | 'large';
export type ButtonRadius = 'none' | 'sm' | 'md' | 'lg' | 'pill' | 'circle';
export type ButtonIconPosition = 'start' | 'end';

export interface ButtonProps {
    children: ReactNode;
    disabled?: boolean;
    onClick?: () => void;
    variant?: ButtonVariant;            // default: 'solid'
    size?: ButtonSize;                  // default: 'medium'
    radius?: ButtonRadius;              // default: 'none'
    icon?: ReactNode;
    iconPosition?: ButtonIconPosition;  // default: 'start'
    loadingIcon?: ReactNode;
    showLoading?: boolean;              // If true, shows loadingIcon instead of children
    block?: boolean;                    // If true, the button takes full width of its container
    className?: string;                 // Additional custom class names for the button
    styles?: CSSProperties;             // Inline styles to apply to the button
}