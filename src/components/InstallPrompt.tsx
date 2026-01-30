interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

export default function InstallPrompt({ onInstall, onDismiss }: InstallPromptProps) {
  return (
    <div className="fixed bottom-4 md:top-6 left-1/2 transform -translate-x-1/2 z-[100] w-[92%] max-w-lg">
      <div className="bg-cream/95 dark:bg-espresso/95 backdrop-blur-md rounded-2xl shadow-2xl p-4 md:p-5 flex flex-col md:flex-row items-center gap-4 md:gap-5 border border-primary/20">
        
        {/* Version compacte pour mobile : Icône et Texte sur la même ligne */}
        <div className="flex items-center gap-4 w-full md:w-auto">
          <div className="flex-shrink-0 text-3xl md:text-4xl animate-bounce">
            📱
          </div>
          <div className="text-left">
            <h3 className="font-bold text-espresso dark:text-cream text-base md:text-lg leading-tight">
              Installer La Maison
            </h3>
            <p className="text-xs md:text-sm text-espresso/70 dark:text-cream/70">
              Accès rapide sur votre écran d'accueil
            </p>
          </div>
        </div>

        {/* Boutons : Côte à côte même sur mobile pour gagner de la hauteur */}
        <div className="flex gap-2 w-full md:w-auto">
          <button
            onClick={onInstall}
            className="flex-1 px-4 py-2.5 bg-primary text-cream rounded-xl text-sm font-semibold transition-transform active:scale-95 shadow-md"
          >
            Installer
          </button>
          <button
            onClick={onDismiss}
            className="flex-1 px-4 py-2.5 bg-espresso/10 dark:bg-cream/10 text-espresso dark:text-cream rounded-xl text-sm font-medium border border-espresso/10 dark:border-cream/10"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}