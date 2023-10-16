import React from 'react';
//import { Input as ChakraInput, Input as AntInput, Input as MUIInput } from 'your-ui-libraries'; // Import UI components for each library
import { Input as ChakraInput } from '@chakra-ui/react';
import { Input as AntInput } from 'antd';
import { Input as MUIInput } from '@material-ui/core'
const Input = ({ config }) => {
  const { uiLibrary, placeholder } = config;

  if (uiLibrary === 'chakra') {
    return <ChakraInput placeholder={placeholder} />;
  } else if (uiLibrary === 'ant') {
    return <AntInput placeholder={placeholder} />;
  } else if (uiLibrary === 'mui') {
    return <MUIInput placeholder={placeholder} />;
  }

  return null; // Handle other cases or provide a default behavior
};

export default Input;
