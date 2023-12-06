import React, { useState } from 'react';
import { View, Text, TextInput, TouchableOpacity, Image, StyleSheet, ToastAndroid} from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';

const AgeInsert = ({navigation}) => {

    const [age, setAge] = useState('');
    
    const insertAge = async () => {
        if (!age){
            ToastAndroid.show('Insira Corretamente', ToastAndroid.SHORT);
            return
        }
        else{
            navigation.navigate('Home')
        }
        await SecureStore.setItemAsync('age', age);
      };

    return (
      <View style={styles.container}>
        <StatusBar backgroundColor='#FD043C'/>
        <Text style={styles.title}>Insira sua idade</Text>
        <Image
            source={require('../../assets/ageilust.png')}
            style={{height: 260, width: 315}}
        />
        <TextInput
          style={styles.input}
          placeholder="Idade"
          value={age}
          onChangeText={text => setAge(text)}
          keyboardType="numeric"
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
                onPress={()=>{insertAge()}}
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
        backgroundColor: '#FD043C',
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

export default AgeInsert;
