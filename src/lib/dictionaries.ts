const dictionaries = {
    en: () => import('@/dictionaries/en-GB.json').then((module) => module.default),
    pl: () => import('@/dictionaries/pl-PL.json').then((module) => module.default),
};

export const getDictionary = async (locale: keyof typeof dictionaries) => dictionaries[locale]();