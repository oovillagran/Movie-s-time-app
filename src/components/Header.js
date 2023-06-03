import { NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';
import MicIcon from '../assets/mic.png';
import GearIcon from '../assets/gear.png';
import '../styles/Header.css';

export default function Header() {
  return (
    <>
      <div className="header flex">
        <div className="brand flex">
          <NavLink to="/">
            <img src={logo} alt="Logo" className="logo icon" />
          </NavLink>
          <p className="brand-name">Movie&apos;s Time</p>
        </div>
        <div className="flex header-icons">
          <img className="icon" src={MicIcon} alt="icon" />
          <img className="icon" src={GearIcon} alt="icon" />
        </div>
      </div>
      <hr className="body-hr" />
    </>
  );
}
