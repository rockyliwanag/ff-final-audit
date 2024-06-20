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
import Icon from '@/assets/Icon';
import batteries from "@/app/options/batteries";


const ProjDetails = () => {
    const [battery, setBattery] = useState(null);
    const [date, setDate] = useState(new Date());

    useEffect(() => {
        
    }, [battery])

    let isTrueSet = (battery?.toLowerCase?.() === 'true');

    const handleChange = (e) => {
        setBattery(e.target.value)
        console.log("Batt",isTrueSet)
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
                            label="Submission Date"
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
                            caption_label: "text-sm font-medium text-gray-900",
                            nav: "flex items-center",
                            nav_button:
                                "h-6 w-6 bg-transparent hover:bg-blue-gray-50 p-1 rounded-md transition-colors duration-300",
                            nav_button_previous: "absolute left-1.5",
                            nav_button_next: "absolute right-1.5",
                            table: "w-full border-collapse",
                            head_row: "flex font-medium text-gray-900",
                            head_cell: "m-0.5 w-9 font-normal text-sm",
                            row: "flex w-full mt-2",
                            cell: "text-gray-600 rounded-md h-9 w-9 text-center text-sm p-0 m-0.5 relative [&:has([aria-selected].day-range-end)]:rounded-r-md [&:has([aria-selected].day-outside)]:bg-gray-900/20 [&:has([aria-selected].day-outside)]:text-white [&:has([aria-selected])]:bg-gray-900/50 first:[&:has([aria-selected])]:rounded-l-md last:[&:has([aria-selected])]:rounded-r-md focus-within:relative focus-within:z-20",
                            day: "h-9 w-9 p-0 font-normal",
                            day_range_end: "day-range-end",
                            day_selected:
                                "rounded-md bg-gray-900 text-white hover:bg-gray-900 hover:text-white focus:bg-gray-900 focus:text-white",
                            day_today: "rounded-md bg-gray-200 text-gray-900",
                            day_outside:
                                "day-outside text-gray-500 opacity-50 aria-selected:bg-gray-500 aria-selected:text-gray-900 aria-selected:bg-opacity-10",
                            day_disabled: "text-gray-500 opacity-50",
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
                    <Typography variant="h4" color="gray">PTO Pay</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='ptoPay' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='ptoPay' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h4" color="gray">Freedom Advantage</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='freedomAdvantage' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='freedomAdvantage' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h4" color="gray">Clean Deal</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='cleanDeal' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='cleanDeal' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h4" color="gray">Lead Source</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='leadSource' label='Dealer' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='leadSource' label='Freedom' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h4" color="gray">Smart Home</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='smartHome' label='Yes' icon={<Icon/>}/>
                        </div>
                        <div>
                            <Radio color='green' name='smartHome' label='No' icon={<Icon/>}/>
                        </div>
                    </div>
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h4" color="gray">Battery</Typography> 
                    <div className='flex flex-row'>
                        <div>
                            <Radio color='green' name='battery' label='Yes' value={true} icon={<Icon/>} onChange={handleChange}/>
                        </div>
                        <div>
                            <Radio color='green' name='battery' label='No' value={false} icon={<Icon/>} onChange={handleChange}/>
                        </div>
                    </div>
                </div>
                <div >
                    {isTrueSet &&
                    <div className="flex flex-row space-x-2">
                        <Input className='w-4' color='green' type='number' name='battery' label='Battery Qty' placeholder='0'/>
                        <Select className='w-full' color="green" variant="standard" label="Select Battery">
                            {batteries.map((item, idx) => {
                                return (
                                    <Option key={idx} value={item.type}>{item.type}</Option>
                                )
                            })}
                        </Select>
                    </div>
                    }
                </div>
                <div className="">
                    <Input className='w-4' variant='standard' color='green' name='utility' label='Utility'/>
                </div>
                <div className="">
                    <Textarea color='green' name='notes' label='Additional Notes'/>
                </div>
            </form>
        </div>
    </>
  )
}

export default ProjDetails