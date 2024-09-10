import React from 'react';
import LineGradient from '../components/LineGradient';
import ProjectComponents from '../components/ProjectComponents';
import { motion } from 'framer-motion';

const container = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = () => {
  return (
    <section id="projects" className="pt-48 pb-48">
      {/* HEADINGS */}
      <motion.div
        className="md:w-2/5 mx-auto text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.5 }}
        variants={{
          hidden: { opacity: 0, y: -50 },
          visible: { opacity: 1, y: 0 },
        }}
      >
        <div>
          <p className="font-playfair font-semibold text-4xl">
            <span className="text-red">PRO</span>JECTS
          </p>
          <div className="flex justify-center mt-5">
            <LineGradient width="w-2/3" />
          </div>
        </div>
        <p className="mt-10 mb-10">
      
        </p>
      </motion.div>

      {/* PROJECTS */}
      <div className="flex justify-center">
        <motion.div
          className="sm:grid sm:grid-cols-3"
          variants={container}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          {/* ROW 1 */}
          <div
            className="flex justify-center text-center items-center p-10 bg-red
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            BEAUTIFUL USER INTERFACES
          </div>

          <ProjectComponents
            title="Project 1"
            description="AI-driven fashion trends prediction platform to forecast upcoming styles and design inspirations."
            link="https://github.com/Choon38/AI-Driven-Fashion-Trends"
          />
          <ProjectComponents
            title="Project 2"
            description="A Movie Recommendation System that suggests films based on user preferences using collaborative filtering."
            link="https://github.com/Choon38/Movie-Recommend"
          />
        

          {/* ROW 2 */}
          <ProjectComponents
            title="Project 3"
            description="An embedded irrigation system utilizing IoT sensors for efficient water management in agriculture."
            link="https://www.tinkercad.com/things/14STEq0uheo-smart-irrigation-system?sharecode=ppbZyOjm6oQcYbFRDzjZd5dtIqyhHTd7AOzTBoZmhaU"
          />
          <ProjectComponents
            title="Project 4"
            description="Embedded Tableau Visualizations for Smart Retail Analytics, enabling real-time data insights for retailers."
            link="https://github.com/Choon38/Embedded-Tableau-Visualizations-for-Smart-Retail-Analytics"
          />

          {/* ROW 3 */}
          <ProjectComponents
            title="Project 5"
            description="An e-commerce website with features such as secure checkout, product recommendations, and user reviews."
            link="https://github.com/Choon38/e_commerce_website"
          />
          <ProjectComponents
            title="Project 6"
            description="A sleek UI design created in Figma to enhance user experience and visual aesthetics for digital products."
            link="#"
          />
          <div
            className="flex justify-center text-center items-center p-10 bg-blue
              max-w-[400px] max-h-[400px] text-2xl font-playfair font-semibold"
          >
            SMOOTH USER EXPERIENCE
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
