import React from 'react'

function Nav() {
    return (
        <>
            <div>
                <ul className="flex gap-5 text-lg font-normal text-white">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
                <i></i>
            </div>
            <div className='hidden Mobile-S:visible'>
                <ul className="flex gap-5 text-lg font-normal text-white">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Services</li>
                </ul>
            </div>
        </>

    )
}

export default Nav;

// import React, { useState } from 'react';

// const Navbar = () => {
//   const [isOpen, setIsOpen] = useState(false);

//   return (
//     <nav className="bg-blue-500 p-4">
//       <div className="container mx-auto flex justify-between items-center">
//         <div className="text-white text-2xl font-bold">Brand</div>
//         <div className="hidden md:flex space-x-4">
//           <a href="#" className="text-white">Home</a>
//           <a href="#" className="text-white">About</a>
//           <a href="#" className="text-white">Contact</a>
//         </div>
//         <div className="md:hidden">
//           <button
//             onClick={() => setIsOpen(!isOpen)}
//             className="text-white focus:outline-none"
//           >
//             <svg
//               className="w-6 h-6"
//               fill="none"
//               stroke="currentColor"
//               viewBox="0 0 24 24"
//               xmlns="http://www.w3.org/2000/svg"
//             >
//               <path
//                 strokeLinecap="round"
//                 strokeLinejoin="round"
//                 strokeWidth="2"
//                 d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16m-7 6h7"}
//               />
//             </svg>
//           </button>
//         </div>
//       </div>
//       {isOpen && (
//         <div className="md:hidden mt-4 space-y-2">
//           <a href="#" className="block text-white">Home</a>
//           <a href="#" className="block text-white">About</a>
//           <a href="#" className="block text-white">Contact</a>
//         </div>
//       )}
//     </nav>
//   );
// };

// export default Navbar;
