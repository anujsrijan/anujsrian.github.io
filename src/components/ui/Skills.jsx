import React from "react";
import { motion } from "motion/react";
import { Card } from '../ui/Card';

function Skills() {
  return (
    <>
      {/* Skills Preview */}
      <section className="mb-20 py-20 bg-muted/50">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="mb-4 text-3xl lg:text-4xl font-semibold text-white/80">
              Technologies I Love
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto font-light traking-wide text-white/50">
              From machine learning frameworks to modern web technologies, I
              work with cutting-edge tools to bring ideas to life.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6"
          >
            {[
              "Python",
              "TensorFlow",
              "React",
              "Node.js",
              "PyTorch",
              "TypeScript",
              "MongoDB",
              "Docker",
              "AWS",
              "Git",
              "Scikit-learn",
              "Next.js",
            ].map((tech, index) => (
              <motion.div
                key={tech}
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
                className="group"
              >
                <Card className="p-4 text-center hover-glow transition-smooth cursor-pointer gradient-card">
                  <div className="text-sm font-light traking-wide text-white/80 group-hover:text-primary transition-colors">
                    {tech}
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </>
  );
}

export default Skills;
