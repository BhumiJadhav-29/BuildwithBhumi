import {
FaCode,
FaMobileAlt,
FaGraduationCap,
FaMicrochip
}
from "react-icons/fa";


import "./style.css";


function Services(){


const services=[

{
icon:<FaCode/>,
title:"Website Development",
text:"Modern responsive websites with beautiful UI and powerful functionality."
},


{
icon:<FaMobileAlt/>,
title:"App Development",
text:"Android and mobile applications with smooth user experience."
},


{
icon:<FaGraduationCap/>,
title:"Academic Projects",
text:"Final year projects, research projects and software solutions."
},


{
icon:<FaMicrochip/>,
title:"IoT Solutions",
text:"Smart devices, automation and IoT based applications."
}


]


return(

<section className="section">


<h1>
Our Services
</h1>


<div className="service-container">


{
services.map((item,index)=>(


<div className="service-card" key={index}>


<div className="icon">

{item.icon}

</div>


<h2>
{item.title}
</h2>


<p>
{item.text}
</p>


</div>


))

}


</div>


</section>


)


}


export default Services;