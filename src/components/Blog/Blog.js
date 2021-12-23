import React from 'react';
import './Blog.css';
export default function Blog(props) {
    return (
        <div className="Blog">
            <div className="blog-heading">
                <span className="blog-title">
                {props.title}
                </span>
                <span className="date">
                    {props.date}
                </span>
            </div>
            <div className="blog-body">
                {props.content}
            </div>
        </div>
    )
}
