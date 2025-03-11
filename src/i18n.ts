import i18n from "i18next";
import { initReactI18next } from "react-i18next";

// English translations
const enTranslations = {
  brand: {
    name: "SavoryHaven",
  },
  reserveTable: {
    heroTitle: "Reserve a Table",
    instruction: "Click on a table to view available dates and times.",
    description:
      "Let yourself enjoy modern Mediterranean and International cuisine in the heart of Vienna! Leto offers you an exceptional Mediterranean experience with exquisite recipes from the region. At Leto we only add the most delicate seasonings, aromatic spices, and the highest quality products to each of our recipes. Our modern Mediterranean food and drinks are freshly made daily out of wholesome ingredients. We have carefully created our place so there is food for every taste: steak and chicken lovers, seafood lovers, vegetarians, and more.",
    modalTitle: "Reserve Table {{tableId}}",
    modalInstruction: "Select a date and time for your reservation.",
    availableTimes: "Available Times:",
    toastSuccess: "Table {{tableId}} reserved for {{date}} at {{time}}.",
    toastError: "Please select both a date and a time.",
    cancel: "Cancel",
    confirmReservation: "Confirm Reservation",
  },
  nav: {
    home: "Home",
    menu: "Menu",
    about: "About",
    gallery: "Gallery",
    contact: "Contact",
    cart: "Cart",
  },
  contact: {
    title: "Contact Us",
    subtitle: "We'd love to hear from you. Please fill out the form below.",
    name: "Your Name",
    email: "Your Email",
    subject: "Subject",
    message: "Your Message",
    send: "Send Message",
    thankYou: "Thank You!",
    response: "Your message has been sent. We will get back to you shortly.",
    sendAnother: "Send Another Message",
  },
  buttons: {
    reserveTable: "Reserve Table",
    viewMenu: "View Our Menu",
    bookTable: "Book a Table",
    viewDetails: "View Details",
    fullMenu: "See Full Menu",
    ourStory: "Our Story",
    addToCart: "Add to Cart",
  },
  hero: {
    title1: "Experience",
    titleHighlight: "Authentic",
    title2: "Culinary Excellence",
    subtitle:
      "Indulge in a symphony of flavors crafted with passion and served with elegance.",
  },
  features: {
    heading: "Why Choose Us",
    farmToTable: {
      title: "Farm to Table",
      description:
        "We source fresh ingredients directly from local farms, ensuring quality and supporting our community.",
    },
    artisanChefs: {
      title: "Artisan Chefs",
      description:
        "Our master chefs blend traditional techniques with innovative approaches to create unforgettable dishes.",
    },
    cozyAtmosphere: {
      title: "Cozy Atmosphere",
      description:
        "Experience dining in our carefully designed space that balances elegance with warm, inviting comfort.",
    },
  },
  menu: {
    heading: "Our Signature Dishes",
    subheading:
      "Indulge in our curated selection of dishes that showcase our culinary philosophy",
    lambDish: {
      title: "Herb-Crusted Lamb",
      description:
        "Tender lamb rack with a fragrant herb crust, served with roasted vegetables and mint jus.",
    },
    risottoDish: {
      title: "Truffle Risotto",
      description:
        "Creamy arborio rice with wild mushrooms, finished with truffle oil and aged parmesan.",
    },
    salmonDish: {
      title: "Citrus Glazed Salmon",
      description:
        "Fresh Atlantic salmon with a tangy citrus glaze, served with seasonal vegetables.",
    },
    tags: {
      chefsSpecial: "Chef's Special",
      vegetarian: "Vegetarian",
      glutenFree: "Gluten Free",
    },
    fullMenuHeading: "Full Menu",
    fullMenuSubheading:
      "Explore our complete menu and add your favorites to the cart.",
  },
  about: {
    heading: "Our Culinary Journey",
    paragraph1:
      "Founded in 2015, SavoryHaven has been serving exceptional cuisine that combines traditional recipes with modern culinary innovations.",
    paragraph2:
      "Our team of passionate chefs is dedicated to creating memorable dining experiences through carefully crafted dishes made with locally-sourced ingredients.",
  },
  footer: {
    tagline: "Creating memorable dining experiences since 2015",
    contact: {
      heading: "Contact Us",
      address: "123 Gourmet Avenue, Culinary District",
      phone: "Phone: (123) 456-7890",
      email: "Email: info@savoryhaven.com",
    },
    hours: {
      heading: "Opening Hours",
      weekdays: "Monday-Friday: 11am - 10pm",
      weekends: "Saturday-Sunday: 10am - 11pm",
      holidays: "Special holiday hours may apply",
    },
    newsletter: {
      heading: "Newsletter",
      description: "Subscribe for special offers and events",
      placeholder: "Your email",
    },
    copyright: "All rights reserved.",
  },
  cart: {
    heading: "Your Cart",
    empty: "Your cart is empty.",
    total: "Total",
    checkout: "Checkout",
    clear: "Clear Cart",
    remove: "Remove",
    quantity: "Quantity",
  },
  checkout: {
    title: "Checkout",
    customerDetails: "Customer Details",
    name: "Name",
    email: "Email",
    phone: "Phone",
    address: "Address",
    next: "Next",
    paymentDetails: "Payment Details",
    cardNumber: "Card Number",
    expiry: "Expiry (MM/YY)",
    cvv: "CVV",
    previous: "Previous",
    reviewOrder: "Review Your Order",
    orderSummary: "Order Summary",
    total: "Total",
    placeOrder: "Place Order",
    fillCustomerDetails: "Please fill in all customer details.",
    fillPaymentDetails: "Please fill in all payment details.",
    thankYou: "Thank You for Your Order!",
    orderNumber: "Your order number is:",
    continueShopping: "Continue Shopping",
  },
};

