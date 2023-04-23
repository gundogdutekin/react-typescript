import React,{createContext} from "react";
import { theme} from "./theme";

type ChildrenType={
    children:React.ReactNode
}

export const ThemeContext = createContext(theme);

export const ThemeProvider = ({children}:ChildrenType) => {
    return (
        <ThemeContext.Provider value={theme}>
            {children}
        </ThemeContext.Provider>
    )
}