'use client';
import { useEffect } from 'react';
import { 
    Typography, 
    Checkbox,
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react';
import { useGlobalContext } from '@/app/contexts/globalContext';

import crFiles from "@/app/options/crFiles";

const CR_Drive = () => {
    const { openCR_Drive, setOpenCR_Drive } = useGlobalContext();

    useEffect(() => {
        setOpenCR_Drive(true)
    }, [setOpenCR_Drive])

    const handleOpenCR_Drive = () => setOpenCR_Drive((curr) => !curr);

  return (
    <>
        <Accordion open={openCR_Drive}>
            <form>
                <AccordionHeader color='green' onClick={handleOpenCR_Drive}>
                    <div className='flex flex-row mt-2 justify-between items-center'>
                        <Typography variant="h3" className="w-full text-white">CR Drive</Typography>
                    </div>
                </AccordionHeader>
                <AccordionBody className='flex flex-row justify-between items-center'>
                    <Typography variant="h5" color="amber">Files</Typography> 
                    <div className='flex flex-row'>
                        {crFiles.map((file, index) => (
                            <div key={index}>
                                <Checkbox color='green' name={file.type} label={<div className='text-white'>{file.type}</div>} value={file.type}/>
                            </div>
                        ))}
                    </div>
                </AccordionBody>
            </form>
        </Accordion>
    </>
  )
}

export default CR_Drive