import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {useSelector} from 'react-redux';

const MainRoute = () => {
  const [state, setstate] = useState({
    parent: false,
    director: false,
    staff: false,
  });
  const {loginDetail} = useSelector(states => states.auth);
  const role = loginDetail?.roles;
  const updatestate = () => {
    if (role) {
      if (role[0] === 'ROLE_PARENT') {
        setstate({...state, parent: true});
      }
      if (role[0] === 'ROLE_ADMIN') {
        setstate({...state, director: true});
      }
      if (role[0] === 'ROLE_TEACHER') {
        setstate({...state, staff: true});
      }
    }
  };

  useEffect(() => {
    updatestate();
  }, []);
  return (
    <View>
      <Text></Text>
    </View>
  );
};

export default MainRoute;

const styles = StyleSheet.create({});
