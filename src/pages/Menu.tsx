import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';
import { AnimatedSection } from '@/components/ui/AnimatedSection';
import starterImg from '@/assets/starter.jpg';
import dish1 from '@/assets/dish-1.jpg';
import dish2 from '@/assets/dish-2.jpg';
import dish3 from '@/assets/dish-3.jpg';
import dish4 from '@/assets/dish-4.jpg';
import drinkImg from '@/assets/drink.jpg';

type MenuCategory = 'starters' | 'mains' | 'desserts' | 'drinks';

interface MenuItem {
  name: string;
  description: string;
  price: string;
  image?: string;
}

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState<MenuCategory>('starters');

  const categories: { key: MenuCategory; label: string }[] = [
    { key: 'starters', label: 'Entrées' },
    { key: 'mains', label: 'Plats' },
    { key: 'desserts', label: 'Desserts' },
    { key: 'drinks', label: 'Boissons' },
  ];

  const menuItems: Record<MenuCategory, MenuItem[]> = {
    starters: [
      { name: 'Accras de Morue', description: 'Beignets de morue, sauce piquante, oignon rouge, citron', price: '2500', image: dish1 },
      { name: 'Gâteau de Maïs', description: 'Maïs frais râpé, oignon, crevettes, sauce tomate relevée', price: '2000', image: starterImg },
      { name: 'Salade de Betteraves', description: 'Betteraves cuites, cacahuètes grillées, oignon, sauce arachide', price: '1800', image: dish2 },
      { name: 'Soupe à l\'Arachide', description: 'Bouillon riche à la pâte d\'arachide, viande de bœuf, légumes', price: '1500', image: dish3 },
      { name: 'Alloco et Sauce Tomate', description: 'Bananes plantains frites, sauce tomate piquante, ail frais', price: '1200', image: dish4 },
    ],
    mains: [
      { name: 'Pounded Yam et Okra', description: 'Igname pilée, sauce okra à la viande de poisson, oignon, épices', price: '6500', image: dish1 },
      { name: 'Pâte d\'Arachide Béninoise', description: 'Sauce riche à la pâte d\'arachide, viande tendre, riz blanc', price: '5500', image: dish2 },
      { name: 'Riz Jollof Bénin', description: 'Riz cuit au jus de tomate, viande fumée, épices West-Africaines', price: '4500', image: dish3 },
      { name: 'Fufu Igname et Sauce Tomate', description: 'Igname écrasée, sauce tomate riche, viande braisée, légumes', price: '5000', image: dish4 },
      { name: 'Gari et Sauce d\'Arachide', description: 'Semoule de manioc, sauce cacahuète onctueuse, poisson fumé', price: '4200', image: starterImg },
      { name: 'Kedjenou de Poulet', description: 'Poulet braisé à l\'étouffée, légumes locaux, sauce riche et savoureuse', price: '5500', image: dish1 },
    ],
    desserts: [
      { name: 'Beignets de Banane', description: 'Bananes plantains frites, sucre caramélisé, cannelle, miel', price: '1500', image: dish2 },
      { name: 'Flan à la Noix de Coco', description: 'Crème coco, caramel riche, noix de coco râpée', price: '1200', image: dish3 },
      { name: 'Gâteau de Maïs Sucré', description: 'Maïs frais moulu, sucre, amande, présentation festive', price: '1300', image: dish4 },
      { name: 'Assiette de Fruits Tropicaux', description: 'Mangue, papaye, ananas, banane frais, citron vert', price: '2200', image: starterImg },
      { name: 'Bouillie de Sorgho Sucrée', description: 'Sorgho cuit sucré, lait concentré, vanille, noix de muscade', price: '1000', image: dish1 },
    ],
    drinks: [
      { name: 'Jus de Bissap Frais', description: 'Oseille rouge glacée, sucre, glaçons, saveur traditionnelle', price: '1200', image: drinkImg },
      { name: 'Jus de Gingembre Épicé', description: 'Gingembre frais râpé, citron, sucre, eau glacée', price: '1000', image: dish2 },
      { name: 'Jus de Tamarin', description: 'Tamarin frais, sucre, eau glacée, boisson traditionnelle', price: '800', image: dish3 },
      { name: 'Vins Sélectionnés d\'Afrique', description: 'Sélection du sommelier vins africains premium par plat', price: '4500', image: dish4 },
      { name: 'Mocktail Tropical', description: 'Fruits tropicaux frais, gingembre, citron, eau pétillante', price: '800', image: starterImg },
    ],
  };

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
              Saveurs Authentiques
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground mb-6">
              Notre Menu
            </h1>
            <p className="text-espresso-foreground/70 max-w-2xl mx-auto">
              Une célébration authentique de la cuisine béninoise et africaine. Chaque plat raconte 
              une histoire de tradition, de générosité et de saveurs incontournables.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Category Tabs */}
      <section className="sticky top-[72px] bg-background/95 backdrop-blur-md z-30 border-b border-border">
        <div className="container-custom px-4">
          <div className="flex justify-center gap-2 md:gap-8 py-4 overflow-x-auto">
            {categories.map((category) => (
              <button
                key={category.key}
                onClick={() => setActiveCategory(category.key)}
                className={`relative px-4 md:px-6 py-2 text-sm md:text-base font-medium uppercase tracking-wider transition-colors whitespace-nowrap ${
                  activeCategory === category.key
                    ? 'text-primary'
                    : 'text-muted-foreground hover:text-foreground'
                }`}
              >
                {category.label}
                {activeCategory === category.key && (
                  <motion.div
                    layoutId="activeCategory"
                    className="absolute bottom-0 left-0 right-0 h-0.5 bg-primary"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="section-padding">
        <div className="container-custom">
          <AnimatePresence mode="wait">
            <motion.div
              key={activeCategory}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="max-w-4xl mx-auto"
            >
              <div className="space-y-8">
                {menuItems[activeCategory].map((item, index) => (
                  <AnimatedSection key={item.name} delay={index * 0.05}>
                    <motion.div
                      whileHover={{ x: 4 }}
                      className={`flex gap-6 items-start py-4 border-b border-border/50`}
                    >
                      {item.image && (
                        <div className="w-20 h-20 md:w-24 md:h-24 rounded-lg overflow-hidden flex-shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                      )}
                      <div className="flex-1 min-w-0">
                        <div className="flex justify-between items-start gap-4 mb-2">
                          <h3 className="font-display text-xl md:text-2xl">{item.name}</h3>
                          <span className="text-primary font-display text-xl md:text-2xl flex-shrink-0">
                            {item.price} FCFA
                          </span>
                        </div>
                        <p className="text-muted-foreground text-sm md:text-base">
                          {item.description}
                        </p>
                      </div>
                    </motion.div>
                  </AnimatedSection>
                ))}
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
