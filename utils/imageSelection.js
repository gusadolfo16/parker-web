import { doc, updateDoc } from "firebase/firestore";
import { db } from "../firebase";

const trackSelection = async (imageId, userId, selected) => {
  const imageRef = doc(db, "images", imageId);
  try {
    const updateData = {
      selectedUsers: selected ? [...selectedUsers, userId] : selectedUsers.filter(id => id !== userId)
    };
    await updateDoc(imageRef, updateData);
  } catch (error) {
    console.error("Error updating image selection:", error);
    throw error; // Re-throw the error for handling in the calling component
  }
};

export default trackSelection;
