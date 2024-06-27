import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import pasteIcon from '@/assets/pasteIcon';

const PasteButton = ({ onPaste }) => {
  return (
    <IconButton variant='filled' color='green' type='button' size='sm' onClick={onPaste}><i className='fas fa-paste'/><pasteIcon/></IconButton>
  );
};

export default PasteButton;