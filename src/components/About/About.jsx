import {
  InputControl,
  SelectControl,
  TextAreaControl,
  CheckboxControl,
  FormButton,
  Fieldset,
} from '../Forms/Form.jsx';

import styles from './About.css';

export default function About() {
  return (
    <section className={styles.About}>
      about page about page about page now fill out the form
      <form>
        <Fieldset legend="your info here">
          <InputControl
            label="email"
            name="email"
            placeholder="enter your email"
            type="email"
            required
          />

          <InputControl
            className={styles.PasswordControl}
            label="password"
            name="password"
            placeholder="choose a password"
            type="password"
            required
          />
        </Fieldset>

        <SelectControl label="type">
          <option>Alien</option>
          <option>Boolean</option>
          <option>Cat</option>
        </SelectControl>

        <CheckboxControl label="Easy Mode?" text="No thx" />

        <TextAreaControl
          label="jeff's bio"
          placeholder="tell us about you jeff"
        />

        <FormButton>Click here to Submit</FormButton>
      </form>
    </section>
  );
}
