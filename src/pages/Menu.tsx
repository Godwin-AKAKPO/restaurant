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
      { name: 'Foie Gras Poêlé', description: 'Poire caramélisée, réduction de balsamique vieilli, toast de brioche', price: '38', image: dish1 },
      { name: 'Tartare de Thon', description: 'Avocat, sésame, wontons croustillants, ponzu aux agrumes', price: '26', image: starterImg },
      { name: 'Burrata Caprese', description: 'Tomates anciennes, huile de basilic, balsamique vieilli', price: '22' },
      { name: 'Soupe à l\'Oignon Gratinée', description: 'Croûton au gruyère, oignons caramélisés, consommé de bœuf', price: '16' },
      { name: 'Huîtres Rockefeller', description: 'Épinards, Pernod, gratin au parmesan (6 pièces)', price: '32' },
    ],
    mains: [
      { name: 'Homard au Beurre', description: 'Risotto au safran, émulsion corail, micro-pousses', price: '78', image: dish2 },
      { name: 'Filet de Bœuf Wagyu', description: 'Jus à la truffe, purée de pommes de terre, légumes de saison', price: '89', image: dish4 },
      { name: 'Magret de Canard', description: 'Réduction aux cerises, pomme fondante, jeunes pousses', price: '52' },
      { name: 'Bar du Chili', description: 'Glaçage miso, bok choy, sauce gingembre-ciboule', price: '56' },
      { name: 'Carré d\'Agneau', description: 'Croûte aux herbes, ratatouille, jus au romarin', price: '62' },
      { name: 'Risotto à la Truffe', description: 'Riz arborio, parmesan, copeaux de truffe noire', price: '42' },
    ],
    desserts: [
      { name: 'Sphère Chocolat Valrhona', description: 'Caramel au beurre salé, feuille d\'or, praliné noisette', price: '20', image: dish3 },
      { name: 'Crème Brûlée', description: 'Vanille de Madagascar, croûte de sucre caramélisé', price: '14' },
      { name: 'Tarte Tatin', description: 'Pommes caramélisées, glace vanille, calvados', price: '16' },
      { name: 'Plateau de Fromages', description: 'Fromages artisanaux, miel en rayon, compote de fruits, crackers', price: '26' },
      { name: 'Mille-Feuille', description: 'Pâte feuilletée, crème pâtissière, fruits frais', price: '17' },
    ],
    drinks: [
      { name: 'Signature La Maison', description: 'Cognac vieilli, miel, bitter à l\'orange, champagne', price: '22', image: drinkImg },
      { name: 'Espresso Martini', description: 'Vodka, espresso frais, liqueur de café', price: '16' },
      { name: 'French 75', description: 'Gin, citron, champagne, sucre', price: '18' },
      { name: 'Accord Mets et Vins', description: 'Sélection du sommelier par plat', price: '68' },
      { name: 'Mocktail du Jardin', description: 'Herbes fraîches, agrumes, eau pétillante', price: '10' },
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
              Excellence Culinaire
            </span>
            <h1 className="font-display text-4xl md:text-6xl lg:text-7xl font-semibold text-espresso-foreground mb-6">
              Notre Menu
            </h1>
            <p className="text-espresso-foreground/70 max-w-2xl mx-auto">
              Une célébration des ingrédients de saison, des techniques raffinées et 
              de la présentation artistique. Chaque plat raconte une histoire de passion et de précision.
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
                      className={`flex gap-6 ${item.image ? 'items-start' : 'items-center'} py-4 border-b border-border/50`}
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
                            {item.price}€
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

          <AnimatedSection delay={0.3}>
            <div className="text-center mt-16 pt-8 border-t border-border">
              <p className="text-muted-foreground text-sm mb-2">
                Tous les prix sont en euros. Les prix n'incluent pas les taxes et le service.
              </p>
              <p className="text-muted-foreground text-sm">
                Veuillez informer votre serveur de toute allergie ou restriction alimentaire.
              </p>
            </div>
          </AnimatedSection>
        </div>
      </section>
    </Layout>
  );
};

export default Menu;
