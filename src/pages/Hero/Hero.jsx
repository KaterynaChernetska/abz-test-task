import { NavLink } from 'react-router-dom';
import scss from './Hero.module.scss';

const Hero = () => {
  return (
    <div className={scss.heroSection}>
      <h1 className={scss.heroTitle}>
        Test assignment for front-end developer
      </h1>
      <p className={scss.heroText}>
        What defines a good front-end developer is one that has skilled
        knowledge of HTML, CSS, JS with a vast understanding of User design
        thinking as they'll be building web interfaces with accessibility in
        mind. They should also be excited to learn, as the world of Front-End
        Development keeps evolving.
      </p>
      <NavLink  className={scss.heroLink} to="/signup">Sign Up</NavLink>
    </div>
  );
};
export default Hero;
