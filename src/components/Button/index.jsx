import React from 'react'
import { MyButton } from './Button'

export const Buttons = ({children, props}) => {
  return <MyButton {...props}>{children}</MyButton>
}
