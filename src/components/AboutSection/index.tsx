import React from 'react';
import { faServer, faMobile, faDesktop } from '@fortawesome/free-solid-svg-icons';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import Card from 'components/input/Card';
import SectionTitle from 'components/input/SectionTitle';

const cx = classNames.bind(styles);

const cards = [
  {
    title: 'Web',
    description: 'Web development is the work involved in developing a Web site for the Internet or an intranet.',
    icon: faServer,
    href: '#'
  },
  {
    title: 'Mobile',
    description: 'Mobile app development is the act or process by which a mobile app is developed for mobile devices, such as personal digital assistants, enterprise digital assistants or mobile phones. ',
    icon: faMobile,
    href: '#'
  },
  {
    title: 'Desktop',
    description: 'The Windows API, informally WinAPI, is Microsoft\'s core set of application programming interfaces available in the Microsoft Windows operating systems.',
    icon: faDesktop,
    href: '#'
  }
];

const About: React.FC = () => {
  return (
    <div className={cx('about')}>
      <SectionTitle>Welcome To Website</SectionTitle>
      <div className={cx('cards')}>
        {
          cards.map(({title, description, icon, href}, cardIdx) => (
            <Card
              key={cardIdx}
              title={title}
              description={description}
              icon={icon}
              href={href}
            />
          ))
        }

      </div>
    </div>
  );
};

export default About;
