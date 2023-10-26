// 'use client';
// import React, { useRef } from 'react';
// import { motion, useCycle } from 'framer-motion';
// import { useDimensions } from './use-dimensions';
// import Navigation from './Navigation';
// import styles from './Menu.module.css';

// const dot = {
//   open: (height = 1000) => ({
//     clipPath: `inset(0px 0px 0px 0px)`,
//     transition: {
//       type: 'spring',
//       stiffness: 20,
//       restDelta: 2,
//     },
//   }),
//   closed: {
//     clipPath: 'inset(30px 30px 30px 30px)',
//     transition: {
//       type: 'spring',
//       stiffness: 400,
//       damping: 40,
//     },
//   },
// };

// const Menu = () => {
//   const [isOpen, toggleOpen] = useCycle(false, true);
//   const containerRef = useRef(null);
//   const { height } = useDimensions(containerRef);

//   return (
//     <motion.nav
//       initial={false}
//       animate={isOpen ? 'open' : 'closed'}
//       custom={height}
//       ref={containerRef}
//     >
//       <motion.div
//         className={styles.dot}
//         variants={dot}
//         onClick={() => toggleOpen()}
//       >
//         <Navigation />
//       </motion.div>
//     </motion.nav>
//   );
// };

// export default Menu;
