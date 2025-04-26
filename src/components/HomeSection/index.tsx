import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Button from 'components/input/Button';

// Resoucres
import bgImg from 'resources/HomeSection/bg.jpg';

const cx = classNames.bind(styles);

const Home: React.FC = () => {
  return (
    <div className={cx('home')}>
      <div
        className={cx('bg')}
        style={{ backgroundImage: `url(${bgImg})` }}
      ></div>
      <div className={cx('intro')}>
        <h1>I am frontend engineer</h1>
        <p>
          “Being the richest man in the cemetery doesn’t matter to me. Going to
          bed at night saying we’ve done something wonderful… that’s what
          matters to me.” ― Steve Jobs
        </p>
        <div className={cx('btns')}>
          <Button className={cx('btn')}>Get Started!</Button>
          <Button className={cx('btn')} type="primary">
            Learn more
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Home;
