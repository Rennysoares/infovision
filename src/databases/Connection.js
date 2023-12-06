import * as SQLite from "expo-sqlite";

//Conexão ao banco de dados

export const DatabaseConnection = {
    getConnectionDBNotes: () => SQLite.openDatabase("note.db"),
};
