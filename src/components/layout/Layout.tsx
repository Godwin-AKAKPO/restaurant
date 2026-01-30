import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from './Navbar';
import { Footer } from './Footer';
import { useInstallPrompt } from '@/hooks/useInstallPrompt';
import InstallPrompt from '@/components/InstallPrompt';

interface LayoutProps {
  children: ReactNode;
}

export const Layout = ({ children }: LayoutProps) => {
  const { showInstallPrompt, handleInstallClick, handleDismiss } = useInstallPrompt();

  return (
    <div className="min-h-screen flex flex-col relative">
      {/* La notification apparaît ici, au sommet du DOM du Layout */}
      {showInstallPrompt && (
        <InstallPrompt 
          onInstall={handleInstallClick} 
          onDismiss={handleDismiss} 
        />
      )}

      <Navbar />
      <motion.main
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="flex-1"
      >
        {children}
      </motion.main>
      <Footer />
    </div>
  );
};