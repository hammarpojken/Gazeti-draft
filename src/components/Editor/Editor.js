import React from 'react'
import './Editor.css'
import { HtmlEditor, MenuBar } from '@aeaton/react-prosemirror'
import { options, menu } from '@aeaton/react-prosemirror-config-default'
 
const Editor = ({ value, onChange }) => (
  <HtmlEditor
    options={options}
    value={value}
    onChange={onChange}
    render={({ editor, state, dispatch }) => (
      <div>
        <MenuBar menu={menu} state={state} dispatch={dispatch}/>
        {editor}
      </div>
    )}
  />
)
 
export default Editor



