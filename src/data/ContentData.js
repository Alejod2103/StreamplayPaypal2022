import { AiFillApple, AiFillWindows } from 'react-icons/ai';
import { FaGooglePlay } from 'react-icons/fa';
import { SiGooglechrome } from 'react-icons/si';
import { BsPhone } from 'react-icons/bs';
import { AiOutlineTablet } from 'react-icons/ai'
const iconStyle = (Icon) => <Icon size="3rem" color="#fff" />;

export const ContentData = [
    {
        name: 'Telefonos',
        description: 'Disfruta de Stream Play desde la App en tu telefono',
        icon: iconStyle(BsPhone),
    },    
    {
        name: 'Tablets',
        description: 'Descarga nuestra App en todos tus dispositivos',
        icon: iconStyle(AiOutlineTablet),
    },
    {
        name: 'Windows',
        description: 'Descarga Stream Play para tu PC Windows',
        icon: iconStyle(AiFillWindows),
        link: 'https://www.iptvsmarters.com/download/?download=windows'
    },
    {
        name: 'App Store',
		icon: iconStyle(AiFillApple),
		imgClass: 'one',
        link: 'https://apps.apple.com/us/app/iptv-smarters-player/id1383614816'
    },
    {
        name: 'Play Store',
		icon: iconStyle(FaGooglePlay),
		imgClass: 'one',
        link: 'https://play.google.com/store/apps/details?id=com.nst.smartersplayer&hl=es_US&gl=US'
    },
    {
        name: 'Google TV',
        icon: iconStyle(SiGooglechrome),
        imgClass: 'one',
        link: 'https://play.google.com/store/apps/details?id=com.iptvstreamplayer.IPTVStreamPlayer&hl=es_US&gl=US'
    },
    

    
];
