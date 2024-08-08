import goCollection from "@/data/questions/backend/goCollection.ts";
import python3Collection from './python3Collection.ts';
import djangoCollection from './djangoCollection.ts';
import sqlCollection from './sqlCollection.ts';
import databaseCollection from "@/data/questions/backend/databaseCollection.ts";
import postgresCollection from "@/data/questions/backend/postgresCollection.ts";

export default [
    goCollection,
    python3Collection,
    djangoCollection,
    databaseCollection,
    postgresCollection,
    sqlCollection
]
