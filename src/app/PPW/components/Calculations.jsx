'use client';
import React, { useEffect } from 'react';
import { usePPWContext } from '../../contexts/ppwContext';
import { Typography } from '@material-tailwind/react';

const Calculations = () => {
    const { sysSize,
        otherWork,
        dealerFee,
        dealerRate,
        freedomAdders,
        financeWith,
        gsp,
        soldPpw,
        baseLine,
        ppwCap,
        hicAState, setHicAState,
        hicBState, setHicBState,
        setBaselineHic,
        setTpoSoldHic,
        newEpc, setNewEpc,
        soldEpc, setSoldEpc,
        baselineGsp, setBaselineGsp,
        soldGsp, setSoldGsp,
        otherWorkPPW, setOtherWorkPPW,
        purchaseGsp, setPurchaseGsp,
        highestGsp, setHighestGsp,
        setPurchaseSoldGsp,
     } = usePPWContext();

    useEffect(() => {
        // Convert sysSize to a string and ensure it becomes a thousand value
        let systemSizeStr = String(sysSize);
        if (systemSizeStr.includes('.')) {
            const [integerPart, decimalPart] = systemSizeStr.split('.');
            if (decimalPart.length === 2) {
                systemSizeStr = `${integerPart}${decimalPart}0`; // Add a 0 to make it a thousand value
            } else {
                systemSizeStr = `${integerPart}${decimalPart}`;
            }
        }
        const systemSize = Number(systemSizeStr); // Convert back to a number

        const baseFive = Number(baseLine) + 0.05;
        const frdmAdders = Number(freedomAdders);
        const otherWorkAmount = Number(otherWork);
        const salesPrice = Number(gsp);
        const dealerPercentage = Number(dealerRate);
        // const dealerPrice = Number(dealerFee);

        setNewEpc(() => {
            const a = ((systemSize * baseFive) + frdmAdders) / systemSize;
            a > ppwCap ? setHicAState(true) : setHicAState(false);
            console.log('hicAState', hicAState);
            return a;
        });
        setSoldEpc(() => {
            const b = ((systemSize * soldPpw) + frdmAdders) / systemSize;
            b > ppwCap ? setHicBState(true) : setHicBState(false);
            return b;
        });
        setOtherWorkPPW(((frdmAdders - otherWorkAmount) - salesPrice) / systemSize);
        setBaselineGsp(newEpc * systemSize);
        setBaselineHic((baselineGsp - highestGsp) * 1.015)
        setTpoSoldHic((soldGsp - highestGsp)* 1.015);
        setHighestGsp(ppwCap * systemSize);
        setSoldGsp(soldEpc * systemSize);
        setPurchaseGsp(() => {
            const a = systemSize * baseFive;
            const b = frdmAdders - dealerFee;
            const c = a + b;
            const d = (dealerPercentage * 100) - 1;
            const e = c / d;
            return e;
        });
        setPurchaseSoldGsp(() => {
            const a = systemSize * soldPpw;
            const b = frdmAdders - dealerFee;
            const c = a + b;
            const d = (dealerPercentage * 100) - 1;
            const e = c / d;
            return e;
        });
    }, [
        sysSize, 
        otherWork, 
        dealerFee, 
        dealerRate, 
        freedomAdders, 
        gsp, 
        soldPpw, 
        soldGsp,
        highestGsp,
        newEpc,
        baseLine, 
        ppwCap,
        hicAState, 
        hicBState, 
    ]);
    
    useEffect(() => {
        
    }, []);

    return (
        <div className='flex flex-col gap-y-4'>
            <Typography variant="h5" color="amber">Calculations</Typography>

            { financeWith === "TPO" ? (
                <>
                    <h1 className='text-gray-400 text-sm font-extrabold '>New TPO EPC: 
                        <span className='text-white text-base font-medium'>
                            ${newEpc.toFixed(2).toLocaleString()}
                        </span>
                    </h1>
                    <h1 className='text-gray-400 text-sm font-extrabold '>Baseline TPO GSP: 
                        <span className='text-white text-base font-medium'>
                            ${baselineGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </h1>
                </>
                ) : (
                <>
                    <h1 className='text-gray-400 text-sm font-extrabold '>New Purchase EPC: 
                        <span className='text-white text-base font-medium'>
                            ${newEpc.toFixed(2).toLocaleString()}
                        </span>
                    </h1>
                    <h1 className='text-gray-400 text-sm font-extrabold '>Baseline Purchase GSP: 
                        <span className='text-white text-base font-medium'>
                            ${purchaseGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </h1>
                </>
            )}
            <div>
                <h1 className='text-gray-400 text-sm font-extrabold '>Sold EPC: 
                    <span className='text-white text-base font-medium'>
                        ${soldEpc.toFixed(2).toLocaleString()}
                    </span>
                </h1>
                <h1 className='text-gray-400 text-sm font-extrabold '>Sold GSP: 
                    <span className='text-white text-base font-medium'>
                        ${soldGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                    </span>
                </h1>
            </div>
            <h1 className='text-gray-400 text-sm font-extrabold '>Other Work PPW: 
                <span className='text-white text-base font-medium'>
                    ${Math.abs(otherWorkPPW).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
            </h1>
        </div>
    );
}

export default Calculations;