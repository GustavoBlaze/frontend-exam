import { useState, useEffect } from 'react';

function usePersistedTheme(defaultTheme) {
  const [theme, setTheme] = useState(() => {
    const storageValue = localStorage.getItem('@Witcher:theme');

    if (storageValue) {
      return storageValue;
    }

    return defaultTheme;
  });

  useEffect(() => {
    localStorage.setItem('@Witcher:theme', theme);
  }, [theme]);

  return [theme, setTheme];
}

export default usePersistedTheme;
