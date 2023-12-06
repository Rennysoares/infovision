
import { DatabaseConnection } from "./Connection";

const notes = DatabaseConnection.getConnectionDBNotes();

export const insertValues = (title, content, data) => {
    notes.transaction(tx => {
        tx.executeSql(
          'INSERT INTO note VALUES(null, ?, ?, ?)',
          [title, content, data],
          () => {
            console.log('Dados inseridos com sucesso');
          },
          error => {
            console.log('Erro ao criar tabela produto:', error);
          }
        );
      });
    };
