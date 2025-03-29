'use client';
import React from 'react';
import { Radio, Typography } from '@material-tailwind/react';
import InputCP from '../../../components/InputCP';
import { usePPWContext } from '../../contexts/ppwContext';
import Icon from '@/assets/Icon';

const CalcInputs = () => {
  const { sysSize, setSysSize, 
        otherWork, setOtherWork, 
        dealerFee, setDealerFee,
        dealerRate, setDealerRate, 
        freedomAdders, setFreedomAdders,
        financeWith, setFinanceWith, 
        gsp, setGsp, 
        soldPpw, setSoldPpw, 
        baseLine, setBaseLine,
        ppwCap, setPpwCap
       } = usePPWContext();

  return (
    <div>
      <div className='flex flex-col gap-y-4'>
        <div className='flex flex-row'>
          <div>
            <Radio name='finance' color='green' label={<Typography className="text-white font-medium">Mosaic/Cash</Typography>} icon={<Icon/>} onChange={() => setFinanceWith("Mosaic/Cash")}/>
          </div>
          <div>
            <Radio name='finance' color='green' label={<Typography className="text-white font-medium">SunRun</Typography>} icon={<Icon/>} onChange={() => setFinanceWith("SunRun")}/>
          </div>
          <div>
            <Radio name='finance' color='green' label={<Typography className="text-white font-medium">EnFin</Typography>} icon={<Icon/>} onChange={() => setFinanceWith("EnFin")}/>
          </div>
          <div>
            <Radio name='finance' color='green' label={<Typography className="text-white font-medium">GoodLeap</Typography>} icon={<Icon/>} onChange={() => setFinanceWith("GoodLeap")}/>
          </div>
        </div>
        <InputCP inputValue={sysSize} setInputValue={setSysSize} variant="number" inputName='System Size' />
        <InputCP inputValue={otherWork} setInputValue={setOtherWork} variant="number" inputName='Other Work' />
        <InputCP inputValue={dealerFee} setInputValue={setDealerFee} variant="number" inputName='Dealer Fee' />
        <InputCP inputValue={dealerRate} setInputValue={setDealerRate} variant="number" inputName='Dealer Rate' />
        <InputCP inputValue={freedomAdders} setInputValue={setFreedomAdders} variant="number" inputName='Freedom Adders' />
        <InputCP inputValue={gsp} setInputValue={setGsp} variant="number" inputName='GSP'/>
        <InputCP inputValue={baseLine} setInputValue={setBaseLine} variant="number" inputName='Baseline' />
        <InputCP inputValue={soldPpw} setInputValue={setSoldPpw} variant="number" inputName='Sold PPW' />
        <InputCP inputValue={ppwCap} setInputValue={setPpwCap} variant="number" inputName='PPW Cap' />
      </div>
    </div>
  )
}

export default CalcInputs