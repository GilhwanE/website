import React from 'react';
import { motion } from 'framer-motion';

const ToggleBtn = ({ setOpen }) => {
  return (
    <button onClick={() => setOpen((prev) => !prev)}>
      <motion.svg
        viewBox="0 0 23 23"
        width="33"
        height="33"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <motion.path
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 2.5 L 20 2.5' },
            open: {
              d: 'M 3 16.5 L 17 2.5',
            },
          }}
        />
        <motion.path
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          d="M 2 9.423 L 20 9.423"
          variants={{
            closed: { opacity: 1 },
            open: { opacity: 0 },
          }}
        />
        <motion.path
          stroke="#000"
          strokeWidth="3"
          strokeLinecap="round"
          variants={{
            closed: { d: 'M 2 16.346 L 20 16.346' },
            open: {
              d: 'M 3 2.5 L 17 16.346',
            },
          }}
        />
      </motion.svg>
    </button>
  );
};

export default ToggleBtn;
