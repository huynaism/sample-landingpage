import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Button from 'components/input/Button';

interface Props {
  className?: string;
  title: string;
  price: number;
  perDate: 'day' | 'month' | 'year';
  features?: string[];
  href?: string;
}

const cx = classNames.bind(styles);

const PlanCard: React.FC<Props> = ({
  className,
  title,
  price,
  perDate,
  features,
  href,
}) => {
  return (
    <div className={cx('plan-card', className)}>
      <h3>{title}</h3>
      <div className={cx('price')}>
        <span>${price}</span>
        <label>/ ${perDate}</label>
      </div>
      <div className={cx('features')}>
        {features &&
          features.map((feature, featureIdx) => (
            <span key={featureIdx}>{feature}</span>
          ))}
      </div>
      <Button type="primary-inverse">Purchase</Button>
    </div>
  );
};

export default PlanCard;
