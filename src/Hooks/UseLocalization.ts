import { useTranslation } from "react-i18next";
import { i18n } from "i18next";
import { localizations } from "../Resources/i18n";

type LocalizeFunction = (resource: TemplateStringsArray | string, interpolation?: any) => string;

export default function useLocalization(namespace: string): [LocalizeFunction, i18n] {
  const { t, i18n } = useTranslation();

  return [
    (resource, interpolation = {}) => t((localizations[i18n.language][namespace] as any)[resource as unknown as string], { 
      replace: interpolation
    }),
    i18n
  ];
}