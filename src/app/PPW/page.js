'use client';
import React from 'react';
import Navigate from '../../components/Navigation';
import CalcInputs from './components/CalcInputs';
import Calculations from './components/Calculations';
import { PPWProvider } from '../contexts/ppwContext';

export default function PPW() {

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24'>
            <PPWProvider>
                <div className='flex flex-col gap-y-2'>
                    <Navigate />
                    <CalcInputs />
                    <Calculations />
                </div>
            </PPWProvider>
        </main>
    );
}