'use client';
import { useEffect } from "react";
import { Input, Radio, Select, Option, Typography, Textarea, Chip, Accordion, AccordionHeader, AccordionBody } from '@material-tailwind/react';
import { useGlobalContext } from '@/app/contexts/globalContext';
import Icon from '@/assets/Icon';
// import tieIn from '@/app/options/tieIn';
// import attachmentType from '@/app/options/attachmentType';

import roofMatetial from "@/app/options/roofMaterial";


const CE_Notes = () => {
    const { address, 
        numPlanes, setNumPlanes, 
        holding, setHolding, 
        // tie_In, setTie_In, 
        roofWork, setRoofWork, 
        electrical, setElectrical,
        groundMount, setGroundMount,
        trimming, setTrimming,
        trenching, setTrenching,
        pitch, setRoofPitch, 
        salesMet, setSalesMet,
        openCE_Notes, setOpenCE_Notes, 
        
    } = useGlobalContext();

    //Filter the address to get the State
    const allStateRegex = /\b(?:AL|AK|AZ|AR|CA|CO|CT|DE|DC|FL|GA|HI|ID|IL|IN|IA|KS|KY|LA|ME|MD|MA|MI|MN|MS|MO|MT|NE|NV|NH|NJ|NM|NY|NC|ND|OH|OK|OR|PA|PR|RI|SC|SD|TN|TX|UT|VT|VA|VI|WA|WV|WI|WY)\b/i
    const ls_address = address.match(allStateRegex)
    
    //Filter to determine the steep roof > 34 qualification
    const steep1Regex = /\b(?:CT|CO|DE|GA|MA|ME|NC|NH|NJ|NY|IL|OH|PA|RI|SC|TX|VA|VT)\b/i
    const steep1 = address.match(steep1Regex)
    
    // If ls_address is equal to steep1 then show the steepFee as true else false (34)
    const steepFee34 = ls_address && steep1 && ls_address[0] === steep1[0] ? true : false
    const steepFee30 = ls_address && steep1 && ls_address[0] === steep1[0] ? false : true

    // if the ls_address is 'FL' or 'TX' then show lstFee as true else false
    const lstFee = ls_address && (ls_address[0] === 'FL' || ls_address[0] === 'TX') ? true : false
    
   

    useEffect(() => {
        setOpenCE_Notes(true);
    }, [setOpenCE_Notes])

    const handleOpenCE_Notes = () => setOpenCE_Notes((curr) => !curr);
    

  return (
    <>
        <Accordion open={openCE_Notes}>
            <form>
                <AccordionHeader onClick={handleOpenCE_Notes} className="flex flex-col space-y-2 mt-2">
                    <Typography variant="h3" className="text-white w-full">CE Notes</Typography>
                </AccordionHeader>
                <AccordionBody>
                    <div className="flex flex-col space-y-2">
                        {/*Roof Pitch*/}
                        <div className='flex flex-row space-x-2'>
                            <Input  type='text' name='roofPitch' className="text-white" color="green" label={<div className="text-green-300 font-medium">Roof Pitch</div>} placeholder="0" onChange={(e) => setRoofPitch(e.target.value)}/>
                            {/* If steepFee is true and pitch is greater than 34 show steep roof chip otherwise if steepFee is false and pitch is greater or equal to 30 show the steep roof chip except when the pitch is below 30, show nothing */}
                            {steepFee34 && parseInt(pitch) > 34 && <Chip color='green' className='text-white rounded-full' size='sm' value='>34' />}
                            {steepFee30 && parseInt(pitch) >= 30 && <Chip color='green' className='text-white rounded-full' size='sm' value='>=30' />}
                        </div>

                        {/*Number of Planes*/}
                        <div className='flex flex-row space-x-2'>
                            <Input  type='text' name='numPlanes' className="text-white" color="green" label={<div className="text-green-300 font-medium">Number of Planes</div>} placeholder="0" onChange={(e) => setNumPlanes(e.target.value)}/>
                            <div>
                                <Typography variant='h6'>{parseInt(numPlanes) > 2 && <Chip color='green' className='text-white rounded-full' size='sm' value={'Multiplanes x' + (parseInt(numPlanes) - 2)} />}</Typography> 
                            </div>
                        </div>

                        {/*Sales Met*/}
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Sales Met</Typography>
                            <div className='flex flex-row'>
                                <div>
                                    <Radio color='green' name='salesMet' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setSalesMet('yes')}/>
                                </div>
                                <div>
                                    <Radio color='green' name='salesMet' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>} onChange={() => setSalesMet('no')}/>
                                </div>
                            </div>
                        </div>
                        {salesMet === 'no' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='salesMetNotes' label={<div className="text-green-300 font-medium">Reason not meeting sales preference</div>}/>
                            </div>
                        }

                        {/*Holding*/}
                        <div className='flex flex-row justify-between items-center'>
                            <Typography variant="h5" color='amber'>Holding</Typography> 
                            <div className="flex flex-row">
                                <div>
                                    <Radio name='holding' color='green' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setHolding('yes')}/>
                                </div>
                                <div>
                                    <Radio name='holding' color='green' label={<Typography className="text-white font-medium" >No</Typography>} icon={<Icon/>}  onChange={() => setHolding('no')}/>
                                </div>
                            </div>
                        </div>
                        {holding === 'yes' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='holdingNotes' label={<div className="text-green-300 font-medium">Holding Notes</div>}/>
                            </div>
                        }

                        {/*Tie In*/}
                        {/* <div className="flex flex-row justify-between items-center">
                            
                            <Typography variant="h5" color='amber'>Tie In</Typography> */}
                            {/*if ls_address shows 'FL' or 'TX' and the tieIn method is 'LST' then show the chip*/}
                            {/* {lstFee && tie_In === 'LST' && <Chip color='green' className='text-white rounded-full' size='lg' value='$0.00' />}
                            {ls_address && !lstFee && tie_In === 'LST' &&  <Chip color='red' className='text-white rounded-full' size='lg' value='$450' />}
                            <div className="flex flex-row">
                                {tieIn.map((item, idx) => {
                                    return (
                                        <div key={idx}>
                                            <Radio name='tieIn' color='green' onChange={() => setTie_In(item.method)} label={<Typography className="text-white font-medium">{item.method}</Typography>} icon={<Icon/>}/>
                                        </div>
                                    )
                                })} 
                            </div>
                        </div> */}

                        {/*Adders*/}
                        <div className="">
                            <Textarea color='green' className='text-white' name='ceAdders' label={<div className="text-green-300 font-medium">CE Adders</div>}/>
                        </div>

                        {/*Attachment*/}
                        {/* <div className="flex flex-row">
                            <Select color='green' variant='standard' className='text-white' label={<div className='text-green-300'>Attachment</div>}>
                                {attachmentType.map((item, idx) => {
                                    return (
                                        <Option key={idx}>{item.type}</Option>
                                    )
                                })}
                            </Select>
                        </div> */}

                        

                        {/*POI*/}
                        {/* <div className="flex flex-row justify-between items-center">
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
                        </div> */}

                        {/*POI Notes*/}
                        {/* <div className="">
                            <Textarea className='text-white' color='green' name='poiNotes' label={<div className='text-green-300'>POI Notes</div>} />
                        </div> */}
                        
                        

                        {/*Roof Material*/}
                        <div className="flex flex-row items-center">
                            <Typography variant="h5" color='amber'>Roof Material</Typography>
                            <Select color='green' variant='standard' className='text-white' label={<div className='text-green-300'>Select Material</div>}>
                                {roofMatetial.map((item, idx) => {
                                    return (
                                        <Option key={idx} className='text-white' value={item.type}>{<div className="text-gray-500">{item.type}</div>}</Option>
                                    )
                                })}
                            </Select>
                        </div>

                        {/*2x2 Truss*/}
                        {/* <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>2x2 Truss</Typography>
                            <div className='flex flex-row'>
                                <div>
                                    <Radio color='green' name='truss' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                                </div>
                                <div>
                                    <Radio color='green' name='truss' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                                </div>
                            </div>
                        </div> */}


                        {/*Trench*/}
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Trench</Typography>
                            <div className='flex flex-row'>
                                <div>
                                    <Radio color='green' name='trenching' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setTrenching('yes')}/>
                                </div>
                                <div>
                                    <Radio color='green' name='trenching' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>} onChange={() => setTrenching('no')}/>
                                </div>
                            </div>
                        </div>
                        {trenching === 'yes' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='trenchingNotes' label={<div className="text-green-300 font-medium">Trenching Notes</div>}/>
                            </div>
                        }

                        {/*Tree Trimming*/}
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Tree Trimming</Typography>
                            <div className='flex flex-row'>
                            <div>
                                    <Radio color='green' name='treeTrim' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setTrimming('yes')}/>
                                </div>
                                <div>
                                    <Radio color='green' name='treeTrim' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>} onChange={() => setTrimming('no')}/>
                                </div>
                            </div>
                        </div>
                        {trimming === 'yes' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='trimmingNotes' label={<div className="text-green-300 font-medium">Tree Trimming Notes</div>}/>
                            </div>
                        }

                        {/*Ground Mount*/}
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Ground Mount</Typography>
                            <div className='flex flex-row'>
                            <div>
                                    <Radio color='green' name='groundMount' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setGroundMount('yes')}/>
                                </div>
                                <div>
                                    <Radio color='green' name='groundMount' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>} onChange={() => setGroundMount('no')}/>
                                </div>
                            </div>
                        </div>
                        {groundMount === 'yes' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='groundMountNotes' label={<div className="text-green-300 font-medium">Ground Mount Notes</div>}/>
                            </div>
                        }

                        {/*Roof Work*/}
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Roof Work</Typography>
                            <div className='flex flex-row'>
                                <div>
                                    <Radio color='green' name='roofWork' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setRoofWork('yes')}/>
                                </div>
                                <div>
                                    <Radio color='green' name='roofWork' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>} onChange={() => setRoofWork('no')}/>
                                </div>
                            </div>
                        </div>
                        {roofWork === 'yes' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='holdingNotes' label={<div className="text-green-300 font-medium">Roof Work Notes</div>}/>
                            </div>
                        }

                        {/*Electrical Work*/}
                        <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Electrical Work</Typography>
                            <div className='flex flex-row'>
                                <div>
                                    <Radio color='green' name='electricWork' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>} onChange={() => setElectrical('yes')}/>
                                </div>
                                <div>
                                    <Radio color='green' name='electricWork' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>} onChange={() => setElectrical('no')}/>
                                </div>
                            </div>
                        </div>
                        {electrical === 'yes' &&
                            <div className="">
                                <Textarea color='green' className='text-white' name='holdingNotes' label={<div className="text-green-300 font-medium">Electrical Notes</div>}/>
                            </div>
                        }
                    </div>
                </AccordionBody>
            </form>
        </Accordion>
    </>
  )
}

export default CE_Notes