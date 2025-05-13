import { useEffect, useState } from 'react';

export function useStorybookTheme() {
  const [theme, setTheme] = useState<'light' | 'dark'>('light');

  useEffect(() => {
    const html = document.documentElement;

    const observer = new MutationObserver(() => {
      if (html.classList.contains('dark-mode')) {
        setTheme('dark');
      } else {
        setTheme('light');
      }
    });

    observer.observe(html, { attributes: true, attributeFilter: ['class'] });

    if (html.classList.contains('dark-mode')) {
      setTheme('dark');
    }

    return () => observer.disconnect();
  }, []);

  return theme;
}