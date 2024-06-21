'use client';
import { 
    Typography, 
    Checkbox
} from '@material-tailwind/react';

import crFiles from "@/app/options/crFiles";

const CR_Drive = () => {

  return (
    <>
        <div>
            <form>
                <div className="flex flex-row mt-2">
                    <Typography variant="h3" className="w-full">CR Drive</Typography>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <Typography variant="h5" color="amber">Files</Typography> 
                    <div className='flex flex-row'>
                        {crFiles.map((file, index) => (
                        <div key={index}>
                            <Checkbox color='green' name={file.type} label={file.type} value={file.type}/>
                        </div>
                        ))}
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default CR_Drive