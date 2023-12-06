import React, { useState } from 'react';
import { View, Text, TextInput, Image, ToastAndroid, StyleSheet, TouchableOpacity } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';

const NameInsert = ({navigation}) => {

    const [name, setName] = useState('');

    const insertName = async () => {
        if (!name){
            ToastAndroid.show('Insira Corretamente', ToastAndroid.SHORT);
            return
        }
        else{
            navigation.navigate('WelcomeAge')
        }
        await SecureStore.setItemAsync('name', name);
      };

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#F2A42B'/>
        <Text style={styles.title}>Qual é o seu nome?</Text>
        <Image
            source={require('../../assets/duvidilustr.png')}
            style={{height: 300, width: 350}}
        />
        
        <TextInput
          style={styles.input}
          placeholder="Seu primeiro nome"
          value={name}
          onChangeText={text => setName(text)}
        />
        <View style={{flexDirection: 'row', justifyContent: 'space-between', width: '100%'}}>
            <TouchableOpacity
                onPress={()=>{ navigation.goBack()}} 
            >
                <View style={styles.boxoptions}>
                    <Text style={styles.txtback} >Voltar</Text>
                </View>
            </TouchableOpacity>
            <TouchableOpacity
                onPress={()=>{insertName()}}
            >
                <View style={[styles.boxoptions, {backgroundColor:'rgb(0, 0, 0)', borderRadius: 10}]}>
                    <Text style={styles.txtgo} >Próximo</Text>
                </View>
            </TouchableOpacity>
        </View>
      </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 16,
    backgroundColor: '#F2A42B',
    gap: 30
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 16,
    textAlign: 'center',
    color: 'rgb(255, 255, 255)'
  },
  input: {
    width: '100%',
    height: 50,
    marginBottom: 7,
    padding: 10,
    backgroundColor: 'rgb(255, 255, 255)',
    borderRadius: 30
  },
  txtback:{
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    fontWeight: 'bold'
  },
  txtgo:{
    color: 'rgb(255, 255, 255)',
    fontSize: 15,
    fontWeight: 'bold'
  },
  boxoptions:{
    padding: 10,
  }
});

export default NameInsert;
