'use client';
import { useState, useEffect } from "react";
import { Input, Radio, Select, Option } from '@material-tailwind/react';
import Icon from '@/assets/Icon';
import tieIn from '@/app/options/tieIn';
import attachmentType from '@/app/options/attachmentType';
import panels from "@/app/options/panels";
import inverters from "@/app/options/inverters";
import roofMatetial from "@/app/options/roofMaterial";

const CE_Notes = () => {
    const [salesMet, setSalesMet] = useState("");
    const [holding, setHolding] = useState("");
    const [numPlanes, setNumPlanes] = useState("");
    const [tieInCheckboxes, setTieInCheckboxes] = useState("");
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
        <div  className="">
            <form>
                <div className="flex flex-row justify-between">
                    <label className="">Sales Met</label>
                    <div className='flex flex-row'>
                        <div>
                            <Radio className="hover:before:opacity-0" color='green' name='salesMet' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio className="hover:before:opacity-0" color='green' name='salesMet' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between'>
                    <label>Holding</label> 
                    <div className="flex flex-row">
                        <div>
                            <Radio name='holding' color='green' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio name='holding' color='green' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row'>
                    <Input variant='standard' type='number' name='numPlanes' color="green" label='Number of Planes' placeholder="0"/>
                </div>
                <div className="flex flex-row">
                    <label>Tie In</label>
                    {tieIn.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <Radio name='tieIn' color='green' label={item.method} icon={<Icon/>}/>
                            </div>
                        )
                    })} 
                </div>
                <div className="flex flex-row">
                    <Select color='green' variant='standard' label='Attachment'>
                        {attachmentType.map((item, idx) => {
                            return (
                                <Option key={idx}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row">
                    <label>Modules</label>
                    <Input  variant='standard' className='text-black' type='number' name='modules' placeholder='0'/>
                    <Select color='green' variant="standard" label='Modules'>
                        {/* <Option value=''>Select Module</Option> */}
                        {panels.map((item, idx) => {
                            return (
                                <Option key={idx}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row">
                    <label>Inverters</label>
                    <input className='text-black' type='number' name='inverters' placeholder='0'/>
                    <select className="text-black">
                        <option value=''>Select Inverter</option>
                        {inverters.map((item, idx) => {
                            {console.log("item", item)}
                            return (
                                <option key={idx} value={item.type}>{item.type}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="flex flex-row">
                    <label>POI</label>
                    {tieIn.map((item, idx) => {
                        return (
                            <div key={idx}>
                                <input type='radio' name='poi' value={item.method}/>
                                <label>{item.method}</label>
                            </div>
                        )
                    })} 
                </div>
                <div className="flex flex-row">
                    <label>POI Notes</label>
                    <textarea className='text-black' name='poiNotes' placeholder='Enter POI Notes'/>
                </div>
                <div className="flex flex-row">
                    <label>Roof Material</label>
                    <select className="text-black">
                        <option value=''>Select Material</option>
                        {roofMatetial.map((item, idx) => {
                            {console.log("item", item)}
                            return (
                                <option key={idx} value={item.type}>{item.type}</option>
                            )
                        })}
                    </select>
                </div>
                <div className="flex flex-row">
                    <label>Roof Work</label>
                    <div>
                        <input type='radio' name='roofWork' value='yes'/>
                        <label>Yes</label>
                        <input type='radio' name='roofWork' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div className="flex flex-row">
                    <label>Electrical Work</label>
                    <div>
                        <input type='radio' name='electricalWork' value='yes'/>
                        <label>Yes</label>
                        <input type='radio' name='electricalWork' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div className="flex flex-row">
                    <label>Trench</label>
                    <div>
                        <input type='radio' name='trench' value='yes'/>
                        <label>Yes</label>
                        <input type='radio' name='trench' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div className="flex flex-row">
                    <label>Tree Trimming</label>
                    <div>
                        <input type='radio' name='treeTrim' value='yes'/>
                        <label>Yes</label>
                        <input type='radio' name='treeTrim' value='no'/>
                        <label>No</label>
                    </div>
                </div>
                <div className="flex flex-row">
                    <label>Ground Mount</label>
                    <div>
                        <input type='radio' name='groundMount' value='yes'/>
                        <label>Yes</label>
                        <input type='radio' name='groundMount' value='no'/>
                        <label>No</label>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default CE_Notes