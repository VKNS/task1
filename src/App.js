import React from 'react';
import EditorJs from 'react-editor-js';
import { EDITOR_JS_TOOLS } from "./constants";

import data from "./data";

class App extends React.Component {
  
  render () {
    return (
      <EditorJs data={data} tools={ EDITOR_JS_TOOLS }/>
    );
  }
  
}

export default App;
