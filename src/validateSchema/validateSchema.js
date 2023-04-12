import * as yup from 'yup';

const FILE_SIZE = 5000000;
const FILE_DIMENSIONS = { width: 70, height: 70 };
const SUPPORTED_FORMATS = ['image/jpeg', 'image/jpg'];

const nameRules = /^[^\s].+(?!.*[ЫыЭэЪъ])([a-zA-Zа-яА-ЯІіЇїЄє\s']+)[^\s]$/;
const emailRules =
  /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
const phoneRules =
  /^(\+\d{1,2}\s)?\(?\d{3}\)?[\s.-]\d{3}[\s.-]\d{2}[.-]\d{2}$/;

export const signupSchema = yup.object().shape({
  name: yup
    .string()
    .matches(nameRules, 'Name must contain only letters')
    .min(2, 'Name is too short')
    .max(60, 'Name is too long')
    .required('Name is required'),
  email: yup
    .string()
    .matches(emailRules, 'Email must be in format mail@mail.com')
    .min(2, 'Email is too short')
    .max(100, 'Email is too long')
    .required('Email is required'),
  phone: yup
    .string()
    .matches(phoneRules, 'Mobile phone must be in format +38 (XXX) XXX-XX-XX')
    .required('Phone is required'),
  position: yup.string().min(1).required('Position is required'),
  photo: yup
    .mixed()
    .test(
      'fileSize',
      'File size must be less than 5Mb',
      value => value && value.size <= FILE_SIZE
    )
    .test(
      'fileType',
      'Supported only jpeg and jpg formats',
      value => value && SUPPORTED_FORMATS.includes(value.type)
    )
    .test(
      'fileDimensions',
      'File dimensions must be more than 70x70px',
      value =>
        value &&
        value.width >= FILE_DIMENSIONS.width &&
        value.height >= FILE_DIMENSIONS.height
    )
    .required('Photo is required'),
});