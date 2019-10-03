import React from 'react';
import classes from './PhoneList.css';

import Phone from './Phone/Phone';

const phoneList = props => {
  const phoneList = props.phones.map((phone, index) => {
    return (
      <li className={classes.Phone} key={phone.id}>
        <Phone
          thumbnail={phone.thumbnail}
          name={phone.name}
          price={phone.price}
          clicked={props.clicked.bind(this, phone.id)}
        />
      </li>
    );
  });

  return <ul className={classes.PhoneCatalog}>{phoneList}</ul>;
};

export default phoneList;
