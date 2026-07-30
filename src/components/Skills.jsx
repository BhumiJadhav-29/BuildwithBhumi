import "./style.css";


function Skills(){


const skills=[

["HTML / CSS",95],
["JavaScript",85],
["React.js",90],
["UI/UX Design",92],
["Python",85],
["Java",90],
["C / C++",85],
["AI Prompt Engineering",85]

];


return(

<section className="section">


<h1>
Our Skills
</h1>


<div className="skills">


{
skills.map((skill,index)=>(


<div className="skill" key={index}>


<h3>
{skill[0]}
</h3>


<div className="bar">


<span
style={{
width:`${skill[1]}%`
}}
>

</span>


</div>


<p>
{skill[1]}%
</p>


</div>


))

}


</div>


</section>

)

}


export default Skills;