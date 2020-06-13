import i18n, { Resource } from "i18next";
import { initReactI18next } from "react-i18next";


export const localizations: Resource = {
  en: {
    nav: {
      aboutMe: "About me",
      resume: "Resume",
      code: "Code",
      blog: "Blog",
      contact: "Contact",
      flag: "🇺🇸"
    },
    main: {
      jobTitle: "Data Scientist",
      aboutTitle: "About"
    },
    about: {

    },
    resume: {
      title: "{{fullName}}",
      educationSectionTitle: "education",
      experienceSectionTitle: "experience",
      skillsSectionTitle: "skills",
      certificatesSectionTitle: "certificates"
    },
    contact: {
      title: "Contact me",
      nameFieldLabel: "Name",
      emailFieldLabel: "Email",
      contentFieldLabel: "Your message",
      submitButtonTitle: "Submit",
    }
  },
  fr: {
    nav: {
      aboutMe: "À propos de moi",
      resume: "CV",
      code: "Code",
      blog: "Blog",
      contact: "Contact",
      flag: "🇫🇷",
    },
    main: {
      jobTitle: "Data Scientist",
      aboutTitle: "À propos"
    },
    about: {

    },
    resume: {
      title: "{{fullName}}",
      educationSectionTitle: "Éducation",
      experienceSectionTitle: "Éxperience",
      skillsSectionTitle: "Compétences",
      certificatesSectionTitle: "Certifications"
    },
    contact: {
      title: "Contact",
      nameFieldLabel: "Prénom",
      emailFieldLabel: "Adresse mail",
      contentFieldLabel: "Votre message",
      submitButtonTitle: "Envoyer",
    }
  }
};

i18n
  .use(initReactI18next)
  .init({
    resources: localizations,
    fallbackLng: ['en', 'fr'],
    lng: localStorage.getItem('lang') || 'en',
    interpolation: {
      escapeValue: false
    },
  });