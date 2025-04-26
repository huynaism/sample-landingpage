import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import SectionTitle from 'components/input/SectionTitle';
import ContactCard, { ContactCardType } from 'components/input/ContactCard';
import ContactMessageForm from 'components/input/ContactMessageForm';

interface Props {
  className?: string;
}

const contactList: { type: ContactCardType; value: string }[] = [
  {
    type: 'phone',
    value: '+82-10-1234-1004',
  },
  {
    type: 'email',
    value: 'email@addres.com',
  },
  {
    type: 'address',
    value: 'Seoul',
  },
];

const cx = classNames.bind(styles);

const Contact: React.FC<Props> = ({ className }) => {
  return (
    <div className={cx('container', className)}>
      <SectionTitle>Contact Us</SectionTitle>
      <div className={cx('contact-cards')}>
        {contactList.map((contact, index) => (
          <ContactCard key={index} type={contact.type} value={contact.value} />
        ))}
      </div>
      {/* <ContactMessageForm /> */}
    </div>
  );
};

export default Contact;
