'use client';
import React from 'react';
import { usePPWContext } from '../../contexts/ppwContext';

const Calculations = () => {

    const { sysSize,
        otherWork,
        dealerFee,
        freedomAdders,
        gsp,
        soldPpw,
        baseLine } = usePPWContext();

    const baseFive = Number(baseLine) + .05;
    const newEpc = ((Number(sysSize) * baseFive) + Number(freedomAdders)) / Number(sysSize);
    const soldEpc = ((Number(sysSize) * soldPpw) + Number(freedomAdders)) / Number(sysSize);
    const otherWorkPPW = ((Number(freedomAdders) - Number(otherWork)) - Number(gsp)) / Number(sysSize);
    return (
        <div>
            <h1>Calculations</h1>
            <h1>New EPC: ${newEpc.toFixed(2)}</h1>
            <h1>Baseline GSP: ${newEpc * Number(sysSize)}</h1>
            <h1>Sold EPC: ${soldEpc.toFixed(2)}</h1>
            <h1>Sold GSP: ${(soldEpc * Number(sysSize)).toFixed(2)}</h1>
            <h1>Other Work PPW: ${Math.abs(otherWorkPPW.toFixed(2))}</h1>
        </div>
    )
}

export default Calculations