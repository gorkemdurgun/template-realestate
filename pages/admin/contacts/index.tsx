import {getContacts, updateContactStatus} from '@services';
import {useEffect, useState} from 'react';

import classes from './index.module.scss';
import {CustomText} from '@components';
import {FaUser, FaEnvelope, FaPhone, FaCalendar, FaCopy, FaReceipt, FaEye, FaEyeSlash, FaTrash} from 'react-icons/fa';

export default function Contacts() {
  const [contacts, setContacts] = useState<ContactForm[]>([]);
  const [activeTab, setActiveTab] = useState<string>('unread');

  useEffect(() => {
    getContacts().then(res => setContacts(res));
  }, []);

  function convertDate(date: Date) {
    const firebaseTimestamp = date;
    // @ts-ignore
    const dateObject = new Date(firebaseTimestamp.seconds * 1000);
    const humanDateFormat = dateObject.toLocaleString('tr-TR');
    const dateArray = humanDateFormat.split(' ');

    return {
      date: dateArray[0],
      time: dateArray[1],
    };
  }

  function onCopyClick(text: string) {
    navigator.clipboard.writeText(text);
  }
  function sortByDate(list: ContactForm[]) {
    return list.sort((a, b) => {
      // @ts-ignore
      return new Date(b.createdAt.seconds * 1000) - new Date(a.createdAt.seconds * 1000);
    });
  }
  function updateStatus(id: string, status: boolean) {
    updateContactStatus(id, status).then(res => {
      getContacts().then(res => setContacts(res));
    });
  }

  const ContactCard = ({contact}: {contact: ContactForm}) => {
    return (
      <div className={classes.card}>
        <div className={classes.cardRow}>
          <div className={classes.item}>
            <FaUser className={classes.icon} />
            <CustomText className={classes.text} text={contact.name + ' ' + contact.surname} />
            <FaCopy className={classes.copyIcon} onClick={() => onCopyClick(contact.name + ' ' + contact.surname)} />
          </div>
          <div className={classes.item}>
            <FaCalendar className={classes.icon} />
            <CustomText className={classes.text} text={convertDate(contact.createdAt).date} />
            <CustomText className={classes.text} text={convertDate(contact.createdAt).time} />
            <FaCopy
              className={classes.copyIcon}
              onClick={() =>
                onCopyClick(convertDate(contact.createdAt).date + ' ' + convertDate(contact.createdAt).time)
              }
            />
          </div>
        </div>
        <div className={classes.cardRow}>
          <div className={classes.item}>
            <FaPhone className={classes.icon} />
            <CustomText className={classes.text} text={contact.phone} />
            <FaCopy className={classes.copyIcon} onClick={() => onCopyClick(contact.phone)} />
          </div>
          <div className={classes.item}>
            <FaEnvelope className={classes.icon} />
            <CustomText className={classes.text} text={contact.email} />
            <FaCopy className={classes.copyIcon} onClick={() => onCopyClick(contact.email)} />
          </div>
        </div>
        <div aria-label="message" className={classes.item}>
          <FaReceipt className={classes.icon} />
          <CustomText className={classes.text} text={contact.message} />
          <FaCopy className={classes.copyIcon} onClick={() => onCopyClick(contact.message)} />
        </div>
        <div className={classes.actions}>
          {!contact.status && (
            <button className={classes.archiveButton} onClick={() => updateStatus(contact.id, !contact.status)}>
              <FaEyeSlash className={classes.icon} />
              <CustomText className={classes.text} text="Archive" />
            </button>
          )}
          {contact.status && (
            <button className={classes.archiveButton} onClick={() => updateStatus(contact.id, !contact.status)}>
              <FaEye className={classes.icon} />
              <CustomText className={classes.text} text="Unarchive" />
            </button>
          )}
          <button className={classes.deleteButton} onClick={() => console.log('delete')}>
            <FaTrash className={classes.icon} />
            <CustomText className={classes.text} text="Delete" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className={classes.adminContacts}>
      <div className={classes.tabs}>
        <button className={classes.tab} onClick={() => setActiveTab('unread')}>
          Unread
        </button>
        <button className={classes.tab} onClick={() => setActiveTab('archived')}>
          Archived
        </button>
      </div>
      {activeTab === 'unread' && (
        <div className={classes.section}>
          <CustomText className={classes.title} text="Unread Messages" />
          <div className={classes.contactsList}>
            {sortByDate(contacts)
              .filter(contact => !contact.status)
              .map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
          </div>
        </div>
      )}
      {activeTab === 'archived' && (
        <div className={classes.section}>
          <CustomText className={classes.title} text="Archived Messages" />
          <div className={classes.contactsList}>
            {sortByDate(contacts)
              .filter(contact => contact.status)
              .map((contact, index) => (
                <ContactCard key={index} contact={contact} />
              ))}
          </div>
        </div>
      )}
    </div>
  );
}
