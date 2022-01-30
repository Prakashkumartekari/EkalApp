import React from 'react';
import {StatusBar} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {updatelogindetail} from '../redux/reducer/auth/AuthReducer';
import MainRoute from './navigation/MainRoute';
import LoaderDialog from './components/Dialog/LoaderDialog';
import 'react-native-gesture-handler';
const App = () => {
  const dispatch = useDispatch();
  const modal = useSelector(state => state.auth.modal);
  const {mobilespinner, emailspinner} = useSelector(state => state.MobileEmail);
  dispatch(updatelogindetail());
  return (
    <>
      <StatusBar backgroundColor="#2789FD" />
      <MainRoute />
      <LoaderDialog state={modal || mobilespinner || emailspinner} />
    </>
  );
};

export default App;
