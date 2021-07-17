import {createContext} from "react";

export const TableContext = createContext({
    collapsed: false,
    setCollapse: () => {},
})
