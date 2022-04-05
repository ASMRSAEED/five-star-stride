import React from 'react';
import './Blogs.css'

const Blogs = () => {
  return (
    <div className='questions'>
      <div className='question-1'>
        <h3>Question-1: What is Context API?</h3>
        <p><b>Answer:-</b> Context API is a structure that can exchange details against props. I can pass unique details on any level. It s a props alternative. It can pass any data from grandparent to child to parent, and so on. Context API is used when some data needs to be accessible by many components at different nesting levels.</p>
      </div>
      <div className='question-2'>
        <h3>Question-2: What is a semantic tag?</h3>
        <p><b>Answer:-</b> Semantic TAG is a meaningful way to describe meaning like a human. Elements such as header, footer, and article, are all considered semantic because they accurately describe the purpose of the element and the type of content that is inside them. HTML5 semantic tags define the purpose of the element. By using semantic markup, you help the browser understand the meaning of the content instead of just displaying it.</p>
      </div>
      <div className='question-3'>
        <h3>Question-3: Whats is the difference between inline block and inline block elements?</h3>
        <p><b>Answer:-</b> The inline element can't start on a new line. We can't set the width and height. inline-block It's formatted just like the inline element, But we can set width and height values. Inline elements don't start in a new line. Block elements always start in a line.</p>
      </div>
    </div>
  )
};

export default Blogs;