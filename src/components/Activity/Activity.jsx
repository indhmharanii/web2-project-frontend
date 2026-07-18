import "./Activity.css";

import {
    FaThumbsUp,
    FaCommentDots,
    FaLaptop,
    FaArrowUp,
    FaHeart
} from "react-icons/fa";

const activities=[

{
icon:<FaThumbsUp/>,
title:"Kamu memberi vote pada",
name:"ASUS TUF Gaming F15",
time:"2 menit lalu",
color:"green"
},

{
icon:<FaCommentDots/>,
title:"Rani memberi komentar pada",
name:"Lenovo Legion Pro",
time:"15 menit lalu",
color:"purple"
},

{
icon:<FaLaptop/>,
title:"Laptop baru ditambahkan",
name:"Acer Predator Helios Neo 16",
time:"1 jam lalu",
color:"blue"
},

{
icon:<FaArrowUp/>,
title:"Lenovo LOQ naik ke",
name:"Tier S",
time:"2 jam lalu",
color:"yellow"
},

{
icon:<FaHeart/>,
title:"Kamu menyukai",
name:"ASUS ROG Zephyrus G14",
time:"3 jam lalu",
color:"pink"
}

];

function Activity(){

return(

<div className="activity">

<div className="activity-header">

<h2>Aktivitas Terbaru</h2>

</div>

{

activities.map((item,index)=>(

<div
className="activity-item"
key={index}
>

<div className={`activity-icon ${item.color}`}>

{item.icon}

</div>

<div className="activity-info">

<p>{item.title}</p>

<h4>{item.name}</h4>

</div>

<span>{item.time}</span>

</div>

))

}

</div>

)

}

export default Activity;