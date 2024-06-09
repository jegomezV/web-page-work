// Import the Link component from react-router-dom
import { Link } from 'react-router-dom';
import { TranslateButton } from './buttons/TranslateButton';

// Define the Nav component
export const Nav: React.FC = (): JSX.Element => {

  return (
    // Create a div that spans the full width of the screen
    <div className="w-screen">
      {/* // Create a navigation bar with some styling */}
      <nav className="py-3 hover:duration-500 duration-500 hover:shadow-gray-700 shadow-inner wrapper rounded-full mt-3 flex justify-center items-baseline backdrop-blur-sm w-full md:w-[80%]">
        {/* Create a list for the navigation links*/}
        <ul className="flex md:space-x-20 lg:space-x-40 hover:text-white text-xl">
          {/* Each list item is a Link component, which is used for navigation in a React Router application*/}
          <li><Link to="/" className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Home</Link></li>
          <li><Link to="/About" className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> About</Link></li>
          <li><Link to="/Credits" className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Credits</Link></li>
          <li><Link to="/Models" className="relative bg-[linear-gradient(#262626,#262626),linear-gradient(#ffffff,#ffffff)] bg-[length:100%_2px,0_2px] bg-[position:100%_100%,0_100%] bg-no-repeat text-gray-400 transition-[background-size,color] duration-300 hover:bg-[0_2px,100%_2px] hover:text-[#ffffff]"> Models</Link></li>
          <TranslateButton />
        </ul>
      </nav>
    </div>
  );
};
