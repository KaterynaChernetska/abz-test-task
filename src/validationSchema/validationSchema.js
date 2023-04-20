
// import * as yup from 'yup';
// const emailRegexp =
//   /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
// const phoneRegexp =
//   /^[+]?3?[\s]?8?[\s]?\(?0\d{2}?\)?[\s]?\d{3}[\s|-]?\d{2}[\s|-]?\d{2}$/;


// export const validationSchema = yup.object().shape({
//   name: yup
//     .string()
//     .min(2, 'Not less than 2 characters')
//     .max(60, 'Not more than 60 characters')
//     .required('Please enter your name, f.e: John'),
//   email: yup
//     .string()
//     .matches(emailRegexp, 'F.e.:jhon@example.com')
//     .required('Please enter your email'),
//   phone: yup
//     .string()
//     .matches(phoneRegexp, '+38 (0XX) XXX - XX - XX')
//     .required('Please enter your phone number'),
//   position_id: yup.string().required(),
//   photo: yup.string().required('Photo is required'),
// });

// export const validationSchema = Yup.object().shape({
//     name: Yup.string().required('Required'),
//     email: Yup.string().email('Invalid email').required('Required'),
//     phone: Yup.string()
//       .matches(/^\+38\s\(\d{3}\)\s\d{3}\s-\s\d{2}\s-\s\d{2}$/, 'Invalid phone number')
//       .required('Required'),
//     position_id: Yup.number().required('Required'),
//     photo: Yup.mixed()
//       .test('fileSize', 'File size is too large', value => {
//         if (value) {
//           return value.size <= 5 * 1024 * 1024;
//         }
//         return true;
//       })
//       .test('fileType', 'Invalid file type', value => {
//         if (value) {
//           return ['image/jpeg', 'image/jpg'].includes(value.type);
//         }
//         return true;
//       })
//       .test('fileDimensions', 'Image size is too small', value => {
//         if (value) {
//           return new Promise(resolve => {
//             const img = new Image();
//             img.src = URL.createObjectURL(value);
//             img.onload = () => {
//               URL.revokeObjectURL(img.src);
//               resolve(img.width >= 70 && img.height >= 70);
//             };
//           });
//         }
//         return true;
//       }),
//   });
