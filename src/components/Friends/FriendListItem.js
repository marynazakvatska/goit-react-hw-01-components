import React from 'react';
import css from './Friends.module.css'

import PropTypes from 'prop-types';


export const FriendListItem = ({ avatar, name, isOnline }) =>
(
  <li className={css.item}>
    <span className={`${css.status} ${isOnline ? css.online : css.offline}`}>{isOnline}</span>
    <img className={css.avatar} src={avatar} alt={avatar} width="48" />
    <p className={css.name}>{name}</p>
  </li>
)

FriendListItem.propTypes = {

  friends: PropTypes.arrayOf(PropTypes.shape({
    isOnline: PropTypes.bool.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
  }))
}