import React, {useState} from "react";
import InputMask from 'react-input-mask'

const MaskedInputTelefone = ({value, onChange}) => {
  
  return (
    <InputMask mask="(99) 99999-9999" value={value} onChange={onChange} placeholder="(99) 99999-9999"/>
    
  )
}

export default MaskedInputTelefone;