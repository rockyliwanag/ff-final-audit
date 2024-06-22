'use client';
import { 
    Typography, 
    Textarea,
    Radio
} from '@material-tailwind/react';
import Icon from '@/assets/Icon';

const SiteCapture = () => {

  return (
    <>
        <div>
            <form>
                <div className="flex flex-row mt-2">
                    <Typography variant="h3" className="w-full">Site Capture</Typography>
                </div>
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
            </form>
        </div>
    </>
  )
}

export default SiteCapture