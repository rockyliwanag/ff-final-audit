'use client';
import { useEffect } from "react";
import { 
    Typography, 
    Textarea,
    Radio,
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react';
import { useGlobalContext } from '@/app/contexts/globalContext';
import Icon from '@/assets/Icon';

const SiteCapture = () => {
    const { openSiteCapture, setOpenSiteCapture } = useGlobalContext();

    useEffect(() => {
        setOpenSiteCapture(true);
    }, [setOpenSiteCapture])

    const handleOpenSiteCapture = () => setOpenSiteCapture((curr) => !curr);

    return (
        <>
            <Accordion open={openSiteCapture}>
                <form>
                    <AccordionHeader color='green' onClick={handleOpenSiteCapture}>
                        <div className='flex flex-row mt-2 justify-between items-center'>
                            <Typography variant="h3" className="w-full text-white">Site Capture</Typography>
                        </div>
                    </AccordionHeader>
                    <AccordionBody>
                        <div className="">
                            <Textarea color='green' className='text-white' name='jobNotes' label={<div className="text-green-300 font-medium">Job Notes</div>}/>
                        </div>
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Existing Equipment</Typography>
                            <div className='flex flex-row'>
                            <div>
                                    <Radio name='existingEquipment' color='green' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                                </div>
                                <div>
                                    <Radio name='existingEquipment' color='green' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                                </div>
                            </div>
                        </div>
                        <div className="">
                            <Textarea color='green' className='text-white' name='roofInfo' label={<div className="text-green-300 font-medium">Roof Info</div>}/>
                        </div>
                    </AccordionBody>
                </form>
            </Accordion>
        </>
    )

}

export default SiteCapture