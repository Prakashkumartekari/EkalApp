import React from 'react';
import {DashboardCard} from '../../components';
import {NavigationString} from '../../../constants/navigationName';
import Entypo from 'react-native-vector-icons/Entypo';
import appTheme from '../../../constants/theme';
import {ScrollView, StyleSheet, View} from 'react-native';
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
            route={NavigationString.ExpensesStack}
            clickfun={changingRoute}
            text="Expenses"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard10}
            route={NavigationString.CollectionStack}
            clickfun={changingRoute}
            text="Collections"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard6}
            route={NavigationString.FeesStack}
            clickfun={changingRoute}
            text="Fess"
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
    alignItems: 'center',
    backgroundColor: '#fff',
    paddingHorizontal: SIZES.m1,
    paddingVertical: SIZES.m7,
  },
});
