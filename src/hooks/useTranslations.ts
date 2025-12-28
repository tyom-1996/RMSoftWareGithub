import { useRouter } from "next/router";
import en from "../locales/en.json";
import cz from "../locales/cz.json";

type Dictionary = Record<string, any>;

const dictionaries: Record<string, Dictionary> = {
  en,
  cz,
};

const getValueByPath = (dictionary: Dictionary, path: string): any => {
  const segments = path.split(".");
  let current: any = dictionary;

  for (const segment of segments) {
    if (current == null || typeof current !== "object") {
      return undefined;
    }
    current = current[segment];
  }

  return current;
};

export const useTranslations = () => {
  const { locale } = useRouter();
  const activeLocale = locale && dictionaries[locale] ? locale : "cz";
  const dictionary = dictionaries[activeLocale];

  const t = <T = any>(path: string, fallback?: T): T => {
    const value = getValueByPath(dictionary, path);
    return (value as T) ?? (fallback as T) ?? (path as unknown as T);
  };

  return { t, locale: activeLocale };
};

export default useTranslations;

