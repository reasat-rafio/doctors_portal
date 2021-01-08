interface NavmenuProps {}

export const Navmenu: React.FC<NavmenuProps> = ({}) => {
   return (
      <div className="navbar">
         <ul>
            <li>
               <a href="#home">Home</a>
            </li>
            <li>
               <a href="#about">About</a>
            </li>
            <li>
               <a href="#dental-services">Dental Services</a>
            </li>
            <li>
               <a href="#reviews">Reviews</a>
            </li>
            <li>
               <a href="#blog">Blog</a>
            </li>
            <li>
               <a href="#contact-us">Contact Us</a>
            </li>
         </ul>
      </div>
   );
};
