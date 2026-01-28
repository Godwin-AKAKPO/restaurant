import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Instagram, Facebook, Twitter, MapPin, Phone, Mail, Clock } from 'lucide-react';

export const Footer = () => {
  return (
    <footer className="bg-espresso text-espresso-foreground">
      <div className="container-custom section-padding">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Brand */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <Link to="/" className="inline-block mb-6">
              <span className="font-display text-3xl font-semibold">
                <span className="text-primary">La</span> Maison
              </span>
            </Link>
            <p className="text-espresso-foreground/70 leading-relaxed mb-6">
              Un voyage culinaire exquis où la tradition rencontre l'innovation, créant des expériences gastronomiques inoubliables.
            </p>
            <div className="flex gap-4">
              {[Instagram, Facebook, Twitter].map((Icon, i) => (
                <motion.a
                  key={i}
                  href="#"
                  whileHover={{ scale: 1.1, y: -2 }}
                  className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center hover:bg-primary hover:text-primary-foreground transition-colors"
                >
                  <Icon className="w-5 h-5" />
                </motion.a>
              ))}
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="font-display text-xl mb-6">Liens Rapides</h4>
            <ul className="space-y-3">
              {[
                { label: 'À Propos', path: '/about' },
                { label: 'Notre Menu', path: '/menu' },
                { label: 'Galerie', path: '/gallery' },
                { label: 'Réservation', path: '/reservation' },
                { label: 'Contact', path: '/contact' },
              ].map((item) => (
                <li key={item.label}>
                  <Link
                    to={item.path}
                    className="text-espresso-foreground/70 hover:text-primary transition-colors"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Contact */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="font-display text-xl mb-6">Nous Contacter</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <span className="text-espresso-foreground/70">
                  123 Avenue Gastronomique<br />
                  75008 Paris, France
                </span>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="tel:+33123456789" className="text-espresso-foreground/70 hover:text-primary transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary flex-shrink-0" />
                <a href="mailto:bonjour@lamaison.fr" className="text-espresso-foreground/70 hover:text-primary transition-colors">
                  bonjour@lamaison.fr
                </a>
              </li>
            </ul>
          </motion.div>

          {/* Hours */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h4 className="font-display text-xl mb-6">Horaires d'Ouverture</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-espresso-foreground/70">
                  <p className="font-medium text-espresso-foreground">Déjeuner</p>
                  <p>Mar - Dim : 12h00 - 14h30</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Clock className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                <div className="text-espresso-foreground/70">
                  <p className="font-medium text-espresso-foreground">Dîner</p>
                  <p>Mar - Dim : 19h00 - 22h30</p>
                </div>
              </li>
              <li className="text-espresso-foreground/50 text-sm mt-4">
                Fermé le lundi
              </li>
            </ul>
          </motion.div>
        </div>

        {/* Bottom */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mt-16 pt-8 border-t border-espresso-foreground/10 flex flex-col md:flex-row justify-between items-center gap-4"
        >
          <p className="text-espresso-foreground/50 text-sm">
            © {new Date().getFullYear()} La Maison. Tous droits réservés.
          </p>
          <div className="flex gap-6 text-sm text-espresso-foreground/50">
            <a href="#" className="hover:text-primary transition-colors">Politique de Confidentialité</a>
            <a href="#" className="hover:text-primary transition-colors">Mentions Légales</a>
          </div>
        </motion.div>
      </div>
    </footer>
  );
};
