import {collection, doc, setDoc} from '@firebase/firestore';
import {firestore} from '../../../../firebase-config';
import {Collections} from '../../collections';

export const addNoticeHouse = async (notice: HouseProperties) => {
  const noticesRef = collection(firestore, Collections.Notices);
  const newNoticeRef = doc(noticesRef);
  const newNotice = {
    ...notice,
    id: newNoticeRef.id,
  };
  await setDoc(newNoticeRef, newNotice);
  return newNotice;
};
