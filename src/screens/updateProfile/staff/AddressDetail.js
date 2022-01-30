import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {Button, Checkbox, TextInput} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {globalStyles} from '../../../../constants/globalStyle';
import {NavigationString} from '../../../../constants/navigationName';
import appTheme from '../../../../constants/theme';
import {updatingstaffDetail} from '../../../../redux/reducer/updateProfile/StaffSlice';
const {COLORS} = appTheme;
const AddressDetail = ({navigation}) => {
  const dispatch = useDispatch();
  const [state, setstate] = useState({
    address: '',
    pincode: '',
    state: '',
    district: '',
    sameas: false,
    address2: '',
    pincode2: '',
    state2: '',
    district2: '',
    errors: {},
  });
  const onpressNext = () => {
    let error = {};
    let pincoderegex = /^[0-9]{6}$/;
    if (!state.address.trim()) {
      error.address = 'Temporary Address is requird';
    }
    if (!state.state.trim()) {
      error.state = 'State is requird';
    }
    if (!state.district.trim()) {
      error.district = 'District is requird';
    }
    if (!state.pincode.trim()) {
      error.pincode = 'Pincode is required';
    } else if (!pincoderegex.test(state.pincode)) {
      error.pincode = 'Pin Code Should be Numbers or 6 Digits only';
    }
    if (!state.address2.trim()) {
      error.address2 = 'Permanent Address is requird';
    }
    if (!state.state2.trim()) {
      error.state2 = 'State is requird';
    }
    if (!state.district2.trim()) {
      error.district2 = 'District is requird';
    }
    if (!state.pincode2.trim()) {
      error.pincode2 = 'Pincode is required';
    } else if (!pincoderegex.test(state.pincode2)) {
      error.pincode2 = 'Pin Code Should be Numbers or 6 Digits only';
    }
    setstate({...state, errors: error});
    if (Object.keys(error).length === 0) {
      const addressDetailData = {
        address: state.address,
        pincode: state.pincode,
        state: state.state,
        district: state.district,
        address2: state.address2,
        pincode2: state.pincode2,
        state2: state.state2,
        district2: state.district2,
      };
      dispatch(updatingstaffDetail({name: 'address', data: addressDetailData}));
      navigation.navigate(NavigationString.ExperienceDetail);
    }
  };
  useEffect(() => {
    if (state.sameas) {
      setstate({
        ...state,
        address2: state.address,
        pincode2: state.pincode,
        district2: state.district,
        state2: state.state,
      });
    } else {
      setstate({
        ...state,
        address2: '',
        pincode2: '',
        district2: '',
        state2: '',
      });
    }
  }, [state.sameas]);
  return (
    <ScrollView>
      <View style={{margin: 17}}>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            multiline
            numberOfLines={3}
            value={state.address}
            onChangeText={text => setstate({...state, address: text})}
            theme={{roundness: 10}}
            label=" Temporary Address"
            mode="outlined"
          />
        </View>
        {state.errors.address && (
          <Text style={globalStyles.red}>{state.errors.address}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.pincode}
            onChangeText={text => setstate({...state, pincode: text})}
            theme={{roundness: 10}}
            label="Pin Code"
            mode="outlined"
          />
        </View>
        {state.errors.pincode && (
          <Text style={globalStyles.red}>{state.errors.pincode}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.state}
            onChangeText={text => setstate({...state, state: text})}
            theme={{roundness: 10}}
            label="State"
            mode="outlined"
          />
        </View>
        {state.errors.state && (
          <Text style={globalStyles.red}>{state.errors.state}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.district}
            onChangeText={text => setstate({...state, district: text})}
            theme={{roundness: 10}}
            label="District"
            mode="outlined"
          />
        </View>
        {state.errors.district && (
          <Text style={globalStyles.red}>{state.errors.district}</Text>
        )}
        <TouchableOpacity
          style={{flexDirection: 'row', alignItems: 'center'}}
          onPress={() => setstate({...state, sameas: !state.sameas})}>
          <Checkbox
            status={state.sameas ? 'checked' : 'unchecked'}
            color={COLORS.primary2}
          />
          <Text>Same as Temporary</Text>
        </TouchableOpacity>
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            multiline
            numberOfLines={3}
            value={state.address2}
            onChangeText={text => setstate({...state, address2: text})}
            theme={{roundness: 10}}
            label=" Permanent Address"
            mode="outlined"
          />
        </View>
        {state.errors.address2 && (
          <Text style={globalStyles.red}>{state.errors.address2}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.pincode2}
            onChangeText={text => setstate({...state, pincode2: text})}
            theme={{roundness: 10}}
            label="Pin Code"
            mode="outlined"
          />
        </View>
        {state.errors.pincode2 && (
          <Text style={globalStyles.red}>{state.errors.pincode2}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.state2}
            onChangeText={text => setstate({...state, state2: text})}
            theme={{roundness: 10}}
            label="State"
            mode="outlined"
          />
        </View>
        {state.errors.state2 && (
          <Text style={globalStyles.red}>{state.errors.state2}</Text>
        )}
        <View style={globalStyles.inputFieldContainer}>
          <TextInput
            style={globalStyles.inputField}
            outlineColor="#fff"
            value={state.district2}
            onChangeText={text => setstate({...state, district2: text})}
            theme={{roundness: 10}}
            label="District"
            mode="outlined"
          />
        </View>
      </View>
      {state.errors.district2 && (
        <Text style={globalStyles.red}>{state.errors.district2}</Text>
      )}
      <View style={{alignItems: 'flex-end', marginRight: 17, marginBottom: 30}}>
        <Button
          mode="contained"
          theme={{roundness: 30}}
          style={{elevation: 10, width: 100}}
          onPress={onpressNext}>
          Next
        </Button>
      </View>
    </ScrollView>
  );
};

export default AddressDetail;

const styles = StyleSheet.create({});
