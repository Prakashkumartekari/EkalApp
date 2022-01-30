import React, {useEffect, useState} from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';
import {viewAttendance} from '../../../../redux/reducer/academics/AttendanceReducer';

const ViewAttendanceByDate = ({navigation, route}) => {
  const dispatch = useDispatch();
  const {Attendacedata} = route;
  console.log(Attendacedata);
  const {attendance, editAttendance, editAttendanceError} = useSelector(
    state => state.AttendanceState,
  );
  const [state, setState] = useState({
    allpresent: false,
    allabsent: false,
    present: [],
    absent: [],
    class: '',
    modal: false,
  });

  useEffect(() => {
    //     dispatch(viewAttendance());
  }, []);
  return (
    <Text>prakash</Text>
    //     <View style={{backgroundColor: '#fff', flex: 1}}>
    //       <View
    //         style={{
    //           backgroundColor: '#fff',
    //           marginTop: '30%',
    //           paddingVertical: '5%',
    //           paddingHorizontal: '5%',
    //           marginHorizontal: '5%',
    //           elevation: 3,
    //           borderRadius: 10,
    //         }}>
    //         <View
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             marginVertical: 3,
    //           }}>
    //           <Text style={{fontSize: 18, color: 'grey'}}>Class Name:</Text>
    //           <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
    //             {/* {attendance[0]?.className} */}
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             marginVertical: 3,
    //           }}>
    //           <Text style={{fontSize: 18, color: 'grey'}}>Stream:</Text>
    //           <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
    //             {/* {attendance[0]?.stream} */}
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             marginVertical: 3,
    //           }}>
    //           <Text style={{fontSize: 18, color: 'grey'}}>Section:</Text>
    //           <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
    //             {/* {attendance[0]?.section} */}
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             marginVertical: 3,
    //           }}>
    //           <Text style={{fontSize: 18, color: 'grey'}}>Total Students:</Text>
    //           <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
    //             {/* {attendance?.length} */}
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             marginVertical: 3,
    //           }}>
    //           <Text style={{fontSize: 18, color: 'grey'}}>Total Present:</Text>
    //           <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
    //             {/* {state.present.length} */}
    //           </Text>
    //         </View>
    //         <View
    //           style={{
    //             display: 'flex',
    //             flexDirection: 'row',
    //             alignItems: 'center',
    //             justifyContent: 'space-between',
    //             marginVertical: 3,
    //           }}>
    //           <Text style={{fontSize: 18, color: 'grey'}}>Total Absent:</Text>
    //           <Text style={{fontSize: 18, color: '#000', marginRight: '35%'}}>
    //             {/* {state.absent.length} */}
    //           </Text>
    //         </View>
    //         {/* <View
    //                   style={{
    //                     flexDirection: 'row',
    //                     justifyContent: 'center',
    //                     marginTop: '5%',
    //                   }}>
    //                   <Button
    //                     onPress={handleSubmit}
    //                     mode="contained"
    //                     color="green"
    //                     style={{ flex: 1, marginRight: '3%' }}>
    //                     Submit
    //                   </Button>
    //                   <Button
    //                     mode="contained"
    //                     color="red"
    //                     style={{ flex: 1 }}
    //                     onPress={() => navigation.goBack()}>
    //                     Edit
    //                   </Button>
    //                 </View> */}
    //       </View>
    //     </View>
  );
};

export default ViewAttendanceByDate;