// Serbian translations
const srTranslations = {
  brand: {
    name: "SavoryHaven",
  },
  reserveTable: {
    heroTitle: "Rezervišite Sto",
    instruction: "Kliknite na sto da vidite dostupne datume i vreme.",
    description:
      "Uživajte u modernoj mediteranskoj i internacionalnoj kuhinji u srcu Beča! Leto vam pruža izuzetno mediteransko iskustvo sa izvrsnim receptima iz regiona. U Letu koristimo samo najdelikatnije začine, aromatične vrste i najkvalitetnije sastojke za svaki naš recept. Naša moderna mediteranska hrana i pića se svakodnevno pripremaju od zdravih sastojaka. Pažljivo smo kreirali naš prostor kako bismo zadovoljili sve ukuse: ljubitelje odreska i piletine, morske plodove, vegetarijance i još mnogo toga.",
    modalTitle: "Rezervišite sto {{tableId}}",
    modalInstruction: "Izaberite datum i vreme za vašu rezervaciju.",
    availableTimes: "Dostupna Vremena:",
    toastSuccess: "Sto {{tableId}} rezervisan za {{date}} u {{time}}.",
    toastError: "Molimo vas, izaberite i datum i vreme.",
    cancel: "Otkaži",
    confirmReservation: "Potvrdi rezervaciju",
  },
  nav: {
    home: "Početna",
    menu: "Meni",
    about: "O nama",
    gallery: "Galerija",
    contact: "Kontakt",
    cart: "Korpa",
  },
  buttons: {
    reserveTable: "Rezervišite sto",
    viewMenu: "Pogledajte meni",
    bookTable: "Rezervišite sto",
    viewDetails: "Detalji",
    fullMenu: "Kompletan meni",
    ourStory: "Naša priča",
    addToCart: "Dodaj u korpu",
  },
  contact: {
    title: "Kontaktirajte Nas",
    subtitle:
      "Voleli bismo da čujemo vaše mišljenje. Molimo vas, popunite formu ispod.",
    name: "Vaše Ime",
    email: "Vaš Email",
    subject: "Naslov",
    message: "Vaša Poruka",
    send: "Pošalji Poruku",
    thankYou: "Hvala Vam!",
    response: "Vaša poruka je poslata. Uskoro ćemo vas kontaktirati.",
    sendAnother: "Pošalji Još Jednu Poruku",
  },
  hero: {
    title1: "Doživite",
    titleHighlight: "Autentičnu",
    title2: "Kulinarsku Izvrsnost",
    subtitle:
      "Prepustite se simfoniji ukusa stvaranih sa strašću i serviranih sa elegancijom.",
  },
  features: {
    heading: "Zašto nas izabrati",
    farmToTable: {
      title: "Iz bašte na sto",
      description:
        "Nabavljamo sveže sastojke direktno sa lokalnih farmi, osiguravajući kvalitet i podržavajući našu zajednicu.",
    },
    artisanChefs: {
      title: "Kulinarski majstori",
      description:
        "Naši glavni kuvari spajaju tradicionalne tehnike sa inovativnim pristupima za stvaranje nezaboravnih jela.",
    },
    cozyAtmosphere: {
      title: "Prijatna atmosfera",
      description:
        "Doživite obedovanje u našem pažljivo dizajniranom prostoru koji balansira eleganciju sa toplom, prijatnom udobnošću.",
    },
  },
  menu: {
    heading: "Naša signature jela",
    subheading:
      "Uživajte u našem odabranom izboru jela koja predstavljaju našu kulinarsku filozofiju",
    lambDish: {
      title: "Jagnjetina sa začinskim koricama",
      description:
        "Mekana jagnjeća rebarca sa mirisnim začinskim koricama, servirana sa pečenim povrćem i sosom od nane.",
    },
    risottoDish: {
      title: "Rižoto sa tartufima",
      description:
        "Kremasti arborio pirinač sa divljim pečurkama, završen uljem od tartufa i starim parmezanom.",
    },
    salmonDish: {
      title: "Losos sa citrusnim glazurom",
      description:
        "Svež atlantski losos sa kiselkastom citrusnom glazurom, serviran sa sezonskim povrćem.",
    },
    tags: {
      chefsSpecial: "Specijalitet šefa",
      vegetarian: "Vegetarijansko",
      glutenFree: "Bez glutena",
    },
    fullMenuHeading: "Kompletan meni",
    fullMenuSubheading:
      "Istražite ceo naš meni i dodajte omiljena jela u korpu.",
  },
  about: {
    heading: "Naše kulinarsko putovanje",
    paragraph1:
      "Osnovan 2015. godine, SavoryHaven služi izuzetnu kuhinju koja kombinuje tradicionalne recepte sa modernim kulinarskim inovacijama.",
    paragraph2:
      "Naš tim strastvenih kuvara posvećen je stvaranju nezaboravnih iskustava obedovanja kroz pažljivo pripremljena jela od lokalno nabavljenih sastojaka.",
  },
  footer: {
    tagline: "Stvaramo nezaboravna iskustva obedovanja od 2015. godine",
    contact: {
      heading: "Kontaktirajte nas",
      address: "Gurmanska avenija 123, Kulinarski okrug",
      phone: "Telefon: (123) 456-7890",
      email: "Email: info@savoryhaven.com",
    },
    hours: {
      heading: "Radno vreme",
      weekdays: "Ponedeljak-Petak: 11h - 22h",
      weekends: "Subota-Nedelja: 10h - 23h",
      holidays: "Specijalno radno vreme za praznike",
    },
    newsletter: {
      heading: "Bilten",
      description: "Pretplatite se za posebne ponude i događaje",
      placeholder: "Vaš email",
    },
    copyright: "Sva prava zadržana.",
  },
  cart: {
    heading: "Vaša Korpa",
    empty: "Vaša korpa je prazna.",
    total: "Ukupno",
    checkout: "Naplata",
    clear: "Obriši korpu",
    remove: "Ukloni",
    quantity: "Količina",
  },
  checkout: {
    title: "Naplata",
    customerDetails: "Podaci o klijentu",
    name: "Ime",
    email: "Email",
    phone: "Telefon",
    address: "Adresa",
    next: "Dalje",
    paymentDetails: "Podaci o plaćanju",
    cardNumber: "Broj kartice",
    expiry: "Ističe (MM/YY)",
    cvv: "CVV",
    previous: "Nazad",
    reviewOrder: "Pregled porudžbine",
    orderSummary: "Pregled narudžbine",
    total: "Ukupno",
    placeOrder: "Potvrdi porudžbinu",
    fillCustomerDetails: "Molimo popunite sve podatke o klijentu.",
    fillPaymentDetails: "Molimo popunite sve podatke o plaćanju.",
    thankYou: "Hvala Vam na porudžbini!",
    orderNumber: "Broj porudžbine je:",
    continueShopping: "Nastavi kupovinu",
  },
};

i18n.use(initReactI18next).init({
  resources: {
    en: { translation: enTranslations },
    sr: { translation: srTranslations },
  },
  lng: "en", // Default language
  fallbackLng: "en",
  interpolation: { escapeValue: false },
});

export default i18n;
