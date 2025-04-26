import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  children?: React.ReactNode | string;
}

const cx = classNames.bind(styles);

const SectionTitle: React.FC<Props> = ({ className, children }) => {
  return (
    <h2 className={cx('section-title', className)}>{children}</h2>
  )
};

export default SectionTitle;