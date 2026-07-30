import "./style.css";


function Navbar(){

return(

<nav>

<h2>
BuildWith<span>Bhumi</span>
</h2>


<ul>

<li>Home</li>
<li>About</li>
<li>Services</li>
<li>Projects</li>
<li>Pricing</li>
<li>Contact</li>

</ul>

<a
  href="/resume/Bhumi-Jadhav-resume.pdf"
  target="_blank"
  rel="noopener noreferrer"
>
  <button>Hire Me</button>
</a>

</nav>

)

}

export default Navbar;