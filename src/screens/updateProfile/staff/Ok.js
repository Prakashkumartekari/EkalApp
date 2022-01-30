import React from 'react';
import {View, Text} from 'react-native';
import {Button} from 'react-native-paper';
import {useDispatch} from 'react-redux';
import {NavigationString} from '../../../../constants/navigationName';
import {updatingstaffDetail} from '../../../../redux/reducer/updateProfile/StaffSlice';

const Ok = ({navigation}) => {
  const dispatch = useDispatch();
  const onpressOk = () => {
    dispatch(updatingstaffDetail({name: 'ok'}));
    navigation.navigate(NavigationString.PersonalDetail);
  };
  return (
    <View
      style={{
        backgroundColor: '#fff',
        height: '100%',
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <View
        style={{
          backgroundColor: '#fff',
          elevation: 10,
          paddingHorizontal: 30,
          paddingVertical: 30,
          marginVertical: '50%',
          marginHorizontal: '5%',
        }}>
        <Text style={{fontSize: 18, lineHeight: 30, textAlign: 'center'}}>
          Before Apply in Any School You Have To Update Your Profile.
        </Text>
        <View style={{alignItems: 'center'}}>
          <Button
            mode="contained"
            onPress={onpressOk}
            theme={{roundness: 30}}
            style={{
              elevation: 20,
              marginTop: 20,
              width: 100,
            }}>
            Ok
          </Button>
        </View>
      </View>
    </View>
  );
};

export default Ok;
