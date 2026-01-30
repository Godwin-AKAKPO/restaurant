interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

export default function InstallPrompt({ onInstall, onDismiss }: InstallPromptProps) {
  return (
    <div className="fixed top-6 left-1/2 transform -translate-x-1/2 z-[100] w-[95%] max-w-lg">
      <div className="bg-cream/95 dark:bg-espresso/95 backdrop-blur-md rounded-2xl shadow-2xl p-5 flex flex-col md:flex-row items-center gap-5 border border-primary/20">
        <div className="flex-shrink-0 text-4xl animate-bounce">📱</div>
        <div className="flex-1 text-center md:text-left">
          <h3 className="font-bold text-espresso dark:text-cream text-lg mb-1">Installer La Maison</h3>
          <p className="text-sm text-espresso/70 dark:text-cream/70">Ajoutez le restaurant à votre écran d'accueil.</p>
        </div>
        <div className="flex gap-3 w-full md:w-auto">
          <button
            onClick={onInstall}
            className="flex-1 px-5 py-2 bg-primary text-cream rounded-xl text-sm font-semibold transition-transform active:scale-95"
          >
            Installer
          </button>
          <button
            onClick={onDismiss}
            className="flex-1 px-5 py-2 bg-espresso/10 dark:bg-cream/10 text-espresso dark:text-cream rounded-xl text-sm font-medium"
          >
            Plus tard
          </button>
        </div>
      </div>
    </div>
  );
}