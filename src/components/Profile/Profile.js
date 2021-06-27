import React from 'react';
import PropTypes from 'prop-types';
import { BsPersonBoundingBox } from "react-icons/bs";
import css from './Profile.module.css'

const Profile = ({ name, tag, location, avatar, stats }) => {
  return (
    <div className={css.profile}>
      <div className={css.description} >
        <img className={css.avatar}
          src={avatar}
          alt="Аватар пользователя"

        />

        <p className={css.name}>{name}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.element}>
          <span className={css.label}>Followers</span>
          <span className={css.tag}> {stats.followers}</span>
        </li>
        <li className={css.element}>
          <span className={css.label}>Views</span>
          <span className={css.quantity}> {stats.views}</span>
        </li>
        <li className={css.element}>
          <span className={css.label}>Likes</span>
          <span className={css.quantity}> {stats.likes}</span>
        </li>
      </ul>
    </div >



  );
}
console.log(Profile)

Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string,
  stats: PropTypes.string.isRequired,
}

Profile.defaultProps = {
  avatar: <BsPersonBoundingBox size="100" />,
}

export default Profile;