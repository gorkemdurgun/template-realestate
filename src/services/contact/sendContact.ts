import {collection, addDoc} from '@firebase/firestore';
import {firestore} from '../../../firebase-config';
import {Collections} from 'services/collections';

export const sendContact = async (contactForm: ContactForm) => {
  const currentDateTime = new Date();
  await addDoc(collection(firestore, Collections.Contacts), {
    ...contactForm,
    createdAt: currentDateTime,
    status: false,
  });
};
