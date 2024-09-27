import {
  FaLinkedin,
  FaFacebook,
  FaInstagram,
  FaWhatsapp,
  FaTiktok,
} from "react-icons/fa";
import { typeSocialNetwork } from "./SocialNetwork.type";

export const dataSocialNetwork: typeSocialNetwork[] = [
  {
    id: 1,
    name: "Linkedin",
    icon: FaLinkedin,
    idLink: "https://bit.ly/3zlRztA",
  },
  {
    id: 2,
    name: "Facebook",
    icon: FaFacebook,
    idLink: "https://bit.ly/3MLeDVR",
  },
  {
    id: 3,
    name: "Instagram",
    icon: FaInstagram,
    idLink: "https://bit.ly/47sJUpY",
  },
  {
    id: 4,
    name: "WhatsApp",
    icon: FaWhatsapp,
    idLink: "https://bit.ly/3ZtqsaO",
  },
  {
    id: 5,
    name: "TikTok",
    icon: FaTiktok,
    idLink: "https://bit.ly/47wKDX5",
  },
];
