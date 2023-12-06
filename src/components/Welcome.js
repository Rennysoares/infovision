import React, { useState } from 'react';
import { View, Text, Image, Button, Modal, StyleSheet, TouchableOpacity} from 'react-native';

const Welcome = ({navigation}) => {
  return (
      <View style={styles.container}>
        <Image
            source={require('../../assets/iconwelcome.png')}
            style={{height: 300, width: 350}}
        />
        <Text style={styles.title}>Seja bem vindo ao seu app de estudo de programação :)</Text>
        <TouchableOpacity
            style={{width: '100%', alignItems: 'center'}}
            onPress={()=>{navigation.navigate('WelcomeName')}}
        >
            <View style={styles.buttonstart}>
                <Text style={styles.txtbuttonstart}>Vamos Começar</Text>
            </View>
        </TouchableOpacity>
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
    backgroundColor: '#6F3DE2',
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
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 16,
    padding: 8,
  },
  buttonstart:{
    backgroundColor: 'rgb(255, 255, 255)',
    width: '70%',
    alignItems: 'center',
    justifyContent: 'center',
    padding: 10,
    borderRadius:15
  },
  txtbuttonstart:{
    color:'#6F3DE2',
    fontSize: 17,
    fontWeight: 'bold'
  }
});

export default Welcome;
