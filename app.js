import React from "react";
import { createRoot } from 'react-dom/client';
// const heading = document.createElement("h1");
// heading.innerHTML = "Hello Namste React";
// const root = document.querySelector("#root").appendChild(heading);

const parent = React.createElement("div", {id: "parent"},
    [
    React.createElement("div", {id: "child",key: "child1"},[
    React.createElement("h1", {id: "heading",key: "h1-1"}, "I am a h1 tag"),
    React.createElement("h2", {id: "heading2",key: "h2-1"}, "I am a h2 tag")
    ]),
    React.createElement("div", {id: "child2",key: "child2"},[
    React.createElement("h1", {id: "heading3",key: "h1-2"}, "I am a h1 tag"),
    React.createElement("h2", {id: "heading4",key: "h2-2"}, "I am a h2 tag")
    ])
]);

console.log(parent);

const root = createRoot(document.getElementById("root"));
root.render(parent);