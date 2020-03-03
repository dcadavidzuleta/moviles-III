import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native';

export default function App() {
  const saludo = () => {Alert.alert("Hola Cesde")};
  const [name, setname]=useState("");
  // const[variable, funcion que se ejecuta y cambie la variable]=useState(" ");
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/login.png')}/>
      <TextInput maxLength={5} style={styles.TextInput} placeholder="uusuario" onChangeText={(text)=>setname(text)}/>
      <Button title="start" onPress={saludo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
logo:{
  width: 100,
  height: 100
},
TextInput: {
  borderColor: '#000000',
  borderWidth: 1,
  borderRadius: 5,
  paddingLeft: 20,
  width: 300,
  textAlign: 'center'
}

});
