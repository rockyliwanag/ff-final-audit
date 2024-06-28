'use client';
import { set } from 'date-fns';
import { createContext, useContext, useState, useEffect } from 'react'

const globalContext = createContext({});

export const GlobalProvider = ({ children }) => {

    const [customer, setCustomer] = useState('');
    const [address, setAddress] = useState('');
    const [contractName, setContractName] = useState("");
    const [contractAddress, setContractAddress] = useState("");
    const [opportunity, setOpportunity] = useState("");
    const [loanAmount, setLoanAmount] = useState("");
    const [loanProduct, setLoanProduct] = useState("");
    const [dealerFee, setDealerFee] = useState("");
    const [systemSize, setSystemSize] = useState("");
    const [systemCost, setSystemCost] = useState("");
    const [firstProduction, setFirstProduction] = useState("");

    // useEffect(() => {
    //     console.log('customer:', customer, 'address:', address)
    // }, [customer, address])
  

    return (
        <GlobalContext.Provider value={
            {
                contractName,
                setContractName,
                customer,
                setCustomer,
                address,
                setAddress,
                contractAddress,
                setContractAddress,
                opportunity,
                setOpportunity,
                loanAmount,
                setLoanAmount,
                loanProduct,
                setLoanProduct,
                dealerFee,
                setDealerFee,
                systemSize,
                setSystemSize,
                systemCost,
                setSystemCost,
                firstProduction,
                setFirstProduction
            }
        
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(globalContext)
}

