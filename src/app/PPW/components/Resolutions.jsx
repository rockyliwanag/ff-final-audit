'use client'
import { usePPWContext } from '../../contexts/ppwContext';
import { Button, Typography } from '@material-tailwind/react';

const Resolutions = () => {
    const { newEpc,
        ppwCap, 
        soldEpc, 
        soldPpw,
        baseLine,
        financeWith, 
        baselineHic, 
        tpoSoldHic,
        purchaseSoldGsp,
        purchaseGsp,
        hicAState, 
        hicBState, 
        otherWorkPPW, 
        otherWorkType, 
        setOtherWorkType,
        mosaicBaseline,
        mosaicSold,
    } = usePPWContext();
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
        const purchaseOutput = `PPW ~ ($${baseline}/w) Send a Change Order to adjust the system price to the following: $${purchaseGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hicBaselineOutput = `PPW ~ ($${baseline}/w) Send a Change Order to adjust the EPC to the following, additional Cash amount of $${baselineHic.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} required to meet request: $${ppwCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hicPurchaseOutput = `PPW ~ ($${baseline}/w) Send a Change Order to adjust the system price to the following, additional Cash amount of $${baselineHic.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })} required to meet request: $${mosaicBaseline.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        hicAState === true ? financeWith === "TPO" ? copyToClipboard(hicBaselineOutput) : copyToClipboard(hicPurchaseOutput) :
        financeWith === "TPO" ? copyToClipboard(baselineOutput) : copyToClipboard(purchaseOutput);
        console.log("Baseline Handler called", baselineHic);
    };
    const soldEpcHandler = () => {
        const soldEpcOutput = `PPW ~ ($${soldPpw}/w) Send a Change Order to meet the Sold Net PPW, adjusting the EPC to the following: $${soldEpc.toFixed(2).toLocaleString()}`;
        const purchaseSoldOutput = `PPW ~ ($${soldPpw}/w) Send a Change Order to meet the Sold Net PPW, adjusting the system price to the following: $${purchaseSoldGsp.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hicSoldEpcOutput = `PPW ~ ($${soldPpw}/w) Send a Change Order to meet the Sold Net PPW, adjusting the EPC to the following, additional Cash amount of $${tpoSoldHic.toFixed(2).toLocaleString()} required to meet request: $${ppwCap.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        const hicPurchaseSoldOutput = `PPW ~ ($${soldPpw}/w) Send a Change Order to meet the Sold Net PPW, adjusting the system price to the following. Additional Cash amount of $${tpoSoldHic.toFixed(2).toLocaleString()} required to meet request: $${mosaicSold.toLocaleString(undefined, { minimumFractionDigits: 2, maximumFractionDigits: 2 })}`;
        hicBState === true ? financeWith === "TPO" ? copyToClipboard(hicSoldEpcOutput) : copyToClipboard(hicPurchaseSoldOutput) :
        financeWith === "TPO" ? copyToClipboard(soldEpcOutput) : copyToClipboard(purchaseSoldOutput);
        console.log("Sold EPC Handler called", tpoSoldHic, hicBState);
    };
    // Handler for other work
        
    const otherWorkHandler = () => {
        let workTypeDescription = "";

        // Use a switch statement to determine the type of work
        switch (otherWorkType) {
            case "Roof":
                workTypeDescription = "Roof";
                break;
            case "Electric":
                workTypeDescription = "Electrical";
                break;
            case "Tree":
                workTypeDescription = "Tree";
                break;
            default:
                workTypeDescription = "Other"; // Fallback for unexpected values
        }
        const otherWorkOutput = `PPW ~ ($${otherWorkPpw}/w) Homeowner to complete the ${workTypeDescription} Work independently. A quote from the subcontractor of the homeowner's choice will need to be provided to remove the adder from the SOW.`;
        copyToClipboard(otherWorkOutput);
    };
    

    return (
        <div className='flex flex-col gap-y-2'>
            {financeWith === "TPO" ? (
                <Typography variant='h5'color='amber'>TPO Resolutions</Typography>
            ) : (
                <Typography variant='h5'color='amber'>Purchase Resolutions</Typography>
            )}
            <Button onClick={baselineHandler}>{hicAState === true ? 'HIC Baseline' : 'Baseline'}</Button>
            <Button onClick={soldEpcHandler}>{hicBState === true ? 'HIC Sold PPW' : 'Sold PPW'}</Button>
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
            <Button onClick={otherWorkHandler}>Other Work</Button>
        </div>
    )
}

export default Resolutions;


