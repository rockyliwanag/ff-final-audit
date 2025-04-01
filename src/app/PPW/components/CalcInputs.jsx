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
        <div className='flex flex-row justify-center items-center'>
          <div>
            <Radio name='finance' color='green' label={<Typography className="text-white font-medium">Purchase</Typography>} icon={<Icon/>} onChange={() => setFinanceWith("Purchase")}/>
          </div>
          <div>
            <Radio defaultChecked name='finance' color='green' label={<Typography className="text-white font-medium">TPO</Typography>} icon={<Icon/>} onChange={() => setFinanceWith("TPO")}/>
          </div>
        </div>
        <div className="flex flex-wrap gap-3">
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={sysSize} setInputValue={setSysSize} variant="number" inputName="System Size" />
          </div>
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={otherWork} setInputValue={setOtherWork} variant="number" inputName="Other Work" />
          </div>
          {financeWith === "Purchase" && (
            <>
              <div className="w-[calc25%-1rem)] min-w-[150px]">
                <InputCP inputValue={dealerFee} setInputValue={setDealerFee} variant="number" inputName="Dealer Fee" />
              </div>
              <div className="w-[calc25%-1rem)] min-w-[150px]">
                <InputCP
                  inputValue={dealerRate * 100} // Convert to percentage for display
                  setInputValue={(value) => setDealerRate(Number(value) / 100)} // Convert back to decimal for storage
                  variant="number"
                  inputName="Dealer Rate (%)"
                />
              </div>
            </>
          )}
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={freedomAdders} setInputValue={setFreedomAdders} variant="number" inputName="Freedom Adders" />
          </div>
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={gsp} setInputValue={setGsp} variant="number" inputName="GSP" />
          </div>
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={Number(baseLine)} setInputValue={setBaseLine} variant="number" inputName="Baseline" />
          </div>
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={soldPpw} setInputValue={setSoldPpw} variant="number" inputName="Sold PPW" />
          </div>
          <div className="w-[calc25%-1rem)] min-w-[150px]">
            <InputCP inputValue={ppwCap} setInputValue={setPpwCap} variant="number" inputName="PPW Cap" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default CalcInputs