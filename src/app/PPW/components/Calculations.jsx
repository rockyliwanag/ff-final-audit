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
        gsp,
        soldPpw,
        baseLine,
        ppwCap,
        newEpc, setNewEpc,
        soldEpc, setSoldEpc,
        baselineGsp, setBaselineGsp,
        soldGsp, setSoldGsp,
        otherWorkPPW, setOtherWorkPPW
     } = usePPWContext();

    useEffect(() => {
        const baseFive = Number(baseLine) + 0.05;
        const systemSize = Number(sysSize);
        const frdmAdders = Number(freedomAdders);
        const soldEPC = Number(soldPpw);
        const otherWorkAmount = Number(otherWork);
        const salesPrice = Number(gsp);
        
        setNewEpc(((systemSize * baseFive) + frdmAdders) / systemSize);
        setSoldEpc(((sysSize * soldEPC) + frdmAdders) / sysSize);
        setOtherWorkPPW(((frdmAdders - otherWorkAmount) - salesPrice) / systemSize);
        setBaselineGsp(newEpc * systemSize);
        setSoldGsp(soldEpc * systemSize);
    }, [sysSize, otherWork, dealerFee, dealerRate, freedomAdders, gsp, soldPpw, baseLine, ppwCap]);

    return (
        <div>
            <Typography variant="h5" color="amber">Calculations</Typography>
            <h1 className='text-gray-400'>New EPC: $<span className='font-extrabold text-white'>{newEpc.toFixed(2).toLocaleString()}</span></h1>
            <h1 className='text-gray-400'>Baseline GSP: $<span className='font- text-white'>{baselineGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></h1>
            <h1 className='text-gray-400'>Sold EPC: $<span className='font- text-white'>{soldEpc.toFixed(2).toLocaleString()}</span></h1>
            <h1 className='text-gray-400'>Sold GSP: $<span className='font- text-white'>{soldGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></h1>
            <h1 className='text-gray-400'>Other Work PPW: $<span className='font- text-white'>{Math.abs(otherWorkPPW).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}</span></h1>
        </div>
    );
}

export default Calculations;