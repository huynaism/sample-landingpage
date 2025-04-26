import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import SectionTitle from 'components/input/SectionTitle';
import PlanCard from 'components/input/PlanCard';

const cx = classNames.bind(styles);

const plans: {
  price: number;
  perDate: 'day' | 'month' | 'year';
  title: string;
  features: string[];
  href: string;
}[] = [
  {
    title: 'FREE',
    price: 0,
    perDate: 'month',
    href: '#',
    features: ['100MB Network egress', '1GB Stored data', '24/24 Support'],
  },
  {
    title: 'BASIC',
    price: 3,
    perDate: 'month',
    href: '#',
    features: ['5GB Network egress', '20GB Stored data', '24/24 Support'],
  },
  {
    title: 'PRO',
    price: 10,
    perDate: 'month',
    href: '#',
    features: ['100GB Network egress', '1TB Stored data', '24/24 Support'],
  },
];

const Prices: React.FC = () => {
  return (
    <div className={cx('prices-section')}>
      <SectionTitle>Pricing Table</SectionTitle>
      <div className={cx('plans')}>
        {plans.map((plan, planIdx) => (
          <PlanCard
            key={planIdx}
            href={plan.href}
            title={plan.title}
            price={plan.price}
            perDate={plan.perDate}
            features={plan.features}
          />
        ))}
      </div>
    </div>
  );
};

export default Prices;
