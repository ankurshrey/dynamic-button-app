import React from 'react';
import { Button as ChakraButton } from '@chakra-ui/react';
import { Button as AntButton } from 'antd';
import { Button as MUIButton } from '@material-ui/core';

const Button = ({ config }) => {
  const { uiLibrary, text, color } = config;

  if (uiLibrary === 'chakra') {
    return <ChakraButton colorScheme={color}>{text}</ChakraButton>;
  } else if (uiLibrary === 'ant') {
    return <AntButton type={color}>{text}</AntButton>;
  } else if (uiLibrary === 'mui') {
    return <MUIButton color={color}>{text}</MUIButton>;
  }

  return null; // Handle other cases or provide a default behavior
};

export default Button;
