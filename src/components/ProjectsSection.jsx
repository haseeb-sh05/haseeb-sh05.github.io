import { ArrowRight, ExternalLink, Github } from "lucide-react";

const projects = [
  {
    id: 1,
    title: "CampConnect",
    description: (
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Developed a responsive campground listing platform with full CRUD
        functionality and dynamic routing.
      </li>
      <li>
        Implemented secure user login and role-based authorization to protect
        user-generated content.
      </li>
      <li>
        Integrated MongoDB Atlas for scalable cloud data storage and Cloudinary
        for image upload and delivery.
      </li>
      <li>
        Focused on clean UI/UX, security best practices, and readiness for
        future expansion (e.g., maps, reviews).
      </li>
    </ul>
  ),
    image: "/projects/project1.png",
    tags: ["Node.js", "Express.js", "MongoDB", "Mongoose", "Cloudinary", "MapTiler", "Passport.js", "Render", "Bootstrap"],
    demoUrl: "#",
    githubUrl: "https://github.com/haseeb-sh05/CampConnect",
  },
{
  id: 2,
  title: "Embedded Spatial Mapping",
  description:
    (
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Developed a microcontroller-based system to control a stepper motor and
        VL53L1X ToF sensor, enabling 360° spatial scanning with 32 data points
        per rotation.
      </li>
      <li>
        Programmed efficient data acquisition and control logic in C, enabling
        precise sensor rotation, real-time distance measurement, and data
        communication between hardware and PC using I2C and UART protocols.
      </li>
      <li>
        Utilized Python to generate 3D models from raw sensor measurements,
        enabling detailed spatial visualization.
      </li>
      <li>
        Optimized system performance, improving scan accuracy and speed by over
        50% through iterative testing and calibration.
      </li>
    </ul>
  ),
  image: "/projects/project2.png",
  tags: ["C", "Python", "Assembly", "Microcontroller Systems"],
  demoUrl: "https://github.com/haseeb-sh05/Embedded_Spatial_Mapping/blob/main/COMPENG%202DX3%20Final%20Project%20Report.pdf",
  githubUrl: "https://github.com/haseeb-sh05/Embedded_Spatial_Mapping",
},

  {
    id: 3,
    title: "Snake Game",
    description:
      (
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Developed an Object-Oriented C++ version of the classic Snake Game,
        leveraging encapsulation and structured programming to fully utilize the
        principles of OOP.
      </li>
      <li>
        Implemented advanced gameplay features, including dynamic speed control,
        to enhance interactivity and provide a more engaging user experience.
      </li>
      <li>
        Designed and optimized the user interface to improve usability,
        enhancing responsiveness and interactivity through iterative testing and
        development.
      </li>
      <li>
        Applied advanced debugging and memory management techniques, ensuring
        seamless, bug-free gameplay and robust performance with zero memory
        leaks.
      </li>
    </ul>
  ),
    image: "/projects/project3.png",
    tags: ["Visual Studio", "C++", "Object-Oriented Programming (OOP)"],
    demoUrl: "#",
    githubUrl: "#",
  },
  {
    id: 4,
    title: "Revenge of the Recycling System",
    description:
      (
    <ul className="list-disc pl-6 space-y-2">
      <li>
        Designed an automated sorting system for the Quanser Q-arm robotic
        platform by developing Python code, achieving a 40% increase in sorting
        speed and a 20% reduction in error rates.
      </li>
      <li>
        Engineered a design solution for sorting and recycling containers by
        creating detailed 3D models of a hopper-lifting mechanism using Autodesk
        Inventor.
      </li>
      <li>
        Simulated the hopper’s lifting motion in Autodesk Inventor to validate
        functionality and tested robotic workflows in a digital environment
        using PyCharm for code development.
      </li>
      <li>
        Translated virtual designs into a physical prototype by 3D printing
        components with PrusaSlicer, fabricating a functional mechanism to
        securely lift and deposit containers into a sorting bin.
      </li>
    </ul>
  ),
    image: "/projects/project4.png",
    tags: ["PyCharm", "Python", "Rasberry Pi", "Autodesk Inventor", "PrusaSlicer"],
    demoUrl: "#",
    githubUrl: "#",
  },
];

export const ProjectsSection = () => {
  return (
    <section id="projects" className="py-24 px-4 relative">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-4 text-center">
          {" "}
          <span className="text-primary"> Projects </span>
        </h2>

        {/* <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
          Here are some of my recent projects. Each project was carefully
          crafted with attention to detail, performance, and user experience.
        </p> */}

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, key) => (
            <div
              key={key}
              className="group bg-card rounded-lg overflow-hidden shadow-xs card-hover"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
              </div>

              <div className="p-6">
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tags.map((tag) => (
                    <span className="px-2 py-1 text-xs font-medium border rounded-full bg-secondary text-secondary-foreground">
                      {tag}
                    </span>
                  ))}
                </div>

                <h3 className="text-xl font-semibold mb-1"> {project.title}</h3>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>
                <div className="flex justify-between items-center">
                  <div className="flex space-x-3">
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <ExternalLink size={20} />
                    </a>
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      className="text-foreground/80 hover:text-primary transition-colors duration-300"
                    >
                      <Github size={20} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <a
            className="cosmic-button w-fit flex items-center mx-auto gap-2"
            target="_blank"
            href="https://github.com/haseeb-sh05"
          >
            Check My Github <ArrowRight size={16} />
          </a>
        </div>
      </div>
    </section>
  );
};
