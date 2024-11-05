interface LoadingIconProps {
  size?: string;
  fill?: string;
  margin?: 'left' | 'right' | 'both';
  className?: string;
}

export const LoadingIcon: React.FC<LoadingIconProps> = ({ 
  size = '24px',
  fill = 'currentColor',
  margin,
  className 
}) => {

  const marginStyle = {
    marginLeft: margin === 'left' || margin === 'both' ? '0.5rem' : undefined,
    marginRight: margin === 'right' || margin === 'both' ? '0.5rem' : undefined
  };

  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width={size}
      height={size}
      viewBox="0 0 128 128"
      xmlSpace="preserve"
      className={className}
      style={marginStyle}
      fill={fill}
    >
      <g>
        <circle cx="16" cy="64" r="16" />
        <circle cx="16" cy="64" r="14.344" transform="rotate(45 64 64)" />
        <circle cx="16" cy="64" r="12.531" transform="rotate(90 64 64)" />
        <circle cx="16" cy="64" r="10.75" transform="rotate(135 64 64)" />
        <circle cx="16" cy="64" r="10.063" transform="rotate(180 64 64)" />
        <circle cx="16" cy="64" r="8.063" transform="rotate(225 64 64)" />
        <circle cx="16" cy="64" r="6.438" transform="rotate(270 64 64)" />
        <circle cx="16" cy="64" r="5.375" transform="rotate(315 64 64)" />
        <animateTransform
          attributeName="transform"
          type="rotate"
          values="0 64 64;315 64 64;270 64 64;225 64 64;180 64 64;135 64 64;90 64 64;45 64 64"
          calcMode="discrete"
          dur="700ms"
          repeatCount="indefinite"
        />
      </g>
    </svg>
  );
}