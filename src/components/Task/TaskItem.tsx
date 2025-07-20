import type {Task} from '../../types/task';

interface Props {
    task: Task;
    onDelete: (id:number) => void;
    onComplete: (id:number) => void;
}

export default function TaskItem({task,onDelete,onComplete}: Props) {
    return (
    <div className='item-container'>
<span> {task.title} </span>
<label> {task.description} </label>
<input 
type="checkbox"
checked={task.completed}
onChange={() => onComplete(task.id)} />

<button onClick={() => onDelete(task.id)}>Del</button>
    </div>
    )
}