'use client';

const InputCP = ({inputValue, setInputValue, variant}) => {

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
        <div className='flex flex-col gap-x-4'>
            {variant === 'Textarea' ? 
                <div> 
                    <textarea
                    className="text-black w-200"
                    name='inputValue' 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    />
                    <div className="align-end">
                        <button onClick={copyToClipboard}>Copy</button>
                        <button onClick={pasteFromClipboard}>Paste</button>
                    </div>
                </div>
            :
            <div>
                <input
                    className="text-black"
                    type='text' 
                    name='inputValue' 
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                />
                <button onClick={copyToClipboard}>Copy</button>
                <button onClick={pasteFromClipboard}>Paste</button>
            </div>}
        </div>
    </div>
  )
}

export default InputCP