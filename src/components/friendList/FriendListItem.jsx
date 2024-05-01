import PropTypes from "prop-types";
import css from "./FriendList.module.css";
import clsx from "clsx";
function FriendListItem({ friend: { avatar, name, isOnline } }) {
  return (
    <div className={css.cardFriend}>
      <img src={avatar} alt={name} width="48" />
      <p className={css.nameFriend}>{name}</p>

      {isOnline === true ? <p className={clsx(isOnline === true ?
         css.active : css.offline)}>Online

         </p>
          : <p className={clsx(isOnline === true ? css.active : css.offline)}>Offline
            </p>}
    </div>
  );
}
FriendListItem.propTypes = {
  name: PropTypes.string,
  isOnline: PropTypes.string,
  avatar: PropTypes.string,
};

export default FriendListItem;
