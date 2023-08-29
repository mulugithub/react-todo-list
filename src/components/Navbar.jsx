import { useState, useRef, useEffect } from 'react';

const Navbar = () => {
  const [dropdown, setDropdown] = useState(false);
  const ref = useRef();

  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener('mousedown', handler);
  }, [dropdown]);

  return (
    // ...
    <li ref={ref}>
      <button onClick={() => setDropdown((prev) => !prev)}>
        Services
        {' '}
        <span>&#8595;</span>
      </button>
      {dropdown && (
        <ul>
          <li>Design</li>
          <li>Development</li>
        </ul>
      )}
    </li>
  );
};

export default Navbar;
