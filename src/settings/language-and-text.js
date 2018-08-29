/**
 * Application languages and text copy
 */

// Default language
const LANG = ['en', 'fr'];

// Active language
export const ACTIVE_LANG = LANG[1];

// Text copy used all over the app
export const appTextCopy = {
  'confirm delete': `Voulez-vous vraiment supprimer cet element?`,

  en: {
    auth: {
      title: 'Welcome',
      paragraph: '[en] Veuillez entrer votre contact pour que nous puissions vous contacter',
      submit: 'Enter the site',
      name: 'Your name',
    },
    form: {
      email: 'Your email',
      emailPlaceholder: 'Your@rmail.com',
      phone: 'Your phone',
      phonePlaceholder: '123456789',
      rememberLabel: 'Remember login',
      errors: {
        minLength: 'should NOT be shorter than 3 characters',
        email: 'Please enter an email like: your@email.something',
        phone: 'Please enter a phone number like: 123456789',
      },
    },
  },
  fr: {
    auth: {
      title: 'Bienvenue',
      paragraph: 'Veuillez entrer votre contact pour que nous puissions vous contacter',
      submit: 'Acceder au site',
      name: 'Votre nom',
    },
    form: {
      email: 'Votre mail',
      emailPlaceholder: 'votre@email.com',
      phone: 'Votre numero téléphonique',
      phonePlaceholder: '123456789',
      rememberLabel: 'Sauvegarder les détails',
      errors: {
        minLength: 'Ne devrait PAS être en dessous de 3 charactères',
        email: 'Veuillez saisir une addresse email du genre: votre@email.qqchose',
        phone: 'Veuillez saisir un numero téléphonique du genre: 123456789',
      },
    },
  },  
};

export const TEXT_COPY = {...appTextCopy[ACTIVE_LANG]};

