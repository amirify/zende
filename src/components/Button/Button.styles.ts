import { css, SerializedStyles, keyframes } from '@emotion/react';
import { Theme } from '../../theme/theme.types';
import { ButtonVariant, ButtonSize, ButtonRadius } from './Button.types';

export const computeButtonStyles = (theme: Theme, variant: ButtonVariant, size: ButtonSize, radius: ButtonRadius, block: boolean): SerializedStyles[] => {

  const rotateBackground = keyframes`
    from {
      transform: translate(-50%, -50%) rotate(0);
    }
    to {
      transform: translate(-50%, -50%) rotate(360deg);
    }
 `;

  const pulseShadow = keyframes`
    0% {
      box-shadow: 0 0 0 1px ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
    50% {
      box-shadow: 0 0 0 3px ${theme.colors.secondary};
      color: ${theme.colors.secondary};
    }
    100% {
      box-shadow: 0 0 0 1px ${theme.colors.primary};
      color: ${theme.colors.primary};
    }
 `;


  const buttonVariantMappings: Record<ButtonVariant, SerializedStyles> = {
    solid: css({
      color: theme.colors.onPrimary,
      boxShadow: theme.shadows.lg,
      '&::before': {
        content: '""',
        display: 'block',
        width: '120%',
        height: '0',
        paddingTop: '120%',
        position: 'absolute',
        top: '50%',
        left: '50%',
        background: `linear-gradient(${theme.colors.primary}, ${theme.colors.secondary})`,
        animation: `${rotateBackground} 3s linear infinite`,
        zIndex: -2,
      },
      '&::after': {
        content: '""',
        display: 'block',
        width: '250%',
        height: '100%',
        position: 'absolute',
        top: 0,
        left: 0,
        transform: 'translate(-100%, 0) rotate(-45deg)',
        background: 'rgba(255, 255, 255, 0.3)',
        zIndex: -1
      },
      '&:hover::after': {
        transition: 'all 1000ms ease',
        transform: 'translate(100%, 0) rotate(-45deg)'
      },
      '&:active': {
        boxShadow: theme.shadows.md
      },
      '&:disabled': {
        background: theme.colors.neutral,
        color: theme.colors.onNeutral,
        boxShadow: 'none',
        '&::before, &::after': {
          display: 'none'
        }
      }
    }),
    outlined: css({
      animation: `${pulseShadow} 3s infinite ease-in-out`,
      '&:disabled': {
        animation: 'none',
        color: theme.colors.neutral,
        border: `1px solid ${theme.colors.neutral}`
      }
    }),
    text: css({
      color: theme.colors.primary,
      '&::before': {
        content: '""',
        display: 'block',
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        transform: 'scaleY(0)',
        background: `linear-gradient(90deg, ${theme.colors.primary}, ${theme.colors.secondary})`,
        transition: 'all 0.3s ease',
        opacity: 0.3,
        zIndex: -1,
      },
      '&:hover::before': {
        transform: 'scaleY(1)',
      },
      '&:disabled': {
        color: theme.colors.neutral,
        '&::before': {
          display: 'none'
        }
      }
    })
  };

  const buttonSizeMappings: Record<ButtonSize, SerializedStyles> = {
    small: css({
      padding: `${theme.spacing.xs} ${theme.spacing.sm}`,
      fontSize: theme.typography.fontSizes.sm
    }),
    medium: css({
      padding: `${theme.spacing.sm} ${theme.spacing.md}`,
      fontSize: theme.typography.fontSizes.md
    }),
    large: css({
      padding: `${theme.spacing.md} ${theme.spacing.lg}`,
      fontSize: theme.typography.fontSizes.md
    })
  };

  const circleButtonSizeMappings: Record<ButtonSize, SerializedStyles> = {
    small: css({
      width: '2.5rem',
      height: '2.5rem',
      fontSize: theme.typography.fontSizes.xs
    }),
    medium: css({
      width: '3.5rem',
      height: '3.5rem',
      fontSize: theme.typography.fontSizes.md
    }),
    large: css({
      width: '4.5rem',
      height: '4.5rem',
      fontSize: theme.typography.fontSizes.lg
    }),
  };


  const buttonRadiusMappings: Record<ButtonRadius, SerializedStyles> = {
    none: css({ borderRadius: '0' }),
    sm: css({ borderRadius: theme.radii.sm }),
    md: css({ borderRadius: theme.radii.md }),
    lg: css({ borderRadius: theme.radii.lg }),
    xl: css({ borderRadius: theme.radii.xl }),
    pill: css({ borderRadius: theme.radii.pill }),
    circle: css({ borderRadius: theme.radii.circle })
  };

  const buttonBaseClass: SerializedStyles = css({
    position: 'relative',
    overflow: 'hidden',
    border: 'none',
    outline: 'none',
    background: 'none',
    cursor: 'pointer',
    transition: '0.3s all ease',
    zIndex: 0,
    '&:hover': {
      transform: 'scale(1.05) translateZ(0)'
    },
    '&:active': {
      transform: 'scale(1) translateZ(0)'
    },
    '&:disabled': {
      transform: 'none',
      cursor: 'not-allowed',
    }
  });

  const blockButtonClass: SerializedStyles | null = block && radius !== 'circle' ? css({ display: 'block', width: '100%' }) : null;
  const buttonVariantClass: SerializedStyles = buttonVariantMappings[variant];
  const buttonSizeClass: SerializedStyles = radius === 'circle' ? circleButtonSizeMappings[size] : buttonSizeMappings[size];
  const buttonRadiusClass: SerializedStyles = buttonRadiusMappings[radius];

  const buttonClasses: SerializedStyles[] = [buttonBaseClass, buttonVariantClass, buttonSizeClass, buttonRadiusClass];

  if (blockButtonClass) {
    buttonClasses.push(blockButtonClass);
  }

  return buttonClasses;
}