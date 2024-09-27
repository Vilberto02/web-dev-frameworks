import { FaLinkedin, FaTwitter, FaGithub, FaInstagram } from "react-icons/fa";
import { IoLink } from "react-icons/io5";

export const dataSpeakersBlock = [
  {
    id: 1,
    name: "Fazt PE",
    links: {
      github: {
        icon: FaGithub,
        link: "https://github.com/fazttech",
      },
      linkedin: {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/in/fazttech",
      },
      twiter: {
        icon: FaTwitter,
        link: "https://twitter.com/fazttech",
      },
      website: {
        icon: IoLink,
        link: "https://www.faztweb.com/",
      },
    },
  },
  {
    id: 2,
    name: "TodoCode AR",
    links: {
      instagram: {
        icon: FaInstagram,
        link: "https://www.instagram.com/todo_code",
      },
      linkedin: {
        icon: FaLinkedin,
        link: "https://www.linkedin.com/company/todocodeacademy",
      },
      twiter: {
        icon: FaTwitter,
        link: "https://www.twitter.com/todo_code",
      },
      website: {
        icon: IoLink,
        link: "https://todocodeacademy.com/",
      },
    },
  },
];
