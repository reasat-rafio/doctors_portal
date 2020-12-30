interface AppHeaderProps {}

export const AppHeader: React.FC<AppHeaderProps> = ({}) => {
   return (
      <nav className="navBar">
         <ul className="nav">
            <li>Home</li>
            <li>About</li>
            <li>Dental Sevices</li>
            <li>Reviews</li>
            <li>Blog</li>
            <li>Contact Us</li>
         </ul>
      </nav>
   );
};
