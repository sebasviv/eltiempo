import { TextFieldProps } from '@material-ui/core'
import React from 'react'
import { Controller } from 'react-hook-form'

type Props = {
    label: string,
    control: any,
    name: string,
    defaultValue?: any,
    props?:TextFieldProps,
}


export const InputComponent = ({
    label,
    control, 
    name,
    defaultValue, 
    props,
}: Props) => {
  return (
      <></>
    // <Controller
    //     name={name}
    //     control={control}
    //     defaultValue={defaultValue}
    // >
        
    // </Controller>
  )
}
