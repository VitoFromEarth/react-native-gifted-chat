/* eslint no-use-before-define: ["error", { "variables": false }] */

import PropTypes from 'prop-types';
import React from 'react';
import { StyleSheet, Text, TouchableOpacity, View, ViewPropTypes } from 'react-native';
import Color from './Color';
import { MaterialIcons } from "@expo/vector-icons";

export default function Send({ text, containerStyle, onSend, children, textStyle, label, alwaysShowSend }) {
  if (alwaysShowSend || text.trim().length > 0) {
    return (
      <TouchableOpacity
        testID="send"
        accessible
        accessibilityLabel="send"
        style={[styles.container, containerStyle]}
        onPress={() => {
          onSend({ text: text.trim() }, true);
        }}
        accessibilityTraits="button"
      >
        <View
          style={{
            flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginRight: 10,
          }}
        >{children ||
          <MaterialIcons
            name="send"
            size={24}
            color="#2AACFC"
          />
        }</View>
      </TouchableOpacity>
    );
  }
  return <View />;
}

const styles = StyleSheet.create({
  container: {
    height: 44,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center'
  },
  text: {
    color: Color.defaultBlue,
    fontWeight: '600',
    fontSize: 17,
    backgroundColor: Color.backgroundTransparent,
    marginBottom: 12,
    marginLeft: 10,
    marginRight: 10,
  },
});

Send.defaultProps = {
  text: '',
  onSend: () => {},
  label: 'Send',
  containerStyle: {},
  textStyle: {},
  children: null,
  alwaysShowSend: false,
};

Send.propTypes = {
  text: PropTypes.string,
  onSend: PropTypes.func,
  label: PropTypes.string,
  containerStyle: ViewPropTypes.style,
  textStyle: Text.propTypes.style,
  children: PropTypes.element,
  alwaysShowSend: PropTypes.bool,
};
