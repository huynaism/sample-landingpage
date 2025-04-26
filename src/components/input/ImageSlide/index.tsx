import React, { useState, useEffect, useMemo, useCallback } from 'react';
import classNames from 'classnames/bind';
import styles from './styles.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from '@fortawesome/free-solid-svg-icons';

interface Props {
  imgs: string[];
}

const cx = classNames.bind(styles);

const ImageSlide: React.FC<Props> = ({ imgs }) => {
  const [imgIdx, setImgIdx] = useState<number>(0);
  const imgLength = useMemo(() => imgs.length, [imgs]);

  const prevImage = useCallback(
    () => setImgIdx(imgIdx - 1 < 0 ? imgs.length - 1 : imgIdx - 1),
    [imgIdx, imgs]
  );
  const nextImage = useCallback(
    () => setImgIdx(imgIdx + 1 >= imgs.length ? 0 : imgIdx + 1),
    [imgIdx, imgs]
  );

  useEffect(() => {
    const tm = setInterval(() => {
      nextImage();
    }, 3000);

    return () => clearInterval(tm);
  }, [nextImage]);

  return (
    <div className={cx('container')}>
      <div className={cx('slide')}>
        <img src={imgs[imgIdx]} alt="slide" />
      </div>
      <div className={cx('paging')}>
        {Array(imgLength)
          .fill(0)
          .map((_, idx) => (
            <div
              key={idx}
              className={cx('bullet', { active: imgIdx === idx })}
              onClick={() => setImgIdx(idx)}
            ></div>
          ))}
      </div>
      <div className={cx('overlay')}>
        <div className={cx('prev-btn', 'btn')} onClick={prevImage}>
          <FontAwesomeIcon color="white" icon={faAngleLeft} />
        </div>
        <div className={cx('next-btn', 'btn')} onClick={nextImage}>
          <FontAwesomeIcon color="white" icon={faAngleRight} />
        </div>
      </div>
    </div>
  );
};

export default ImageSlide;
