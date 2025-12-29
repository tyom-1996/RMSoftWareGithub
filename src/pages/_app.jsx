// pages/_app.jsx
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { AuthProvider } from '../context/AuthContext';

const PERSISTED_LOCALE_KEY = 'selectedLocale';

function MyApp({ Component, pageProps }) {
    const router = useRouter();

    // On first render (once the router is ready), honor a saved locale and redirect if needed
    useEffect(() => {
        if (typeof window === 'undefined' || !router.isReady) return;
        const saved = window.localStorage.getItem(PERSISTED_LOCALE_KEY);
        if (!saved || saved === router.locale) return;

        // Replace a dynamic placeholder with the actual slug when available
        const { slug } = router.query;
        const hasDynamicSlug = router.asPath.includes('[slug]');
        const resolvedPath = hasDynamicSlug
            ? (typeof slug === 'string' ? router.asPath.replace('[slug]', slug) : null)
            : router.asPath;

        // If slug is still unknown, avoid calling router.replace with an unresolved path
        if (!resolvedPath) return;

        // Keep the current path but switch the locale
        router.replace(resolvedPath, resolvedPath, { locale: saved, scroll: false });
    // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [router.isReady]);

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
