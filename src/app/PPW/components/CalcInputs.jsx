'use client';
import React, { useContext } from 'react';
import InputCP from '../../../components/InputCP';
import { usePPWContext } from '../../contexts/ppwContext';

const CalcInputs = () => {
  const { sysSize, setSysSize, 
        otherWork, setOtherWork, 
        // dealerFee, setDealerFee, 
        freedomAdders, setFreedomAdders, 
        gsp, setGsp, 
        soldPpw, setSoldPpw, 
        baseLine, setBaseLine,
        ppwCap, setPpwCap
       } = usePPWContext();

  // const newEpc = ((sysSize * baseLine) + freedomAdders) / sysSize;

  return (
    <div>
      <h1 className="font-italic">System Size</h1>
      <InputCP inputValue={sysSize} setInputValue={setSysSize} variant="number" />
      <h1 className="font-italic">Other Work</h1>
      <InputCP inputValue={otherWork} setInputValue={setOtherWork} variant="number" />
      {/* <h1 className="font-italic">Dealer Fee</h1>
      <InputCP inputValue={dealerFee} setInputValue={setDealerFee} variant="number" /> */}
      <h1 className="font-italic">Freedom Adders</h1>
      <InputCP inputValue={freedomAdders} setInputValue={setFreedomAdders} variant="number" />
      <h1 className="font-italic">GSP</h1>
      <InputCP inputValue={gsp} setInputValue={setGsp} variant="number" />
      <h1 className="font-italic">Baseline</h1>
      <InputCP inputValue={baseLine} setInputValue={setBaseLine} variant="number" />
      <h1 className="font-italic">Sold PPW</h1>
      <InputCP inputValue={soldPpw} setInputValue={setSoldPpw} variant="number" />
      <h1 className="font-italic">PPW Cap</h1>
      <InputCP inputValue={ppwCap} setInputValue={setPpwCap} variant="number" />
    </div>
  )
}

export default CalcInputs