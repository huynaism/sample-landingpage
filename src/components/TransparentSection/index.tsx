import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

interface Props {
  bgImg: string;
}

const cx = classNames.bind(styles);

const TransparentSection: React.FC<Props> = ({ bgImg }) => {
  return (
    <div
      className={cx('section')}
      style={{ backgroundImage: `url(${bgImg})` }}
    ></div>
  );
};

export default TransparentSection;
