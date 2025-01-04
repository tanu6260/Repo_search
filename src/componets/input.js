import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import React from 'react';
import { COLORS, FONTS, SIZES } from '../constans';
import FontAwesome from 'react-native-vector-icons/FontAwesome'


const InputBox = ({
  placeholder,
  keyboardType,
  maxLength,
  value,
  editable,
  numberOfLines,
  textstyle,
  onChangeText,
  autoCapitalize,
  onSubmitEditing
}) => {
  return (
    <View style={styles.Container}>
      <FontAwesome name="search" size={SIZES.width * 0.05} color={COLORS.black} />
      <TextInput
        style={[styles.TextInputstyle, textstyle]}
        placeholder={placeholder}
        placeholderTextColor={COLORS.gray}
        keyboardType={keyboardType}
        maxLength={maxLength}
        value={value}
        editable={editable}
        numberOfLines={numberOfLines}
        onChangeText={onChangeText}
        autoCapitalize={autoCapitalize}
        onSubmitEditing={onSubmitEditing}
      />
    </View>
  );
};

export default InputBox;

const styles = StyleSheet.create({
  Container: {
    flexDirection: 'row',
    alignSelf: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.white,
    width: SIZES.width * 0.91,
    borderRadius: 10,
    borderWidth: 1,

    elevation: 4,
    marginBottom: SIZES.height * 0.04,
    paddingHorizontal: SIZES.width * 0.04,
    borderColor: COLORS.gray
  },

  TextInputstyle: {
    color: COLORS.black,
    fontSize: SIZES.width * 0.034,
    fontFamily: FONTS.medium,
    width: SIZES.width * 0.85,
    paddingHorizontal: SIZES.width * 0.04,
    marginBottom: -3

  },

});