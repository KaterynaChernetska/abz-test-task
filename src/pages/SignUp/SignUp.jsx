import SignUpForm from 'components/SignUpForm/SignUpForm';
import { useEffect } from 'react';
import { postUser } from 'services/api';
import scss from './SignUp.module.scss';

const SignUp = () => {

 
    
    return (
       <div className={scss.signUpSection}>
        <h2 className={scss.signUpTitle}>Working with POST request</h2>
        <SignUpForm/>
       </div>
    )
}
export default SignUp; 