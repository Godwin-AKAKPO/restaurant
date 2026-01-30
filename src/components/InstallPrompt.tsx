interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

export default function InstallPrompt({ onInstall, onDismiss }: InstallPromptProps) {
  return (
    <div className="fixed bottom-4 right-4 bg-gradient-to-br from-cream to-cream/90 dark:from-espresso dark:to-espresso/90 rounded-2xl shadow-2xl p-6 flex items-center gap-6 max-w-sm border-2 border-primary/20 dark:border-primary/30 backdrop-blur-sm">
      <div className="flex-shrink-0 text-4xl animate-bounce">📱</div>
      <div className="flex-1">
        <h3 className="font-bold text-espresso dark:text-cream text-lg mb-1">Installer La Maison</h3>
        <p className="text-sm text-espresso/70 dark:text-cream/70">Accédez rapidement à votre restaurant</p>
      </div>
      <div className="flex gap-3 flex-shrink-0">
        <button
          onClick={onInstall}
          className="px-4 py-2 bg-gradient-to-r from-primary to-primary/80 text-cream hover:from-primary/90 hover:to-primary rounded-xl text-sm font-semibold transition-all shadow-lg hover:shadow-xl hover:scale-105"
        >
          Installer
        </button>
        <button
          onClick={onDismiss}
          className="px-4 py-2 bg-espresso/10 dark:bg-cream/10 hover:bg-espresso/20 dark:hover:bg-cream/20 text-espresso dark:text-cream rounded-xl text-sm font-medium transition-colors border border-espresso/20 dark:border-cream/20"
        >
          Plus tard
        </button>
      </div>
    </div>
  );
}
