import React, {useState} from "react";
import Checkbox from "./checkbox";

const Todo = () => {
    //set initial state
    const [task, setTask] = useState ({
        id: 0,
        taskDescription: "",
        isCompleted: false
    });

    const [todos, setTodos] = useState([]);

    function addTodos(e) {
        e.preventDefault();
        setTodos ([
        ...todos,
        {
            id: todos.length + 1,
            taskDescription: task.taskDescription,
            isCompleted: false
        }
        ]);
        //reset the task
        setTask({
        id: 0,
        taskDescription: "",
        isCompleted: false
    });
    }

    const handleToggle = (id) => {
        // sieving through the todos and returning the ones that are completed
        let mapped = todos.map((task) => {
        return task.id === Number(id)
        ? { ...task, isCompleted: true }
        : { ...task };
        });
        //setting our new todo list with updated variables
        setTodos(mapped);

    };

    // const handleClick = (e) => {
    //     e.preventDefault();
    //     handleToggle(e.currentTarget.id);
    // };

    return (
        <div className="App">
        <h1>ToDo list</h1>
        <form  onSubmit={addTodos}>
        <div>

            <label>
            Task
            <input
                type="text"
                value={task.taskDescription}
                name="taskDescription"
                onChange={(event) =>
                setTask ({
                    taskDescription: event.target.value,
                    isCompleted: false
                })
                }
            />
            </label>

            <button>Add Todo</button>
        </div>
        </form>
    <>
    {todos.length > 0 ? ( 
        <>
        {todos.map((t, index) => {
        return (
            <div id={t.id} key={index + t.id} value={t.id}>
            {t.isCompleted ? (
                <strike>
                <p>{t.taskDescription}</p>
                </strike>
            ) : (
                <>
                <Checkbox 
                    label={t.taskDescription}
                    value={t.id}
                    checked={t.isCompleted}
                    onChange={(e) => handleToggle(t.id)}
                />
                
                
                {/* <p>{t.taskDescription}</p>
                <button
                    id={t.id}
                    key={index + t.id}
                    value={t.id}
                    onClick={handleClick}
                >
                    complete
                </button> */}
                
                </>
                
            )}
            </div>
        );
        }
        )}
        </>  
    ) : (
    <p>No Tasks for today</p>
    )}
    </>
        </div>
    );

};

  export default Todo;