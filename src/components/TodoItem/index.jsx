import React from 'react';

const TodoItem = () => {
    const arrItems = ['task1', 'task2', 'task3', 'task4', 'task5'];

    return(
        
            arrItems.map((item, index) => {
                return <p className="item" key={index}>{item}</p>
            })
    )
}

export default TodoItem;