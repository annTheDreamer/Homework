import axios from 'axios';
const GreatWorks = [
	{
		id: 1,
		title: 'Mona Lisa',
		artist: 'Leonardo Da Vinci',
		about:
			'Leonardo da Vinci was an Italian polymath of the High Renaissance who was active as a painter, draughtsman, engineer, scientist, theorist, sculptor and architect.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/e/ec/Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg/161px-Mona_Lisa%2C_by_Leonardo_da_Vinci%2C_from_C2RMF_retouched.jpg',
	},
	{
		id: 2,
		title: 'Girl with a Pearl Earring',
		artist: 'Johannes Vermeer',
		about:
			'Johannes Vermeer was a Dutch Baroque Period painter who specialized in domestic interior scenes of middle-class life. During his lifetime, he was a moderately successful provincial genre painter, recognized in Delft and The Hague.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0f/1665_Girl_with_a_Pearl_Earring.jpg/203px-1665_Girl_with_a_Pearl_Earring.jpg',
	},
	{
		id: 3,
		title: 'The Birth of Venus',
		artist: 'Sandro Botticelli',
		about:
			"Alessandro di Mariano di Vanni Filipepi, known as Sandro Botticelli, was an Italian painter of the Early Renaissance. Botticelli's posthumous reputation suffered until the late 19th century, when he was rediscovered by the Pre-Raphaelites who stimulated a reappraisal of his work.",
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/0/0b/Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg/320px-Sandro_Botticelli_-_La_nascita_di_Venere_-_Google_Art_Project_-_edited.jpg',
	},
	{
		id: 4,
		title: 'The Starry Night',
		artist: 'Vincent van Gogh',
		about:
			'Vincent Willem van Gogh was a Dutch Post-Impressionist painter who posthumously became one of the most famous and influential figures in Western art history. In a decade, he created about 2,100 artworks, including around 860 oil paintings, most of which date from the last two years of his life.',
		paintingUrl:
			'https://media.timeout.com/images/103166739/1372/1029/image.jpg',
	},
	{
		id: 5,
		title: 'Arrangement in Grey and Black No. 1',
		artist: 'James Abbott McNeill Whistler',
		about:
			'James Abbott McNeill Whistler RBA was an American artist active during the American Gilded Age and based primarily in the United Kingdom. He eschewed sentimentality and moral allusion in painting and was a leading proponent of the credo "art for art\'s sake".',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/1/1b/Whistlers_Mother_high_res.jpg/270px-Whistlers_Mother_high_res.jpg',
	},
	{
		id: 6,
		title: 'A Sunday Afternoon on the Island of La Grande Jatte',
		artist: 'Georges Seurat',
		about:
			"Georges Pierre Seurat was a French post-Impressionist artist. He is best known for devising the painting techniques known as chromoluminarism as well as pointillism. While less famous than his paintings, Seurat's conté crayon drawings have also garnered a great deal of critical appreciation.",
		paintingUrl:
			'https://media.timeout.com/images/105293264/1372/1029/image.jpg',
	},
	{
		id: 7,
		title: 'Les Demoiselles d’Avignon',
		artist: 'Pablo Picasso',
		about:
			'Pablo Ruiz Picasso was a Spanish painter, sculptor, printmaker, ceramicist and theatre designer who spent most of his adult life in France.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/en/thumb/4/4c/Les_Demoiselles_d%27Avignon.jpg/232px-Les_Demoiselles_d%27Avignon.jpg',
	},
	{
		id: 8,
		title: 'Impression, Sunrise',
		artist: 'Claude Monet',
		about:
			'Oscar-Claude Monet was a French painter and founder of impressionist painting who is seen as a key precursor to modernism, especially in his attempts to paint nature as he perceived it.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/5/59/Monet_-_Impression%2C_Sunrise.jpg/310px-Monet_-_Impression%2C_Sunrise.jpg',
	},
	{
		id: 9,
		title: 'Wanderer above the Sea of Fog',
		artist: 'Caspar David Friedrich',
		about:
			'Caspar David Friedrich was a 19th-century German Romantic landscape painter, generally considered the most important German artist of his generation.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/b/b9/Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg/187px-Caspar_David_Friedrich_-_Wanderer_above_the_sea_of_fog.jpg',
	},
	{
		id: 10,
		title: 'The Naked Maja',
		artist: 'Francisco de Goya y Lucientes',
		about:
			'Francisco José de Goya y Lucientes was a Spanish romantic painter and printmaker. He is considered the most important Spanish artist of the late 18th and early 19th centuries. His paintings, drawings, and engravings reflected contemporary historical upheavals and influenced important 19th- and 20th-century painters.',
		paintingUrl:
			'https://uploads0.wikiart.org/images/francisco-goya/nude-maja-1800.jpg!Large.jpg',
	},
	{
		id: 11,
		title: 'Grande Odalisque',
		artist: 'Jean Auguste Dominique Ingres',
		about:
			'Jean-Auguste-Dominique Ingres was a French Neoclassical painter. Ingres was profoundly influenced by past artistic traditions and aspired to become the guardian of academic orthodoxy against the ascendant Romantic style.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/4/4a/Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg/1200px-Jean_Auguste_Dominique_Ingres%2C_La_Grande_Odalisque%2C_1814.jpg',
	},
	{
		id: 12,
		title: 'Composition with Red Blue and Yellow',
		artist: 'Piet Mondrian',
		about:
			'Composition II with Red Blue and Yellow is a 1930 painting by Piet Mondrian. A well-known work of art, Mondrian contributes to the abstract visual language in a large way despite using a relatively small canvas. Thick, black brushwork defines the borders of the different geometric figures.',
		paintingUrl:
			'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg/237px-Piet_Mondriaan%2C_1930_-_Mondrian_Composition_II_in_Red%2C_Blue%2C_and_Yellow.jpg',
	},
];

export const axiosGetAllArt = async () => {
	const response = await axios.get();
	return response.data;
};

export const fetchGetAllArt = async () => {
	const initResponse = await fetch();
	const trueResponse = await initResponse.json();
	return trueResponse;
};

export default GreatWorks;
