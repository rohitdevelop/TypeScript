import React, { createContext, useState } from "react";
import type { ReactNode } from "react";

// 1. Theme type
type Theme = "light" | "dark";

// 2. Context type
interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// 3. Create context with default values
export const ThemeContext = createContext<ThemeContextType>({
  theme: "light",
  toggleTheme: () => {},
});

// 4. Provider component
export const ThemeProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [theme, setTheme] = useState<Theme>("light");

  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};
