'use client';
import React, { useRef } from 'react';
import { motion, useCycle } from 'framer-motion';
import { useDimensions } from './use-dimensions';
import Navigation from './Navigation';
import styles from './Menu.module.css';

const transition = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 140px 40px)`,
    transition: {
      type: 'spring',
      stiffness: 20,
      restDelta: 2,
    },
  }),
  closed: {
    clipPath: 'circle(30px at 60px 155px)',
    transition: {
      type: 'spring',
      stiffness: 400,
      damping: 40,
    },
  },
  // open: {
  //   x: 0,
  //   opacity: 1,
  //   transition: { type: 'spring', stiffness: 20 }
  // },
  // closed: {
  //   x: "-100%",
  //   opacity: 0,
  //   transition: { type: 'spring', stiffness: 20 }
  // }
};

const Menu = () => {
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const { height } = useDimensions(containerRef);

  return (
    <motion.nav
      initial={false}
      animate={isOpen ? 'open' : 'closed'}
      custom={height}
      ref={containerRef}
      className='header-nav'
      onClick={() => toggleOpen()}
    >
      Menu
      <motion.div
        className={styles.expand}
        variants={transition}
      >
        <Navigation />
      </motion.div>
    </motion.nav>
  );
};

export default Menu;
