import { db } from "@/firebase";
import { collection, addDoc } from "firebase/firestore";

// Add a new document to a collection
export async function AddDoc(collectionName, newDoc) {
  try {
    const collectionRef = collection(db, collectionName);
    const docRef = await addDoc(collectionRef, newDoc);
    return { id: docRef.id, ...newDoc };
  } catch (error) {
    console.error("Error adding document: ", error);
    throw error; // Throw the error to handle it in the calling code
  }
}
