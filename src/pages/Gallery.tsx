import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import heroImage from '@/assets/hero-restaurant.jpg';
import starterImg from '@/assets/starter.jpg';
import chefImage from '@/assets/chef.jpg';
import aboutHero from '@/assets/hero.png';
import drinkImg from '@/assets/drink.jpg';

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    { src: heroImage, alt: 'Intérieur du Restaurant', category: 'Ambiance' },
    { src: dish1, alt: 'Foie Gras Poêlé', category: 'Cuisine' },
    { src: gallery1, alt: 'Dressage de Table', category: 'Ambiance' },
    { src: dish2, alt: 'Homard au Beurre', category: 'Cuisine' },
    { src: gallery2, alt: 'Cave à Vins', category: 'Expérience' },
    { src: dish3, alt: 'Dessert au Chocolat', category: 'Cuisine' },
    { src: chefImage, alt: 'Chef Exécutif', category: 'Équipe' },
    { src: gallery3, alt: 'Préparation Cocktail', category: 'Expérience' },
    { src: dish4, alt: 'Bœuf Wagyu', category: 'Cuisine' },
    { src: aboutHero, alt: 'Préparation en Cuisine', category: 'Équipe' },
    { src: starterImg, alt: 'Entrées Fraîches', category: 'Cuisine' },
    { src: drinkImg, alt: 'Cocktail Signature', category: 'Expérience' },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative pt-32 pb-16 bg-espresso">
        <div className="container-custom px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
              Voyage Visuel
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground mb-6">
              Notre Galerie
            </h1>
            <p className="text-espresso-foreground/70 max-w-2xl mx-auto">
              Un aperçu de l'univers de La Maison — notre cuisine, notre espace, 
              et les expériences que nous créons.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="columns-1 md:columns-2 lg:columns-3 gap-4 space-y-4">
            {galleryImages.map((image, index) => (
              <AnimatedSection key={index} delay={index * 0.05}>
                <motion.div
                  whileHover={{ scale: 1.02 }}
                  className="break-inside-avoid cursor-pointer group relative overflow-hidden rounded-lg"
                  onClick={() => setSelectedImage(image.src)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-auto object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-espresso/0 group-hover:bg-espresso/50 transition-colors duration-300 flex items-end">
                    <div className="p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">
                      <span className="text-primary text-xs uppercase tracking-wider">
                        {image.category}
                      </span>
                      <p className="text-espresso-foreground font-display text-lg">
                        {image.alt}
                      </p>
                    </div>
                  </div>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {selectedImage && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-espresso/95 flex items-center justify-center p-4"
            onClick={() => setSelectedImage(null)}
          >
            <motion.button
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="absolute top-6 right-6 text-espresso-foreground hover:text-primary transition-colors"
              onClick={() => setSelectedImage(null)}
            >
              <X className="w-8 h-8" />
            </motion.button>
            <motion.img
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              src={selectedImage}
              alt="Image de la Galerie"
              className="max-w-full max-h-[85vh] object-contain rounded-lg"
              onClick={(e) => e.stopPropagation()}
            />
          </motion.div>
        )}
      </AnimatePresence>
    </Layout>
  );
};

export default Gallery;
