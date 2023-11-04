import React, { useState } from 'react';  
import '../styles/App.scss';  
import Preview from './Preview';
import { placeholder } from "./Placeholder";

export default function App() {
  const [value, setValue] = useState(placeholder);

  const handleChange = (e) => {
    setValue(e.target.value);
  };

  return (
    <>
      {/* Make all hyperlinks open in a new tab */}
      <head>
        <base target="_blank" />
      </head>
      <body>
        <textarea id="editor" value={value} onChange={handleChange} />
        <Preview value={value} />
      </body>
    </>
  );
}
