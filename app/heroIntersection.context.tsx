"use  client"
import { createContext, useContext, useEffect, useState } from "react";
import { InViewHookResponse, useInView } from "react-intersection-observer";

const Context = createContext({} as InViewHookResponse)

export function HeroIntersectionContextProvider({ children }: {
    children: React.ReactNode
})  {
    const res = useInView({
        threshold: 0.10
    })
    return (
        <Context.Provider value={res}>
            {children}
        </Context.Provider>
    )
}

export  function useHeroIntersectionContext() {
    return useContext(Context)
}