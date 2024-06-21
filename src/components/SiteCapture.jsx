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
                    <Textarea color='green' name='jobNotes' label='Job Notes'/>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Existing Equipment</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='existingEquipment' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='existingEquipment' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="">
                    <Textarea color='green' name='roofInfo' label='Roof Info'/>
                </div>
            </form>
        </div>
    </>
  )
}

export default SiteCapture