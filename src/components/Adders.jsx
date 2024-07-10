import React from 'react'
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react'

const Adders = () => {
  return (
    <div>
        <Popover>
            <PopoverHandler>
                <button className="bg-green-500 text-white p-2 rounded-md">Add</button>
            </PopoverHandler>
            <PopoverContent>
                <div className="flex flex-col space-y-2 p-2">
                    <button className="bg-green-500 text-white p-2 rounded-md">Add New</button>
                    <button className="bg-green-500 text-white p-2 rounded-md">Add Existing</button>
                </div>
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default Adders