'use client';
import { useEffect } from "react";
import { useGlobalContext } from "@/app/contexts/globalContext";
import { 
    Typography,
    Input,
    Radio,
    Select,
    Option,
    Accordion,
    AccordionHeader,
    AccordionBody
} from '@material-tailwind/react';
import panels from "@/app/options/panels";
import inverters from "@/app/options/inverters";
import batteries from "@/app/options/batteries";
import Icon from '@/assets/Icon';
import PasteButton from "./PasteButton";


const Finance = () => {
    const {
        financeType, setFinanceType, 
        opportunity, setOpportunity, 
        loanAmount, setLoanAmount, 
        loanProduct, setLoanProduct, 
        dealerFee, setDealerFee,
        openFinance,setOpenFinance,
        escalator, setEscalator,
        solarRate, setSolarRate,
        battery, setBattery,
        
    } = useGlobalContext();

    useEffect(() => {
        setOpenFinance(true);
    }, [setOpenFinance])

    const handleOpenFinance = () => setOpenFinance((curr) => !curr);

    const handlePaste = async (fill) => {
        if (navigator.clipboard && navigator.clipboard.readText) {
            const text = await navigator.clipboard.readText();
            fill(text);
        } else {
            console.log("Clipboard readText is not supported in this browser.");
        }
    }
    let isTrueSet = (battery?.toLowerCase?.() === 'true');
    const handleChange = (e) => {
        setBattery(e.target.value)
    }
    
  return (
    <>
        <Accordion open={openFinance}>
            <form>
                <AccordionHeader color='green' onClick={handleOpenFinance}>
                    <div className="flex flex-row mt-2">
                        <Typography variant="h3" className="w-full text-white">Finance</Typography>
                    </div>
                </AccordionHeader>
                <AccordionBody>
                    <div className='flex flex-col space-y-2'>
                    <div className="flex flex-row justify-between items-center">
                            <Typography variant="h5" color='amber'>Finance Type</Typography>
                            <div className='flex flex-row'>
                                <div>
                                    <Radio name='loanStatus' color='green' label={<Typography className="text-white font-medium">Purchase</Typography>} icon={<Icon/>} onChange={() => setFinanceType("Purchase")}/>
                                </div>
                                <div>
                                    <Radio name='loanStatus' color='green' label={<Typography className="text-white font-medium">TPO</Typography>} icon={<Icon/>} onChange={() => setFinanceType("TPO")}/>
                                </div>
                            </div>
                        </div>
                        {/*Modules*/}
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

                        {/*Inverter*/}
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
                        {/*Battery*/}
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
                        { financeType === "Purchase" ? 
                            <div> 
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='opportunity' 
                                        label={<div className="text-green-300 font-medium">Opportunity</div>}
                                        color="green"
                                        value={opportunity} 
                                        onChange={(e) => setOpportunity(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setOpportunity)} />
                                </div>
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='loanAmount' 
                                        label={<div className="text-green-300 font-medium">Loan Amount</div>}
                                        color="green"
                                        value={loanAmount} 
                                        onChange={(e) => setLoanAmount(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setLoanAmount)} />
                                </div>
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='loanProduct' 
                                        label={<div className="text-green-300 font-medium">Loan Product</div>}
                                        color="green"
                                        value={loanProduct} 
                                        onChange={(e) => setLoanProduct(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setLoanProduct)} />
                                </div>
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='dealerFee' 
                                        label={<div className="text-green-300 font-medium">Dealer Fee</div>}
                                        color="green"
                                        value={dealerFee} 
                                        onChange={(e) => setDealerFee(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setDealerFee)} />
                                </div>
                            </div>
                        
                        :
                            <div>
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='opportunity' 
                                        label={<div className="text-green-300 font-medium">Opportunity</div>}
                                        color="green"
                                        value={opportunity} 
                                        onChange={(e) => setOpportunity(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setOpportunity)} />
                                </div> 
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='escalator' 
                                        label={<div className="text-green-300 font-medium">Escalator</div>}
                                        color="green"
                                        value={escalator} 
                                        onChange={(e) => setEscalator(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setEscalator)} />
                                </div> 
                                <div className="flex flex-row space-x-2">
                                    <Input 
                                        variant='standard'
                                        className="text-white"
                                        type='text' 
                                        name='solarRate' 
                                        label={<div className="text-green-300 font-medium">Solar Rate</div>}
                                        color="green"
                                        value={solarRate} 
                                        onChange={(e) => setSolarRate(e.target.value)}
                                    />
                                    <PasteButton onPaste={() => handlePaste(setSolarRate)} />
                                </div> 
                            </div>
                        }
                    </div>
                </AccordionBody>
            </form>
    </Accordion>
    </>
  )

}

export default Finance