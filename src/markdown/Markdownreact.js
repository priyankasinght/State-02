import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react'

const Markdownreact = () => {
    const [markDown, setMarkdown] = useState();
    return (
        <>
            <div className='center-div'>
                <textarea className='left-side' value={markDown}
                onChange={(e) => setMarkdown(e.target.value)}></textarea>
                <div className='right-side'><ReactMarkdown>{markDown}</ReactMarkdown></div>
            </div>

        </>
    )
}

export default Markdownreact;