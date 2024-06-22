'use client';
import { useState } from "react";
import { 
    Typography,
    Textarea,
    Input,
    Select,
    Option,
    Radio
} from '@material-tailwind/react';
import Icon from '@/assets/Icon';
import panels from "@/app/options/panels";
import inverterGroup from "@/app/options/inverterGroup";
import mountingType from "@/app/options/mountingType";

const Aurora = () => {
    const [panelQty, setPanelQty] = useState("");
    const [contractAddress, setContractAddress] = useState("");
    const [systemSize, setSystemSize] = useState("");
    const [systemCost, setSystemCost] = useState("");
    const [production, setProduction] = useState("");
    
  return (
    <>
        <form>
            <div className="flex flex-row mt-2">
                <Typography variant="h3" className="w-full">Aurora</Typography>
            </div>
            <div className='flex flex-col space-y-2'>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='panelQty' 
                        label={<div className="text-green-300 font-medium">Panel Qty</div>}
                        color="green"
                        value={panelQty} 
                        onChange={(e) => setPanelQty(e.target.value)}
                    />
                </div>
                <div className="flex flex-row space-x-2">
                    <Select 
                        className="w-full text-white"
                        color="green" 
                        variant="standard" 
                        label={<div className="text-green-300 font-medium">Select Panel</div>}
                    >
                        {panels.map((item, idx) => {
                            return(
                                <Option key={idx} value={item.type}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='systemSize' 
                        label={<div className="text-green-300 font-medium">System Size</div>}
                        color="green"
                        value={systemSize} 
                        onChange={(e) => setSystemSize(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='firstProduction' 
                        label={<div className="text-green-300 font-medium">Production</div>}
                        color="green"
                        value={production} 
                        onChange={(e) => setProduction(e.target.value)}
                    />
                </div>
                <div className="">
                    <Textarea className='text-white' color='green' variant='outlined' name='additionalComponents' label={<div className="text-green-300 font-medium">Notes</div>}/>
                </div>
            </div>
        </form>
    </>
  )

}

export default Aurora