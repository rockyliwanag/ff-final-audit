'use client'
import { usePPWContext } from '../../contexts/ppwContext';
import { Button, Typography } from '@material-tailwind/react';

const Resolutions = () => {
    const { newEpc, 
        soldEpc, 
        soldPpw,
        baseLine,
        financeWith, 
        baselineGsp, 
        soldGsp,
        purchaseGsp,
        hicState, 
        otherWorkPPW, 
        otherWorkType, 
        setOtherWorkType  } = usePPWContext();
    const copyToClipboard = (output) => {
        navigator.clipboard.writeText(output)
            .then(() => {
                console.log('State output copied to clipboard');
            })
            .catch((error) => {
                console.error('Failed to copy state output to clipboard:', error);
            });
    }

    const baseline = Number(baseLine) + 0.05;
    const newEPC = Number(newEpc).toFixed(2).toLocaleString();
    const otherWorkPpw = Math.abs(otherWorkPPW).toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })
    

    const baselineHandler = () => {
        
        const baselineOutput = `PPW ~ ($${baseline}/w) Send a Change Order to adjust the EPC to the following: $${newEPC}`;
        const purchaseOutput = `PPW ~ ($${baseline}/w) Send a Change Order to adjust the system price to the following: $${baselineGsp.toFixed(2).toLocaleString()}`;

        financeWith === "TPO" && !hicState ? copyToClipboard(baselineOutput) : copyToClipboard(purchaseOutput);
    };
    const soldEpcHandler = () => {
        const soldEpcOutput = `PPW ~ ($${soldPpw}/w) Send a Change Order to meet the Sold Net PPW, adjusting the EPC to the following: $${soldEpc.toFixed(2).toLocaleString()}`;
        const purchaseSoldOutput = `PPW ~ ($${soldPpw}/w) Send a Change Order to meet the Sold Net PPW, adjusting the system price to the following: $${purchaseGsp.toFixed(2).toLocaleString()}`;
        financeWith === "TPO" && !hicState ? copyToClipboard(soldEpcOutput) : copyToClipboard(purchaseSoldOutput);
        copyToClipboard(soldEpcOutput);
    };
    const otherWorkHandler = () => {
        let workTypeDescription = "";

        // Use a switch statement to determine the type of work
        switch (otherWorkType) {
            case "Roof":
                workTypeDescription = "roof";
                break;
            case "Electric":
                workTypeDescription = "electrical";
                break;
            case "Tree":
                workTypeDescription = "tree";
                break;
            default:
                workTypeDescription = "other"; // Fallback for unexpected values
        }
        const otherWorkOutput = `PPW ~ ($${otherWorkPpw}/w) Homeowner to complete the ${workTypeDescription} work independently. A quote from the subcontractor of the homeowner's choice will need to be provided to remove the adder from the SOW.`;
        copyToClipboard(otherWorkOutput);
    };
    

    return (
        <div className='flex flex-col gap-y-2'>
            {financeWith === "TPO" ? (
                <Typography variant='h5'color='amber'>TPO Resolutions</Typography>
            ) : (
                <Typography variant='h5'color='amber'>Purchase Resolutions</Typography>
            )}
            <Button onClick={baselineHandler}>{hicState === true ? 'HIC Baseline' : 'Baseline'}</Button>
            <Button onClick={soldEpcHandler}>{hicState === true ? 'HIC Sold PPW' : 'Sold PPW'}</Button>
                <div className="flex flex-row gap-x-1.5 text-xs">
                    <input
                        type="radio"
                        name="otherWorkType"
                        value="Roof"
                        onChange={() => setOtherWorkType("Roof")}
                    /> Roof
                    <input
                        type="radio"
                        name="otherWorkType"
                        value="Electric"
                        onChange={() => setOtherWorkType("Electric")}
                    /> Electric
                    <input
                        type="radio"
                        name="otherWorkType"
                        value="Tree"
                        onChange={() => setOtherWorkType("Tree")}
                    /> Tree
            </div>
                <Button onClick={otherWorkHandler}>{hicState === true ? 'HIC Other Work' : 'Other Work'}</Button>
        </div>
    )
}

export default Resolutions;