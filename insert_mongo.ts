import db from "./connect_mongo.ts";

const coll = db.collection("activities");

const activity = {
    id: 1,
    "title": `The title ${Date.now()}`,
    "body": `The body ${Date.now()}`
}
coll.insertOne(activity);