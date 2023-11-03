import React, { useState } from 'react';  
import './App.scss';  
import './prism.css';
import Preview from './Preview';
import { placeholder } from "./Placeholder";

const App = () => {
    const [value, setValue] = useState(placeholder);

    const handleChange = (e) => {
    setValue(e.target.value);
  };

  console.log(value);
    return (
    <>
      <body>
        <textarea id="editor" value={value} onChange={handleChange}></textarea>
        <Preview value={value}/>
      </body>
    </>
  );
};

  

export default App;