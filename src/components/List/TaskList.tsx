import type { Task} from '../../types/task';
import TaskItem from '../Task/TaskItem';

interface Props {
    tasks: Task[];
    onDelete: (id:number) => void;
    onComplete: (id:number) => void;
}

export default function TaskList({tasks, onDelete, onComplete}: Props) {
    return (

        <ul>
            {tasks.map( task => (
                <TaskItem key={task.id} task={task} onDelete={onDelete} onComplete={onComplete} />
            ))}
        </ul>
    )
}