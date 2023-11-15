import React from 'react';
import { motion } from 'framer-motion';
import './navbar.scss';
import Sidebar from '../sidebar/Sidebar';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* Sidenav */}
      <Sidebar />
      <div className="wrap">
        {/* 로고 interaction 방식 투명도 0 ~ 1 , 크기 0.5 ~ 1.5 */}
        <motion.h1
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1.5 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#">JipLink</a>
        </motion.h1>
        <ul className="social">
          <li>
            <a href="#">
              <img src="./src/assets/saramin.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./src/assets/jobkorea.png" alt="" />
            </a>
          </li>
          <li>
            <a href="#">
              <img src="./src/assets/wanted.png" alt="" />
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
