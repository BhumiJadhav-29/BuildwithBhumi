import "./style.css";


function Projects(){


const projects = [

  // =========================
  // Live Client Projects
  // =========================

  {
    title: "Chopstix",
    type: "Restaurant Website",
    image: "https://images.unsplash.com/photo-1515003197210-e0cd71810b5f",
    link: "https://chopstix-chinese.lovable.app/"
  },

  {
    title: "Raju Sandwich",
    type: "Food Business Website",
    image: "https://images.unsplash.com/photo-1528735602780-2552fd46c7af",
    link: "https://raju-sandwich.lovable.app/"
  },

  {
    title: "Chinese Corner",
    type: "Responsive Restaurant UI",
    image: "https://images.unsplash.com/photo-1552566626-52f8b828add9",
    link: "https://welcomechinesecorner.lovable.app/"
  },

  // =========================
  // Personal & Academic Projects
  // =========================

  
 {
  title: "AI Resume Analyzer",
  type: "Python • Flask • HTML • CSS • JavaScript • Gemini AI",
  status: "✅ Completed",
  image: "/images/AI-Resume-Analyzer.png",
  link: "https://ai-resume-analyzer-20h6.onrender.com/"
},

  {
    title: "Air Drawing System",
    type: "Python • OpenCV • MediaPipe",
     status: "✅ Completed",
    image: "/images/air-drawing.png",
    link: "#"
  },

  {
    title: "Smart Blind Stick",
    type: "IoT Project • Avishkar Research Convention",
    status: "🏆 Research Project",
    image: "/images/blindstick.jpg",
    link: "#"
  },

  {
    title: "Smart Parking System",
    type: "IoT Automation Project",
     status: "✅ Completed",
    image: "/images/smart-parking-system.jpg",
    link: "#"
  },

  {
    title: "Student Management System",
    type: "Java • MySQL Desktop Application",
     status: "✅ Completed",
    image: "/images/Student-Management-System.png",
    link: "#"
  },
  
  {
  title: "SOS Emergency App",
  type: "Android Safety Application",
  status: "🚧 In Progress",
  image: "/images/sos-app.png",
  link: "#"
}

];


return(


<section className="section" id="projects">


<h1>
My Projects
</h1>


<div className="project-container">


{

projects.map((project,index)=>(


<div className="project-card" key={index}>


<img 
src={project.image}
alt={project.title}
/>


<div className="project-content">

  {project.status && (
    <span className="project-status">
      {project.status}
    </span>
  )}
<h2>
{project.title}
</h2>


<p>
{project.type}
</p>


<a
  href={project.link}
  target="_blank"
  rel="noopener noreferrer"
>
  {
  project.link === "#"
    ? project.status === "🚧 In Progress"
      ? "Coming Soon"
      : "Completed"
    : "View Project"
}
</a>


</div>


</div>


))


}


</div>


</section>


)

}


export default Projects;