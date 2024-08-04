import { db } from "@/firebase";
import { doc, deleteDoc } from "firebase/firestore";

// Delete a document by its ID
export async function DeleteDoc(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    await deleteDoc(docRef);
    return { id: docId };
  } catch (error) {
    console.error("Error deleting document: ", error);
    throw error; // Throw the error to handle it in the calling code
  }
}
