import "./PopularLaptops.css";

import tuf from "../../assets/images/tuf.png";
import legion from "../../assets/images/legion.png";
import nitro from "../../assets/images/nitro.png";
import victus from "../../assets/images/victus.png";

import { FaStar } from "react-icons/fa";

const laptops = [

{
name:"ASUS TUF F15",
price:"Rp 15.499.000",
image:tuf
},

{
name:"Lenovo LOQ 15",
price:"Rp 13.299.000",
image:legion
},

{
name:"Acer Nitro 5",
price:"Rp 14.999.000",
image:nitro
},

{
name:"HP Victus 15",
price:"Rp 12.999.000",
image:victus
}

];

function PopularLaptops(){

return(

<section className="popular">

<div className="title">

<h2>Popular Laptops</h2>

<p>View All</p>

</div>

<div className="laptop-grid">

{

laptops.map((item,index)=>(

<div
className="laptop-card"
key={index}
>

<img
src={item.image}
alt={item.name}
/>

<h3>{item.name}</h3>

<div className="stars">

<FaStar/>

<FaStar/>

<FaStar/>

<FaStar/>

<FaStar/>

</div>

<h4>{item.price}</h4>

<button>

View Details

</button>

</div>

))

}

</div>

</section>

)

}

export default PopularLaptops;