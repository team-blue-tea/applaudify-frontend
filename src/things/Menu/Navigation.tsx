// 'use client';
// import React from 'react';
// import { motion } from 'framer-motion';
// import Link from 'next/link';
// import styles from './Menu.module.css';

// const variants = {
//   open: {
//     transition: { staggerChildren: 0.07, delayChildren: 0.2 },
//   },
//   closed: {
//     transition: { staggerChildren: 0.05, staggerDirection: -1 },
//   },
// };

// const Navigation = () => {
//   return (
//     <motion.ul variants={variants}>
//       <nav className={styles.navLinks}>
//         <Link
//           href='/search'
//           className={styles.fontSize}
//         >
//           Search
//         </Link>
//         <Link
//           href='/home'
//           className={styles.fontSize}
//         >
//           Home
//         </Link>
//         <Link
//           href='/profile'
//           className={styles.fontSize}
//         >
//           Profile
//         </Link>
//         <Link
//           href='/'
//           className={styles.fontSize}
//         >
//           The App
//         </Link>
//         <Link
//           href='/about'
//           className={styles.fontSize}
//         >
//           About
//         </Link>
//       </nav>
//     </motion.ul>
//   );
// };

// export default Navigation;
