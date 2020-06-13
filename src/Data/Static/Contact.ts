
import faGithub from '@fortawesome/fontawesome-free-brands/faGithub';
import faFacebook from '@fortawesome/fontawesome-free-brands/faFacebookF';
import faInstagram from '@fortawesome/fontawesome-free-brands/faInstagram';
import faLinkedinIn from '@fortawesome/fontawesome-free-brands/faLinkedinIn';
import faTwitter from '@fortawesome/fontawesome-free-brands/faTwitter';
import { IconProp } from '@fortawesome/fontawesome-svg-core';
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

type ContactData = {
  link: string;
  label: string;
  icon: IconProp;
}[];

const ContactData: ContactData = [
  {
    link: 'https://github.com/ahmedrachid',
    label: 'Github',
    icon: faGithub as IconProp,
  },
  {
    link: 'https://www.linkedin.com/in/ahmed-rachid',
    label: 'LinkedIn',
    icon: faLinkedinIn as IconProp,
  },
  {
    link: 'mailto:ahmedrachidhazourli@yahoo.fr',
    label: 'Email',
    icon: faEnvelope as IconProp
  },
];

export default ContactData;