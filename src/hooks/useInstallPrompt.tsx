import { useEffect, useState } from 'react';
import { toast } from 'sonner';
import InstallPrompt from '@/components/InstallPrompt';

interface BeforeInstallPromptEvent extends Event {
  prompt: () => Promise<void>;
  userChoice: Promise<{ outcome: 'accepted' | 'dismissed' }>;
}

let hasShownPrompt = false;

export const useInstallPrompt = () => {
  const [deferredPrompt, setDeferredPrompt] = useState<BeforeInstallPromptEvent | null>(null);
  const [showInstallPrompt, setShowInstallPrompt] = useState(false);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      e.preventDefault();
      const event = e as BeforeInstallPromptEvent;
      setDeferredPrompt(event);
      setShowInstallPrompt(true);

      // Réinitialiser le flag pour afficher la notification à chaque visite
      hasShownPrompt = false;

      // Afficher la notification
      toast.custom(
        (toastId) => (
          <InstallPrompt
            onInstall={() => {
              if (event) {
                event.prompt();
                event.userChoice.then((choiceResult) => {
                  if (choiceResult.outcome === 'accepted') {
                    toast.success('Application installée avec succès!', {
                      duration: 3000,
                    });
                  }
                  setDeferredPrompt(null);
                  setShowInstallPrompt(false);
                });
              }
            }}
            onDismiss={() => {
              toast.dismiss(toastId);
              setShowInstallPrompt(false);
            }}
          />
        ),
        {
          duration: Infinity,
          position: 'top-center',
        }
      );
    };

    window.addEventListener('beforeinstallprompt', handleBeforeInstallPrompt);

    // Optionnel : déclencher manuellement si l'événement n'est pas disponible
    // Cela peut arriver si l'app est déjà installable mais que l'événement a déjà été tiré
    const checkInstallability = () => {
      // Vérifier si le navigateur supporte l'API
      if ('beforeinstallprompt' in window && !hasShownPrompt) {
        // L'événement será déclenché automatiquement par le navigateur
      }
    };

    checkInstallability();

    return () => {
      window.removeEventListener('beforeinstallprompt', handleBeforeInstallPrompt);
    };
  }, []);

  return { showInstallPrompt, deferredPrompt };
};
