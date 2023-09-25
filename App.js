import React from 'react';
import { StyleSheet, FlatList, SafeAreaView } from 'react-native';
import { Data } from './Data'
import Row from './Row'

const App = () => {

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
        data={Data}
        renderItem={({ item }) => (<Row person={item} />)}
      >
      </FlatList>
    </SafeAreaView>

  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 56,
  },

});

export default App;