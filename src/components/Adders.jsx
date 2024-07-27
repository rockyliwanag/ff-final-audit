'use client';
import { Popover, PopoverHandler, PopoverContent } from '@material-tailwind/react'
import { useGlobalContext } from '@/app/contexts/globalContext'

const Adders = () => {
    const {address, date, opportunity, loanAmount, dealerFee, systemSize, numPlanes, pitch} = useGlobalContext()

    console.log(address, date, opportunity, loanAmount, dealerFee, systemSize, numPlanes, pitch)
  return (
    <div>
        <Popover>
            <PopoverHandler>
                <button className="bg-green-500 text-white p-2 rounded-md">Adders</button>
            </PopoverHandler>
            <PopoverContent>
                ADDERS
            </PopoverContent>
        </Popover>
    </div>
  )
}

export default Adders