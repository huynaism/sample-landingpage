import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

interface Props {
  className?: string;
  title?: string;
  description?: string;
  icon?: any;
  href?: string;
}

const cx = classNames.bind(styles);

const Card: React.FC<Props> = ({ className, title, description, icon, href}) => {
  return (
    <div className={cx('card', className)}>
      <FontAwesomeIcon
        color='rgb(97, 149, 255)'
        className={cx('card-icon')}
        icon={icon}
        size={'2x'}
      />
      <h3>{title}</h3>
      <p>{description}</p>
      <a href={href}>Read more</a>
    </div>
  )
};

export default Card;