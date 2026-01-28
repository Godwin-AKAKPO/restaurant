import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import { SectionTitle } from '@/components/ui/SectionTitle';
import aboutHero from '@/assets/about-hero.jpg';
import chefImage from '@/assets/chef.jpg';
import gallery1 from '@/assets/gallery-1.jpg';

const About = () => {
  const values = [
    {
      title: 'Ingrédients de Qualité',
      description: 'Nous sélectionnons uniquement les meilleurs ingrédients de saison auprès de producteurs locaux de confiance et de fournisseurs premium du monde entier.',
    },
    {
      title: 'Innovation Culinaire',
      description: 'Notre cuisine allie techniques ancestrales et créativité moderne pour créer des expériences gastronomiques uniques.',
    },
    {
      title: 'Service Impeccable',
      description: 'Chaque convive bénéficie d\'une hospitalité chaleureuse et d\'un service attentionné qui anticipe ses moindres besoins.',
    },
    {
      title: 'Pratiques Durables',
      description: 'Nous nous engageons pour des pratiques respectueuses de l\'environnement, de l\'approvisionnement à la réduction des déchets.',
    },
  ];

  const team = [
    {
      name: 'Marcus Laurent',
      role: 'Chef Exécutif',
      image: chefImage,
      description: 'Fort de plus de 25 ans d\'expérience dans des cuisines étoilées Michelin à travers l\'Europe, le Chef Marcus apporte une expertise et une passion inégalées à La Maison.',
    },
  ];

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] overflow-hidden">
        <img
          src={aboutHero}
          alt="À Propos de La Maison"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="hero-overlay absolute inset-0" />
        <div className="relative h-full flex items-center justify-center text-center px-4">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
              Notre Histoire
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground">
              À Propos de La Maison
            </h1>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <AnimatedSection>
              <div>
                <span className="text-primary font-medium text-sm uppercase tracking-[0.2em] mb-4 inline-block">
                  Depuis 1998
                </span>
                <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">
                  Un Héritage d'Excellence Culinaire
                </h2>
                <div className="space-y-4 text-muted-foreground leading-relaxed">
                  <p>
                    La Maison est née d'une vision simple mais profonde : créer 
                    un sanctuaire où la cuisine transcende la simple nourriture pour devenir un art. 
                    Fondé par le célèbre Chef Pierre Dubois au cœur de la ville, 
                    notre restaurant est devenu l'une des destinations gastronomiques les plus célèbres.
                  </p>
                  <p>
                    Depuis plus de deux décennies, nous restons fidèles à nos principes fondateurs 
                    tout en embrassant l'innovation. Chaque plat qui sort de notre cuisine raconte 
                    une histoire — de tradition, de saisons, des artisans dévoués qui 
                    cultivent les ingrédients que nous transformons.
                  </p>
                  <p>
                    Aujourd'hui, sous la direction du Chef Exécutif Marcus Laurent, La Maison 
                    continue de repousser les limites de la gastronomie tout en honorant les 
                    techniques intemporelles qui ont forgé notre réputation.
                  </p>
                </div>
              </div>
            </AnimatedSection>

            <AnimatedSection delay={0.2}>
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-4">
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={gallery1}
                      alt="Intérieur La Maison"
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="bg-primary text-primary-foreground p-6 rounded-lg text-center">
                    <p className="font-display text-3xl font-semibold">25+</p>
                    <p className="text-sm uppercase tracking-wider">Années d'Excellence</p>
                  </div>
                </div>
                <div className="space-y-4 pt-8">
                  <div className="bg-cream p-6 rounded-lg text-center">
                    <p className="font-display text-3xl font-semibold text-primary">3</p>
                    <p className="text-sm uppercase tracking-wider text-muted-foreground">Étoiles Michelin</p>
                  </div>
                  <div className="aspect-[3/4] rounded-lg overflow-hidden">
                    <img
                      src={chefImage}
                      alt="Chef Exécutif"
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              </div>
            </AnimatedSection>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-cream">
        <div className="container-custom">
          <SectionTitle
            subtitle="Notre Philosophie"
            title="Ce Qui Nous Anime"
            description="Les principes qui guident chaque aspect de notre voyage culinaire"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => (
              <AnimatedSection key={value.title} delay={index * 0.1}>
                <motion.div
                  whileHover={{ y: -4 }}
                  className="card-elevated p-8 h-full"
                >
                  <span className="text-primary font-display text-4xl font-light mb-4 block">
                    0{index + 1}
                  </span>
                  <h3 className="font-display text-xl mb-3">{value.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding">
        <div className="container-custom">
          <SectionTitle
            subtitle="Le Cœur de La Maison"
            title="Rencontrez Notre Chef"
            description="Le visionnaire derrière nos créations culinaires"
          />

          {team.map((member, index) => (
            <AnimatedSection key={member.name} delay={index * 0.1}>
              <div className="max-w-4xl mx-auto">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 items-center">
                  <div className="aspect-[4/5] rounded-lg overflow-hidden">
                    <img
                      src={member.image}
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <span className="text-primary font-medium text-sm uppercase tracking-wider">
                      {member.role}
                    </span>
                    <h3 className="font-display text-3xl md:text-4xl font-semibold mt-2 mb-4">
                      {member.name}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed mb-6">
                      {member.description}
                    </p>
                    <blockquote className="border-l-2 border-primary pl-6 italic text-muted-foreground">
                      "La cuisine est un art, mais avant tout, c'est une histoire d'amour. Chaque plat 
                      est une opportunité de créer de la joie et de rassembler les gens autour 
                      de la table."
                    </blockquote>
                  </div>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default About;
