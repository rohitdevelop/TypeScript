import React, { createContext, useState, useEffect, ReactNode } from "react";

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
  // ✅ initialize theme with localStorage or default to "light"
  const [theme, setTheme] = useState<Theme>(
    () => (localStorage.getItem("theme") as Theme) || "light"
  );

  // ✅ store theme in localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem("theme", theme);
  }, [theme]);

  // ✅ toggle function
  const toggleTheme = () => {
    setTheme((prev) => (prev === "light" ? "dark" : "light"));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {/* apply theme class on whole app */}
      <div className={theme === "dark" ? "bg-black text-white min-h-screen" : "bg-white text-black min-h-screen"}>
        {children}
      </div>
    </ThemeContext.Provider>
  );
};
