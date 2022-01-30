import React, {useState} from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button, TextInput} from 'react-native-paper';
import {globalStyles} from '../../../../constants/globalStyle';

import {NavigationString} from '../../../../constants/navigationName';
import {useDispatch} from 'react-redux';
import {updatingstaffDetail} from '../../../../redux/reducer/updateProfile/StaffSlice';
const ParentDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    fatherfirst: '',
    fathermiddle: '',
    fatherlast: '',
    motherfirst: '',
    mothermiddle: '',
    motherlast: '',
    errors: {},
  });
  const onpressNext = () => {
    let error = {};
    if (!state.fatherfirst.trim()) {
      error.fatherfirst = 'Firstname is requird';
    }
    if (!state.motherfirst.trim()) {
      error.motherfirst = 'Firstname is requird';
    }
    setstate({...state, errors: error});
    if (Object.keys(error).length === 0) {
      const parentDetailData = {
        fatherfirst: state.fatherfirst,
        fathermiddle: state.fathermiddle,
        fatherlast: state.fatherlast,
        motherfirst: state.motherfirst,
        mothermiddle: state.mothermiddle,
        motherlast: state.motherlast,
      };
      dispatch(updatingstaffDetail({name: 'parent', data: parentDetailData}));
      navigation.navigate(NavigationString.AddressDetail);
    }
  };
  return (
    <ScrollView>
      <View style={{margin: 17}}>
        <Text style={{marginVertical: 10, fontSize: 16}}>Father's Name</Text>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.fatherfirst}
            onChangeText={text => setstate({...state, fatherfirst: text})}
            theme={{roundness: 10}}
            label="First Name"
            mode="outlined"
          />
        </View>
        {state.errors.fatherfirst && (
          <Text style={globalStyles.red}>{state.errors.fatherfirst}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.fathermiddle}
            onChangeText={text => setstate({...state, fathermiddle: text})}
            theme={{roundness: 10}}
            label="Middle Name"
            mode="outlined"
          />
        </View>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.fatherlast}
            onChangeText={text => setstate({...state, fatherlast: text})}
            theme={{roundness: 10}}
            label="Last Name"
            mode="outlined"
          />
        </View>
        <Text style={{marginVertical: 10, fontSize: 16}}>Mother's Name</Text>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.motherfirst}
            onChangeText={text => setstate({...state, motherfirst: text})}
            theme={{roundness: 10}}
            label="First Name"
            mode="outlined"
          />
        </View>
        {state.errors.motherfirst && (
          <Text style={globalStyles.red}>{state.errors.motherfirst}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.mothermiddle}
            onChangeText={text => setstate({...state, mothermiddle: text})}
            theme={{roundness: 10}}
            label="Middle Name"
            mode="outlined"
          />
        </View>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.motherlast}
            onChangeText={text => setstate({...state, motherlast: text})}
            theme={{roundness: 10}}
            label="Last Name"
            mode="outlined"
          />
        </View>
        <View style={{alignItems: 'flex-end'}}>
          <Button
            mode="contained"
            theme={{roundness: 30}}
            style={{
              elevation: 10,
              width: 100,
              marginTop: 15,
            }}
            onPress={onpressNext}>
            Next
          </Button>
        </View>
      </View>
    </ScrollView>
  );
};

export default ParentDetail;

const styles = StyleSheet.create({});
