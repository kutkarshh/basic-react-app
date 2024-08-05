import React from "react";
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
const App: React.FC = () => {

    return (<div>
        <h1>Basic React App</h1>
        <Todo items={titles} />
        <Todo items={titles} />
        <Todo items={titles} />
    </div>)
};

export default App;