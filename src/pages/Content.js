import { ScrollView, StyleSheet, Text, View, Image } from 'react-native';
import CardContent from '../components/CardContent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function Content({navigation}) {
  return (
    <SafeAreaView>
      <StatusBar backgroundColor='#FD043C'/>
      <ScrollView style={{height:'98%'}}>
        <View style={styles.header}>
          <View>
            <Text style={styles.title}>Conteúdos</Text>
            <Text style={styles.subtitle}>Conteúdos do Curso Técnico em Informática</Text>
          </View>
      </View>
      
        <View style={styles.contentlist}>
          <CardContent
            title={'Lógica de programação (Python)'}
            source={require('../../assets/python-original.png')}
            navigation={navigation}
            nav='Python'
            />
          <CardContent
            title={'Banco de Dados (SQL)'}
            source={require('../../assets/mysql-original.png')}/>
          <CardContent
            title={'Programação Orientada a Objetos (Java)'}
            source={require('../../assets/java-original.png')}/>
          <CardContent
            title={'Programação para Dispositivos Móveis (JavaScript - React Native)'}
            source={require('../../assets/react-original.png')}/>
          <CardContent
            title={'Programação Web (HTML)'}
            source={require('../../assets/html5-original.png')}/>
            <CardContent
            title={'Programação Web (CSS)'}
            source={require('../../assets/css3-original.png')}/>
            <CardContent
            title={'Programação Web (JS)'}
            source={require('../../assets/javascript-original.png')}/>
            <CardContent
            title={'Programação Web (PHP)'}
            source={require('../../assets/php-original.png')}/>
          </View>
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
  },
  title:{
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold'
  },
  subtitle:{
    color: '#EEE'
  },
  header:{
    paddingHorizontal: 10,
    paddingVertical: 30,
    backgroundColor: '#FD043C',
    flexDirection: 'row',
    alignItems: 'center',
  },
  contentlist:{
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center'
  }
});