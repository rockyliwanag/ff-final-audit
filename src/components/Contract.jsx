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
                        label='Contract Name'
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
                        label='Contract Address'
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
                        label='System Size'
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
                        label='System Cost'
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
                        label='First Year Production'
                        color="green"
                        value={firstProduction} 
                        onChange={(e) => setFirstProduction(e.target.value)}
                    />
                </div>
                <div className="flex flex-row space-x-2">
                    <Select 
                        className="w-full"
                        color="green" 
                        variant="standard" 
                        label="Select Module Group"
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
                        className="w-full"
                        color="green" 
                        variant="standard" 
                        label="Select Inverter Group"
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
                    <Textarea color='green' variant='outlined' name='additionalComponents' label={/*<Typography color='white'>*/'Additional Components'/*</Typography>*/}/>
                </div>
            </div>
        </form>
    </>
  )

}

export default Contract