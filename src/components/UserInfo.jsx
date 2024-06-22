'use client';
import {useState} from "react";
import {Input, Button} from '@material-tailwind/react'

const UserInfo = () => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        // console.log(customer, address);
    }
    return (
        <>
            <div>
                <form onSubmit={handleSubmit} className="flex flex-col">
                    <div className="flex flex-row my-6">
                        <Input 
                            // className='text-black p-1' 
                            variant='standard'
                            className="text-white"
                            type='text' 
                            name='customer' 
                            label={<div className='text-green-300'>Customer Name</div>}
                            labelProps={{className:'color-green-300'}}
                            color="green"
                            value={customer} 
                            onChange={(e) => setCustomer(e.target.value)}
                        />
                    </div>
                    <div className="flex flex-row">
                        <Input 
                            // className='text-black p-1' 
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