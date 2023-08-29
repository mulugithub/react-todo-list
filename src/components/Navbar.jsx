import { useState, useRef } from "react";
const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  
  const ref = useRef();
  console.log(ref);
  
  return (
    // ...
    <li ref={ref}>
      <button onClick={() => setDropdown((prev) => !prev)}>
        Services <span>&#8595;</span>
      </button>
      {dropdown && (
        <ul>
          <li>Design</li>
          <li>Development</li>
        </ul>
      )}
    </li>

