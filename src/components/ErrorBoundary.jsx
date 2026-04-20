import React from 'react';

export default class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false, error: null };
  }

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, info) {
    // eslint-disable-next-line no-console
    console.error('Masawara error boundary:', error, info);
  }

  render() {
    if (this.state.hasError) {
      return (
        <div className="min-h-[70vh] flex items-center justify-center px-6 bg-ivory-100">
          <div className="text-center max-w-md">
            <p className="font-accent text-2xl text-copper-500">
              a small pause
            </p>
            <h1 className="mt-3 font-display italic text-5xl text-charcoal-700">
              Something rustled in the garden.
            </h1>
            <p className="mt-5 text-charcoal-400 text-sm leading-relaxed">
              A quiet page error. Refreshing usually settles it — and if it doesn&apos;t,
              a WhatsApp to the front desk will.
            </p>
            <div className="mt-8 flex items-center justify-center gap-3">
              <button
                onClick={() => window.location.reload()}
                className="px-7 py-3 bg-sage-600 text-ivory-50 text-xs tracking-[0.18em] uppercase hover:bg-sage-700 transition-colors"
              >
                Refresh
              </button>
              <a
                href="/"
                className="px-7 py-3 border border-charcoal-700 text-charcoal-700 text-xs tracking-[0.18em] uppercase hover:bg-charcoal-700 hover:text-ivory-50 transition-colors"
              >
                Home
              </a>
            </div>
          </div>
        </div>
      );
    }
    return this.props.children;
  }
}
