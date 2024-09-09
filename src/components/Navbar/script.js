import { IoLogoFacebook } from "react-icons/io5";
import { FaInstagram } from "react-icons/fa";
import { IoLogoLinkedin } from "react-icons/io5";
import { BsTwitterX } from "react-icons/bs";
import { FaYoutube } from "react-icons/fa";
let contactButtons = [

    {
        icon:IoLogoFacebook,
    },
    {
        icon:FaInstagram ,
    },
    {
        icon:IoLogoLinkedin,
    },
    {
        icon:BsTwitterX ,
    },
    {
        icon:FaYoutube,
    },
];

let navbarItems = [
    {
     item:'Home',
     path: '/', 
    },
    {
        item:'About Us',
        path: '/about', 
    },
    {
        item:'Services',
    },
    {
            item:'Energy Load Calculator',
            
    },
    {
        item:'Products',
    },
];

export{
    contactButtons,
    navbarItems,
}