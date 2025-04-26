import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import SectionTitle from 'components/input/SectionTitle';
import PortfolioCard from 'components/input/PortfolioCard';

// Resources
import Card1 from 'resources/PortfolioSection/card1.jpg';
import Card2 from 'resources/PortfolioSection/card2.jpg';
import Card3 from 'resources/PortfolioSection/card3.jpg';
import Card4 from 'resources/PortfolioSection/card4.jpg';
import Card5 from 'resources/PortfolioSection/card5.jpg';
import Card6 from 'resources/PortfolioSection/card6.jpg';

const cx = classNames.bind(styles);
const cardImgs = [Card1, Card2, Card3, Card4, Card5, Card6];

const Portfolio: React.FC = () => {
  return (
    <div className={cx('container')}>
      <SectionTitle>Featured Works</SectionTitle>
      <div className={cx('portfolio-cards')}>
        {
          cardImgs.map((cardImg, cardImgIdx) => (
            <PortfolioCard key={cardImgIdx} img={cardImg} />
          ))
        }
      </div>
    </div>
  );
};

export default Portfolio;
