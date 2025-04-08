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
    const [financeWith, setFinanceWith] = useState("TPO");
    const [newEpc, setNewEpc] = useState(0);
    const [soldEpc, setSoldEpc] = useState(0);
    const [baselineGsp, setBaselineGsp] = useState(0);
    const [soldGsp, setSoldGsp] = useState(0);
    const [otherWorkPPW, setOtherWorkPPW] = useState(0);
    const [otherWorkType, setOtherWorkType] = useState('');
    const [purchaseSoldGsp, setPurchaseSoldGsp] = useState(0);
    const [highestGsp, setHighestGsp] = useState(0);
    const [purchaseGsp, setPurchaseGsp] = useState(0);
    const [purchaseEpc, setPurchaseEpc] = useState(0);
    const [hicAState, setHicAState] = useState(false);
    const [hicBState, setHicBState] = useState(false);
    const [baselineHic, setBaselineHic] = useState(0);
    const [tpoSoldHic, setTpoSoldHic] = useState(0);
    const [qualifiedFor, setQualifiedFor] = useState(0);
    const [mosaicBaseline, setMosaicBaseline] = useState(0);
    const [mosaicSold, setMosaicSold] = useState(0);
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
                newEpc, setNewEpc,
                soldEpc, setSoldEpc,
                tpoSoldHic, setTpoSoldHic,
                baselineGsp, setBaselineGsp,
                baselineHic, setBaselineHic,
                soldGsp, setSoldGsp,
                otherWorkPPW, setOtherWorkPPW,
                otherWorkType, setOtherWorkType,
                purchaseSoldGsp, setPurchaseSoldGsp,
                highestGsp, setHighestGsp,
                purchaseGsp, setPurchaseGsp,
                purchaseEpc, setPurchaseEpc,
                hicAState, setHicAState,
                hicBState, setHicBState,
                qualifiedFor, setQualifiedFor,
                mosaicBaseline, setMosaicBaseline,
                mosaicSold, setMosaicSold,
            }}>
            {children}
        </PPWContext.Provider>
    );
};

export const usePPWContext = () => {
    return useContext(PPWContext);
}