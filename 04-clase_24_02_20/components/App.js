import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.containerpadre}>  
      <View style={styles.container1}>
        <View style={styles.box1}>
          <Text style={styles.text}>Vista 1</Text>
        </View>
        <View style={styles.box2}>
          <Text style={styles.text}>Vista 2</Text>
        </View>
      </View>

      <View style={styles.container2}>
        <View style={styles.box3}>
          <Text style={styles.text}>Vista 3</Text>
        </View>
        <View style={styles.box4}>
          <Text style={styles.text}>Vista 4</Text>
        </View>
      </View>

      <View style={styles.container3}>
        <View style={styles.box5}>
          <Text style={styles.text}>Vista 3</Text>
        </View>
        <View style={styles.box6}>
          <Text style={styles.text}>Vista 4</Text>
        </View>
      </View>
  </View>

  );
}

const styles = StyleSheet.create({
  containerpadre: {
    flex: 1,
    backgroundColor: '#fff',
    flexDirection: 'column'
  },
  container1: {
    flex: 2,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  container2: {
    flex: 2,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  container3: {
    flex: 2,
    backgroundColor: '#fff',
    flexDirection: 'row'
  },
  text: {
    color: '#ff1744'
  },
  box1: {
    flex: 1,
    backgroundColor: '#ffc107',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 5 
  
  },
  box2: {
    flex: 1,
    backgroundColor: '#0d47a1',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 5 

  },
  box3: {
    flex: 1,
    backgroundColor: '#d50000',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 5 
  },
  box4: {
    flex: 1,
    backgroundColor: '#33FF49',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 5 
  },
  box5: {
    flex: 1,
    backgroundColor: '#35E4DC',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 5 
  },
  box6: {
    flex: 1,
    backgroundColor: '#E435E4',
    flexDirection: 'row',
    justifyContent: 'space-around',
    margin: 10,
    borderWidth: 5 
  },
});

