import React from "react";
import { createRoot } from 'react-dom/client';

//React Element
const heading = <p>Namaste React Video 3</p>;

const Title = () => (<h1> {heading} This is title component</h1>)

//React fucntional component
const Heading = () => (
<div id="container">
    <Title /> <h1>Namaste Functional React Component</h1>
</div>
);

const root = createRoot(document.getElementById("root"));
root.render(<Heading />);