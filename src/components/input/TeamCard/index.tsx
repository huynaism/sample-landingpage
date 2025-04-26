import React from 'react';
import {
  faFacebookF,
  faGooglePlusG,
  faTwitter,
} from '@fortawesome/free-brands-svg-icons';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';

// Components
import IconLink from 'components/input/IconLink';

interface Props {
  name: string;
  position: string;
  img: string;
  facebookLink?: string;
  googleLink?: string;
  twitterLink?: string;
}

const cx = classNames.bind(styles);

const TeamCard: React.FC<Props> = ({
  name,
  position,
  img,
  facebookLink,
  googleLink,
  twitterLink,
}) => {
  return (
    <div className={cx('team-card')}>
      <img src={img} alt="person" />
      <h3>{name}</h3>
      <span>{position}</span>
      <div className={cx('overlay')}>
        <IconLink
          className={cx('social-icon')}
          icon={faFacebookF}
          href={facebookLink}
        />
        <IconLink
          className={cx('social-icon')}
          icon={faGooglePlusG}
          href={googleLink}
        />
        <IconLink
          className={cx('social-icon')}
          icon={faTwitter}
          href={twitterLink}
        />
      </div>
    </div>
  );
};

export default TeamCard;
