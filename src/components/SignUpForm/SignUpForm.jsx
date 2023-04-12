import RadioButtons from 'components/RadioButtons/RadioButtons';
import { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { fetchUsers } from 'redux/usersOperations';
import { getUsers, postUser } from 'services/api';

const SignUpForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [positionId, setPositionId] = useState(1);
  const [photo, setPhoto] = useState(null);
  const dispatch = useDispatch();

  const userMap = {
    name: setName,
    email: setEmail,
    phone: setPhone,
  };

  const handleInputChange = event => {
    const { name, value } = event.target;
    userMap[name](value);
  };

  const handleRadioChange = id => {
    setPositionId(id);
  };

  const handleImageChange = event => {
    const file = event.target.files[0];
    console.log(file);
    const fileType = file.type;
    const validTypes = ['image/jpeg', 'image/jpg'];

    if (!validTypes.includes(fileType)) {
      alert('Invalid file type. Please upload a jpeg/jpg file.');
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
        const {message, success} = await postUser(newUser);
        console.log(message, success);
        dispatch(fetchUsers(6));
      } catch (error) {
        // setError(error.message);
      } finally {
        // setIsLoading(false);
      }
    };
    createNewUser();
  };



  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          onChange={handleInputChange}
          type="text"
          name="name"
          value={name}
          required
          minLength={2}
          maxLength={60}
          placeholder={'Your name'}
        />
        <input
          onChange={handleInputChange}
          type="text"
          name="email"
          value={email}
          required
          minLength={2}
          maxLength={100}
          pattern="[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?"
          placeholder={'Email'}
        />
        <input
          onChange={handleInputChange}
          type="tel"
          name="phone"
          value={phone}
          required
          pattern=" ^[\+]{0,1}380([0-9]{9})$)"
          placeholder={'Phone'}
        />
        <p>+38 (XXX) XXX - XX - XX</p>
        <RadioButtons
          handleRadioChange={handleRadioChange}
          positionId={positionId}
        />
        <input onChange={handleImageChange} type="file" accept=".jpeg,.jpg" />
        <button>Sign Up</button>
      </form>
    </div>
  );
};
export default SignUpForm;

// import { useFormik } from "formik";
// import RadioButtons from 'components/RadioButtons/RadioButtons';
// import { Formik, Form, Field, FieldArray, ErrorMessage } from 'formik';
// import { signupSchema } from '../../validateSchema/validateSchema';
// const initialValues = {
//     name: '',
//     email: '',
//     phone: '',
//     positionId: 1,
//     photo: '',
//     imageurl: '',
//   };

//   const handleSubmit = () => {

//   }

// const SignUpForm = () => {
//   return (
//     <div>
//       <Formik
//       initialValues={initialValues}
//       validationSchema={signupSchema}
//       onSubmit={handleSubmit}
//     >
//         <Form>
//           <Field
//            type="text"
//           name="name"
//           />
//           <RadioButtons positionId={positionId} name='positionId'/>
//         </Form>
//       </Formik>
//     </div>
//   );
// };
// export default SignUpForm;
