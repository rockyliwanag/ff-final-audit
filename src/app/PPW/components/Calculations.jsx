'use client';
import React, { useEffect } from 'react';
import { usePPWContext } from '../../contexts/ppwContext';
import { Typography } from '@material-tailwind/react';
import { set } from 'date-fns';

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
        newEpc, setNewEpc,
        soldEpc, setSoldEpc,
        baselineGsp, setBaselineGsp,
        soldGsp, setSoldGsp,
        otherWorkPPW, setOtherWorkPPW,
        purchaseGsp, setPurchaseGsp,
        purchaseSoldGsp, setPurchaseSoldGsp,
        purchaseEpc, setPurchaseEpc
     } = usePPWContext();

    useEffect(() => {
        const baseFive = Number(baseLine) + 0.05;
        const systemSize = Number(sysSize);
        const frdmAdders = Number(freedomAdders);
        // const soldPricePerWatt = Number(soldPpw);
        const otherWorkAmount = Number(otherWork);
        const salesPrice = Number(gsp);
        const dealerPercentage = Number(dealerRate);
        const purchasePrice = Number(purchaseGsp);
        const dealerPrice = Number(dealerFee);
        setNewEpc(() => {
            const a =((systemSize * baseFive) + frdmAdders) / systemSize
            a < ppwCap ? setHicAState(true) : setHicAState(false);
            return a;
        });
        setSoldEpc(() => {
            const a = ((soldPpw * systemSize) + frdmAdders) / systemSize
            soldPpw < ppwCap ? setHicBState(true) : setHicBState(false);
            return a;
        });
        setOtherWorkPPW(((frdmAdders - otherWorkAmount) - salesPrice) / systemSize);
        setBaselineGsp(newEpc * systemSize);
        setSoldGsp(soldEpc * systemSize);
        setPurchaseGsp( () => {
            const a = systemSize * baseFive;
            const b = frdmAdders - dealerFee;
            const c = a + b;
            const d = (dealerPercentage * 100)-1;
            const e = c/d
            return e;
        })
        setPurchaseSoldGsp( () => {
            const a = systemSize * soldPpw;
            const b = frdmAdders - dealerFee;
            const c = a + b;
            const d = (dealerPercentage * 100)-1;
            const e = c/d
            return e;
        })
        setPurchaseEpc((systemSize * baseFive) + (frdmAdders - dealerFee));
    }, [
        sysSize, 
        otherWork, 
        dealerFee, 
        dealerRate, 
        freedomAdders, 
        gsp, 
        soldPpw, 
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
            {console.log(hicAState, hicBState)}
        </div>
    );
}

export default Calculations;



