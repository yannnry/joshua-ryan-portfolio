export const navItems = [
  { name: "About", link: "#about" },
  { name: "Projects", link: "#projects" },
  { name: "Testimonials", link: "#testimonials" },
  { name: "Contact", link: "#contact" },
];

export const gridItems = [
  {
    id: 1,
    title: "Empowering Collaboration by Elevating Projects and Skills Together",
    description: "",
    className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
    imgClassName: "w-full h-full",
    titleClassName: "justify-end",
    img: "/b1.svg",
    spareImg: "",
  },
  {
    id: 2,
    title: "I’m Excited to Connect for Global Collaboration",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "",
    spareImg: "",
  },
  {
    id: 3,
    title: "My tech stack",
    description: "I constantly try to improve",
    className: "lg:col-span-2 md:col-span-3 md:row-span-2",
    imgClassName: "",
    titleClassName: "justify-center",
    img: "",
    spareImg: "",
  },
  {
    id: 4,
    title: "Tech enthusiast with a passion for development.",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-start",
    img: "/grid.svg",
    spareImg: "/b4.svg",
  },

  {
    id: 5,
    title: "Currently Exploring Clerk App Authentication",
    description: "The Inside Scoop",
    className: "md:col-span-3 md:row-span-2",
    imgClassName: "absolute right-0 bottom-0 md:w-96 w-60",
    titleClassName: "justify-center md:justify-start lg:justify-center",
    img: "/b5.svg",
    spareImg: "/grid.svg",
  },
  {
    id: 6,
    title: "Do you want to start a project together?",
    description: "",
    className: "lg:col-span-2 md:col-span-3 md:row-span-1",
    imgClassName: "",
    titleClassName: "justify-center md:max-w-full max-w-60 text-center",
    img: "",
    spareImg: "",
  },
];

export const projects = [
  {
    id: 1,
    title: "New Phase - Company's Recruitement Page",
    des: "Explore the possibilities with New Phase with this pleasing web design using framer animation using Aceternity UI.",
    img: "/newphase.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
      "/aceternity.svg",
    ],
    link: "https://new-phase.vercel.app/",
  },
  {
    id: 2,
    title: "Personal Portfolio - Dynamic Web Magic with Next.js",
    des: "Modern portfolio design, simplified personal information yet astonishing desgin and animation created with Next 14. ",
    img: "/portfolio.svg",
    iconLists: [
      "/next.svg",
      "/tail.svg",
      "/ts.svg",
      "/fm.svg",
      "/aceternity.svg",
    ],
    link: "https://google.com/",
  },
  // {
  //   id: 3,
  //   title: "AI Image SaaS - Canva Application",
  //   des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
  //   img: "/p3.svg",
  //   iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
  //   link: "/ui.aiimg.com",
  // },
  // {
  //   id: 4,
  //   title: "Animated Apple Iphone 3D Website",
  //   des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
  //   img: "/p4.svg",
  //   iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
  //   link: "/ui.apple.com",
  // },
];

export const testimonials = [
  {
    quote:
      "I've worked with many people, but Joshua Ryan stands out as someone truly dedicated. They never give up and are always striving to improve, day by day. Their personality is unique and rare, which makes them an invaluable asset to any team.",
    name: "Dennis Bullo",
    img: "/dennis.svg",
    title:
      "President of Comptrolla, CPA, Software Developer, and Business Process Expert",
  },
  {
    quote:
      "Joshua Ryan is a natural leader, someone who can guide a team with confidence. Their hard work and punctuality are unmatched. They're also always willing to lend a hand to others, making them an essential part of any project.",
    name: "Cherrie Mae Janog",
    img: "/cherrie.svg",
    title: "Intern Supervisor",
  },
  {
    quote:
      "Joshua Ryan is a capable and ingenious person, someone I can always count on. Their kindness and good nature make them a joy to work with, though their occasional clumsiness and stubbornness sometimes lead to unexpected but great outcomes.",
    name: "Jefferson A. Costales",
    img: "/jefferson.svg",
    title: "EARIST Professor",
  },
  {
    quote:
      "Joshua Ryan is someone I can rely on, a person who is not only capable but also approachable. They listen carefully and follow instructions with precision, making them an ideal colleague to work with.",
    name: "Louise A. Nonato",
    img: "/louise.svg",
    title: "Senior Developer at Comptrolla, Outsourcee",
  },
];

export const companies = [
  {
    id: 1,
    name: "cloudinary",
    img: "/cloud.svg",
    nameImg: "/cloudName.svg",
  },
  {
    id: 2,
    name: "appwrite",
    img: "/app.svg",
    nameImg: "/appName.svg",
  },
  {
    id: 3,
    name: "HOSTINGER",
    img: "/host.svg",
    nameImg: "/hostName.svg",
  },
  {
    id: 4,
    name: "stream",
    img: "/s.svg",
    nameImg: "/streamName.svg",
  },
  {
    id: 5,
    name: "docker.",
    img: "/dock.svg",
    nameImg: "/dockerName.svg",
  },
  {
    id: 6,
    name: "outsourcee.",
    img: "/outsourcee.svg",
    nameImg: "/outsourceeName.svg",
  },
];

export const workExperience = [
  {
    id: 1,
    title: "Comptrolla Technologies, Inc.",
    companyName: "Comptrolla Technologies, Inc.",
    desc: "Focused on development initiatives by Comptrolla Technologies, Inc., with an emphasis on collaboration, learning, and innovation.",
    className: "md:col-span-2",
    thumbnail: "/exp1.svg",
    url: "https://comptrolla.com/",
  },
  {
    id: 2,
    title: "Outsourcee - Mobile App (SaaS)",
    companyName: "Outsourcee | Comptrolla Technologies, Inc.",
    desc: "Design and Developed a Frontend Project with React, Next.js, and Tailwind CSS along with utilization of Azure DevOps.",
    className: "md:col-span-2",
    thumbnail: "/exp2.svg",
    url: "https://outsourcee.app/",
  },
  {
    id: 3,
    title: "Academic Administrative Assistant",
    companyName:
      'Eulogio "Amang" Rodriguez Institute of Science and Technology',
    desc: "Improved record-keeping by 40% using Excel and Google Drive, and engaged with stakeholders effectively.",
    className: "md:col-span-2",
    thumbnail: "/exp4.svg",
    url: "https://earist.edu.ph/",
  },
  {
    id: 4,
    title: "Administrative Coordinator at MTRCB",
    companyName: "Movie and Television Review and Classification Board",
    desc: "Ensured regulatory compliance with precise document handling and managed movie-related data using Microsoft Excel.",
    className: "md:col-span-2",
    thumbnail: "/exp3.svg",
    url: "https://mtrcb.gov.ph/",
  },
];

export const socialMedia = [
  {
    id: "1",
    img: "/git.svg",
    link: "https://github.com/yannnry",
  },
  {
    id: "2",
    img: "/insta.svg",
    link: "https://www.instagram.com/yann.ry/",
  },
  {
    id: "3",
    img: "/link.svg",
    link: "https://www.linkedin.com/in/joshuaryanaltar/",
  },
];
