/**
 * Application languages and text copy
 */

// Default language
const LANG = ['en', 'fr'];

// Active language
export const ACTIVE_LANG = LANG[1];

// Text copy used all over the app
export const appTextCopy = {
  // English copy ******************************************************************************
  // ******************************************************************************************
  // ******************************************************************************************
  en: {
    // Auth screen -----------------------------------------------------------------
    auth: {
      title: 'Welcome',
      paragraph: '[en] Veuillez entrer votre contact pour que nous puissions vous contacter',
      submit: 'Enter the site',
      name: 'Your name',
    },
    // Auth screen -----------------------------------------------------------------
    // Auth form -----------------------------------------------------------------
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
    // Auth form -----------------------------------------------------------------
    // Admin area -----------------------------------------------------------------
    admin: {
      onSpotlight: 'Deals Of the week',
      login: 'Connect to admin',
      loginUsername: 'Username or email',
      loginPassword: 'Password',
    },
    // Admin area -----------------------------------------------------------------
    // itemModal -----------------------------------------------------------------
    itemModal: {
      onSpotlight: 'Deal Of The Week',
      mileage: 'Mileage',
      colors: 'Colors',
      bodyType: 'Body Style',
      fuelType: 'Fuel Type',
      year: 'Year',
      make: 'Make',
      nbDoors: 'Doors',
      transmission: 'Transmission',
      interested: 'Interested?',
      cancel: 'Cancel',
    },
    gen: {
      undefined: 'undefined',
      learnmore: 'Learn More',
      readless: 'Read Less',
      aboutus: 'About Us',
      contactus: 'Contact Us',
      confirmDelete: `Do you really want to delete this?`,
      loading: 'Chargement',
    },
    appInit: {
      settings: 'Settings',
      userInfo: 'User info',
    },
    nav: {
      cars: 'Cars',
      admin: 'Administration',
      logout: 'Logout',
    }
    // itemModal -----------------------------------------------------------------
  },



  // French copy ******************************************************************************
  // ******************************************************************************************
  // ******************************************************************************************
  fr: {
    // Auth screen -----------------------------------------------------------------
    auth: {
      title: 'Bienvenue',
      paragraph: 'Veuillez entrer votre contact pour que nous puissions vous contacter',
      submit: 'Acceder au site',
      name: 'Votre nom',
    },
    // Auth screen -----------------------------------------------------------------
    // Auth form -----------------------------------------------------------------
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
    // Auth form -----------------------------------------------------------------
    // Admin area -----------------------------------------------------------------
    admin: {
      onSpotlight: 'Bonnes affaires de la semaine',
      login: "Connecter à l'admin",
      loginUsername: "Nom d'utilisateur ou email",
      loginPassword: 'Mot de passe',
    },
    // itemModal -----------------------------------------------------------------
    itemModal: {
      onSpotlight: 'Affaire De La Semaine',
      mileage: 'kilométrage',
      colors: 'Couleurs',
      bodyType: 'Style de carrosserie',
      fuelType: 'Type de carburant',
      year: 'Année',
      make: 'Marque',
      nbDoors: 'Nombre de portes',
      transmission: 'Transmission',
      interested: 'Intéressé?',
      cancel: 'Annuller',
    },
    gen: {
      undefined: 'non définie',
      learnmore: 'En savoir plus',
      readless: 'Reduire',
      aboutus: 'À Propos',
      contactus: 'Nous Contacter',
      confirmDelete: `Voulez-vous vraiment supprimer cet element?`,
      loading: 'Chargement',
    },
    appInit: {
      settings: 'Paramètres',
      userInfo: 'Info usager',
    },
    nav: {
      cars: 'Voitures',
      admin: 'Administration',
      logout: 'Se deconnecter',
    }
    // itemModal -----------------------------------------------------------------
  },  
};

// Export copy of the language in use
export const TEXT_COPY = {...appTextCopy[ACTIVE_LANG]};

