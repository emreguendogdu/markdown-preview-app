import React, { useEffect } from 'react';
import Prism from "prismjs";  
import './App.scss';  
import './prism.css';
import { marked } from 'marked';

const oldinput = "# Welcome to my React Markdown Previewer!\n\n## This is a sub-heading...\n### And here's some other cool stuff:\n\nHeres some code, `<div></div>`, between 2 backticks.\n\n```\n// this is multi-line code:\n\nfunction anotherExample(firstLine, lastLine) {\n  if (firstLine == '```' && lastLine == '```') {\n    return multiLineCode;\n  }\n}\n```\n\nYou can also make text **bold**... whoa!\nOr _italic_.\nOr... wait for it... **_both!_**\nAnd feel free to go crazy ~~crossing stuff out~~.\n\nThere's also [links](https://www.freecodecamp.org), and\n > \"The two most powerful warriors are patience and time.\" - Leo Tolstoy\n\nAnd if you want to get really crazy, even tables:\n\nWild Header | Crazy Header | Another Header?\n------------ | ------------- | -------------\nYour content can | be here, and it | can be here....\nAnd here. | Okay. | I think we get it.\n\n- And of course there are lists.\n  - Some are bulleted.\n     - With different indentation levels.\n        - That look like this.\n\n\n1. And there are numbered lists too.\n1. Use just 1s if you want!\n # Embedded images\n\n![William Blake](https://cryrzzvxza.cloudimg.io/rybikyem.beget.tech/painters/72/5.jpg)\n"


const placeholder = `# Welcome to my React Markdown Previewer!

## This is a sub-heading...
### And here's some other cool stuff:

Heres some code, \`<div></div>\`, between 2 backticks.

\`\`\`
// this is multi-line code:

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

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state={
      input: placeholder  
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({
      input: event.target.value
    })
  }


  render() {
    return (
    <>
      <body>
        <textarea id="editor" value={this.state.input} onChange={this.handleChange}></textarea>
        <Preview input={this.state.input}/>
      </body>
    </>
  );
  }
}

const Preview = (props) => {
  const renderer = new marked.Renderer();
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
    <div id='preview'></div>
    <div id='preview-content' dangerouslySetInnerHTML={{
      __html: marked(props.input, {renderer: renderer })
    }}></div>
    </>
  )
}

export default App;