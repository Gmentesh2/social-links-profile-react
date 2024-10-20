/* eslint-disable react/no-unescaped-entities */
import avatar from "../assets/images/avatar-jessica.jpeg";

const Header = () => {
  return (
    <header className="header">
      <img className="avatar" src={avatar} alt="" />
      <h1 className="fullName">Jessica Randall</h1>
      <h2 className="countryName">London, United Kingdom</h2>
      <p className="title">"Front-end developer and avid reader."</p>
    </header>
  );
};

export default Header;
