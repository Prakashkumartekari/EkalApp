import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableNativeFeedback,
  TouchableOpacity,
} from 'react-native';
import appTheme from '../../../constants/theme';
import Entypo from 'react-native-vector-icons/Entypo';
const {SIZES, hp} = appTheme;
const PostedHomeworkCard = () => {
  return (
    <View style={styles.root}>
      <View style={styles.heading}>
        <View>
          <Text style={styles.heading_text}>Science</Text>
        </View>
        <TouchableOpacity>
          <Entypo name="dots-three-vertical" size={SIZES.m8} color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Metals and non-metals</Text>
      <Text style={styles.description}>
        Nonmetals tend to be softer, often colorful elements. read more
      </Text>
      <View style={styles.footer}>
        <View style={styles.footer_text_container}>
          <View>
            <Text style={styles.text}>Assign Date</Text>
          </View>
          <View>
            <Text style={styles.date_text}>1-Feb-2022</Text>
          </View>
        </View>
        <View
          style={[styles.footer_text_container, styles.footer_text_container2]}>
          <View>
            <Text style={styles.text}>Last Date of Submission</Text>
          </View>
          <View>
            <Text style={styles.date_text}>1-Feb-2022</Text>
          </View>
        </View>
      </View>
    </View>
  );
};

export default PostedHomeworkCard;

const styles = StyleSheet.create({
  root: {
    backgroundColor: '#fff',
    elevation: 10,
    marginVertical: SIZES.m3,
    padding: SIZES.m5,
    borderRadius: SIZES.m7,
  },
  heading: {
    flexDirection: 'row',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  heading_text: {
    fontSize: hp('3%'),
    color: '#000',
    fontWeight: '700',
  },
  title: {
    fontWeight: '700',
    fontSize: SIZES.h4,
    color: '#000',
    marginTop: SIZES.m5,
    textTransform: 'capitalize',
  },
  description: {
    color: 'grey',
    lineHeight: SIZES.m6,
    marginTop: SIZES.m1,
  },
  footer: {
    marginTop: SIZES.m5,
    marginBottom: SIZES.m3,
  },
  footer_text_container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  date_text: {
    fontSize: SIZES.h6,
    color: '#333',
  },
  text: {
    fontSize: SIZES.h6,
    color: '#555',
  },
  footer_text_container2: {
    marginTop: SIZES.m3,
  },
});
