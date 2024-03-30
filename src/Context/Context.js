import { createContext, useState } from "react";

export const detailsContext = createContext(null)

export const Context = ({children}) => {
    const [data, setData] = useState([''])

    return (
        <detailsContext.Provider value={{data, setData}}>
            {children}
        </detailsContext.Provider>
    )

}