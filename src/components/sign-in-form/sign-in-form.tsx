import styles from './sign-in-form.module.css';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { signIn } from '../../store/slices/auth/actions';
import { AppDispatch } from '../../store/store';
import {
  userErrorSelector,
  userSelector,
} from '../../store/slices/auth/selectors';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

export const SignInForm = () => {
  const user = useSelector(userSelector);
  const userError = useSelector(userErrorSelector);
  const dispatch = useDispatch<AppDispatch>();
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isEmailValid, setIsEmailValid] = useState(true);
  const regexp = /[0-9A-Za-z.,_-]+@[A-Za-z]+\.[a-z]+/;
  const isError = userError !== null;
  const canBeSubmitted = password.length >= 2;

  useEffect(() => {
    if (user) navigate('/');
  }, [user]);

  const emailChangeHandler = (event) => {
    setEmail(event.target.value);
  };

  const passwordChangeHandler = (event) => {
    setPassword(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (email.match(regexp)) {
      setIsEmailValid(true);
      dispatch(signIn({ email, password }));
    } else {
      setIsEmailValid(false);
    }
  };

  const emailFieldClass = isEmailValid
    ? styles.field
    : classNames(styles.field, styles.Error);

  return (
    <div className={styles.signIn}>
      <form action="#" className={styles.form} onSubmit={submitHandler}>
        <div className={styles.message}>
          {!isEmailValid && <p>Please enter a valid email address</p>}
          {isError && (
            <p>
              We can’t recognize this email <br /> and password combination.
              Please try again.
            </p>
          )}
        </div>

        <div className={styles.fields}>
          <div className={emailFieldClass}>
            <input
              className={styles.input}
              type="email"
              placeholder="Email address"
              name="user-email"
              id="user-email"
              value={email}
              onChange={emailChangeHandler}
            />
            <label className={styles.hidden} htmlFor="user-email">
              Email address
            </label>
          </div>
          <div className={styles.field}>
            <input
              className={styles.input}
              type="password"
              placeholder="Password"
              name="user-password"
              id="user-password"
              value={password}
              onChange={passwordChangeHandler}
            />
            <label className={styles.hidden} htmlFor="user-password">
              Password
            </label>
          </div>
        </div>
        <div>
          <button
            className={styles.button}
            type="submit"
            disabled={!canBeSubmitted}
          >
            Sign in
          </button>
        </div>
      </form>
    </div>
  );
};
