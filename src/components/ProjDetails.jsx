'use client';
import { useState, useEffect } from "react";
import { Input, 
    Radio, 
    Popover, 
    PopoverHandler, 
    PopoverContent, 
    Typography, 
    Select, 
    Option, 
    Textarea 
} from '@material-tailwind/react';
import { format } from "date-fns";
import { DayPicker } from "react-day-picker";
import { ChevronRightIcon, ChevronLeftIcon } from "@heroicons/react/24/outline";
import { useGlobalContext } from "@/app/contexts/globalContext";
import PasteButton from "./PasteButton";
import Icon from '@/assets/Icon';
import batteries from "@/app/options/batteries";


const ProjDetails = () => {
    const [battery, setBattery] = useState(null);
    const [date, setDate] = useState(new Date());
    const { utility, setUtility } = useGlobalContext();

    const handlePaste = async (fill) => {

        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            fill(text);
        } else {
            console.log("Clipboard readText is not supported in this browser.");
        }
    }

    useEffect(() => {
        
    }, [battery])

    let isTrueSet = (battery?.toLowerCase?.() === 'true');

    const handleChange = (e) => {
        setBattery(e.target.value)
    }
    
  return (
    <>
        <div>
            <form className="flex flex-col space-y-2 mt-2">
                <div className="flex flex-row ">
                    <Typography variant="h3" className="w-full">Project Details</Typography>
                    <Popover placement="bottom">
                        <PopoverHandler>
                        <Input
                            color="green"
                            className="text-white"
                            label={<div className='text-green-300'>Submission Date</div>}
                            onChange={() => null}
                            value={date ? format(date, "PPP") : ""}
                        />
                        </PopoverHandler>
                        <PopoverContent>
                        <DayPicker
                            mode="single"
                            selected={date}
                            onSelect={setDate}
                            showOutsideDays
                            className="border-0"
                            classNames={{
                            caption: "flex justify-center py-2 mb-4 relative items-center",
                            caption_label: "text-sm font-medium text-amber-900",
                            nav: "flex items-center",
                            nav_button:
                                "h-6 w-6 bg-transparent hover:bg-blue-amber-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-amber-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-amber-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-amber-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-amber-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                                "rounded-md bg-amber-900 text-white hover:bg-amber-900 hover:text-white focus:bg-amber-900 focus:text-white",
                            day_today: "rounded-md bg-amber-200 text-amber-900",
                            day_outside:
                                "day-outside text-amber-500 opacity-50 aria-selected:bg-amber-500 aria-selected:text-amber-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-amber-500 opacity-50",
                            day_hidden: "invisible",
                            }}
                            components={{
                            IconLeft: ({ ...props }) => (
                                <ChevronLeftIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            IconRight: ({ ...props }) => (
                                <ChevronRightIcon {...props} className="h-4 w-4 stroke-2" />
                            ),
                            }}
                        />
                        </PopoverContent>
                    </Popover>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">PTO Pay</Typography> 
                    <div className='flex flex-row'>
                    <div>
                            <Radio color='green' name='ptoPay' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='ptoPay' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Freedom Advantage</Typography> 
                    <div className='flex flex-row'>
                    <div>
                            <Radio color='green' name='freedomAdvantage' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='freedomAdvantage' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Clean Deal</Typography> 
                    <div className='flex flex-row'>
                    <div>
                            <Radio color='green' name='cleanDeal' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='cleanDeal' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='cleanDeal' label={<Typography className="text-white font-medium">Pending</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Lead Source</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='roofWork' label={<Typography className="text-white font-medium">Dealer</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='roofWork' label={<Typography className="text-white font-medium">Freedom</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Smart Home</Typography> 
                    <div className='flex flex-row'>
                    <div>
                            <Radio color='green' name='smartHome' label={<Typography className="text-white font-medium">Yes</Typography>} icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='smartHome' label={<Typography className="text-white font-medium">No</Typography>} icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Battery</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='battery' label={<Typography className="text-white font-medium">Yes</Typography>} value={true} icon={<Icon/>} onChange={handleChange}/>
                        </div>
                        <div>
                            <Radio color='green' name='battery' label={<Typography className="text-white font-medium">No</Typography>} value={false} icon={<Icon/>} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div >
                    {isTrueSet &&
                    <div className="flex flex-row space-x-2">
                        <Input className='w-4' color='green' type='text' name='battery' label={<div className='text-green-300'>Battery Qty</div>}  placeholder='0'/>
                        <Select className='w-full' color="green" variant="standard" label={<div className='text-green-300'>Select Battery</div>}>
                            {batteries.map((item, idx) => {
                                return (
                                    <Option key={idx} value={item.type}>{<div className="text-gray-500">{item.type}</div>}</Option>
                                )
                            })}
                        </Select>
                    </div>
                    }
                </div>
                <div className="flex flex-row space-x-2">
                    <Input 
                        className='text-white' 
                        variant='standard' 
                        color='green'
                        type='text'
                        name='utility' 
                        label={<div className='text-green-300'>Utility</div>}
                        value={utility} 
                        onChange={(e) => setUtility(e.target.value)}/>
                    <PasteButton onPaste={() => handlePaste(setUtility)} />
                </div>
                <div className="">
                    <Textarea color='green' className='text-white' name='notes' label={<div className='text-green-300'>Additional Notes</div>} />
                </div>
            </form>
        </div>
    </>
  )
}

export default ProjDetails