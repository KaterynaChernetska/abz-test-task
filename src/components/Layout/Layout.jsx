import { NavLink } from 'react-router-dom';
import { ReactComponent as Logo } from '../../images/Logo.svg';
import { useLocation } from 'react-router-dom';
import { useRef, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Hero from 'pages/Hero/Hero';
import Users from 'pages/Users/Users';
import SignUp from 'pages/SignUp/SignUp';
import scss from './Layout.module.scss';

const Layout = () => {
  const location = useLocation();
  const homeRef = useRef(null);
  const usersRef = useRef(null);
  const signupRef = useRef(null);

  useEffect(() => {
    const scrollToElement = ref => {
      if (ref && ref.current) {
        ref.current.scrollIntoView({ behavior: 'smooth' });
      }
    };

    switch (location.pathname) {
      case '/':
        scrollToElement(homeRef);
        break;
      case '/users':
        scrollToElement(usersRef);
        break;
      case '/signup':
        scrollToElement(signupRef);
        break;
      default:
        break;
    }
  }, [location]);

  return (
    <>
      <header>
        <nav className={scss.navigation} style={{ position: 'fixed' }}>
          <div className={scss.logo}>
            <NavLink to="/">
              <Logo />
            </NavLink>
          </div>
          <ul className={scss.navigationMenu}>
            <li className={scss.navigationMenuItem}>
              <NavLink to="/users">Users</NavLink>
            </li>
            <li className={scss.navigationMenuItem}>
              <NavLink to="/signup">Sign Up</NavLink>
            </li>
          </ul>
        </nav>
      </header>

      <main>
        <section id="section" ref={homeRef}>
          <Hero />
        </section>

        <section id="section" ref={usersRef}>
          <Users />
        </section>

        <section id="section" ref={signupRef}>
          <SignUp />
        </section>
      </main>
    </>
  );
};

export default Layout;
