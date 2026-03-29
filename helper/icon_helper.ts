import { BiUpArrow } from "react-icons/bi";
import { FaSquareInstagram } from "react-icons/fa6";
import { GrLocationPin } from "react-icons/gr";
import { IoCallSharp, IoLogoFacebook, IoLogoWhatsapp } from "react-icons/io5";
import { RiShareBoxLine } from "react-icons/ri";
import { SiMinutemailer } from "react-icons/si";


const IconHelper = {
    contact :{
        call : IoCallSharp ,
        location : GrLocationPin,
        mail : SiMinutemailer,
        openbox : RiShareBoxLine,
    },
    social :{
        facebook : IoLogoFacebook,
        whatsapp : IoLogoWhatsapp,
        instagram : FaSquareInstagram,
    },
    arrow :{
        up: BiUpArrow,
    }
}

export default IconHelper;