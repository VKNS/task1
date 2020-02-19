import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from "./constants";

import data from "./data";

class App extends React.Component {

  async handleSave() {
    const savedData = await this.editorInstance.save();
    console.log("Saved data:", savedData)
  }
   
  render () {
    return (
      <div>
        <EditorJs 
          instanceRef={instance => this.editorInstance = instance}
          data={data} 
          tools={ EDITOR_JS_TOOLS } 
          onChange={()=>{
            this.handleSave()
          }}
        />
      </div>
    );
  }
  
}

export default App;
