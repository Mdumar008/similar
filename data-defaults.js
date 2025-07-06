window.DEFAULT_DATA = {
  global: {
    logo: "images/logo.png",
    logo2: "images/logo2.jpeg",
    callIcon: "images/call.png",
    tagline: "Your Satisfaction, Our Priority"
  },
  pages: {
    index: {
      title: "A One Hospitality Services",
      nav: [
        {text:"Home", href:"index.html"},
        {text:"About", href:"about.html"},
        {text:"Hospitality", href:"hos.html"},
        {text:"Services", href:"sta.html"},
        {text:"Products", href:"product.html"},
        {text:"Admin", href:"admin.html"}
      ]
    },
    about: { title:"About Us", content:"Write your about-us content here." },
    hos:   { title:"Hospitality", content:"Describe your hospitality services here." },
    sta:   { title:"Services", content:"List your services here." },
    product: { } /* product.html uses same products list as admin */
  },
  products: [
    /* leave empty; admin panel will populate */
  ]
};
