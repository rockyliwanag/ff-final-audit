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
        newEpc, setNewEpc,
        soldEpc, setSoldEpc,
        baselineGsp, setBaselineGsp,
        soldGsp, setSoldGsp,
        otherWorkPPW, setOtherWorkPPW,
        purchaseGsp, setPurchaseGsp,
        purchaseEpc, setPurchaseEpc
     } = usePPWContext();

    useEffect(() => {
        const baseFive = Number(baseLine) + 0.05;
        const systemSize = Number(sysSize);
        const frdmAdders = Number(freedomAdders);
        const soldEPC = Number(soldPpw);
        const otherWorkAmount = Number(otherWork);
        const salesPrice = Number(gsp);
        const purchasePrice = Number(purchaseGsp);
        const dealerFee = Number(purchaseEpc);
        setNewEpc(((systemSize * baseFive) + frdmAdders) / systemSize);
        setSoldEpc(((sysSize * soldEPC) + frdmAdders) / sysSize);
        setOtherWorkPPW(((frdmAdders - otherWorkAmount) - salesPrice) / systemSize);
        setBaselineGsp(newEpc * systemSize);
        setSoldGsp(soldEpc * systemSize);
        setPurchaseGsp((((systemSize * baseFive) + (frdmAdders - dealerFee))/ dealerRate) - 1 )
    }, [
        sysSize, 
        otherWork, 
        dealerFee, 
        dealerRate, 
        freedomAdders, 
        gsp, 
        soldPpw, 
        baseLine, 
        ppwCap]);

    return (
        <div className='flex flex-col gap-y-4'>
            <Typography variant="h5" color="amber">Calculations</Typography>

            { financeWith === "TPO" ? (
                <>
                    <h1 className='text-gray-400'>New TPO EPC: 
                        <span className='font-extrabold text-white'>
                            ${newEpc.toFixed(2).toLocaleString()}
                        </span>
                    </h1>
                    <h1 className='text-gray-400'>Baseline TPO GSP: 
                        <span className='font-extrabold text-white'>
                            ${baselineGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </h1>
                </>)
             : (
                <>
                    <h1 className='text-gray-400'>New Purchase EPC: 
                        <span className='font-extrabold text-white'>
                            ${newEpc.toFixed(2).toLocaleString()}
                        </span>
                    </h1>
                    <h1 className='text-gray-400'>Baseline Purchase GSP: 
                        <span className='font-extrabold text-white'>
                            ${purchaseGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                        </span>
                    </h1>
                </>
            )}

            <h1 className='text-gray-400'>Sold EPC: 
                <span className='font-extrabold text-white'>
                    ${soldEpc.toFixed(2).toLocaleString()}
                </span>
            </h1>
            <h1 className='text-gray-400'>Sold GSP: 
                <span className='font-extrabold text-white'>
                    ${soldGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
            </h1>
            <h1 className='text-gray-400'>Other Work PPW: 
                <span className='font-extrabold text-white'>
                    ${Math.abs(otherWorkPPW).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}
                </span>
            </h1>
        </div>
    );
}

export default Calculations;