import React from "react";
import { Text, View } from "react-native";
import { TextInput } from "react-native-gesture-handler";
import styles from './styles';

const VisitorCard = (props) => {
  const {
    card,
    InputField,
    label,
    labelTwo,
    onChangeText,
    placeholder,
    keyboardType,
    maxLength,
    value,
    simpleText,
  } = props;
  return (
    <>
      {card === true ? (
        <View style={styles.rowView}>
          <Text style={styles.txtLabel}>
            {label}
          </Text>
          <Text style={styles.txtLabelTwo}>
            {labelTwo}
          </Text>
        </View>
      ) : InputField === true ? (
        <View style={styles.addView}>
          <Text style={styles.txtLabel}>{label}</Text>
          <TextInput
            value={value}
            onChangeText={onChangeText}
            style={{ ...styles.txtInp, height: props.height }}
            placeholder={placeholder}
            maxLength={maxLength}
            keyboardType={keyboardType}
            multiline={true}
          />
        </View>
      ) : simpleText === true ? (
        <Text style={styles.txtLabel}>
          {label}
        </Text>
      ) : null}
    </>
  );
};
export default VisitorCard;
