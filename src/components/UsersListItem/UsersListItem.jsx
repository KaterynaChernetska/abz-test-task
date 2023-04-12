import scss from './UsersListItem.module.scss';
import { ReactComponent as PhotoCover } from '../../images/photo-cover.svg';
import { useState } from 'react';
const UsersListItem = ({
  userInfo: {
    email,
    id,
    name,
    phone,
    photo,
    position,
    position_id,
    registration_timestamp,
  },
}) => {
  const [showImage, setShowImage] = useState(true);
  const checkLength = str => (str.length > 30 ? str.slice(0, 30) + '...' : str);

  const handleImgError = () => {
    setShowImage(false);
  };
  return (
    <li className={scss.userCard}>
      <div>
        {showImage ? (
          <img
            onError={handleImgError}
            className={scss.userImg}
            src={photo}
            alt={name}
          />
        ) : (
          <PhotoCover />
        )}
      </div>
      <p className={scss.userName}>{checkLength(name)}</p>
      <p className={scss.userPosition}>{checkLength(position)}</p>
      <p className={scss.userEmail}>{checkLength(email)}</p>
      <p className={scss.userPhone}>{checkLength(phone)}</p>
    </li>
  );
};

export default UsersListItem;
