import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import PasteIcon from '@/assets/PasteIcon';

const PasteButton = ({ onPaste }) => {
  return (
    <IconButton variant='filled' color='green' type='button' size='sm' onClick={onPaste}><i className='fas fa-paste'/><PasteIcon/></IconButton>
  );
};

export default PasteButton;