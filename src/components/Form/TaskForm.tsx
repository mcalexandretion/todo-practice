import {useState} from 'react';

interface Props {
    onAdd: (title:string, description:string) => void;
}

export default function TaskForm ({onAdd}: Props) {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');

    const handleSubmit = (e: React.FormEvent) =>
    {
        e.preventDefault();
        if (!title.trim()) return;
        onAdd(title,description);
        setTitle(''); setDescription('');
    };

    return (
        <form onSubmit={handleSubmit}>
            <input value={title} onChange={e => setTitle(e.target.value)}/>
            <input value={description} onChange={e => setDescription(e.target.value)} />
            <button type="submit">Add</button>
        </form>
    );


}