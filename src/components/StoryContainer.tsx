import { ReactNode } from "react";
import { useTheme } from "@emotion/react";

interface StoryContainerProps {
  children: ReactNode;
}

export const StoryContainer: React.FC<StoryContainerProps> = ({ children }) => {
  const theme = useTheme();

  return (
    <div
      css={{
        padding: theme.spacing.xxxl,
        backgroundColor: theme.colors.background,
        color: theme.colors.text,
      }}
      style={{
        display: "flex",
        justifyContent: "space-around",
        alignItems: "center",
        alignContent: "space-around",
        flexWrap: "wrap",
        minHeight: "150px",
      }}
    >
      {children}
    </div>
  );
};
