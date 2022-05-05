import db from "./connect_mongo.ts";

const coll = db.collection("activities");

const { matchedCount, modifiedCount, upsertedId } = await coll.updateOne(
    { title: "The title 1651732112360" },
    { $set: { title: "Updated title ..."}}
);
console.log(matchedCount, modifiedCount, upsertedId);

const specificItem = await coll.findOne({
    title: "Updated title ..."
});
console.log(specificItem);