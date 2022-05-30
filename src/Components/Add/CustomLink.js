import React from 'react';
import { Link, useMatch, useResolvedPath } from 'react-router-dom';

function CustomLink({ children, to, ...props }) {
    let resolved = useResolvedPath(to);
    let match = useMatch({ path: resolved.pathname, end: true });
  
    return (
      <div>
        <Link
          style={{ color:match ?'white':'black',backgroundColor:match ?'#FF6F00':'white', textDecoration: match ? "none" : "none",boxShadow:match?'0px 3px 2px -1px black':'0px 3px 2px -1px',padding:"5px 35px",borderRadius:'40px',fontSize:'18px' }}
          to={to}
          {...props}
        >
          {children}
        </Link>
      </div>
    );
  }

export default CustomLink;