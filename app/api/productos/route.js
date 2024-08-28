import { collection, getDocs, query , doc, setDoc, } from "firebase/firestore";
import { db }  from "@/app/firebase/config.js";

export async function POST(request ) {

    const users = collection(db, 'users', )
    
    console.log("entro 1");
    // Add a new document in collection "cities"
    const result = await setDoc(doc(db, "users", "LA"), {
      name: "Los Angeles",
      email: "fersaavedra-1@email.com",
      country: "USA"
    });
    
console.log('result',result);
  return Response.json({ 'msg': 'POST data'});
}

export async function GET(request ) {

  const users = collection(db, 'users')
  console.log(users);
 // const query = query(users, where('email', '==', 'fersaavedra85@hotmail.com'));
  
 const querySnapshot = await getDocs(users);
 console.log(querySnapshot);

const docs = querySnapshot.docs.map(doc => doc.data());
console.log(docs);

  return Response.json({ 'msg': 'GET data'});
}

