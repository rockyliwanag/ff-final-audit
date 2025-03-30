'use client'
import { usePPWContext } from '../../contexts/ppwContext';
import { Button, Checkbox } from '@material-tailwind/react';

const Resolutions = () => {
    const { newEpc, soldEpc, baseLine, baselineGsp, soldGsp, otherWorkPPW, otherWorkType, setOtherWorkType  } = usePPWContext();
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
        copyToClipboard(baselineOutput);
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
        <div className='flex flex-col gap-y-4'>
            <h1 className='text-amber-500'>Resolutions</h1>
            <Button onClick={baselineHandler}>Baseline</Button>
            <Button>Sold Net PPW</Button>
                <div className="flex flex-row gap-x-1.5">
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