'use client';
import { createContext, useContext, useState } from "react";

const PPWContext = createContext({});

export const PPWProvider = ({ children }) => {
    const [sysSize, setSysSize] = useState(0);
    const [otherWork, setOtherWork] = useState(0);
    const [dealerFee, setDealerFee] = useState(0);
    const [dealerRate, setDealerRate] = useState(0);
    const [freedomAdders, setFreedomAdders] = useState(0);
    const [gsp, setGsp] = useState(0);
    const [soldPpw, setSoldPpw] = useState(0);
    const [baseLine, setBaseLine] = useState(0);
    const [ppwCap, setPpwCap] = useState(0);
    const [financeWith, setFinanceWith] = useState(0);

    return (
        <PPWContext.Provider value={
            { 
                sysSize, setSysSize, 
                otherWork, setOtherWork, 
                dealerFee, setDealerFee, 
                dealerRate, setDealerRate,
                freedomAdders, setFreedomAdders, 
                gsp, setGsp, 
                soldPpw, setSoldPpw,
                ppwCap, setPpwCap, 
                baseLine, setBaseLine,
                financeWith, setFinanceWith,
            }}>
            {children}
        </PPWContext.Provider>
    );
};

export const usePPWContext = () => {
    return useContext(PPWContext);
}