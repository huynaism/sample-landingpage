import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

interface Props {
  className?: string;
}

const cx = classNames.bind(styles);

const ContactMessageForm: React.FC<Props> = () => {
  return (
    <div className={cx('message-form')}>
      <form>
        <div className={cx('form-group')}>
          <input type="text" placeholder="NAME" />
          <input type="text" placeholder="EMAIL" />
        </div>
        <div className={cx('form-group')}>
          <input type="text" placeholder="SUBJECT" />
        </div>
        <div className={cx('form-group')}>
          <textarea placeholder="MESSAGE"></textarea>
        </div>
      </form>
    </div>
  );
};

export default ContactMessageForm;
