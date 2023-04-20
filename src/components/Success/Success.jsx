import {ReactComponent as SuccessImage} from '../../images/success-image.svg';
import scss from './Success.module.scss';
const Success = () => {

    return (
        <div className={scss.successContainer}>
        <span className={scss.successTitle}>New user successfully registered</span>
        <SuccessImage/>
        </div>
    )
}
export default Success;