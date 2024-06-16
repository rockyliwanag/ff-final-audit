'use client';
import {useState} from "react";

import {Input} from '@material-tailwind/react'

const UserInfo = () => {
    const [customer, setCustomer] = useState("");
    const [address, setAddress] = useState("");

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(customer, address);
    }
    return (
        <>
            <div>
                <h1>Customer Info</h1>
                <form onSubmit={handleSubmit}>
                    <div>
                        <label>Customer</label>
                        <div>
                            <Input className='text-black' variant='standard' type='text' name='customer' value={customer} onChange={(e) => setCustomer(e.target.value)}/>
                        </div>
                    </div>
                    <div>
                        <label>Address</label>
                        <div>
                            <Input className='text-black' variant='standard' type='text' name='address' value={address} onChange={(e) => setAddress(e.target.value)}/>
                        </div>
                    </div>
                    <button type='submit'>Submit</button>
                </form>
            </div>
        </>
    )
}

export default UserInfo