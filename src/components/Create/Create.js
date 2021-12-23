import React from 'react'
import './Create.css';
export default function Create() {
    return (
        <div className="container">
            <div className="create-title">
                <h1>Create a new Entry</h1>
            </div>
            <form action="" className="create-form">
                <label htmlFor="article-heading" className="form-heading">Give a heading</label>
                <input type="text" id="heading" required autocomplete="on"/>
                <label htmlFor="article-content" className="form-heading">Write your content</label>
                <textarea type="range" id="content" required autocomplete="on"/>
                <input type="submit" />
            </form>
              
        </div>
    )
}
