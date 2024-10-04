import {ButtonStyles} from "./Button.styles";

interface ButtonProps {
    children: string;
    onClick?: () => void;
    disabled?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ children, onClick, disabled }) => {
    return (
        <button
            css={ButtonStyles}
            onClick={onClick}
            disabled={disabled}
        >
            {children}
        </button>
    );
};
