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
		title: 'Our Team',
		description: 'Our team consists of the best experts in the industry, learn about them',
		image: './assets/teamwork.jpg',
	},
	{
		title: 'Our servers',
		description: 'Find more about hardware and software used for your service',
		image: 'https://images.pexels.com/photos/325229/pexels-photo-325229.jpeg?cs=srgb&dl=pexels-manuel-geissinger-325229.jpg&fm=jpg',
	},
	{
		title: 'Our top clients',
		description: 'We have provided services to top clients in tech industry',
		image: 'https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1170&q=80',
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
