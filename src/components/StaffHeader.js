import React, {useEffect, useState} from 'react';
import {StyleSheet, Text, View} from 'react-native';
import {ScrollView} from 'react-native-gesture-handler';
import {useSelector} from 'react-redux';
import appTheme from '../../constants/theme';
const {SIZES, COLORS} = appTheme;
const StaffHeader = () => {
  const [state, setstate] = useState(0);
  const {personal, parent, address, experience, bank} = useSelector(
    states => states.updateStaff,
  );
  useEffect(() => {
    if (parent) {
      setstate(60);
    } else if (address) {
      setstate(120);
    } else if (experience) {
      setstate(160);
    } else if (bank) {
      setstate(220);
    }
  }, [personal, parent, address, experience, bank]);
  return (
    <ScrollView
      horizontal={true}
      showsHorizontalScrollIndicator={false}
      contentOffset={{x: state}}>
      <View style={Styles.root}>
        <View style={Styles.textContainer}>
          <Text style={personal ? Styles.activetext : Styles.text}>
            Personal Detail
          </Text>
        </View>
        <View style={Styles.textContainer}>
          <Text style={parent ? Styles.activetext : Styles.text}>
            Parent Detail
          </Text>
        </View>
        <View style={Styles.textContainer}>
          <Text style={address ? Styles.activetext : Styles.text}>
            Address Detail
          </Text>
        </View>
        <View style={Styles.textContainer}>
          <Text style={experience ? Styles.activetext : Styles.text}>
            Experience Detail
          </Text>
        </View>
        <View style={Styles.textContainer}>
          <Text style={bank ? Styles.activetext : Styles.text}>
            Bank Detail
          </Text>
        </View>
      </View>
    </ScrollView>
    // <View style={Styles.detailContainer}>
    //   <View
    //     style={[
    //       Styles.detailContainer_item,
    //       personal ? Styles.detailContainer_itemActive : null,
    //     ]}>
    //     <Text
    //       style={[
    //         Styles.detailContainer_itemText,
    //         personal ? Styles.detailContainer_itemTextActive : null,
    //       ]}>
    //       Personal Detail
    //     </Text>
    //   </View>
    //   <View
    //     style={[
    //       Styles.detailContainer_item,
    //       parent ? Styles.detailContainer_itemActive : null,
    //     ]}>
    //     <Text
    //       style={[
    //         Styles.detailContainer_itemText,
    //         parent ? Styles.detailContainer_itemTextActive : null,
    //       ]}>
    //       Prent's Detail
    //     </Text>
    //   </View>
    //   <View
    //     style={[
    //       Styles.detailContainer_item,
    //       address ? Styles.detailContainer_itemActive : null,
    //     ]}>
    //     <Text
    //       style={[
    //         Styles.detailContainer_itemText,
    //         address ? Styles.detailContainer_itemTextActive : null,
    //       ]}>
    //       Address
    //     </Text>
    //   </View>

    //   <View
    //     style={[
    //       Styles.detailContainer_item,
    //       experience ? Styles.detailContainer_itemActive : null,
    //     ]}>
    //     <Text
    //       style={[
    //         Styles.detailContainer_itemText,
    //         experience ? Styles.detailContainer_itemTextActive : null,
    //       ]}>
    //       Experience Detail
    //     </Text>
    //   </View>

    //   <View
    //     style={[
    //       Styles.detailContainer_item,
    //       bank ? Styles.detailContainer_itemActive : null,
    //     ]}>
    //     <Text
    //       style={[
    //         Styles.detailContainer_itemText,
    //         bank ? Styles.detailContainer_itemTextActive : null,
    //       ]}>
    //       Bank Detail
    //     </Text>
    //   </View>
    // </View>
  );
};

export default StaffHeader;

const Styles = StyleSheet.create({
  root: {
    flexDirection: 'row',
    padding: 13,
    marginVertical: 7,
    backgroundColor: COLORS.primary2,
  },
  textContainer: {
    marginHorizontal: 10,
  },
  text: {
    color: '#333',
    fontSize: 16,
  },
  activetext: {
    color: '#fff',
    fontSize: 16,
  },
  // detailContainer: {
  //   flexDirection: 'row',
  //   alignItems: 'center',
  //   backgroundColor: '#fff',
  //   paddingTop: 10,
  // },
  // detailContainer_item: {
  //   flex: 1,
  // },
  // detailContainer_itemText: {
  //   fontSize: 12,
  //   color: '#000',
  //   textAlign: 'center',
  // },
  // detailContainer_itemActive: {
  //   borderBottomWidth: 4,
  //   borderBottomColor: '#2789FD',
  // },
  // detailContainer_itemTextActive: {
  //   color: '#2789FD',
  // },
});
