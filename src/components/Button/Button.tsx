import { useTheme, SerializedStyles } from '@emotion/react';
import { Theme } from '../../theme/theme.types';
import { lightTheme } from '../../theme/themes';
import { ButtonProps } from './Button.types';
import { computeButtonStyles } from './Button.styles';
import { LoadingIcon } from '../Icons/LoadingIcon';

export const Button: React.FC<ButtonProps> = ({
    children,
    disabled = false,
    onClick,
    variant = 'solid',
    size = 'medium',
    radius = 'none',
    icon,
    iconPosition = 'start',
    loadingIcon = <LoadingIcon />,
    showLoading = false,
    block = false,
    className,
    styles
}) => {
    // Get theme from Emotion's useTheme hook
    const theme: Theme = useTheme();

    // Fallback to default theme if useTheme returns empty object or undefined
    const activeTheme: Theme = Object.keys(theme).length ? theme : lightTheme;

    // Compute button styles based on theme and provided props
    const buttonStyles: SerializedStyles[] = computeButtonStyles(activeTheme, variant, size, radius, block);

    // Variable to handle icon and children rendering based on iconPosition
    const content = icon && iconPosition === 'end' ? (
        <>
            {children} {icon}
        </>
    ) : (
        <>
            {icon} {children}
        </>
    );

    return (
        <button
            onClick={onClick}
            disabled={disabled}
            css={buttonStyles}
            className={className}
            style={styles}
        >
            <span style={{ visibility: showLoading ? 'hidden' : 'visible' }}
                css={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {content}
            </span>
            <span style={{ visibility: showLoading ? 'visible' : 'hidden' }}
                css={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center'
                }}>
                {loadingIcon}
            </span>
        </button>
    );
};