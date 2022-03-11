export const data = [
	{
		title: 'The Batman',
		description:
			'Cuando un asesino se dirige a la élite de Gotham con una serie de maquinaciones sádicas, un rastro de pistas crípticas envía Batman a una investigación en los bajos fondos.',
		image: './assets/Batman.jpg',
	},
	{
		title: 'Spider-Man: No Way Home',
		description: 'Peter Parker es desenmascarado y por tanto no es capaz de separar su vida normal de los enormes riesgos que conlleva ser un súper héroe.',
		image: './assets/spiderman.jpg',
	},
	{
		title: 'Encanto',
		description: '"Encanto" relata la historia de los Madrigal, una familia extraordinaria que vive en una casa mágica de un pueblo vibrante en las montañas de Colombia escondidas en un “Encanto”. ',
		image: './assets/encanto.jpg',
	},
	{
		title: 'Euphoria',
		description: 'Una reflexión sobre la adolescencia a través de un grupo de estudiantes de instituto que tienen que hacer frente a temas recurrentes de su edad, como la droga, el sexo y la violencia.',
		image: './assets/euphoria.jpg',
	},
	{
		title: 'La Matanza de Texas',
		description: 'Melody (Sarah Yarkin), su hermana adolescente Lila (Elsie Fisher) y sus amigos Dante (Jacob Latimore) y Ruth (Nell Hudson) viajan al remoto pueblo de Harlow (Texas) para montar un negocio muy idealista.',
		image: './assets/texas.jpg',
	},
];

export const sliderSettings = {
	arrows: false,
	slidesToShow: 3,
	focusOnselect: false,
	accessability: false,
	responsive: [
		{
			breakpoint: 1280,
			settings: {
				slidesToShow: 2,
			},
		},

		{
			breakpoint: 900,
			settings: {
				slidesToShow: 1,
			},
		},
	],
};
