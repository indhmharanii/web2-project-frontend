import "./Testimonials.css";

import {
    FaStar,
    FaUserCircle
} from "react-icons/fa";

const reviews = [

{
name:"Rizky",
text:"The recommendation was very accurate. I found the perfect laptop for programming.",
},

{
name:"Amanda",
text:"The interface is modern and easy to use. Highly recommended!",
},

{
name:"Fajar",
text:"This website helped me choose a gaming laptop within my budget.",
},

];

function Testimonials(){

return(

<section className="testimonial">

<div className="testimonial-title">

<h2>Testimonials</h2>

<p>View All</p>

</div>

<div className="testimonial-grid">

{

reviews.map((item,index)=>(

<div
className="testimonial-card"
key={index}
>

<FaUserCircle className="user"/>

<div className="stars">

<FaStar/>

<FaStar/>

<FaStar/>

<FaStar/>

<FaStar/>

</div>

<p>{item.text}</p>

<h4>{item.name}</h4>

</div>

))

}

</div>

</section>

)

}

export default Testimonials;