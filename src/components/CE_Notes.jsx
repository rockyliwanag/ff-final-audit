'use client';
import { useState, useEffect } from "react";
import { Input } from '@material-tailwind/react'
import tieIn from '@/app/options/tieIn'

const CE_Notes = () => {
    const [salesMet, setSalesMet] = useState("");
    const [holding, setHolding] = useState("");
    const [numPlanes, setNumPlanes] = useState("");
    const [tieInCheckboxes, setTieInCheckboxes] = useState([]);
    // console.log("tieIn", tieIn)

    // useEffect(() => {
    //     setTieInCheckboxes(tieIn.map((item, idx) => {
    //         return (
    //             <div key={idx}>
    //                 <input type='checkbox' name={item} value={item}/>
    //                 <label>{item}</label>
    //             </div>
    //         )
    //     }))
    // }, [tieIn])
  return (
    <>
        <div>
        <h1>CE Notes</h1>
            <form>
                <div className='flex flex-row'>
                    <label>Sales Met</label>
                    <div>
                        <input type='radio' name='salesMet' value='yes'/>
                        <label>Yes</label>
                    </div>
                    <div>
                        <input type='radio' name='salesMet' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <label>Holding</label> 
                    <div>
                        <input type='radio' name='holding' value='yes'/>
                        <label>Yes</label>
                    </div>
                    <div>
                        <input type='radio' name='holding' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div>
                    <label>Number of Planes</label> 
                    <div className="text-black">
                        <Input variant='standard' type='number' name='numPlanes' placeholder="0"/>
                    </div>
                </div>
                <div className="flex flex-row">
                    <label>Tie In</label>
                    {tieIn.map((item, idx) => {
                        return (<div key={idx}>
                            <input type='radio' name='tieIn' value={item.method}/>
                            <label>{item.method}</label>
                        </div>)
                    })} 
                </div>
            </form>
        </div>
    </>
  )
}

export default CE_Notes