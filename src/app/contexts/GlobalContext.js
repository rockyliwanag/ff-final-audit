'use client';
import { createContext, useContext, useState } from 'react'

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {

    [customer, setCustomer] = useState("");
    [address, setAddress] = useState("");
    [contractName, setContractName] = useState("");

    return (
        <GlobalContext.Provider value={
            {
                customer,
                setCustomer,
                address,
                setAddress,
                contractName,
                setContractName
            }
        
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

