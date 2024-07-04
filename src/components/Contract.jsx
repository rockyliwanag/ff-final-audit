'use client';
import { useState, useEffect } from "react";
import { 
    Typography,
    Textarea,
    Input,
    Select,
    Option,
    Radio,
    Chip
} from '@material-tailwind/react';
import { useGlobalContext } from '@/app/contexts/globalContext';

import Icon from '@/assets/Icon';
import PasteButton from "./PasteButton";
import moduleGroup from "@/app/options/moduleGroup";
import inverterGroup from "@/app/options/inverterGroup";
import mountingType from "@/app/options/mountingType";

const Contract = () => {
    const { customer, address,
        contractName, setContractName,
        contractAddress, setContractAddress,
        systemSize, setSystemSize,
        systemCost, setSystemCost,
        firstProduction, setFirstProduction
    } = useGlobalContext();

    const [isNameValid, setIsNameValid] = useState(true);
    const [isContractNameBlurred, setIsContractNameBlurred] = useState(false);
    
    const contractForm = {
        contractName: contractName,
        contractAddress: contractAddress,
        systemSize: systemSize,
        systemCost: systemCost,
        firstProduction: firstProduction
    }

    
    useEffect(() => {
        //add useEffect to delay the state update of handlePaste
        setContractName(contractForm.contractName);
        setContractAddress(contractForm.contractAddress);
        setSystemSize(contractForm.systemSize);
        setSystemCost(contractForm.systemCost);
        setFirstProduction(contractForm.firstProduction);
    }, [contractForm, setContractName, setContractAddress, setSystemSize, setSystemCost, setFirstProduction])
    
    useEffect(() => {
        if (contractName.length < customer.length && !isContractNameBlurred) {
            return;
        }
        setIsNameValid(validateContractName(customer, contractName));
        if(isNameValid) setIsContractNameBlurred(false);
    }, [customer, contractName, isContractNameBlurred])
    
    const validateContractName = (customer, contractName) => {
        if (contractName.length >= customer.length) {
            return contractName.toLowerCase().includes(customer.toLowerCase());
        }
        return true;
    };

    // handler to paste from clipboard to the contractName input field
    const handlePaste = async (fill) => {

        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            fill(text);
        } else {
            console.log("Clipboard readText is not supported in this browser.");
        }
    }
    
  return (
    <>
        <form>
            <div className="flex flex-row mt-2">
                <Typography variant="h3" className="w-full">Contract</Typography>
            </div>
            <div className='flex flex-col space-y-2'>
                <div className="flex flex-row space-x-2">
                    <Input 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='contractName' 
                        label={<div className="text-green-300 font-medium">Contract Name</div>}
                        color="green"
                        value={contractName} 
                        onChange={(e) => {setContractName(e.target.value)}}
                        onBlur={() => setIsContractNameBlurred(true)}
                    />
                    {customer && contractName && !isNameValid && <Chip color='red' className="rounded-full" value='No match' />}
                    <PasteButton onPaste={() => handlePaste(setContractName)} />
                </div>
                <div className="flex flex-row space-x-2">
                    <Input 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='contractAddress' 
                        label={<div className="text-green-300 font-medium">Contract Address</div>}
                        color="green"
                        value={contractAddress} 
                        onChange={(e) => setContractAddress(e.target.value)}
                    />
                    <PasteButton onPaste={() => handlePaste(setContractAddress)} />
                </div>
                <div className="flex flex-row space-x-2">
                    <Input 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='systemSize' 
                        label={<div className="text-green-300 font-medium">System Size</div>}
                        color="green"
                        value={systemSize} 
                        onChange={(e) => setSystemSize(e.target.value)}
                    />
                    <PasteButton onPaste={() => handlePaste(setSystemSize)} />
                </div>
                <div className="flex flex-row space-x-2">
                    <Input 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='systemCost' 
                        label={<div className="text-green-300 font-medium">System Cost</div>}
                        color="green"
                        value={systemCost} 
                        onChange={(e) => setSystemCost(e.target.value)}
                    />
                    <PasteButton onPaste={() => handlePaste(setSystemCost)} />
                </div>
                <div className="flex flex-row space-x-2">
                    <Input 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='firstProduction' 
                        label={<div className="text-green-300 font-medium">First Year Production</div>}
                        color="green"
                        value={firstProduction} 
                        onChange={(e) => setFirstProduction(e.target.value)}
                    />
                    <PasteButton onPaste={() => handlePaste(setFirstProduction)} />
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