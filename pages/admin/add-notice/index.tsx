import {NextPage} from 'next';
import {useState} from 'react';
import {addNoticeHouse} from '@services';

import classes from './index.module.scss';

const AddNotice: NextPage = () => {
  const [newNotice, setNewNotice] = useState<HouseProperties>({
    id: '',
    title: '',
    published_at: Date.now().toString(),
  } as HouseProperties);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.name === 'price')
      setNewNotice(prev => ({
        ...prev,
        [e.target.name]: Number(e.target.value),
      }));
    else if (e.target.name === 'image') {
      setNewNotice(prev => ({
        ...prev,
        images: [e.target.value],
      }));
    } else
      setNewNotice(prev => ({
        ...prev,
        [e.target.name]: e.target.value,
      }));
  };

  return (
    <div className={classes.container}>
      <h1>Add Notice</h1>
      <input onChange={onChange} name="title" type="text" placeholder="Title" />
      <input onChange={onChange} name="description" type="text" placeholder="Description" />
      <input onChange={onChange} name="price" type="number" placeholder="Price" />
      <input onChange={onChange} name="image" type="text" placeholder="Image" />
      <button onClick={() => addNoticeHouse(newNotice)}>Add Notice</button>
    </div>
  );
};

export default AddNotice;
