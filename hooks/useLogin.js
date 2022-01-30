import {useState} from 'react';
import {useDispatch} from 'react-redux';
import {authlogin} from '../redux/reducer/auth/AuthReducer';

const useLogin = () => {
  const dispatch = useDispatch();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});

  const formdata = {
    username,
    password,
  };

  const handleSigin = () => {
    let error = {};

    if (username === '') {
      error.username = 'Username is required';
    }
    if (password === '') {
      error.password = 'Password is required';
    }
    setErrors(error);
    if (Object.keys(error).length === 0) {
      dispatch(authlogin(formdata));
    }
  };

  return {
    username,
    password,
    errors,
    setUsername,
    setPassword,
    handleSigin,
  };
};

export default useLogin;
