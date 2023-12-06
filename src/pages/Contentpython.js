import { ScrollView, StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native';
import CardContent from '../components/CardContent';
import { SafeAreaView } from 'react-native-safe-area-context';
import { StatusBar } from 'expo-status-bar';
export default function ContentPython({ navigation }) {
    return (
        <SafeAreaView>
            <StatusBar backgroundColor='#FD043C' />
            <ScrollView style={{ height: '98%' }}>
                <View style={styles.header}>
                    <View>
                        <Text style={styles.title}>Python</Text>
                        <Text style={styles.subtitle}>Conteúdos do Curso Técnico em Informática</Text>
                    </View>
                </View>

                <View style={styles.contentlist}>
                    <Text style={{fontWeight: 'bold', fontSize: 18}}>
                        Capítulo 1 - Primeiros Passos
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur.
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                    <Text>
                        Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur. Lorem ipsun dolor sit amet consectetur
                    </Text>
                </View>

            </ScrollView>
        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        backgroundColor: '#fff',
    },
    title: {
        color: '#fff',
        fontSize: 24,
        fontWeight: 'bold'
    },
    subtitle: {
        color: '#EEE'
    },
    header: {
        paddingHorizontal: 10,
        paddingVertical: 30,
        backgroundColor: '#FD043C',
        flexDirection: 'row',
        alignItems: 'center',
    },
    contentlist: {
        width: '100%',
        padding: 10,
        gap: 10
    },
    containeraulas: {
        backgroundColor: 'white',
        height: 70,
        padding: 5,
        borderRadius: 10,
        elevation: 2,
        gap: 20
    }
});