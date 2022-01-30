import React from 'react';
import appTheme from '../../constants/theme';
import {ScrollView, StyleSheet, View} from 'react-native';
import Entypo from 'react-native-vector-icons/Entypo';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import {NavigationString} from '../../constants/navigationName';
import {DashboardCard} from '../components';
const {COLORS, hp, SIZES} = appTheme;
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
            color={COLORS.dashcard1}
            route={NavigationString.LedgerStack}
            clickfun={changingRoute}
            text="Ledger & Accounts"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard2}
            route={NavigationString.TimeTable}
            text="Time Table"
            clickfun={changingRoute}
            icon={
              <MaterialCommunityIcons
                name="table-clock"
                size={hp('7%')}
                color="#000"
              />
            }
          />

          <DashboardCard
            color={COLORS.dashcard5}
            route={NavigationString.ExamStack}
            text="Exam & Results"
            clickfun={changingRoute}
            icon={
              <Ionicons name="newspaper-outline" size={hp('7%')} color="#000" />
            }
          />
          <DashboardCard
            color={COLORS.dashcard6}
            route={NavigationString.Events}
            clickfun={changingRoute}
            text="Events & Calender"
            icon={
              <MaterialIcons name="emoji-events" size={hp('7%')} color="#000" />
            }
          />
          <DashboardCard
            color={COLORS.dashcard7}
            route={NavigationString.Syllabus}
            clickfun={changingRoute}
            text="Syllabus"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />

          <DashboardCard
            color={COLORS.dashcard9}
            route={NavigationString.Library}
            clickfun={changingRoute}
            text="Library"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard10}
            route={NavigationString.Transport}
            clickfun={changingRoute}
            text="Transport"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />

          <DashboardCard
            color={COLORS.dashcard15}
            route={NavigationString.Hostel}
            clickfun={changingRoute}
            text="Hostel"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard9}
            route={NavigationString.ReceptionStack}
            clickfun={changingRoute}
            text="Reception"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard12}
            route={NavigationString.inventoryMainStack}
            clickfun={changingRoute}
            text="Inventory"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
        </View>
      </View>
    </ScrollView>
  );
};

export default Dashboard;

const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: '#fff',
    paddingHorizontal: SIZES.m1,
    paddingVertical: SIZES.m7,
  },
});
