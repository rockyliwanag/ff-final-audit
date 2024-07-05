import React from 'react';
import { Chip } from '@material-tailwind/react';

const DataMatchValidator = ({ dataOne, dataTwo }) => {
  const isMatch = dataOne.toLowerCase() === dataTwo.toLowerCase() ? true : false;

  return (
    <>
      {isMatch && isMatch ? <Chip color='green' className="rounded-full" value='Match' /> : <Chip color='red' className="rounded-full" value='No match' />}
    </>
  );
};

export default DataMatchValidator;