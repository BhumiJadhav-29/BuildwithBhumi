import "./style.css";


function Pricing(){


const plans=[

{

name:"Starter",

price:"₹2000",

features:[

"Landing Page",

"Responsive Design",

"Basic SEO",

"7 Days Support"

]

},


{

name:"Business",

price:"₹5999",

features:[

"Multi Page Website",

"Admin Panel",

"Database Integration",

"30 Days Support"

]

},


{

name:"Premium",

price:"₹7000",

features:[

"Full Stack Website",

"Mobile App",

"AI Integration",

"Priority Support"

]

}


];



return(


<section className="section">


<h1>
Pricing Plans
</h1>



<div className="pricing-container">


{

plans.map((plan,index)=>(


<div 
className="price-card"
key={index}
>


<h2>
{plan.name}
</h2>


<h3>
{plan.price}
</h3>



<ul>

{

plan.features.map((item,i)=>(

<li key={i}>
✔ {item}
</li>

))

}

</ul>


<button>
Choose Plan
</button>


</div>


))

}


</div>


</section>


)

}


export default Pricing;