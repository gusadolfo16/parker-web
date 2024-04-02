import { firestore } from '../firebase';

export const markImageSelected = async (imageId, userId) => {
  const imageRef = firestore.collection('images').doc(imageId);
  const userRef = firestore.collection('users').doc(userId);

  try {
    await imageRef.update({ selectedBy: firebase.firestore.FieldValue.arrayUnion(userId) });
    await userRef.collection('selectedImages').doc(imageId).set({ selected: true });
  } catch (error) {
    console.error('Error marking image as selected:', error);
  }
};

export const unmarkImageSelected = async (imageId, userId) => {
  const imageRef = firestore.collection('images').doc(imageId);
  const userRef = firestore.collection('users').doc(userId);

  try {
    await imageRef.update({ selectedBy: firebase.firestore.FieldValue.arrayRemove(userId) });
    await userRef.collection('selectedImages').doc(imageId).delete();
  } catch (error) {
    console.error('Error unmarking image as selected:', error);
  }
};

export async function getImages(limit = 10, startAfter = null) {
    const imagesRef = firestore.collection('images').orderBy('createdAt', 'desc');
    const query = startAfter ? imagesRef.startAfter(startAfter) : imagesRef.limit(limit);
    const snapshot = await query.get();
    const images = [];
    snapshot.forEach((doc) => {
      images.push({ id: doc.id, ...doc.data() });
    });
    const lastVisible = snapshot.docs[snapshot.docs.length - 1];
    return { images, nextPage: lastVisible };
  }
  