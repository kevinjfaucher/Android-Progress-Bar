import React, { Component } from 'react';
import { View, ProgressBarAndroid, Platform, StyleSheet } from 'react-native';

class AndroidProgressBarApp extends Component {

  render() {
    // If this isn't an Android device, we won't show anything
    if (Platform.OS !== 'android') return null;

    return (
      <View style={styles.container}>
        {/* Display a simple progress bar with 50% completion */}
        <ProgressBarAndroid styleAttr="Horizontal" indeterminate={false} progress={0.5} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
});

export default AndroidProgressBarApp;
