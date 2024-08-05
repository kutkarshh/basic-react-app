import React from "react";
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

const products = ["Mobile", "Laptop", "Television"];

const App: React.FC = () => {

    return (<div >
        <h1 className="title">Basic React App</h1>
        <div className="container">
            <Todo items={titles} />
            <Counter products={products} />
        </div>
    </div>)
};

export default App;