import React, { useState, useEffect } from 'react';
import { StyleSheet, Text, View, Image, ScrollView } from 'react-native';
import * as SecureStore from 'expo-secure-store';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native-safe-area-context';
import ProgressCircle from '../components/ProgressCircle';
import Graph from '../components/Graph';
import { AntDesign, Entypo, FontAwesome } from '@expo/vector-icons'

export default function Home({navigation}) {
  const [myname, setName] = useState('')
  const [age, setAge] = useState('')

  function navegar(){
    navigation.navigate('RouteWelcome')
  }
  useEffect(() => {
    const checkUserData = async () => {
      // Verificar se os dados já foram preenchidos anteriormente
      const name = await SecureStore.getItemAsync('name')
      const age = await SecureStore.getItemAsync('age')
      if (!name) {
        navegar()
        console.log('???')
      } else {
        setName(name)
        setAge(age)
      }
    };
    checkUserData();
  }, []);

  useEffect(() => {
    const focused = navigation.addListener('focus', () => {
      const checkUserData = async () => {
        const name = await SecureStore.getItemAsync('name')
        const age = await SecureStore.getItemAsync('age')
          setName(name)
          setAge(age)
      };
      checkUserData();
    });
    focused;
  }, [navigation]);
  
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FD043C'/>
      <View style={styles.header}>
        <View>
          <Text style={styles.title}>Olá, {myname}</Text>
          <Text style={styles.subtitle}>Bem vindo ao seu app de estudos</Text>
        </View>
        <Image
        source={require('../../assets/iconhome.png')}
        style={{height: 130, width: 130}}
        />
      </View>
      <ScrollView>
        <Text style={styles.titlesession}>Minhas Tasks</Text>
        <View>
          <ScrollView style={{height: 230}}>
          <View style={styles.flatlisttask}>
            <AntDesign name='checkcircle' size={20} color='rgb(0, 200, 0)'/>
            <View>
              <Text>Concluir o conteúdo de React Native</Text>
              <Text style={{color: '#999'}}>Concluído com sucesso</Text>
            </View>
          </View>

          <View style={styles.flatlisttask}>
            <FontAwesome name='circle' size={20} color='rgb(230, 230, 0)'/>
            <View>
              <Text>Concluir o conteúdo de Banco de Dados</Text>
              <Text style={{color: '#999'}}>Em andamento</Text>
            </View>
          </View>

          <View style={styles.flatlisttask}>
            <Entypo name='circle' size={20} color='rgb(200, 200, 200)'/>
            <View>
              <Text>Concluir o conteúdo de Programação Web</Text>
              <Text style={{color: '#999'}}>Não iniciado</Text>
            </View>
          </View>
          <View style={styles.flatlisttask}>
            <Entypo name='circle' size={20} color='rgb(200, 200, 200)'/>
            <View>
              <Text>Concluir o conteúdo de P.O.O.</Text>
              <Text style={{color: '#999'}}>Não iniciado</Text>
            </View>
          </View>
          </ScrollView>
        </View>
        <Text style={styles.titlesession}>Progressos</Text>
        <View style={styles.cardprogress}>
          <ProgressCircle title='Conteúdo' progress={0.1} />
          <Graph seg={0} ter={1} qua={3} qui={2} sex={0} sab={0} dom={0}/>
        </View>
        <Text style={styles.titlesession}>Últimas Anotações</Text>
        <View>
          <View>
            
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff'
  },
  header:{
    paddingHorizontal: 10,
    paddingVertical: 10,
    backgroundColor: '#FD043C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  title:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle:{
    color: '#EEE'
  },
  titlesession:{
    fontWeight: 'bold',
    padding: 10,
    fontSize:16,
  },
  cardprogress:{
    backgroundColor: 'rgba(240,4,60, 1)',
    borderRadius: 10,
    padding: 15,
    margin: 10,
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center'
  },
  flatlisttask:{
    flexDirection: 'row',
    gap: 10,
    padding: 10,
  }
});