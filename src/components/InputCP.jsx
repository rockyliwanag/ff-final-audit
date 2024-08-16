'use client';

const InputCP = ({inputValue, setInputValue, variant }) => {

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
                    name='inputValue' 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="flex flex-row justify-end gap-x-4">
                        <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={copyToClipboard}>Copy</button>
                        <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={pasteFromClipboard}>Paste</button>
                    </div>
                </div>
            :
            <div className="flex flex-row gap-x-4">
                <input
                    className="text-black p-2"
                    type={variant}
                    name={inputValue} 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={copyToClipboard}>Copy</button>
                <button className='bg-transparent hover:bg-green-500 text-green-700 font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded' onClick={pasteFromClipboard}>Paste</button>
            </div>}
        </div>
    </div>
  )
}

export default InputCP