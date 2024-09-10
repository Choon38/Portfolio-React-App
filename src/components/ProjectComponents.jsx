import { motion } from "framer-motion";

const projectVariant = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: { opacity: 1, scale: 1 },
};

const ProjectComponents = ({ title, description, link }) => {
  const overlayStyles = `absolute inset-0 opacity-0 hover:opacity-90 transition duration-500
    bg-gray-800 z-30 flex flex-col justify-center items-center text-center p-8 text-white`;
  const projectTitle = title.split(" ").join("-").toLowerCase();

  // Dynamically require the image based on the project title
  const imagePath = require(`../assets/${projectTitle}.jpeg`);

  return (
    <motion.div variants={projectVariant} className="relative group cursor-pointer">
      <a 
        href={link ? link : "#"} 
        target={link ? "_blank" : "_self"} 
        rel="noopener noreferrer"
        className="relative block"
      >
        <img src={imagePath} alt={projectTitle} className="w-full h-full object-cover" />
        <div className={overlayStyles}>
          <p className="text-2xl font-playfair">{title}</p>
          <p className="mt-4">{description}</p>
        </div>
      </a>
    </motion.div>
  );
};

export default ProjectComponents;
