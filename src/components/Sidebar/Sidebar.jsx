import "./Sidebar.css";

import {
FaHouse,
FaRankingStar,
FaHeart,
FaUser,
FaRightFromBracket
} from "react-icons/fa6";

import { Link } from "react-router-dom";

function Sidebar(){

return(

<div className="sidebar">

<h2 className="logo">

TIERRA

</h2>

<Link to="/dashboard">

<FaHouse/>

<span>Dashboard</span>

</Link>

<Link to="/tierlist">

<FaRankingStar/>

<span>Tier List</span>

</Link>

<Link to="/favorite">

<FaHeart/>

<span>Favorite</span>

</Link>

<Link to="/profile">

<FaUser/>

<span>Profile</span>

</Link>

<Link to="/">

<FaRightFromBracket/>

<span>Logout</span>

</Link>

</div>

)

}

export default Sidebar;