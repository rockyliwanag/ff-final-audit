'use client';
import { useGlobalContext } from "@/app/contexts/globalContext";
import { 
    Typography,
    Textarea,
    Input,
    Radio
} from '@material-tailwind/react';
import Icon from '@/assets/Icon';
import inverterGroup from "@/app/options/inverterGroup";
import mountingType from "@/app/options/mountingType";

const Finance = () => {
    const { opportunity, 
        setOpportunity, 
        loanAmount, 
        setLoanAmount, 
        loanProduct, 
        setLoanProduct, 
        dealerFee, 
        setDealerFee 
    } = useGlobalContext();
    
  return (
    <>
        <form>
            <div className="flex flex-row mt-2">
                <Typography variant="h3" className="w-full">Finance</Typography>
            </div>
            <div className='flex flex-col space-y-2'>
                
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='opportunity' 
                        label={<div className="text-green-300 font-medium">Opportunity</div>}
                        color="green"
                        value={opportunity} 
                        onChange={(e) => setOpportunity(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='loanAmount' 
                        label={<div className="text-green-300 font-medium">Loan Amount</div>}
                        color="green"
                        value={loanAmount} 
                        onChange={(e) => setLoanAmount(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='text' 
                        name='loanProduct' 
                        label={<div className="text-green-300 font-medium">Loan Product</div>}
                        color="green"
                        value={loanProduct} 
                        onChange={(e) => setLoanProduct(e.target.value)}
                    />
                </div>
                <div>
                    <Input 
                        // className='text-black p-1' 
                        variant='standard'
                        className="text-white"
                        type='number' 
                        name='dealerFee' 
                        label={<div className="text-green-300 font-medium">Dealer Fee</div>}
                        color="green"
                        value={dealerFee} 
                        onChange={(e) => setDealerFee(e.target.value)}
                    />
                </div>
                <div className='flex flex-row  justify-between items-center'>
                    <Typography variant="h5" color="amber">Mounting Type</Typography> 
                    <div className='flex flex-row'>
                        {mountingType.map((file, idx) => (
                            <div key={idx} className='text-white'>
                                <Radio  color='green' name='mountingType' value={file.type} label={<Typography color='white'>{file.type}</Typography>} icon={<Icon/>} />
                            </div>
                        ))}
                    </div>
                </div>
                <div className="">
                    <Textarea className='text-white' color='green' variant='outlined' name='additionalComponents' label={<div className="text-green-300 font-medium">Additional Components</div>}/>
                </div>
            </div>
        </form>
    </>
  )

}

export default Finance