'use client';
import { Input, IconButton} from "@material-tailwind/react"
import CopyIcon from '@mui/icons-material/ContentCopy'
import PasteIcon from '@mui/icons-material/ContentPaste'

const InputCP = ({inputValue, setInputValue, inputName, variant }) => {

    // Function to copy the input value to clipboard
    const copyToClipboard = () => {
        navigator.clipboard.writeText(inputValue);
    };

    // Function to paste the clipboard value to input
    const pasteFromClipboard = async () => {
        const text = await navigator.clipboard.readText();
        setInputValue(text);
    };
  return (
    <div>
        <div className=''>
            {variant === 'Textarea' ? 
                <div className="flex flex-col gap-y-4"> 
                    <textarea
                    className="text-black w-200"
                    name={inputName}
                    value={inputValue}
                    label={<div className="text-green-300 font-medium"> {inputName} </div>} 
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="flex flex-row justify-end gap-x-4">
                        <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={copyToClipboard}><CopyIcon /></button>
                        <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={pasteFromClipboard}><PasteIcon /></button>
                    </div>
                </div>
            :
            <div className="flex flex-row gap-x-4">
                <Input
                    className="text-white pr-5"
                    type={variant}
                    name={inputName} 
                    color='green'
                    value={inputValue}
                    label={<div className="text-green-300 font-medium"> {inputName} </div>}
                    onChange={(e) => setInputValue(e.target.value)}
                    icon={<IconButton className='!absolute bottom-auto left-auto rounded' color='gray' size='sm' onClick={pasteFromClipboard}><PasteIcon /></IconButton>}
                />               
                {/* <Button size='sm' className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-yellow-600 py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={copyToClipboard}><CopyIcon /></Button> */}
                
            </div>}
        </div>
    </div>
  )
}

export default InputCP