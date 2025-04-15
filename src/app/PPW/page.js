'use client';
import React from 'react';
import Navigate from '../../components/Navigation';
import CalcInputs from './components/CalcInputs';
import Calculations from './components/Calculations';
import { PPWProvider } from '../contexts/ppwContext';
import Resolutions from './components/Resolutions';

export default function PPW() {

    return (
        <main className='flex min-h-screen flex-col items-center justify-between p-24 w-[600px]'>
            <PPWProvider>
                <div className='flex flex-col gap-y-2'>
                    <Navigate />
                    <CalcInputs />
                    <div className='flex flex-row items-center justify-stretch gap-x-4'>
                        <Calculations />
                        <Resolutions />
                    </div>
                </div>
            </PPWProvider>
        </main>
    );
}