import React from 'react';
import {ScrollView, StyleSheet, Text, View} from 'react-native';
import {Button} from 'react-native-paper';
import {DashboardCard} from '../../components';
import {NavigationString} from '../../../constants/navigationName';
import Entypo from 'react-native-vector-icons/Entypo';
import appTheme from '../../../constants/theme';
const {COLORS, SIZES, hp} = appTheme;

const Dashboard = ({navigation}) => {
  const changingRoute = route => {
    navigation.navigate(route);
  };
  return (
    <ScrollView>
      <View style={styles.root}>
        <View
          style={{
            flexDirection: 'row',
            flexWrap: 'wrap',
            marginBottom: 30,
          }}>
          <DashboardCard
            color={COLORS.dashcard15}
            route={NavigationString.VisitorControl}
            clickfun={changingRoute}
            text="Visitor Control"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard1}
            route={NavigationString.StaffAttendance}
            clickfun={changingRoute}
            text="Staff Attendance"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard2}
            route={NavigationString.Complains}
            clickfun={changingRoute}
            text="Complains"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard16}
            route={NavigationString.AdmissionEnquiry}
            clickfun={changingRoute}
            text="Admission Enquiry"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({});
