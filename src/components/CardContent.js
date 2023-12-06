import { StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
export default function CardContent({title, source, navigation, nav}) {
  return (
    <View>
        <TouchableOpacity
            onPress={()=>{navigation.navigate(nav)}}
        >
            <View style={styles.container}>
                <Image
                    source={source}
                    style={{height: 50, width:50}}
                />
            <Text style={styles.title}>{title}</Text>
            </View>
        </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    flexDirection: 'column',
    width: 300,
    height: 110,
    borderRadius: 20,
    marginVertical: 10
  },
  title:{
    textAlign: 'center',
    width: 250
  }
});