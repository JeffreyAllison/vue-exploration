import { useState } from 'react';
import { useWorkshopActions } from '../../state/hooks/ParticipantsWorkshops.js';
import { InputControl, FormButton } from '../Forms/Form.jsx';
import styles from './AddFamily.css';

export default function AddWorkshop() {
  const { add } = useWorkshopActions();
  const [topic, setTopic] = useState('');
  const handleChange = ({ target }) => setTopic(target.value);

  const handleSubmit = async (e) => {
    e.preventDefault();
    await add({ topic });
    setTopic('');
  };
  return (
    <form className={styles.AddWorkshop} onSubmit={handleSubmit}>
      <InputControl
        label="add a topic"
        name="topic"
        value={topic}
        onChange={handleChange}
      />

      <FormButton icon={true}>🔍</FormButton>
    </form>
  );
}
