import { useEffect, useRef, useState } from 'react';
import {
  useWorkshops,
  useWorkshopActions,
} from '../../../state/hooks/ParticipantsWorkshops';
import { InputControl } from '../Forms/Form';
import styles from './WorkshopList.css';

export default function WorkshopList() {
  const { workshops } = useWorkshops();

  if (!workshops) return null;

  return (
    <ul className={styles.WorkshopList}>
      {workshops.map((workshop) => (
        <Workshop key={workshop.id} workshop={workshop} />
      ))}
    </ul>
  );
}

function Workshop({ workshop }) {
  const { remove, update } = useWorkshopActions();
  const [editing, setEditing] = useState(false);
  const ref = useRef();
  const [topic, setTopic] = useState(workshop.topic);

  const handleRemove = () => remove(workshop.id);

  const handleDoubleClick = () => {
    setEditing(true);
  };

  useEffect(() => {
    if (editing) ref.current.focus();
  }, [editing]);
  const handleChange = ({ target }) => {
    setTopic(target.value);
  };
  const handleEdit = async () => {
    setEditing(false);
    if (topic === workshop.topic) return;
    await update({ topic, id: workshop.id });
  };
  const handleKeyUp = (e) => {
    if (e.code === 'Enter') handleEdit();
  };

  return (
    <li>
      {editing ? (
        <InputControl
          ref={ref}
          topic="topic"
          value={topic}
          onChange={handleChange}
          onKeyUp={handleKeyUp}
          onBlur={handleEdit}
        />
      ) : (
        <h1 onDoubleClick={handleDoubleClick}>{workshop.topic}</h1>
      )}
      <button onClick={handleRemove}>❌</button>
    </li>
  );
}
