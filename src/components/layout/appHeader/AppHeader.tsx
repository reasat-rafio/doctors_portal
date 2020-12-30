interface AppHeaderProps {}

export const AppHeader: React.FC<AppHeaderProps> = ({}) => {
   return (
      <nav className="navBar">
         <ul className="nav">
            <li>
               <a href="#home">Home</a>
            </li>
            <li>
               <a href="#about">About</a>
            </li>
            <li>
               <a href="#servies">Dental Sevices</a>{" "}
            </li>
            <li>
               <a href="#reviews">Reviews</a>
            </li>
            <li>
               <a href="#blogs"> Blogs</a>
            </li>
            <li>
               <a href="#contact-us">Contact Us </a>
            </li>
         </ul>
      </nav>
   );
};
