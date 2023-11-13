import React from 'react';
import { motion } from 'framer-motion';

const variants = {
  open: {
    transition: {
      staggerChildren: 0.1,
    },
  },
  closed: {
    transition: {
      staggerChildren: 0.05,
      staggerDirection: -1,
    },
  },
};

const itemvarinants = {
  open: {
    opacity: 1,
    y: 0,
  },
  closed: {
    opacity: 0,
    y: 50,
  },
};

const Links = () => {
  const list = ['Home', 'Content', 'Work', 'About'];
  return (
    <motion.div className="links" variants={variants}>
      {list.map((list) => (
        <motion.a
          href={`#${list}`}
          key={list}
          variants={itemvarinants}
          whileHover={{ scale: 1.2 }}
          whileTap={{ scale: 0.9 }}
        >
          {list}
        </motion.a>
      ))}
    </motion.div>
  );
};

export default Links;
