import { db } from "@/firebase";
import { collection, doc, getDocs, getDoc } from "firebase/firestore";

// Fetch all documents from a collection
export async function FetchAllDocs(collectionName) {
  try {
    const collectionRef = collection(db, collectionName);
    const querySnapshot = await getDocs(collectionRef);
    const documents = querySnapshot.docs.map((doc) => ({
      id: doc.id,
      ...doc.data(),
    }));
    return documents;
  } catch (error) {
    console.error("Error fetching documents: ", error);
    throw error; // Throw the error to handle it in the calling code
  }
}

// Fetch a specific document by its ID
export async function FetchDocById(collectionName, docId) {
  try {
    const docRef = doc(db, collectionName, docId);
    const docSnapshot = await getDoc(docRef);
    if (docSnapshot.exists()) {
      return { id: docSnapshot.id, ...docSnapshot.data() };
    } else {
      console.log("No such document!");
      return null;
    }
  } catch (error) {
    console.error("Error fetching document: ", error);
    throw error; // Throw the error to handle it in the calling code
  }
};
