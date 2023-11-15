import React, { useState } from 'react';
import './sidebar.scss';
import Links from './links/Links';
import { motion } from 'framer-motion';
import ToggleBtn from './toggleBtn/ToggleBtn';

// variants는 motion 변수에 들어갈 기능들
const variants = {
  open: {
    clipPath: 'circle(1200px at 50px 50px)',
    transition: {
      type: 'spring',
      stiffness: 40,
    },
  },
  closed: {
    clipPath: 'circle(30px at 50px 50px)',
    transition: {
      delay: 0.4,
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
};

const Sidebar = () => {
  const [open, setOpen] = useState(false);

  return (
    <motion.div className="sidebar" animate={open ? 'open' : 'closed'}>
      <motion.div className="background" variants={variants}>
        <Links />
      </motion.div>
      <ToggleBtn setOpen={setOpen} />
    </motion.div>
  );
};

export default Sidebar;
