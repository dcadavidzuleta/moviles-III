import React,{useState} from 'react';
import { StyleSheet, Text, View, Image, TextInput, Button, Alert} from 'react-native'

export default function App() {
  const saludo = () => {Alert.alert("Hola Cesde")};
  const [name, setname]=useState("");
  // const[variable, funcion que se ejecuta y cambie la variable]=useState(" ");
  return (
    <View style={styles.container}>
      <Text>{name}</Text>
      <Image style={styles.logo} source={require('./assets/login.png')}/>
      <TextInput maxLength={5} style={styles.TextInput} placeholder="Email" onChangeText={(text)=>setname(text)}/>
      <TextInput maxLength={5} style={styles.TextInput} placeholder="Password" onChangeText={(text)=>setname(text)}/>
      <Text style={styles.Text}>create Account</Text>
      <Text style={styles.Text}>forgot password</Text>
      <Button type="button" class="btn btn-secondary" title="Get started" onPress={saludo}></Button>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#676463',
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
  borderRadius: 20,
  marginTop: 15,
  marginBottom: 15,
  paddingLeft: 15,
  height: 50,
  width: 400,
  textAlign: 'center'
},
Text: {
  marginTop: 15,
  marginBottom: 15,
  paddingLeft: 15,
  height: 50,
  width: 400,
  textAlign: 'left',
  color:'#A4A4A4'
},

});
