import React from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import SectionTitle from 'components/input/SectionTitle';
import TeamCard from 'components/input/TeamCard';

// Resources
import team1 from 'resources/TeamSection/team_1.jpg';
import team2 from 'resources/TeamSection/team_2.jpg';
import team3 from 'resources/TeamSection/team_3.jpg';

const cx = classNames.bind(styles);

const teams = [
  {
    name: 'Emma',
    position: 'SERVER ENGINEER',
    img: team1,
    facebookLink: 'https://facebook.com/',
    googleLink: 'https://google.com/',
    twitterLink: 'https://twitter.com/',
  },
  {
    name: 'Isabella',
    position: 'WEB DESIGNER',
    img: team2,
    facebookLink: 'https://facebook.com/',
    googleLink: 'https://google.com/',
    twitterLink: 'https://twitter.com/',
  },
  {
    name: 'Sophia',
    position: 'WEB DESIGNER',
    img: team3,
    facebookLink: 'https://facebook.com/',
    googleLink: 'https://google.com/',
    twitterLink: 'https://twitter.com/',
  },
];

const Team: React.FC = () => {
  return (
    <div className={cx('container')}>
      <SectionTitle>Our Team</SectionTitle>
      <div className={cx('team-cards')}>
        {teams.map((team) => (
          <TeamCard
            name={team.name}
            position={team.position}
            img={team.img}
            facebookLink={team.facebookLink}
            googleLink={team.googleLink}
            twitterLink={team.twitterLink}
          />
        ))}
      </div>
    </div>
  );
};

export default Team;
