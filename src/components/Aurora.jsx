'use client';
import { useState, useEffect } from "react";
import { 
    Typography,
    Textarea,
    Input,
    Select,
    Option,
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react';
import { useGlobalContext } from '@/app/contexts/globalContext';
import panels from "@/app/options/panels";
import PasteButton from "./PasteButton";

const Aurora = () => {
    
    const [production, setProduction] = useState("");

    const { openAurora, setOpenAurora, auPanelQty, setAuPanelQty, auSysSize, setAuSysSize, finalProduction, setFinalProduction } = useGlobalContext();
    
    useEffect(() => {
        setOpenAurora(true);
    }, [setOpenAurora])

    const handlePaste = async (fill) => {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            fill(text);
        } else {
            console.log("Clipboard readText is not supported in this browser.");
        }
    }
    
    const handleOpenAurora = () => setOpenAurora((curr) => !curr);
    
  return (
    <>
        <Accordion open={openAurora}>
            <form>
                <AccordionHeader color='green' onClick={handleOpenAurora}>
                    <div className="flex flex-row mt-2">
                        <Typography variant="h3" className="w-full text-white">Aurora</Typography>
                    </div>
                </AccordionHeader>
                <AccordionBody>
                    <div className='flex flex-col space-y-2'>
                        <div className="flex flex-row space-x-2">
                            <Input 
                                // className='text-black p-1' 
                                variant='standard'
                                className="text-white"
                                type='text' 
                                name='auPanelQty' 
                                label={<div className="text-green-300 font-medium">Panel Qty</div>}
                                color="green"
                                value={auPanelQty} 
                                onChange={(e) => setAuPanelQty(e.target.value)}
                            />
                            <PasteButton onPaste={() => handlePaste(setAuPanelQty)} />
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
                        <div  className="flex flex-row space-x-2">
                            <Input 
                                // className='text-black p-1' 
                                variant='standard'
                                className="text-white"
                                type='text' 
                                name='auSysSize' 
                                label={<div className="text-green-300 font-medium">System Size</div>}
                                color="green"
                                value={auSysSize} 
                                onChange={(e) => setAuSysSize(e.target.value)}
                            />
                            <PasteButton onPaste={() => handlePaste(setAuSysSize)} />
                        </div>
                        <div className="flex flex-row space-x-2">
                            <Input 
                                // className='text-black p-1' 
                                variant='standard'
                                className="text-white"
                                type='text' 
                                name='finalProduction' 
                                label={<div className="text-green-300 font-medium">Production</div>}
                                color="green"
                                value={finalProduction} 
                                onChange={(e) => setFinalProduction(e.target.value)}
                            />
                            <PasteButton onPaste={() => handlePaste(setFinalProduction)} />
                        </div>
                        <div className="">
                            <Textarea className='text-white' color='green' variant='outlined' name='additionalComponents' label={<div className="text-green-300 font-medium">Notes</div>}/>
                        </div>
                    </div>
                </AccordionBody>
            </form>
        </Accordion>
    </>
  )

}

export default Aurora