import "./Topbar.css";

import {
FaBell,
FaUserCircle
} from "react-icons/fa";

function Topbar(){

return(

<div className="topbar">

<input
type="text"
placeholder="Cari laptop..."
/>

<div className="top-right">

<FaBell/>

<FaUserCircle/>

</div>

</div>

)

}

export default Topbar;