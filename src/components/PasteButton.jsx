import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import PasteIcon from '@/assets/PasteIcon';

const PasteButton = ({ onPaste }) => {
  return (
    <Button variant='text' color='green' type='button' size='sm' onClick={onPaste}>Paste</Button>
  );
};

export default PasteButton;