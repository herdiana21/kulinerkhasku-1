import {StyleSheet, TextInput} from 'react-native';
import React from 'react';

const InputanWhite = ({pass, clr, wid, mrginBot, plcholder, ...rest}) => {
  return (
    <TextInput
      secureTextEntry={pass}
      style={[
        styles.inputEmail,
        {color: clr, width: wid, marginBottom: mrginBot},
      ]}
      placeholder={plcholder}
      placeholderTextColor={clr}
      {...rest}
    />
  );
};

export default InputanWhite;

const styles = StyleSheet.create({
  inputEmail: {
    borderColor: '#33907C',
    borderWidth: 1,
    borderRadius: 100,
    fontFamily: 'Montserrat-Regular',
    fontSize: 18,
    paddingLeft: 20,
  },
});
