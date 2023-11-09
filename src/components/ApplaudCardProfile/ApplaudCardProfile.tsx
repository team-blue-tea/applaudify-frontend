// import React from 'react';
// import Image from 'next/image';

// const ApplaudCardProfile = ({
//   name,
//   title,
//   company,
//   imgSrc,
//   imgAlt,
//   reverse = false,
// }) => {
//   const nameCard = reverse ? 'sender-name-card' : 'receiver-name-card';
//   return (
//     <article className={`${nameCard}`}>
//       {!reverse && (
//         <>
//           <Image
//             src={imgSrc}
//             alt={imgAlt}
//             width={53}
//             height={53}
//             className='profile-img'
//           ></Image>
//           <div className='flex flex-col gap-1.5 bg-paper'>
//             <h4 className='name bg-paper'>{name}</h4>
//             <p className='title-company bg-paper'>{title}</p>
//             <p className='title-company bg-paper'>{company}</p>
//           </div>
//         </>
//       )}
//     </article>
//   );
// };

// export default ApplaudCardProfile;
