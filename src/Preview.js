import React, { useEffect } from 'react';
import Prism from "prismjs";
import { marked } from 'marked';

export default function Preview(props) {
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
  useEffect(() => {
    Prism.highlightAll();
  });
  return (
    <>
      <div id='preview' dangerouslySetInnerHTML={{
        __html: marked(props.value, { renderer: renderer })
      }}></div>
    </>
  );
}