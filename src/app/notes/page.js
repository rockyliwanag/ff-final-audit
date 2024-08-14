'use client'
import { useState } from 'react';
// import { Input, Button } from '@material-tailwind/react';}
import Navigate from '../../components/Navigation';


export default function Notes() {
    const [inputValue, setInputValue] = useState('');



    // Function to copy the input value to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputValue);
    };

    // Function to paste the clipboard value to input
    const pasteFromClipboard = async () => {
        const text = await navigator.clipboard.readText();
        setInputValue(text);
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
          
                <div className='flex flex-col'>
                    <Navigate />
                    <h1 className="font-bold">Number of Arrays</h1>
                    <div className='flex flex-row gap-x-4'>
                        <input
                            className="text-black"
                            type='text' 
                            name='inputValue' 
                            value={inputValue}
                            onChange={(e) => setInputValue(e.target.value)}
                        />
                        <button onClick={copyToClipboard}>Copy</button>
                        <button onClick={pasteFromClipboard}>Paste</button>
                    </div>
                </div>
        </main>
    );
}


//Planset:
//# of arrays
//qty and type of modules
//Inverter type
//Attachment type

//Rejection Notes:

//GSP $$
//PPC $/w
//PG kWh