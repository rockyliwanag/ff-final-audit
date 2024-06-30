'use client';
import { useState } from "react";
import { Input, Radio, Select, Option, Typography, Textarea } from '@material-tailwind/react';
import { useGlobalContext } from '@/app/contexts/globalContext';
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

    const { customer, address } = useGlobalContext();

  return (
    <>
        <div className="mt-4">
            <form className="flex flex-col space-y-2">
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Sales Met</Typography>
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
                        <Textarea color='green' className='text-white' name='holdingNotes' label={<div className="text-green-300 font-medium">Holding Notes</div>}/>
                    </div>
                <div className='flex flex-row'>
                    <Input  type='text' name='numPlanes' className="text-white" color="green" label={<div className="text-green-300 font-medium">text of Planes</div>} placeholder="0"/>
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
                    <Select color='green' variant='standard' className='text-white' label={<div className='text-green-300'>Attachment</div>}>
                        {attachmentType.map((item, idx) => {
                            return (
                                <Option key={idx}>{item.type}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row space-x-2 items-center">
                <Typography variant="h5" color='amber'>Module</Typography>
                    <Input className='text-white' type='text' color='green' name='modules' label={<div className='text-green-300'>Module Qty</div>} placeholder='0'/>
                    <Select className='text-white' color='green' variant="standard" label={<div className='text-green-300'>Select Module</div>}>
                        {panels.map((item, idx) => {
                            return (
                                <Option key={idx} className='text-white' value={item.type}>{<div className="text-gray-500">{item.type}</div>}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row items-center space-x-2">
                    <Typography className='grow' variant="h5" color='amber'>Inverter</Typography>
                    <Input className='text-white' color='green'  type='text' name='inverters' label={<div className='text-green-300'>Inverter Qty</div>}  placeholder='0'/>
                    <Select className='grow' color="green" variant="standard" label={<div className='text-green-300'>Select Inverter</div>}>
                        {inverters.map((item, idx) => {
                            return (
                                <Option key={idx}  value={item.type}>{<div className="text-gray-500">{item.type}</div>}</Option>
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
                    <Textarea color='green' name='poiNotes' label={<div className='text-green-300'>POI Notes</div>} />
                </div>
                <div className="flex flex-row items-center">
                    <Typography variant="h5" color='amber'>Roof Material</Typography>
                    <Select color='green' variant='standard' label={<div className='text-green-300'>Select Material</div>}>
                        {roofMatetial.map((item, idx) => {
                            return (
                                <Option key={idx} value={item.type}>{<div className="text-gray-500">{item.type}</div>}</Option>
                            )
                        })}
                    </Select>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Roof Work</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='roofWork' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='roofWork' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Electrical Work</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='electricWork' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='electricWork' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Trench</Typography>
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='trench' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='trench' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Tree Trimming</Typography>
                    <div className='flex flex-row'>
                    <div>
                            <Radio color='green' name='treeTrim' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='treeTrim' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className="flex flex-row justify-between items-center">
                    <Typography variant="h5" color='amber'>Ground Mount</Typography>
                    <div className='flex flex-row'>
                    <div>
                            <Radio color='green' name='groundMount' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='groundMount' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
            </form>
        </div>
    </>
  )
}

export default CE_Notes