import { StyleSheet, Text, View } from 'react-native';
import { Entypo } from '@expo/vector-icons'

export default function ButtonPlus({focused, size}) {
  return (
    <View style={styles.container}>
      <Entypo name='plus' size={size} color={focused ? '#FFF' : '#e8e8e8'}/>
    </View>
  );
}

const styles = StyleSheet.create({
  container:{
    width: 60,
    height: 60,
    borderRadius: 30,
    backgroundColor:'#FD043C',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20
  }
});