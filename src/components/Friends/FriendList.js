import React from 'react';
import css from './Friends.module.css'
import PropTypes from 'prop-types';
import { FriendListItem } from './FriendListItem';


export const FriendList = ({ friends }) =>
(
    <ul className={css.friendList}>
        {friends.map(({ id, name, avatar, isOnline }) => {
            return (
                <FriendListItem key={id}
                    avatar={avatar}
                    name={name}
                    isOnline={isOnline} />
            );
        })}
    </ul>
)



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({
        id: PropTypes.number.isRequired,
        name: PropTypes.string.isRequired,
        avatar: PropTypes.string.isRequired,
        isOnline: PropTypes.bool.isRequired,
    }),
    ).isRequired,

};

