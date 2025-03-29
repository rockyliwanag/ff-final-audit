import React from 'react';
import { Button, IconButton } from '@material-tailwind/react';
import PasteIcon from '@mui/icons-material/ContentPaste'

const PasteButton = ({ onPaste }) => {
  return (
    <IconButton variant='text' color='green' type='button' size='sm' onClick={onPaste}><PasteIcon/></IconButton>
  );
};

export default PasteButton;