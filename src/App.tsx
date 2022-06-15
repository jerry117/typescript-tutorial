import React , { useEffect, useState} from 'react';
import './App.css';
import InputFeild from './components/InputFeild'
import TodoList from './components/TodoList';
import {Todo} from './model';
import {DragDropContext, DropResult} from 'react-beautiful-dnd'


var obj = {1:3};
console.log(obj);




const App:React.FC = () => {
  const [todo, setTodo] = useState<string >('');
  const [todos, setTodos] = useState<Todo[]>([]); 
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]); 

  const handleAdd = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (todo){

      setTodos([...todos, {id : Date.now(), todo , isDone:false}] );
      setTodo('');
    }
  };

  const [count, setCount] = useState(0);

  // useEffect(() => {
  //   document.title = `you clicked ${count} times`;
  // });



  const onDragEnd = (result: DropResult) => {
    const {source, destination} = result;
    console.log(result); 
    
    if (!destination ) return;
    if (destination.droppableId===source.droppableId && destination.index===source.index) return ;
    let add,
    active = todos,
    complete = completedTodos;
    
    if (source.droppableId === 'TodosList'){
      add = active[source.index];
      active.splice(source.index, 1);
    }else {
      add = complete[source.index];
      complete.splice(source.index, 1);
    }


    if (destination.droppableId === 'TodosList'){
      active.splice(destination.index, 0, add);
    }else {
      complete.splice(destination.index, 0, add);
    }

    setCompletedTodos(complete);
    setTodos(active);
  };

  return (
    <DragDropContext onDragEnd={onDragEnd}>
    <div className="App">
      <span className='heading'>Taskify</span>
      <InputFeild todo={todo} setTodo={setTodo} handleAdd={handleAdd}/>
      <TodoList todos={todos} setTodos={setTodos} completedTodos={completedTodos} setCompletedTodos={setCompletedTodos} />
      
    </div>
    <div>
        <p>You clicked {count} times</p>
        <button onClick={() => setCount(count + 1 )}>
          Click me
        </button>
      </div>
   </DragDropContext>
   
  );
}




export default App;
