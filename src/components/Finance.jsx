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
import inverterGroup from "@/app/options/inverterGroup";
import mountingType from "@/app/options/mountingType";

const Finance = () => {
    const [contractName, setContractName] = useState("");
    const [systemSize, setSystemSize] = useState("");
    const [production, setProduction] = useState("");
    
  return (
    <>
        <form>
            <div className="flex flex-row mt-2">
                <Typography variant="h3" className="w-full">Finance</Typography>
            </div>
            <div className='flex flex-col space-y-2'>
                
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='contractName' 
                        label={<div className="text-green-300 font-medium">Contract Name</div>}
                        color="green"
                        value={contractName} 
                        onChange={(e) => setContractName(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='production' 
                        label={<div className="text-green-300 font-medium">Production</div>}
                        color="green"
                        value={production} 
                        onChange={(e) => setProduction(e.target.value)}
                    />
                </div>
                
                <div className="flex flex-row space-x-2">
                    <Select 
                        className="w-full text-white"
                        color="green" 
                        variant="standard" 
                        label={<div className="text-green-300 font-medium">Select Inverter Group</div>}
                    >
                        {inverterGroup.map((item, idx) => {
                            return(
                                <Option key={idx} value={item.group}>{item.group}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Mounting Type</Typography> 
                    <div className='flex flex-row'>
                        {mountingType.map((file, idx) => (
                            <div key={idx} className='text-white'>
                                <Radio  color='green' name='mountingType' value={file.type} label={<Typography color='white'>{file.type}</Typography>} icon={<Icon/>} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <Textarea className='text-white' color='green' variant='outlined' name='additionalComponents' label={<div className="text-green-300 font-medium">Additional Components</div>}/>
                </div>
            </div>
        </form>
    </>
  )

}

export default Finance