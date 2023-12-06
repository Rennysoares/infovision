import { useEffect, useState, useContext } from 'react';
import { StyleSheet, Text, View, FlatList, Button, TouchableOpacity, Modal } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';

import { createTables } from '../databases/CreateTable';
import { insertValues } from '../databases/InsertQueries';
import { fetchQueries } from '../databases/FetchQueries';
import { deleteNote } from '../databases/DeleteQueries';

import { DatabaseConnection } from "../databases/Connection";

import { AntDesign } from '@expo/vector-icons'
import Context from '../context/Context';

export default function Notes({ navigation, route }) {

  const {data, setData} = useContext(Context);
  
  const db = DatabaseConnection.getConnectionDBNotes();
  const [notes, setNotes] = useState([]);
  const [modal, setModal] = useState(false);
  const [idSelected, setIdSelected] = useState('')

  useEffect(() => {
    createTables();
  }, []);

  useEffect(() => {
    const unsubscribe = navigation.addListener('focus', () => {
      fetchQueries(setNotes);
    });
    unsubscribe;
  }, [navigation])

  const Item = ({ title, content, date, id }) => (
    <TouchableOpacity
      onPress={()=>{navigation.navigate('EditNote')}}
    >
      <View style={{ marginTop: 20 }}>
        <View style={styles.item}>

          <TouchableOpacity
            onPress={() => { setIdSelected(id); setModal(true) }}
            style={{ position: 'absolute', right: 0, padding: 10, zIndex: 1 }}
          >
            <AntDesign name='close' size={20} color={'black'} />
          </TouchableOpacity>

          <Text style={styles.titleflat}>{title}</Text>
          <Text>{content}</Text>
        </View>
        <Text style={styles.dateflat}>{date}</Text>
      </View>
    </TouchableOpacity>
  );
  return (
    <SafeAreaView>
      <FlatList
        data={notes}
        extraData={notes}
        renderItem={({ item }) => <Item title={item.titulo} content={item.content} date={item.datacreate} id={item.id} />}
        keyExtractor={item => item.id}
        numColumns={2}
        columnWrapperStyle={{ justifyContent: 'space-evenly' }}
      />
      <Modal
        visible={modal}
        transparent={true}
        animationType="fade"
      >
        <View style={styles.centermodal}>
          <View style={styles.modal}>
            <Text style={{ textAlign: 'center' }}>Tem certeza?</Text>
            <View style={{ flexDirection: 'row', justifyContent: 'space-evenly' }}>
              <TouchableOpacity
                onPress={() => { deleteNote(idSelected); fetchQueries(setNotes); setModal(false) }}
              >
                <View style={[styles.buttonmodal, { backgroundColor: 'rgb(0, 255, 0 )' }]}>
                  <Text>Sim</Text>
                </View>
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => { setModal(false) }}
              >
                <View style={[styles.buttonmodal, { backgroundColor: 'rgb(255, 0, 0 )' }]}>
                  <Text>Não</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </Modal>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  item: {
    width: 165,
    height: 200,
    overflow: 'hidden',
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 10,
    margin: 3,
    borderRadius: 10
  },
  dateflat: {
    textAlign: 'center',
    fontSize: 12
  },
  titleflat: {
    fontSize: 15,
    fontWeight: 'bold',
    textAlign: 'center'
  },
  buttonmodal: {
    borderRadius: 10,
    height: 40,
    width: 90,
    alignItems: 'center',
    justifyContent: 'center'
  },
  txtbuttonmodal: {
    fontWeight: 'bold',
    fontSize: 16,
  },
  modal: {
    backgroundColor: 'rgb(255, 255, 255)',
    padding: 20,
    height: '25%',
    width: '75%',
    borderRadius: 15,
    rowGap: 5,
    justifyContent: 'space-around'
  },
  centermodal: {
    height: '100%',
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.3)'
  },
});