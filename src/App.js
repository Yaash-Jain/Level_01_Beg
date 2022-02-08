import React, { useState } from 'react';
import ToDoList from './ToDoList';

const App = () => {
    const [inputList, setInputList] = useState(" ");
    const [items, setItems] = useState([]);

    const itemEvent = (event) => {
        setInputList(event.target.value);
    };
    const listItems = (event) => {
        setItems((oldItems) => {
            return [...oldItems, inputList];
        })  
        setInputList("");
    };

    const deleteItem = (id) => {
        console.log('Deleted');

        setItems((oldItems) => {
            return oldItems.filter((arrElem, index) => {
                return index !== id; 
            })
        });
    }

    return (
        <>
          <div className="main">
            <div className="center">
                <br />
                <h1> ToDo List </h1>
                <br />
                <input type="text" name="" id="" placeholder='Add a Item' onChange={itemEvent} value={inputList}/>
                <button onClick={listItems}> + </button>

                <ol>
                    {/* <li> {inputList} </li> */}
                    {items.map((itemVal, index) => {
                        return <ToDoList id={index} key={index} text={itemVal} onSelect={deleteItem}/>
                    })}  
                </ol>
            </div>    
          </div>  
        </>
    )
};

export default App;