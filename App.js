import React from 'react';
import { StyleSheet, View } from 'react-native';
import MapboxGL from '@rnmapbox/maps';

MapboxGL.setAccessToken('pk.eyJ1IjoiZGlvbmVzYW50b3MiLCJhIjoiY2w4OWUwaWE2MDY2dDNycGRlMnNsbDNsZyJ9.FnBNs4QpS3HigVQ3Cmk3aw');

const App = () => {
  return (
    <View style={styles.page}>
      <View style={styles.container}>
        <MapboxGL.MapView style={styles.map} />
      </View>
    </View>
  );
}

export default App;

const styles = StyleSheet.create({
  page: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    height: 300,
    width: 300,
  },
  map: {
    flex: 1
  }
});