import { useState} from 'react';
import type {Task} from '../src/types/task';
import TaskList from './components/List/TaskList';
import TaskForm from './components/Form/TaskForm';


function App() {
const [tasks, setTasks] = useState<Task[]>([]);

const addTask = (title:string, description:string) => {
  const newTask: Task = {
    id: Date.now(),
    title, description, completed:false
  };
  setTasks([...tasks, newTask]);
};

const deleteTask = (id:number) => {
  setTasks(tasks.filter(task => task.id !== id));
};

const completeTask = (id: number) => {
  setTasks(tasks.map(task => 
    task.id === id? {...task, completed: !task.completed}: task
  ));
};

return (
  <div className='container'>
<h1> Task Manager</h1>
<TaskForm onAdd={addTask}/>
<TaskList tasks={tasks} onDelete={deleteTask} onComplete={completeTask}/>

  </div>
);

}

export default App;