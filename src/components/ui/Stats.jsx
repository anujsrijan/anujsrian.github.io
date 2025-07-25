import React from 'react';
import { motion } from "motion/react";

function Stats() {
  return (
    <section className="relative z-0 py-20 border-y border-slate-900">
      <div className="container">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="grid grid-cols-2 md:grid-cols-4 gap-8"
        >
          {[
            { number: '15+', label: 'AI/ML Projects' },
            { number: '3+', label: 'Years Experience' },
            { number: '10+', label: 'Technologies' },
            { number: '50+', label: 'GitHub Repos' },
          ].map((stat, index) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="text-center"
            >
              <div className="text-3xl lg:text-4xl font-semibold text-gradient mb-2">
                {stat.number}
              </div>
              <div className="text-sm text-muted-foreground font-light traking-wide text-white/50 ">{stat.label}</div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  )
}

export default Stats