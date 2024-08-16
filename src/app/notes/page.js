'use client'
import { useState } from 'react';
import { Radio } from '@material-tailwind/react';
import InputCP from '../../components/InputCP';
import Navigate from '../../components/Navigation';


export default function Notes() {
    const [numArray, setNumArray] = useState(0);
    const [numQty, setNumQty] = useState(0);
    const [module, setModule] = useState("");
    const [optimizer, setOptimizer] = useState("");
    const [inverter, setInverter] = useState("");
    const [attachment, setAttachment] = useState("");
    const [rejection, setRejection] = useState("");
    const [gsp, setGsp] = useState("");
    const [ppc, setPpc] = useState("");
    const [pg, setPg] = useState("");

    const copyToClipboard = () => {
        const stateOutput = 
            `
            ${numArray} array/s
            ${numQty} ${module}
            ${optimizer}
            ${inverter}
            ${attachment}

            $${gsp}
            $${ppc}/w
            ${pg} kWh

            ${rejection}
            `;

        navigator.clipboard.writeText(stateOutput)
            .then(() => {
                console.log('State output copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy state output to clipboard:', error);
            });
    };

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className='flex flex-col gap-y-2'>
                <Navigate />
                <h1 className="font-italic">Number of Arrays</h1>
                <InputCP inputValue={numArray} setInputValue={setNumArray} variant="number" />
                <h1 className="font-italic">Qty</h1>
                <InputCP inputValue={numQty} setInputValue={setNumQty} variant="number"/>
                <h1 className="font-italic">Module</h1>
                <InputCP inputValue={module} setInputValue={setModule} variant="text"/>
                <h1 className="font-italic">Optimizer</h1>
                <InputCP inputValue={optimizer} setInputValue={setOptimizer} variant="text"/>
                <h1 className="font-italic">Inverter</h1>
                <InputCP inputValue={inverter} setInputValue={setInverter} variant="text"/>
                <h1 className="font-italic">Attachment</h1>
                <InputCP inputValue={attachment} setInputValue={setAttachment} variant="text"/>
                <h1 className="font-italic">Rejection Notes</h1>
                <InputCP inputValue={rejection} setInputValue={setRejection} variant="Textarea"/>
                <h1 className="font-italic">GSP</h1>
                <InputCP inputValue={gsp} setInputValue={setGsp} variant="number"/>
                <h1 className="font-italic">PPC</h1>
                <InputCP inputValue={ppc} setInputValue={setPpc} variant="number"/>
                <h1 className="font-italic">PG</h1>
                <InputCP inputValue={pg} setInputValue={setPg} variant="number"/>
                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={copyToClipboard}>Copy Notes</button>
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