import React from 'react';
import Blog from './components/Blog/Blog';

const content = {
    margin: "20px",
    padding: "20px",
    display: "flex",
    justifyContent: "center",
    fontFamily: "Helvetica"
}
export default function Home() {
    return (
        <div className="content" style={content}>
            <Blog title="This is a new entry" content = "This is my first entry for my diary app project. The app comes with functionalities such as creating entries, deleting and modifying them" date="05/10/2021"/>
        </div>
    )
}
