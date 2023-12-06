import { DatabaseConnection } from "./Connection";

const notes = DatabaseConnection.getConnectionDBNotes();

export const deleteNote = (id) => {
  notes.transaction(tx => {
    tx.executeSql(
      'DELETE FROM note WHERE id = ?',
      [id],
      () => {
        console.log('teste')
      },

    );
  });
};
