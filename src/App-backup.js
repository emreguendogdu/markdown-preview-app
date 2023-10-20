import React, { useEffect, useState } from 'react';
import Prism from "prismjs";  
import './App.scss';  
import './prism.css';
import { marked } from 'marked';

const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.  // TODO Problem here. 

\`\`\`javascript
// or a multi-line code

function sayHi(word) {
  if (word.toLowerCase() === "hi" || word.toLowerCase() === "hello") {
    return true;
  }
}
\`\`\`

You can also make text **bold**... whoa!
Or _italic_.
Or... wait for it... **_both!_**
And feel free to go crazy ~~crossing stuff out~~.

There's also [links](https://www.freecodecamp.org), and
 > "The two most powerful warriors are patience and time." - Leo Tolstoy

And if you want to get really crazy, even tables:

Wild Header | Crazy Header | Another Header?
------------ | ------------- | -------------
Your content can | be here, and it | can be here....
And here. | Okay. | I think we get it.

- And of course there are lists.
  - Some are bulleted.
     - With different indentation levels.
        - That look like this.


1. And there are numbered lists too.
1. Use just 1s if you want!

 # Embedded images

![William Blake](https://cryrzzvxza.cloudimg.io/rybikyem.beget.tech/painters/72/5.jpg)
`

const App = () => {
    const [value, setValue] = useState(placeholder);
    const handleChange = (event) => {
    setValue(event.target.value);
  };


    return (
    <>
      <body>
        <textarea id="editor" value={value} onChange={handleChange}></textarea>
        <Preview value={value}/>
      </body>
    </>
  );
};

  const Preview = (props) => {
  const renderer = new marked.Renderer();
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
    <div id='preview'></div>
    <div id='preview-content' dangerouslySetInnerHTML={{
      __html: marked(props.value, {renderer: renderer })
    }}></div>
    </>
  )
}

export default App;