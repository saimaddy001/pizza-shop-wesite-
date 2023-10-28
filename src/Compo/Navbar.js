import React, { useState } from "react";
import ReorderTwoToneIcon from "@mui/icons-material/ReorderTwoTone";
import SailingSharpIcon from "@mui/icons-material/SailingSharp";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import '../Style/Navbar.css'
import { Link } from "react-router-dom";


function Navbar() {
  const [click, setClick] = useState(false);

  const handleClick = () => setClick(!click);

  return (
    <>
      <nav className="navbar">
        <div className="left">
          <h1>Travll</h1>
          <SailingSharpIcon />
        </div>
        <div className="right">
            <div className="right-meu">
            <h3 className="oe"><Link to="/">Home</Link></h3>
            <h3 className="two"><Link to="/product">Products</Link></h3>
            <h3 className="three"><Link to="/service">Service</Link></h3>
            </div>
            < button className="tt" onClick={handleClick}>
            {click ? <CancelOutlinedIcon /> : <ReorderTwoToneIcon />}
          </button>
        </div>
      </nav>
    </>
  );
}

export default Navbar;
