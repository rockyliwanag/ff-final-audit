'use client';
import { set } from 'date-fns';
import { createContext, useContext, useState, useEffect } from 'react'

const GlobalContext = createContext({});

export const GlobalProvider = ({ children }) => {
    const [date, setDate] = useState(new Date());
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
    const [battery, setBattery] = useState(null);
    const [roofWork, setRoofWork] = useState("");
    const [electrical, setElectrical] = useState("");
    const [groundMount, setGroundMount] = useState("");
    const [trimming, setTrimming] = useState("");
    const [trenching, setTrenching] = useState("");
    const [pitch, setRoofPitch] = useState("");
    const [salesMet, setSalesMet] = useState("");
    const [openProjectDetails, setOpenProjectDetails] = useState();
    const [openCE_Notes, setOpenCE_Notes] = useState();
    const [openContract, setOpenContract] = useState();
    const [openCR_Drive, setOpenCR_Drive] = useState();
    const [openSiteCapture, setOpenSiteCapture] = useState();
    const [openAurora, setOpenAurora] = useState();
    const [openFinance, setOpenFinance] = useState();
    const [auPanelQty, setAuPanelQty] = useState("");
    const [auSysSize, setAuSysSize] = useState("");
    const [finalProduction, setFinalProduction] = useState("");

    return (
        <GlobalContext.Provider value={
            {
                date,
                setDate,
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
                battery,
                setBattery,
                roofWork,
                setRoofWork,
                electrical,
                setElectrical,
                trimming,
                setTrimming,
                trenching,
                setTrenching,
                groundMount,
                setGroundMount,
                pitch,
                setRoofPitch,
                salesMet,
                setSalesMet,
                openProjectDetails,
                setOpenProjectDetails,
                openCE_Notes,
                setOpenCE_Notes,
                openContract,
                setOpenContract,
                openCR_Drive,
                setOpenCR_Drive,
                openSiteCapture,
                setOpenSiteCapture,
                openAurora,
                setOpenAurora,
                openFinance,
                setOpenFinance,
                auPanelQty,
                setAuPanelQty,
                auSysSize,
                setAuSysSize,
                finalProduction,
                setFinalProduction
            }
        
        }>
            {children}
        </GlobalContext.Provider>
    )
}

export const useGlobalContext = () => {
    return useContext(GlobalContext)
}

