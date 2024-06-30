'use client';
import { useGlobalContext } from "@/app/contexts/globalContext";
import {Input, Button} from '@material-tailwind/react'
import PasteButton from "./PasteButton";
import PasteIcon from '@/assets/PasteIcon';

const UserInfo = () => {
    const { setCustomer, setAddress, customer, address } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
    }

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
                <form /*onSubmit={handleSubmit}*/ className="flex flex-col">
                    <div className="flex flex-row my-6">
                        <Input 
                            variant='standard'
                            className="text-white"
                            type='text' 
                            name='customer' 
                            label={<div className='text-green-300'>Customer Name</div>}
                            color="green"
                            value={customer} 
                            onChange={(e) => setCustomer(e.target.value)}
                        />
                        <PasteButton onPaste={() => handlePaste(setCustomer)} />
                    </div>
                    <div className="flex flex-row">
                        <Input 
                            variant='standard'
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
                    {/* <Button className="ml-0 my-6" type='submit'>Submit</Button> */}
                </form>
            </div>
        </>
    )
}

export default UserInfo