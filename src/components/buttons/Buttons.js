import React from "react";
import { Text, TouchableOpacity } from "react-native";
import styles from "./Style";

const Buttons = (props) => {
  const {
    btnSmall,
    label,
    onPress,
    alignSelf,
    btnMedium1,
    btnMedium2,
    btnMedium,
    btnMediumpassword,
    btnMediumBGColor,
  } = props;
  return (
    <>
      {btnSmall === true ? (
        <TouchableOpacity style={{ ...styles.btnSmallWrap, backgroundColor: props.BGColor, borderColor: props.BDColor }} onPress={onPress}>
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : btnMedium === true ? (
        <TouchableOpacity
          style={{
            ...styles.btnWrap,
            alignSelf: alignSelf,
            backgroundColor: btnMediumBGColor,
          }}
          onPress={onPress}
        >
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>{label}</Text>
        </TouchableOpacity>
      ) : btnMedium1 === true ? (
        <TouchableOpacity style={{ ...styles.btnMedWrap, backgroundColor: props.BGColor, borderColor: props.BDColor }} onPress={onPress}>
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      ) : btnMedium2 === true ? (
        <TouchableOpacity style={{ ...styles.btnMedWraps, backgroundColor: props.BGColor, borderColor: props.BDColor }} onPress={onPress}>
          <Text style={{ ...styles.txtLabel, color: props.txtColor }}>
            {label}
          </Text>
        </TouchableOpacity>
      )
        : null}
    </>
  );
};
export default Buttons;
