// Edit everything here. Leave `live` / `code` empty ("") until you have real URLs; those buttons stay disabled.
export const profile = {
  name: "Jabar Abdulla",
  email: "jabarabdalla0@gmail.com",
  phone: "0751 057 2447",
  whatsapp:
    "https://wa.me/9647510572447?text=" +
    encodeURIComponent(
      "Hello Jabar! I visited your portfolio and would like to discuss a website project.",
    ),
  instagram: "https://www.instagram.com/ll_jabbar_ll/",
  linkedin: "https://www.linkedin.com/in/jabar-abdulla-3960542ab/",
};
export const nav = [
  ["Home", "home"],
  ["About", "about"],
  ["Projects", "projects"],
  ["Skills", "skills"],
  ["Contact", "contact"],
];
const media = (filename) => `${import.meta.env.BASE_URL}media/${filename}`;
export const highlights = [
  [
    "Creative Development",
    "Modern interfaces, thoughtful visual design, and interactive experiences.",
  ],
  [
    "Responsive Design",
    "Websites that adapt smoothly to desktop, tablet, and mobile screens.",
  ],
  [
    "Performance",
    "Clean implementation, optimized assets, and efficient user experiences.",
  ],
  [
    "Continuous Learning",
    "Exploring modern front-end development, animation, and interactive web technologies.",
  ],
];
export const projects = [
  {
    title: "Breva Coffee",
    art: "coffee",
    text: "A café website with a menu, special offers, photo gallery, table reservation form and contact section.",
    tags: ["Café", "Reservations", "Website"],
    image: media("coffee.jpg"),
    live: "https://jabarabdalla0-create.github.io/coffe-shop/",
    code: "",
    hue: "#EC4899",
  },
  {
    title: "Kurdistan Estate",
    art: "estate",
    text: "A real estate platform for the Kurdistan Region with property search, city map, language and currency switching, and a mortgage calculator.",
    tags: ["Real estate", "Multi-language", "Calculator"],
    image: media("estate.jpg"),
    live: "https://jabarabdalla0-create.github.io/real-estate/",
    code: "",
    hue: "#3B82F6",
  },
  {
    title: "Barber Website",
    art: "barber",
    text: "A website for a barber shop that presents the business online.",
    tags: ["Barber", "Website"],
    image: media("barber.jpg"),
    live: "https://barber0.rf.gd/?i=1",
    code: "",
    hue: "#7C3AED",
  },
  {
    title: "Kurd Game",
    art: "game",
    text: "An interactive game project built for the web.",
    tags: ["Game", "Web"],
    image: media("game.jpg"),
    live: "https://kurdgame.free.je/",
    code: "",
    hue: "#3B82F6",
  },
];
// status: 'core' = used regularly, 'exploring' = currently learning
export const skills = [
  ["HTML5", "core"],
  ["CSS3", "core"],
  ["JavaScript", "core"],
  ["React", "core"],
  ["Responsive Web Design", "core"],
  ["Git", "core"],
  ["GitHub", "core"],
];
export const projectTypes = [
  "Business website",
  "QR digital menu",
  "Portfolio",
  "Landing page",
  "Other",
];

// EmailJS (the public key is meant to be used in the browser; never put a private key here).
// In the EmailJS template, set To Email to jabarabdalla0@gmail.com and use variables:
// {{from_name}} {{from_email}} {{reply_to}} {{project_type}} {{message}}
export const emailConfig = {
  serviceId: "service_6sgnue2",
  templateId: "template_8358k7q",
  publicKey: "MAhXbCnf7u_5SlzRq",
};
