import { motion } from 'framer-motion';

interface SectionTitleProps {
  subtitle?: string;
  title: string;
  description?: string;
  centered?: boolean;
  light?: boolean;
}

export const SectionTitle = ({ 
  subtitle, 
  title, 
  description, 
  centered = true,
  light = false 
}: SectionTitleProps) => {
  return (
    <div className={`mb-12 md:mb-16 ${centered ? 'text-center' : ''}`}>
      {subtitle && (
        <motion.span
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className={`inline-block text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4`}
        >
          {subtitle}
        </motion.span>
      )}
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ delay: 0.1 }}
        className={`font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 ${
          light ? 'text-espresso-foreground' : 'text-foreground'
        }`}
      >
        {title}
      </motion.h2>
      {centered && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
          className="divider-elegant mb-6"
        />
      )}
      {description && (
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className={`max-w-2xl ${centered ? 'mx-auto' : ''} ${
            light ? 'text-espresso-foreground/70' : 'text-muted-foreground'
          }`}
        >
          {description}
        </motion.p>
      )}
    </div>
  );
};
