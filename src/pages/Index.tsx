import { Link } from 'react-router-dom';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import { ArrowRight, Star } from 'lucide-react';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import heroImage from '@/assets/hero-restaurant.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import chefImage from '@/assets/chef.jpg';

const Index = () => {
  const heroRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ['start start', 'end start'],
  });

  const heroY = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const heroOpacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const features = [
    { title: 'Étoilé Michelin', description: 'Reconnu pour l\'excellence culinaire' },
    { title: 'Menu Saisonnier', description: 'Ingrédients frais et locaux' },
    { title: 'Salon Privé', description: 'Expériences intimes pour occasions spéciales' },
  ];

  const signatureDishes = [
    { name: 'Foie Gras Poêlé', description: 'Poire caramélisée et balsamique vieilli', image: dish1 },
    { name: 'Homard au Beurre', description: 'Risotto au safran et émulsion corail', image: dish2 },
    { name: 'Sphère Chocolat Valrhona', description: 'Feuille d\'or et caramel au beurre salé', image: dish3 },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section ref={heroRef} className="relative h-screen overflow-hidden">
        <motion.div
          style={{ y: heroY }}
          className="absolute inset-0"
        >
          <img
            src={heroImage}
            alt="Restaurant La Maison"
            className="w-full h-full object-cover"
          />
          <div className="hero-overlay absolute inset-0" />
        </motion.div>

        <motion.div
          style={{ opacity: heroOpacity }}
          className="relative h-full flex items-center justify-center text-center px-4"
        >
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.3 }}
              className="flex items-center justify-center gap-2 mb-6"
            >
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-primary text-primary" />
              ))}
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.5 }}
              className="font-display text-5xl md:text-7xl lg:text-8xl font-semibold text-espresso-foreground mb-6"
            >
              <span className="text-primary">La</span> Maison
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.7 }}
              className="text-xl md:text-2xl text-espresso-foreground/80 font-light mb-8 max-w-2xl mx-auto"
            >
              Un voyage culinaire exquis où la tradition rencontre l'innovation
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 40 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1, delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4 justify-center"
            >
              <Link
                to="/reservation"
                className="btn-primary px-8 py-4 rounded-md font-medium text-sm uppercase tracking-widest"
              >
                Réserver une Table
              </Link>
              <Link
                to="/menu"
                className="btn-outline px-8 py-4 rounded-md font-medium text-sm uppercase tracking-widest"
              >
                Voir le Menu
              </Link>
            </motion.div>
          </div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-6 h-10 border-2 border-espresso-foreground/50 rounded-full flex justify-center pt-2"
          >
            <motion.div
              animate={{ opacity: [1, 0, 1] }}
              transition={{ duration: 2, repeat: Infinity }}
              className="w-1.5 h-1.5 rounded-full bg-primary"
            />
          </motion.div>
        </motion.div>
      </section>

      {/* Features */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12">
            {features.map((feature, index) => (
              <AnimatedSection key={feature.title} delay={index * 0.1}>
                <div className="text-center">
                  <h3 className="font-display text-2xl mb-3">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* About Preview */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div className="relative">
                <div className="aspect-[4/5] rounded-lg overflow-hidden">
                  <img
                    src={chefImage}
                    alt="Notre Chef"
                    className="w-full h-full object-cover"
                  />
                </div>
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3 }}
                  className="absolute -bottom-6 -right-6 bg-primary text-primary-foreground p-6 rounded-lg"
                >
                  <p className="font-display text-4xl font-semibold">25+</p>
                  <p className="text-sm uppercase tracking-wider">Années d'Excellence</p>
                </motion.div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
                  Notre Histoire
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                  Une Passion pour l'Art Culinaire
                </h2>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  Fondé en 1998, La Maison est à l'avant-garde de la gastronomie, 
                  créant des expériences mémorables qui célèbrent l'art de la table. 
                  Notre engagement envers l'excellence se reflète dans chaque plat que nous servons.
                </p>
                <p className="text-muted-foreground mb-8 leading-relaxed">
                  Sous la direction du Chef Exécutif Marcus Laurent, notre cuisine 
                  transforme les meilleurs ingrédients de saison en créations 
                  culinaires extraordinaires.
                </p>
                <Link
                  to="/about"
                  className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
                >
                  Découvrir Notre Histoire
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Signature Dishes */}
      <section className="section-padding bg-espresso">
        <div className="container-custom">
          <SectionTitle
            subtitle="Excellence Culinaire"
            title="Créations Signature"
            description="Découvrez les plats les plus célébrés de notre chef, chacun étant un chef-d'œuvre de saveurs et de présentation"
            light
          />

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {signatureDishes.map((dish, index) => (
              <AnimatedSection key={dish.name} delay={index * 0.15}>
                <motion.div
                  whileHover={{ y: -8 }}
                  className="group"
                >
                  <div className="aspect-square rounded-lg overflow-hidden mb-6">
                    <img
                      src={dish.image}
                      alt={dish.name}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                  </div>
                  <h3 className="font-display text-xl text-espresso-foreground mb-2">
                    {dish.name}
                  </h3>
                  <p className="text-espresso-foreground/60">{dish.description}</p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={0.4}>
            <div className="text-center mt-12">
              <Link
                to="/menu"
                className="inline-flex items-center gap-2 text-primary font-medium hover:gap-4 transition-all"
              >
                Découvrir Tout le Menu
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatedSection>
            <div className="text-center max-w-2xl mx-auto">
              <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
                Vivez l'Expérience La Maison
              </span>
              <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                Réservez Votre Table Aujourd'hui
              </h2>
              <p className="text-muted-foreground mb-8">
                Rejoignez-nous pour une expérience gastronomique inoubliable. Notre équipe 
                est prête à rendre votre soirée vraiment spéciale.
              </p>
              <Link
                to="/reservation"
                className="btn-primary inline-block px-10 py-4 rounded-md font-medium text-sm uppercase tracking-widest"
              >
                Faire une Réservation
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Index;
