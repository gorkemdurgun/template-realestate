import {NextPage} from 'next';
import {useState} from 'react';
import {addNoticeHouse} from '@services';

import classes from './index.module.scss';
import {CustomText} from '@components';

const AddNotice: NextPage = () => {
  const [newNotice, setNewNotice] = useState<ApartmentProperties>({
    published_at: Date.now().toString(),
    id: '',
    title: '',
    description: {
      en: '',
      tr: '',
      ar: '',
    },
    address: {
      city: '',
      district: '',
      street: '',
      neighborhood: '',
      no: '',
      postal_code: '',
    },
    images: [],
    bathroom_count: 0,
    building_age: '0-2',
    floor_count: 0,
    floor_location: 0,
    house_type: 'apartment',
    have_balcony: false,
    have_elevator: false,
    have_furniture: false,
    have_parking: false,
    have_due: false,
    have_garden: false,
    have_terrace: false,
    in_site: false,
    site_name: '',
    status: 'active',
    heating_type: 'central',
    notice_type: 'rent',
    notice_category: 'house',
    square_meter_gross: 0,
    square_meter_net: 0,
    due_amount: 0,
    furnished: false,
    credit_eligible: false,
    swap_eligible: false,
    price: 0,
    room_count: '1+0',
  } as ApartmentProperties);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNotice({...newNotice, [e.target.name]: e.target.value});
  };
  const handleChangeDescription = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNotice({
      ...newNotice,
      description: {...newNotice.description, [e.target.name]: e.target.value},
    });
  };
  const handleChangePrice = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNotice({...newNotice, price: parseInt(e.target.value)});
  };

  const handleChangeAddress = (e: React.ChangeEvent<HTMLInputElement>) => {
    setNewNotice({
      ...newNotice,
      address: {...newNotice.address, [e.target.name]: e.target.value},
    });
  };

  const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
    setNewNotice({...newNotice, [e.target.name]: e.target.value});
  };

  return (
    <div className={classes.container}>
      <div className={classes.formContainer}>
        {/* Overview */}
        <div className={classes.formSection}>
          <CustomText className={classes.header} text={'Overview'} />
          <div className={classes.formItem}>
            <label>{'Title'}</label>
            <input
              className={classes.input}
              value={newNotice.title}
              onChange={handleChange}
              name={'title'}
              type={'text'}
              placeholder={'Title'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Description English'}</label>
            <input
              className={classes.input}
              value={newNotice.description.en}
              onChange={handleChangeDescription}
              name={'en'}
              type={'text'}
              placeholder={'Description English'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Description Turkish'}</label>
            <input
              className={classes.input}
              value={newNotice.description.tr}
              onChange={handleChangeDescription}
              name={'tr'}
              type={'text'}
              placeholder={'Description Turkish'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Description Arabic'}</label>
            <input
              className={classes.input}
              value={newNotice.description.ar}
              onChange={handleChangeDescription}
              name={'ar'}
              type={'text'}
              placeholder={'Description Arabic'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Price'}</label>
            <input
              className={classes.input}
              value={newNotice.price}
              onChange={handleChangePrice}
              name={'price'}
              type={'number'}
              placeholder={'Price'}
            />
          </div>
        </div>
        {/* House Type */}
        <div className={classes.formSection}>
          <CustomText className={classes.header} text={'House Type'} />
          <div className={classes.formItem}>
            <label>{'Square Meter Net'}</label>
            <input
              className={classes.input}
              value={newNotice.square_meter_net}
              onChange={handleChange}
              name={'square_meter_net'}
              type={'number'}
              placeholder={'Square Meter Net'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Square Meter Gross'}</label>
            <input
              className={classes.input}
              value={newNotice.square_meter_gross}
              onChange={handleChange}
              name={'square_meter_gross'}
              type={'number'}
              placeholder={'Square Meter Gross'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Room Count'}</label>
            <select
              className={classes.select}
              value={newNotice.room_count}
              onChange={handleSelect}
              name={'room_count'}
              placeholder={'Room Count'}>
              <option value={'1+0'}>{'1+0'}</option>
              <option value={'1+1'}>{'1+1'}</option>
              <option value={'2+1'}>{'2+1'}</option>
              <option value={'3+1'}>{'3+1'}</option>
              <option value={'4+1'}>{'4+1'}</option>
              <option value={'5+1'}>{'5+1'}</option>
              <option value={'6+1'}>{'6+1'}</option>
            </select>
          </div>
          <div className={classes.formItem}>
            <label>{'Bathroom Count'}</label>
            <input
              className={classes.input}
              value={newNotice.bathroom_count}
              onChange={handleChange}
              name={'bathroom_count'}
              type={'number'}
              placeholder={'Bathroom Count'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Floor Count'}</label>
            <input
              className={classes.input}
              value={newNotice.floor_count}
              onChange={handleChange}
              name={'floor_count'}
              type={'number'}
              placeholder={'Floor Count'}
            />
          </div>
        </div>
        {/* Address */}
        <div className={classes.formSection}>
          <CustomText className={classes.header} text={'Address'} />
          <div className={classes.formItem}>
            <label>{'City'}</label>
            <input
              className={classes.input}
              value={newNotice.address.city}
              onChange={handleChangeAddress}
              name={'city'}
              type={'text'}
              placeholder={'City'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'District'}</label>
            <input
              className={classes.input}
              value={newNotice.address.district}
              onChange={handleChangeAddress}
              name={'district'}
              type={'text'}
              placeholder={'District'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Street'}</label>
            <input
              className={classes.input}
              value={newNotice.address.street}
              onChange={handleChangeAddress}
              name={'street'}
              type={'text'}
              placeholder={'Street'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Neighborhood'}</label>
            <input
              className={classes.input}
              value={newNotice.address.neighborhood}
              onChange={handleChangeAddress}
              name={'neighborhood'}
              type={'text'}
              placeholder={'Neighborhood'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'No'}</label>
            <input
              className={classes.input}
              value={newNotice.address.no}
              onChange={handleChangeAddress}
              name={'no'}
              type={'text'}
              placeholder={'No'}
            />
          </div>
          <div className={classes.formItem}>
            <label>{'Postal Code'}</label>
            <input
              className={classes.input}
              value={newNotice.address.postal_code}
              onChange={handleChangeAddress}
              name={'postal_code'}
              type={'text'}
              placeholder={'Postal Code'}
            />
          </div>
        </div>
        {/* House Features */}
        <div className={classes.checkSection}>
          <CustomText className={classes.header} text={'House Features'} />
          <div className={classes.list}>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.have_balcony}
                onChange={() => setNewNotice({...newNotice, have_balcony: !newNotice.have_balcony})}
                name={'have_balcony'}
                type={'checkbox'}
              />
              <label>{'Balcony'}</label>
            </div>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.have_elevator}
                onChange={() => setNewNotice({...newNotice, have_elevator: !newNotice.have_elevator})}
                name={'have_elevator'}
                type={'checkbox'}
              />
              <label>{'Elevator'}</label>
            </div>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.furnished}
                onChange={() => setNewNotice({...newNotice, furnished: !newNotice.furnished})}
                name={'have_furniture'}
                type={'checkbox'}
              />
              <label>{'Furniture'}</label>
            </div>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.have_parking}
                onChange={() => setNewNotice({...newNotice, have_parking: !newNotice.have_parking})}
                name={'have_parking'}
                type={'checkbox'}
              />
              <label>{'Parking'}</label>
            </div>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.have_due}
                onChange={() => setNewNotice({...newNotice, have_due: !newNotice.have_due})}
                name={'have_due'}
                type={'checkbox'}
              />
              <label>{'Due'}</label>
            </div>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.have_garden}
                onChange={() => setNewNotice({...newNotice, have_garden: !newNotice.have_garden})}
                name={'have_garden'}
                type={'checkbox'}
              />
              <label>{'Garden'}</label>
            </div>
            <div className={classes.checkItem}>
              <input
                className={classes.checkbox}
                checked={newNotice.have_terrace}
                onChange={() => setNewNotice({...newNotice, have_terrace: !newNotice.have_terrace})}
                name={'have_terrace'}
                type={'checkbox'}
              />
              <label>{'Terrace'}</label>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.buttonContainer}>
        <button className={classes.cancelButton} onClick={() => console.log('cancel')}>
          Cancel
        </button>
        <button className={classes.submitButton} onClick={() => console.log('addNoticeHouse', newNotice)}>
          Add Notice
        </button>
      </div>
    </div>
  );
};

export default AddNotice;
