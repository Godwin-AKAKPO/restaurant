interface InstallPromptProps {
  onInstall: () => void;
  onDismiss: () => void;
}

export default function InstallPrompt({ onInstall, onDismiss }: InstallPromptProps) {
  return (
    <div className="bg-white dark:bg-slate-950 border border-slate-200 dark:border-slate-800 rounded-lg shadow-lg p-4 flex items-center justify-between gap-4 max-w-md">
      <div className="flex items-center gap-3">
        <div className="text-2xl">📱</div>
        <div>
          <h3 className="font-semibold text-slate-900 dark:text-white">Installer La Maison</h3>
          <p className="text-sm text-slate-600 dark:text-slate-400">Accédez à votre restaurant en un clic</p>
        </div>
      </div>
      <div className="flex gap-2">
        <button
          onClick={onInstall}
          className="px-3 py-1 bg-slate-900 dark:bg-white text-white dark:text-slate-900 rounded text-sm font-medium hover:bg-slate-800 dark:hover:bg-slate-100 transition-colors"
        >
          Installer
        </button>
        <button
          onClick={onDismiss}
          className="px-3 py-1 text-slate-600 dark:text-slate-400 text-sm hover:text-slate-900 dark:hover:text-white transition-colors"
        >
          Plus tard
        </button>
      </div>
    </div>
  );
}
