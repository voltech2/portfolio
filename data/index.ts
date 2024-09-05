export const navItems = [
    { name: "About", link: "#about" },
    { name: "Projects", link: "#projects" },
    { name: "Testimonials", link: "#testimonials" },
    { name: "Contact", link: "#contact" },
];

export const gridItems = [
    {
        id: 1,
        title: "I prioritize client collaboration, fostering open communication ",
        description: "",
        className: "lg:col-span-3 md:col-span-6 md:row-span-4 lg:min-h-[60vh]",
        imgClassName: "w-full h-full",
        titleClassName: "justify-end",
        img: "/b1.svg",
        spareImg: "",
    },
    {
        id: 2,
        title: "I'm very flexible with time zone communications",
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
        title: "Currently building a JS Animation library",
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
        title: "3D Solar System Planets to Explore",
        des: "Explore the wonders of our solar system with this captivating 3D simulation of the planets using Three.js.",
        img: "/p1.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/fm.svg"],
        link: "https://github.com/adrianhajdin?tab=repositories",
    },
    {
        id: 2,
        title: "Yoom - Video Conferencing App",
        des: "Simplify your video conferencing experience with Yoom. Seamlessly connect with colleagues and friends.",
        img: "/p2.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/stream.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/zoom-clone",
    },
    {
        id: 3,
        title: "AI Image SaaS - Canva Application",
        des: "A REAL Software-as-a-Service app with AI features and a payments and credits system using the latest tech stack.",
        img: "/p3.svg",
        iconLists: ["/re.svg", "/tail.svg", "/ts.svg", "/three.svg", "/c.svg"],
        link: "https://github.com/adrianhajdin/ai_saas_app",
    },
    {
        id: 4,
        title: "Animated Apple Iphone 3D Website",
        des: "Recreated the Apple iPhone 15 Pro website, combining GSAP animations and Three.js 3D effects..",
        img: "/p4.svg",
        iconLists: ["/next.svg", "/tail.svg", "/ts.svg", "/three.svg", "/gsap.svg"],
        link: "https://github.com/adrianhajdin/iphone",
    },
];

export const testimonials = [
    {
        quote:
            "Collaborating with Rahmat was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Rahmat's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Rahmat is the ideal partner.",
        name: "Panayiotis Georgiou",
        title: "Frontend Developer",
        img: "/Panayiotis.jpg",
    },
    {
        quote:
            "Rahmat has been a game-changer for our online presence. His ability to understand our requirements and deliver a user-friendly and aesthetically pleasing website was remarkable. The project was completed ahead of schedule and exceeded our expectations. We couldn't be happier with the results. Thank you, Rahmat!",
        name: "Oksana",
        title: "Software Engineer",
        img: "/Oksana.jpg"
    },
    {
        quote:
            "Working with Rahmat was an absolute pleasure. His expertise in web development is evident in the quality of work he delivers. The website he created for us is not only visually stunning but also highly functional and responsive. Rahmat's attention to detail and commitment to excellence is truly commendable.",
        name: "Konstantinos Panteli",
        title: "Fullstack Software Developer",
        img: "/Konstantinos.jpg"
    },
    {
        quote:
            "Rahmat's technical skills and creativity make him stand out as a top-tier web developer. He transformed our outdated website into a modern, engaging platform that our customers love. His professionalism and dedication to delivering a perfect product are unmatched. We highly recommend Rahmat for any web development projects.",
        name: "Ines Mir",
        title: "UX Designer at Zalando",
        img: "/Ines Mir.jpg"
    },
    {
        quote:
            "We were fortunate to have Rahmat develop our company's website. His innovative approach and understanding of the latest web technologies resulted in a website that not only looks great but also performs flawlessly. Rahmat is a reliable and talented developer who goes above and beyond to meet his clients needs.",
        name: "John Martin",
        title: "Freelance iOS Developer",
        img: "/John Martin.jpg"
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
];

export const workExperience = [
    {
        id: 1,
        title: "Frontend Engineer Intern",
        desc: "Assisted in the development of a web-based platform using React.js, enhancing interactivity.",
        className: "md:col-span-2",
        thumbnail: "/exp1.svg",
    },
    {
        id: 2,
        title: "Mobile App Dev - JSM Tech",
        desc: "Designed and developed mobile app for both iOS & Android platforms using React Native.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp2.svg",
    },
    {
        id: 3,
        title: "Freelance App Dev Project",
        desc: "Led the dev of a mobile app for a client, from initial concept to deployment on app stores.",
        className: "md:col-span-2", // change to md:col-span-2
        thumbnail: "/exp3.svg",
    },
    {
        id: 4,
        title: "Lead Frontend Developer",
        desc: "Developed and maintained user-facing features using modern frontend technologies.",
        className: "md:col-span-2",
        thumbnail: "/exp4.svg",
    },
];

export const socialMedia = [
    {
        id: 1,
        img: "/git.svg",
    },
    {
        id: 2,
        img: "/twit.svg",
    },
    {
        id: 3,
        img: "/link.svg",
    },
];