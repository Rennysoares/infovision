
import { DatabaseConnection } from "./Connection";

const notes = DatabaseConnection.getConnectionDBNotes();

export const createTables = () => {
    notes.transaction(tx => {
        tx.executeSql(
          'CREATE TABLE IF NOT EXISTS note (id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, content TEXT, datacreate TEXT)',
          [],
          () => {
            console.log('tabela note criada com sucesso ou verificada se existe');
          },
          error => {
            console.log('Erro ao criar tabela produto:', error);
          }
        );
      });
    };
