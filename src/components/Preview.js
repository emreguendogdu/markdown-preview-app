import React, { useEffect, memo } from 'react';
import Prism from "prismjs";
import '../styles/prism.css';
import '../styles/Preview.scss';
import { marked } from 'marked';

// Configure marked outside the component, so it's only done once
marked.options({
  breaks: true
});

const renderer = new marked.Renderer();
renderer.code = function (code) {
  // Give block codes Js class and pre element for Prism highlight.
  return `<pre><code class="language-javascript">${code}</code></pre>\n`;
};
// Give inline codes Js class for Prism highlight.
renderer.codespan = function (code) {
  return `<code class="language-javascript">${code}</code>`;
};

function Preview({ value }) {
  useEffect(() => {
    Prism.highlightAll();
  }, [value]);
  
  return (
    <>
      <div id='preview' dangerouslySetInnerHTML={{
        __html: marked(value, { renderer: renderer })
      }}></div>
    </>
  );
}

export default memo(Preview);
