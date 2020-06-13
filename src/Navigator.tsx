import { ReactNode, FC } from "react";
import About from "./Components/About";
import Resume from "./Components/Resume";
import Contact from "./Components/Contact";


export type RouteConfiguration = {
  path: string;
  title: {
    [lang: string]: string;
  };
  external: boolean;
  component?: FC;
  icon: string | ReactNode;
};

type RouterConfiguration = {
  routes: RouteConfiguration[];
}

const Router: RouterConfiguration = {
  routes: [
    /* TODO: Uncomment this route, when about me is fully developed
    {
      path: '/about',
      title: {
        en: 'About Me',
        fr: 'À propos de moi'
      },
      external: false,
      component: About,
      icon: 'person'
    },
    */
    {
      path: '/resume',
      title: {
        en: 'Resume',
        fr: 'CV'
      },
      external: false,
      component: Resume,
      icon: 'assignment'
    },

    {
      path: '/contact',
      title: {
        en: 'Contact',
        fr: 'Contact'
      },
      external: false,
      component: Contact,
      icon: 'email'
    }
  ]
} 

export default Router;