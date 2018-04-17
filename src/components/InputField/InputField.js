import React from 'react'
import { HtmlEditor } from '@aeaton/react-prosemirror'
import { options } from '@aeaton/react-prosemirror-config-default'
 
const InputField = ({ value, onChange }) => (
  <HtmlEditor
    options={options}
   // value={value}
  //  onChange={onChange}
  />
)
export default InputField