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
import moduleGroup from "@/app/options/moduleGroup";
import inverterGroup from "@/app/options/inverterGroup";
import mountingType from "@/app/options/mountingType";

const Contract = () => {
    const [contractName, setContractName] = useState("");
    const [contractAddress, setContractAddress] = useState("");
    const [systemSize, setSystemSize] = useState("");
    const [systemCost, setSystemCost] = useState("");
    const [firstProduction, setFirstProduction] = useState("");
    
  return (
    <>
        <form>
            <div className="flex flex-row mt-2">
                <Typography variant="h3" className="w-full">Contract</Typography>
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
                        type='text' 
                        name='contractAddress' 
                        label={<div className="text-green-300 font-medium">Contract Address</div>}
                        color="green"
                        value={contractAddress} 
                        onChange={(e) => setContractAddress(e.target.value)}
                    />
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
                        name='systemCost' 
                        label={<div className="text-green-300 font-medium">System Cost</div>}
                        color="green"
                        value={systemCost} 
                        onChange={(e) => setSystemCost(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='firstProduction' 
                        label={<div className="text-green-300 font-medium">First Year Production</div>}
                        color="green"
                        value={firstProduction} 
                        onChange={(e) => setFirstProduction(e.target.value)}
                    />
                </div>
                <div className="flex flex-row space-x-2">
                    <Select 
                        className="w-full text-white"
                        color="green" 
                        variant="standard" 
                        label={<div className="text-green-300 font-medium">Select Module Group</div>}
                    >
                        {moduleGroup.map((item, idx) => {
                            return(
                                <Option key={idx} value={item.group}>{item.group}</Option>
                            )
                        })}
                    </Select>
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

export default Contract