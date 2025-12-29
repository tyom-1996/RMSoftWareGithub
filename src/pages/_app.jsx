// pages/_app.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';

const PERSISTED_LOCALE_KEY = 'selectedLocale';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // On first render, honor a saved locale and redirect if needed
    useEffect(() => {
        if (typeof window === 'undefined') return;
        const saved = window.localStorage.getItem(PERSISTED_LOCALE_KEY);
        if (saved && saved !== router.locale) {
            // Keep the current path but switch the locale
            router.replace(router.asPath, router.asPath, { locale: saved, scroll: false });
        }
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, []);

    // Whenever locale changes, persist it for future visits/navigation
    useEffect(() => {
        if (typeof window === 'undefined' || !router.locale) return;
        window.localStorage.setItem(PERSISTED_LOCALE_KEY, router.locale);
    }, [router.locale]);

    return (
        <AuthProvider>
            <Component {...pageProps} />
        </AuthProvider>
    );
}

export default MyApp;
