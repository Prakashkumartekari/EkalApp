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
            color={COLORS.dashcard1}
            route={NavigationString.AddItemStack}
            clickfun={changingRoute}
            text="Add Item"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard2}
            route={NavigationString.AddItemStockStack}
            clickfun={changingRoute}
            text="Add Item Stock"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard3}
            route={NavigationString.IssueItemStack}
            clickfun={changingRoute}
            text="Issu Item"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />

          <DashboardCard
            color={COLORS.dashcard4}
            route={NavigationString.ItemCategoryStack}
            clickfun={changingRoute}
            text="Item Category"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard5}
            route={NavigationString.ItemStoreStack}
            clickfun={changingRoute}
            text="Item Store"
            icon={<Entypo name="flower" size={hp('7%')} color="#000" />}
          />
          <DashboardCard
            color={COLORS.dashcard7}
            route={NavigationString.ItemSupplierStack}
            clickfun={changingRoute}
            text="Item Supplier"
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
