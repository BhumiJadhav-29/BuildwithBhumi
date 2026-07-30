import "./style.css";
import { FaCode, FaRocket, FaLightbulb, FaUsers } from "react-icons/fa";


function About(){

return(

<section className="about-section" id="about">


<div className="about-container">


{/* LEFT CONTENT */}

<div className="about-content">


<h1>
About <span>BuildWithBhumi</span>
</h1>


<p>

We are a digital solution studio focused on creating
modern websites, applications and innovative technology
solutions.

</p>


<p>

At <b>BuildWithBhumi</b>, we transform ideas into
beautiful, scalable and user-friendly digital experiences.
From business websites to academic projects and IoT
solutions, we build technology that makes an impact.

</p>



<div className="about-tags">

<div>
<FaCode/>
Web Development
</div>


<div>
<FaRocket/>
Innovation
</div>


<div>
<FaLightbulb/>
Creative Solutions
</div>


<div>
<FaUsers/>
Student Support
</div>


</div>


</div>



{/* RIGHT SIDE CARDS */}


<div className="about-stats">


<div className="stat-card">

<h2>
5+
</h2>

<p>
Projects Completed
</p>

</div>



<div className="stat-card">

<h2>
2+
</h2>

<p>
Happy Clients
</p>

</div>



<div className="stat-card">

<h2>
5+
</h2>

<p>
Technologies
</p>

</div>



<div className="stat-card">

<h2>
100%
</h2>

<p>
Dedication
</p>

</div>


</div>


</div>


</section>


)

}


export default About;