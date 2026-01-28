import { useLocation, Link } from "react-router-dom";
import { useEffect } from "react";
import { motion } from 'framer-motion';
import { Layout } from '@/components/layout/Layout';

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error("Erreur 404: L'utilisateur a tenté d'accéder à une route inexistante:", location.pathname);
  }, [location.pathname]);

  return (
    <Layout>
      <section className="min-h-screen flex items-center justify-center section-padding">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-md mx-auto"
        >
          <span className="text-primary font-display text-8xl md:text-9xl font-bold">404</span>
          <h1 className="font-display text-3xl md:text-4xl font-semibold mt-4 mb-4">
            Page Non Trouvée
          </h1>
          <p className="text-muted-foreground mb-8">
            Désolé, la page que vous recherchez n'existe pas ou a été déplacée.
          </p>
          <Link
            to="/"
            className="btn-primary inline-block px-8 py-4 rounded-md font-medium text-sm uppercase tracking-widest"
          >
            Retour à l'Accueil
          </Link>
        </motion.div>
      </section>
    </Layout>
  );
};

export default NotFound;
