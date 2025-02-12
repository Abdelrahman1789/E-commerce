import { createContext, useState } from "react";

export const counterContext=createContext(0)
export function CounterContextProvider({children}){

    const [counter,setCounter]=useState(1)

    return <counterContext.Provider value={{counter,setCounter}}>
        {children}
    </counterContext.Provider>
}