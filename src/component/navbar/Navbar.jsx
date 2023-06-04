import {
  AiOutlineMenu,
  AiOutlineSearch,
  AiOutlineClose,
  AiFillTag,
} from "react-icons/ai";
import { BsFillCartFill, BsFillSaveFill } from "react-icons/bs";
import { TbTruckDelivery } from "react-icons/tb";
import { FaUserFriends, FaWallet } from "react-icons/fa";
import { MdFavorite, MdHelp } from "react-icons/md";
import { useState } from "react";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  return (
    <div className="container-navbar">
      <div className="navbar">
        <div className="left-side">
          <AiOutlineMenu
            size={30}
            className="burger-icon"
            onClick={() => {
              setNav(!nav);
            }}
          />
          <h1 className="logo">
            Best <span className="bold">Eats</span>
          </h1>
        </div>

        <div className="btn-nav">
          <p className="btn-delivery">Delivery</p>
          <p className="btn-pickup">Pickup</p>
        </div>

        <div className="input-container">
          <AiOutlineSearch size={20} className="search-icon" />
          <input
            type="text"
            className="search-food-input"
            placeholder="Search foods..."
          />
        </div>

        <button className="cart-btn">
          <BsFillCartFill /> Cart
        </button>
      </div>

      {/*mobile-menu*/}
      <div className={`overlay ${nav ? "show-overlay" : ""}`}></div>
      <div className={`mobile-menu ${nav ? "show-mobile-menu" : ""}`}>
        <AiOutlineClose
          size={20}
          className="close-icon"
          onClick={() => {
            setNav(!nav);
          }}
        />
        <h1 className="logo menu-logo">
          Best <span className="bold">Eats</span>
        </h1>

        <ul className="menu-list-container">
          <li className="item-list">
            <TbTruckDelivery size={25} className="icon-menu-list" />
            Orders
          </li>
          <li className="item-list">
            <MdFavorite size={25} className="icon-menu-list" />
            Favorites
          </li>
          <li className="item-list">
            <FaWallet size={25} className="icon-menu-list" />
            Wallet
          </li>
          <li className="item-list">
            <MdHelp size={25} className="icon-menu-list" />
            Help
          </li>
          <li className="item-list">
            <AiFillTag size={25} className="icon-menu-list" />
            Promotions
          </li>
          <li className="item-list">
            <BsFillSaveFill size={25} className="icon-menu-list" />
            Best One
          </li>
          <li className="item-list">
            <FaUserFriends size={25} className="icon-menu-list" /> Invite
            Friends
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
