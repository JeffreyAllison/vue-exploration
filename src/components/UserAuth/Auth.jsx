import { Link, Route, Routes } from 'react-router-dom';
import { InputControl, FormButton } from '../../components/Forms/Form.jsx';
import { useForm } from '../../../state/hooks/formData.js';
import { useAuth } from '../../../state/hooks/userAuth.js';
import styles from './Auth.css';

export default function Auth() {
  const { signIn, signUp } = useAuth();

  const signUpInfo = {
    header: 'Create an account',
    button: 'Sign Up',
    prompt: 'Have an account already?',
    link: '../',
    onSubmit: signUp,
  };

  const signInInfo = {
    header: 'Sign in to your account',
    button: 'Sign In',
    prompt: 'Need to create an account?',
    link: 'sign-up',
    onSubmit: signIn,
  };

  return (
    <Routes>
      <Route index element={<AuthForm {...signInInfo} />} />
      <Route path="sign-up" element={<AuthForm {...signUpInfo} />} />
    </Routes>
  );
}

function AuthForm({ header, button, prompt, link, onSubmit }) {
  const [creds, handleChange] = useForm();

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(creds);
  };

  return (
    <section className={styles.Auth}>
      <form onSubmit={handleSubmit}>
        <h1>{header}</h1>

        <InputControl
          label="Email"
          name="email"
          type="email"
          required
          placeholder="email"
          value={creds.email}
          onChange={handleChange}
        />
        <InputControl
          label="Password"
          name="password"
          type="password"
          required
          placeholder="password"
          value={creds.password}
          onChange={handleChange}
        />

        <FormButton>{button}</FormButton>

        <Link to={link}>{prompt}</Link>
      </form>
    </section>
  );
}
