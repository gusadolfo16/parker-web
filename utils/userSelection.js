import { firestore } from '../firebase';

export const getUserList = async () => {
  const usersRef = firestore.collection('users');
  const snapshot = await usersRef.get();
  const users = [];
  snapshot.forEach((doc) => {
    users.push({ id: doc.id, ...doc.data() });
  });
  return users;
};

export const deleteUser = async (userId) => {
  const userRef = firestore.collection('users').doc(userId);

  try {
    await userRef.delete();
    // Handle successful deletion (e.g., update user list)
  } catch (error) {
    console.error('Error deleting user:', error);
    // Handle deletion errors (e.g., display error message)
  }
};
