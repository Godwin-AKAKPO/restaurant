interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

export default function InstallPrompt({ onInstall, onDismiss }: InstallPromptProps) {
  return (
    <div className="fixed top-20 left-1/2 transform -translate-x-1/2 bg-gradient-to-br from-cream to-cream/90 dark:from-espresso dark:to-espresso/90 rounded-2xl shadow-2xl p-8 flex flex-col md:flex-row items-center gap-8 w-11/12 max-w-2xl border-2 border-primary/20 dark:border-primary/30 backdrop-blur-sm z-40">
      <div className="flex-shrink-0 text-6xl animate-bounce">📱</div>
      <div className="flex-1 text-center md:text-left">
        <h3 className="font-bold text-espresso dark:text-cream text-2xl mb-2">Installer La Maison</h3>
        <p className="text-base text-espresso/70 dark:text-cream/70">Accédez rapidement à votre restaurant préféré directement sur votre écran d'accueil</p>
      </div>
      <div className="flex gap-4 flex-shrink-0 w-full md:w-auto">
        <button
          onClick={onInstall}
          className="flex-1 md:flex-none px-6 py-3 bg-gradient-to-r from-primary to-primary/80 text-cream hover:from-primary/90 hover:to-primary rounded-xl text-base font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Installer
        </button>
        <button
          onClick={onDismiss}
          className="flex-1 md:flex-none px-6 py-3 bg-espresso/10 dark:bg-cream/10 hover:bg-espresso/20 dark:hover:bg-cream/20 text-espresso dark:text-cream rounded-xl text-base font-medium transition-colors border border-espresso/20 dark:border-cream/20"
        >
          Plus tard
        </button>
      </div>
    </div>
  );
}
