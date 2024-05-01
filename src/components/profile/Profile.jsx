import PropTypes from "prop-types";
import css from "./Profile.module.css";
const Profile = ({ name, tag, location, image, stats }) => (
  <div className={css.textContact}>
    <div className={css.imageUser}>
      <img src={image} alt={name} />
      <p className={css.nameUser}>{name}</p>
      <p className={css.infoUser}>@{tag}</p>
      <p className={css.infoUser}>{location}</p>
    </div>

    <ul className={css.listInfo}>
      <li className={css.listItemInfo}>
        <span>Followers</span>
        <spanc className={css.statsUser}>{stats.followers}</spanc>
      </li>
      <li className={css.listItemInfo}>
        <span>Views</span>
        <span className={css.statsUser}>{stats.views}</span>
      </li>
      <li className={css.listItemInfo}>
        <span>Likes</span>
        <span className={css.statsUser}>{stats.likes}</span>
      </li>
    </ul>
  </div>
);
Profile.propTypes = {
  name: PropTypes.string.isRequired,
  tag: PropTypes.string,
  location: PropTypes.string,
  image: PropTypes.string,
  //stats: PropTypes.number.isRequired,
};

export default Profile;
