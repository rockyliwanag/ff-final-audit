'use client';
import { set } from 'date-fns';
import { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext({});

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
    const [numPlanes, setNumPlanes] = useState("");
    const [holding, setHolding] = useState("");
    const [tie_In, setTie_In] = useState("");
    const [utility, setUtility] = useState("");
    const [roofWork, setRoofWork] = useState("");
    const [electrical, setElectrical] = useState("");
    const [pitch, setRoofPitch] = useState("");

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
                setFirstProduction,
                numPlanes,
                setNumPlanes,
                holding,
                setHolding,
                tie_In,
                setTie_In,
                utility,
                setUtility,
                roofWork,
                setRoofWork,
                electrical,
                setElectrical,
                pitch,
                setRoofPitch
            }
        
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

