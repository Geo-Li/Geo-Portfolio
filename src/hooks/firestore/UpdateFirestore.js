import { db } from "@/firebase";
import { doc, updateDoc } from "firebase/firestore";

// Update an existing document by its ID
export async function UpdateDoc(collectionName, docId, updatedData) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, updatedData);
    return { id: docId, ...updatedData };
  } catch (error) {
    console.error("Error updating document: ", error);
    throw error; // Throw the error to handle it in the calling code
  }
}

// Update an existing document's field by its ID
export async function UpdateDocField(
  collectionName,
  docId,
  fieldName,
  newValue
) {
  try {
    const docRef = doc(db, collectionName, docId);
    await updateDoc(docRef, {
      [fieldName]: newValue,
    });
    console.log("Field updated successfully");
  } catch (error) {
    console.error("Error updating field: ", error);
    throw error;
  }
}
