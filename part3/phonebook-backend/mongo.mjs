import mongoose from "mongoose";

const password = encodeURIComponent(process.argv[2]);

// create connection
// mongoose.set("strictQuery", false);
await mongoose.connect(
  `mongodb+srv://felix:${password}@cluster0.w3lsz5k.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`,
);

console.log("connected to MongoDB");
// create schema
const personSchema = new mongoose.Schema({
  name: String,
  number: String,
});

const Person = mongoose.model("Person", personSchema);

if (process.argv.length === 3) {
  const persons = await Person.find({});
  for (const person of persons) {
    console.log(person);
  }
} else {
  const newPerson = new Person({
    name: process.argv[3],
    number: process.argv[4],
  });
  await newPerson.save();
}

await mongoose.connection.close();
