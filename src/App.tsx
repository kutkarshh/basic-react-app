import React, { useState } from "react";
import Counter from "./components/Counter";
import Todo from "./components/Todo";

const titles = [
    {
        id: "1",
        title: "Wake at 4AM",
    },
    {
        id: "2",
        title: "Freshen Up",
    },
    {
        id: "3",
        title: "Workout",
    },
    {
        id: "4",
        title: "Breakfast",
    },
];

const products = ["Mobile"];


const App: React.FC = () => {

    const [buyButton, setBuyButton] = useState(false);

    return (<div >
        <h1 className="title">Basic React App</h1>
        <div className="container">
            <Todo items={titles} />
            <button onClick={(e) => setBuyButton(!buyButton)}>Buy</button>
            {buyButton ? <Counter products={products} /> : ""}
        </div>
    </div>)
};

export default App;