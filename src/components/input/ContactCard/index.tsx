import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faPhone,
  faEnvelope,
  faMapMarkerAlt,
} from '@fortawesome/free-solid-svg-icons';

export type ContactCardType = 'phone' | 'email' | 'address';

interface Props {
  type: ContactCardType;
  value: string;
}

const cx = classNames.bind(styles);

const ContactCard: React.FC<Props> = ({ type, value }) => {
  let icon;

  switch (type) {
    case 'phone':
      icon = faPhone;
      break;
    case 'email':
      icon = faEnvelope;
      break;
    case 'address':
    default:
      icon = faMapMarkerAlt;
      break;
  }

  return (
    <div className={cx('container')}>
      <FontAwesomeIcon icon={icon} color="#6195ff" size="3x" />
      <h3>{type}</h3>
      <label>{value}</label>
    </div>
  );
};

export default ContactCard;
