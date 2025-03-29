'use client';
import { useGlobalContext } from "@/app/contexts/globalContext";
import {Input, Button} from '@material-tailwind/react'
import PasteButton from "./PasteButton";
import PasteIcon from '@/assets/PasteIcon';

const UserInfo = () => {
    const { setCustomer, setAddress, customer, address } = useGlobalContext();

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
            <div>
                <div className="relative flex w-full max-w-[24rem]">
                    <Input 
                        variant='outlined'
                        className="text-white pr-20"
                        type='text' 
                        name='customer' 
                        label={<div className='text-green-300'>Customer Name</div>}
                        color="green"
                        value={customer} 
                        onChange={(e) => setCustomer(e.target.value)}
                        containerProps={{
                            className: "min-w-0",
                          }}
                    />
                    <PasteButton className="!absolute right-1 top-1 rounded" onPaste={() => handlePaste(setCustomer)} />
                </div>
                <div className="flex flex-row">
                    <Input 
                        variant='outlined'
                        className="text-white"
                        type='text' 
                        name='address'
                        label={<div className='text-green-300'>Address</div>}
                        color="green"
                        value={address} 
                        onChange={(e) => setAddress(e.target.value)}
                    />
                    <PasteButton onPaste={() => handlePaste(setAddress)} />
                </div>
            </div>
        </>
    )
}

export default UserInfo