
import { DatabaseConnection } from "./Connection";

const notes = DatabaseConnection.getConnectionDBNotes();

export const fetchQueries = (setNotes) => {
    notes.transaction(tx => {
        tx.executeSql(
          'SELECT * FROM note',
          [],
          (tx, results) => {
            var queries = [];
            for (let i = 0; i < results.rows.length; ++i){
                queries.push(results.rows.item(i));
            }
            setNotes(queries)
            //console.log(queries)
          },
          error => {
            console.log('Erro ao consultar tabela nota:', error);
          }
        );
      });
    };
