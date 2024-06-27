'use client';
import { useGlobalContext } from "@/app/contexts/globalContext";
import {Input, Button} from '@material-tailwind/react'

const UserInfo = () => {
    const { setCustomer, setAddress, customer, address } = useGlobalContext();

    const handleSubmit = (e) => {
        e.preventDefault();
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
                    </div>
                    {/* <Button className="ml-0 my-6" type='submit'>Submit</Button> */}
                </form>
            </div>
        </>
    )
}

export default UserInfo