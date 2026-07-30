import {motion} from "framer-motion";
import "./style.css";


function Hero(){

return(

<section className="hero">


<div className="hero-text">


<motion.h1
initial={{x:-100,opacity:0}}
animate={{x:0,opacity:1}}
>

Hi, I'm Bhumi Jadhav

</motion.h1>


<h2>
We Build Digital Solutions
</h2>


<p>

Web Developer | UI/UX Designer | 
AI Prompt Engineer

</p>


<button>
Contact Me
</button>


</div>



<div className="hero-image">


<img 
src="/bhumi.jpg"
alt="Bhumi"
/>


</div>


</section>

)

}

export default Hero;