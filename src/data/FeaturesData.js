import React from 'react';

import { BsFillShieldLockFill } from 'react-icons/bs';
import { IoIosOptions } from 'react-icons/io';
import { AiOutlineCloudUpload } from 'react-icons/ai';
import { BiSupport, BiDollar } from 'react-icons/bi';
import { GrHostMaintenance } from 'react-icons/gr';
const iconStyle = (Icon) => <Icon size="3rem" color="#0f0f0f" />;

export const featuresData = [
	{
		name: 'Pago Seguro',
		description: 'Paga seguro a travez de la plataforma PayPal, incluso si no tienes cuenta.',
		icon: iconStyle(BsFillShieldLockFill),
		imgClass: 'one',
	},
	{
		name: 'Franja Personalizada',
		description: 'Crea tu propia franja de canales personalizada, escoge tu propio menu y agrega mas +3000 canales a tu lista de entretenimiento.',
		icon: iconStyle(IoIosOptions),
		imgClass: 'two',
	},
	{
		name: 'Mantenimiento Constante',
		description: 'Trabajamos constantemente en brindarte el mejor servicio en los servidores mas veloces.',
		icon: iconStyle(GrHostMaintenance),
		imgClass: 'three',
	},
	{
		name: 'Nuevo Contenido',
		description: 'Trabajamos constantemente para mantener el servicio al dia y brindarte el mejor contenido actualizado.',
		icon: iconStyle(AiOutlineCloudUpload),
		imgClass: 'four',
	},
	{
		name: 'Mejores Precios',
		description: 'Ofrecemos los mejores precios del mercado, que se ajustan a tu bolsillo. ',
		icon: iconStyle(BiDollar),
		imgClass: 'five',
	},

	{
		name: 'Soporte 24/7',
		description:
			'Nuestro equipo trabaja todo el dia para brindarte soporte con tu servicio.',
		icon: iconStyle(BiSupport),
		imgClass: 'six',
	},
];
