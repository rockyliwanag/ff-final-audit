'use client';
import { useState, useEffect } from "react";
import { Input, Radio, Select, Option, Typography, Textarea } from '@material-tailwind/react';
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
        <div className="mt-4">
            <form className="flex flex-col space-y-2">
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber' className="text-white">Sales Met</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='salesMet' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='salesMet' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row justify-between items-center'>
                    <Typography variant="h5" color='amber'>Holding</Typography> 
                    <div className="flex flex-row">
                        <div>
                            <Radio name='holding' color='green' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio name='holding' color='green' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                    <div className="">
                        <Textarea color='green' name='holdingNotes' label='Holding Notes'/>
                    </div>
                <div className='flex flex-row'>
                    <Input  type='number' name='numPlanes' className="text-white" color="green" label='Number of Planes' placeholder="0"/>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Tie In</Typography>
                    <div className="flex flex-row">
                        {tieIn.map((item, idx) => {
                            return (
                                <div key={idx}>
                                    <Radio name='tieIn' color='green' label={<Typography className="text-white font-medium">{item.method}</Typography>} icon={<Icon/>}/>
                                </div>
                            )
                        })} 
                    </div>
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
                <div className="flex flex-row space-x-2 items-center">
                <Typography variant="h5" color='amber'>Module</Typography>
                    <Input className='text-white' type='number' color='green' name='modules' label='Module Qty' placeholder='0'/>
                    <Select color='green' variant="standard" label='Select Module'>
                        {panels.map((item, idx) => {
                            return (
                                <Option key={idx} className='text-white' value={item.type}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Typography className='grow' variant="h5" color='amber'>Inverter</Typography>
                    <Input className='text-white' color='green'  type='number' name='inverters' label='Inverter Qty' placeholder='0'/>
                    <Select className='grow' color="green" variant="standard" label="Select Inverter">
                        {inverters.map((item, idx) => {
                            return (
                                <Option key={idx} className='text-white' value={item.type}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>POI</Typography>
                    <div className="flex flex-row">
                        {tieIn.map((item, idx) => {
                            return (
                                <div key={idx} className="self-end">
                                    <Radio name='poi' color='green' label={<Typography className='text-white'>{item.method}</Typography>} icon={<Icon/>}/>
                                </div>
                            )
                        })} 
                    </div>
                </div>
                <div className="">
                    <Textarea color='green' name='poiNotes' label='POI Notes'/>
                </div>
                <div className="flex flex-row items-center">
                    <Typography variant="h5" color='amber'>Roof Material</Typography>
                    <Select color='green' variant='standard' label='Select Material'>
                        {roofMatetial.map((item, idx) => {
                            return (
                                <Option key={idx} value={item.type}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Roof Work</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='roofWork' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='roofWork' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Electrical Work</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='electricWork' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='electricWork' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Trench</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='trench' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='trench' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Tree Trimming</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='treeTrim' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='treeTrim' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Ground Mount</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='groundMount' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='groundMount' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default CE_Notes