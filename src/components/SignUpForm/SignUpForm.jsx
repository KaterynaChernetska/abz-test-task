import { MiniLoader } from 'components/MiniLoader/MiniLoader';
import RadioButtons from 'components/RadioButtons/RadioButtons';
import Success from 'components/Success/Success';
import TextInputs from 'components/TextInputs/TextInputs';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/usersOperations';
import { postUser } from 'services/api';
import scss from './SignUpForm.module.scss';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(1);
  const [photo, setPhoto] = useState(null);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isDisabled, setDisabled] = useState(true);
  const dispatch = useDispatch();

  const userMap = {
    name: setName,
    email: setEmail,
    phone: setPhone,
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    userMap[name](value);
    setDisabled(false);
  };

  const handleRadioChange = id => {
    setPositionId(id);
    setDisabled(false);
  };
  const clearInputs = () => {
    setName('');
    setEmail('');
    setPhone('');
    setPhoto(null);
    setPositionId(1);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    console.log(file);
    const fileType = file.type;
    const validTypes = ['image/jpeg', 'image/jpg'];

    if (!validTypes.includes(fileType)) {
      alert('Invalid file typ e. Please upload a jpeg/jpg file.');
      return;
    }

    const fileSize = file.size;
    const maxSize = 5 * 1024 * 1024;

    if (fileSize > maxSize) {
      alert(
        'File size is too large. Please upload a file that is less than 5MB.'
      );
      return;
    }

    const img = new Image();
    const reader = new FileReader();

    reader.onload = e => {
      img.onload = () => {
        if (img.width < 70 || img.height < 70) {
          alert(
            'Image size is too small. Please upload an image that is at least 70x70px.'
          );
          return;
        }
        setPhoto(file);
      };
      img.src = e.target.result;
    };
    reader.readAsDataURL(file);
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    const newUser = {
      name,
      email,
      phone,
      position_id: positionId,
      photo,
    };

    const createNewUser = async () => {
      try {
        setIsLoading(true);
        const { message, success } = await postUser(newUser);
        console.log(message, success);
        setSuccess(success);
        dispatch(fetchUsers(6));
        setTimeout(() => setSuccess(false), 5000);
      } catch (error) {
        setError(error.message);
      } finally {
        setIsLoading(false);
      }
    };
    createNewUser();
    clearInputs();
  };

  return (
    <div>
      {error !== null && <p>Oops, some error occured... Message: {error}</p>}
      <div>
        {success ? (
          <Success />
        ) : (
          <form onSubmit={handleFormSubmit} className={scss.form}>
            <TextInputs
              handleInputChange={handleInputChange}
              name={name}
              email={email}
              phone={phone}
            />
            <p className={scss.phone}>+38 (XXX) XXX - XX - XX</p>
            <RadioButtons
              handleRadioChange={handleRadioChange}
              positionId={positionId}
            />

            <div className={scss.imgInputWrapper}>
              <input 
                className={scss.imgInput}
                type="file"
                accept=".jpeg,.jpg"
                onChange={handleImageChange}
              />
                <label className={scss.label}>Upload your photo</label>
            </div>
{/* disabled={name || email || phone || photo === null ? 'true' : ''} className={scss.btn */}
            <button className={scss.btn} disabled={isDisabled} >
              {isLoading ? <MiniLoader /> : 'Sign Up'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
};
export default SignUpForm;
