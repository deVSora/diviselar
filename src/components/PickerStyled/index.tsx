import {Picker} from '@react-native-picker/picker';
import {PickerProps} from '@react-native-picker/picker';
import { useState } from 'react';

import { Container } from './styles'

import theme from './../../theme'

interface Props extends PickerProps {
  valueArrays : string[],
  placeHolder : string
}

export function PickerStyled({valueArrays, placeHolder, ...rest} : Props){
    const [value, setValue] = useState('');
    if (valueArrays.indexOf(placeHolder)) {
      valueArrays.unshift(placeHolder)
    }
    return(
      <Container>
        <Picker
          selectedValue={value}
          style={{ 
            backgroundColor: theme.colors.secondary,
            borderColor: theme.colors.third,
            color: theme.colors.fourth,
          }}
          dropdownIconColor = {theme.colors.fourth}
          {...rest}
          >
          { 
            valueArrays.map(el => { return (
            <Picker.Item key={el} fontFamily={theme.fontFamily.Medium} label={el} value={el}/>
          )})
          }
        </Picker>
      </Container>
    )
}