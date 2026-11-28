export type FormatKey = 'botella' | 'botellita';

export interface CatalogLine {
  id: string;
  name: string;
  badge: string;
  description: string;
  accentTone: 'terracotta' | 'amber' | 'cacao' | 'herb';
}

export interface Product {
  id: string;
  name: string;
  lineId: string;
  shortNote: string;
  description: string;
  servingSuggestion: string;
  images: {
    botella: string | null;
    botellita: string | null;
  };
  defaultFormat: FormatKey;
}

export const CATALOG_LINES: CatalogLine[] = [
  {
    id: 'frutos-del-monte',
    name: 'Frutos del Monte',
    badge: 'Selva Misionera',
    description:
      'Elaborados con materia prima de la provincia de Misiones: selecciono cuidadosamente frutos nativos y silvestres con los que busco transmitir la riqueza y diversidad de nuestra tierra.',
    accentTone: 'terracotta',
  },
  {
    id: 'delicias-tropicales',
    name: 'Delicias Tropicales',
    badge: 'Productores Locales',
    description:
      'Elaborados con frutas que cultivan los productores de la región, rescatando la dulzura natural y el aroma vibrante de cada cosecha.',
    accentTone: 'amber',
  },
  {
    id: 'citricos-de-la-chacra',
    name: 'Cítricos de la Chacra',
    badge: 'Cosecha de Colono',
    description:
      'Elaborados con frutas cítricas frescas producidas por el colono misionero, equilibrando aceites esenciales perfumados y frescura natural.',
    accentTone: 'amber',
  },
  {
    id: 'sabores-de-la-tierra-colorada',
    name: 'Sabores de la Tierra Colorada',
    badge: 'Identidad Regional',
    description:
      'Elaborados con hierbas e infusiones emblemáticas de Misiones, resaltando aromas y sabores profundos que forman parte de nuestra identidad.',
    accentTone: 'herb',
  },
  {
    id: 'aromas-especiados',
    name: 'Aromas Especiados',
    badge: 'Infusión Cálida',
    description:
      'Maceraciones aromáticas de especias enteras y botánicos seleccionados, de carácter envolvente y final persistente.',
    accentTone: 'cacao',
  },
  {
    id: 'calor-de-invierno',
    name: 'Calor de Invierno',
    badge: 'Edición Golosa',
    description:
      'Licores suaves, intensos y reconfortantes de impronta cremosa o tostada, pensados para acompañar postres, cafés y noches frías.',
    accentTone: 'cacao',
  },
  {
    id: 'frutas-de-estacion',
    name: 'Frutas de Estación',
    badge: 'Edición de Temporada',
    description:
      'Elaborados con frutas de estación aprovechando sus características y punto justo de maduración para crear variedades que acompañan cada temporada.',
    accentTone: 'terracotta',
  },
];

export const PRODUCTS: Product[] = [
  // ==========================================
  // 1. FRUTOS DEL MONTE
  // ==========================================
  {
    id: 'jaboticaba',
    name: 'Jaboticaba',
    lineId: 'frutos-del-monte',
    shortNote: 'Fruto nativo de piel oscura, dulzor profundo y nota vinosa sutil.',
    description:
      'Macerado artesanal de jaboticaba misionera cosechada en su punto justo. Destaca por su color rubí intenso y un perfil frutal equilibrado entre dulzura y acidez fresca.',
    servingSuggestion: 'Servir bien frío solo, con un cubo de hielo grande o en copas de sobremesa.',
    images: {
      botella: '/assets/botellas/jaboticaba.jpg',
      botellita: '/assets/botellitas/jaboticaba.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'pitanga',
    name: 'Pitanga',
    lineId: 'frutos-del-monte',
    shortNote: 'Silvestre, aromática y ligeramente ácida, con perfume de monte.',
    description:
      'Un clásico de los patios y montes de Misiones. La pitanga aporta un aroma herbal-frutal inconfundible y un tono ámbar rojizo cálido y brillante.',
    servingSuggestion: 'Ideal como aperitivo fresco con hielo y soda, o frío después de cenar.',
    images: {
      botella: '/assets/botellas/pitanga.jpg',
      botellita: '/assets/botellitas/pitanga.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'mora',
    name: 'Mora',
    lineId: 'frutos-del-monte',
    shortNote: 'Frutos negros maduros, textura sedosa y final amable.',
    description:
      'Elaborado con moras seleccionadas de chacras locales. De color violáceo profundo, combina notas de mermelada casera con frescura natural.',
    servingSuggestion: 'Excelente frío o para acompañar helados artesanales y postres de crema.',
    images: {
      botella: '/assets/botellas/mora.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'nispero',
    name: 'Níspero',
    lineId: 'frutos-del-monte',
    shortNote: 'Dorado, aterciopelado y con sutil recuerdo a almendra y miel.',
    description:
      'Licor delicado obtenido de nísperos maduros al sol. Su sabor es suave, floral y ligeramente acaramelado, con un paso limpio en boca.',
    servingSuggestion: 'Disfrutar fresco en copa pequeña, solo o junto a pastelería seca.',
    images: {
      botella: '/assets/botellas/nispero.jpg',
      botellita: '/assets/botellitas/nispero.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'cereza-silvestre',
    name: 'Cereza Silvestre',
    lineId: 'frutos-del-monte',
    shortNote: 'Roja vibrante, fresca y con un toque silvestre levemente ácido.',
    description:
      'Maceración artesanal de cerezas silvestres que captura el carácter jugoso y perfumado del fruto del monte en un licor de gran personalidad.',
    servingSuggestion: 'Servir bien frío como digestivo o combinar con espumante seco.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'butia',
    name: 'Butiá',
    lineId: 'frutos-del-monte',
    shortNote: 'Fruto de palma nativa, exótico, perfumado y suavemente dulce.',
    description:
      'Licor emblemático de frutos de palmera butiá. De tono dorado cálido, despliega notas tropicales únicas que recuerdan al durazno y al damasco silvestre.',
    servingSuggestion: 'Ideal bien frío con hielo o en cócteles frutales con tónica.',
    images: {
      botella: '/assets/botellas/butia.jpg',
      botellita: '/assets/botellitas/butia.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'guaviroba',
    name: 'Guaviroba',
    lineId: 'frutos-del-monte',
    shortNote: 'Aroma cítrico-resinoso del monte, fresco y muy expresivo.',
    description:
      'Elaborado con guaviroba recolectada artesanalmente. Conserva el perfume característico de este fruto nativo, con un equilibrio vibrante entre dulzor y frescor.',
    servingSuggestion: 'Servir frío en copa de licor o con abundante hielo y piel de limón.',
    images: {
      botella: '/assets/botellas/guaviroba.jpg',
      botellita: '/assets/botellitas/guaviroba.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'guayaba',
    name: 'Guayaba',
    lineId: 'frutos-del-monte',
    shortNote: 'Pulpa rosada perfumada, golosa y de textura envolvente.',
    description:
      'Todo el aroma dulce e intenso de la guayaba misionera en botella. Suave al paladar, con recuerdos frutales cálidos y persistentes.',
    servingSuggestion: 'Servir frío solo o sobre postres lácteos y quesos suaves.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'acerola',
    name: 'Acerola',
    lineId: 'frutos-del-monte',
    shortNote: 'Color ámbar cobrizo, fresca, chispeante y levemente ácida.',
    description:
      'Macerado artesanal de acerolas frescas que destaca por su viveza en boca, su color cálido y una acidez amable que invita a otro sorbo.',
    servingSuggestion: 'Disfrutar bien frío como aperitivo liviano o con hielo y agua con gas.',
    images: {
      botella: '/assets/botellas/acerola.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },

  // ==========================================
  // 2. DELICIAS TROPICALES
  // ==========================================
  {
    id: 'banana',
    name: 'Banana',
    lineId: 'delicias-tropicales',
    shortNote: 'Suave, dulce y perfumado, con notas de fruta madura.',
    description:
      'Licor artesanal elaborado con bananas de productores locales. Textura amable y aroma cálido que evoca preparaciones caseras de sobremesa.',
    servingSuggestion: 'Delicioso frío, solo o acompañado de café espresso y postres de chocolate.',
    images: {
      botella: '/assets/botellas/banana.jpg',
      botellita: '/assets/botellitas/banana.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'anana',
    name: 'Ananá',
    lineId: 'delicias-tropicales',
    shortNote: 'Luminoso, jugoso y refrescante con espíritu tropical.',
    description:
      'Maceración de ananá maduro que captura su dulzura dorada y acidez equilibrada en un licor vibrante y muy fácil de beber.',
    servingSuggestion: 'Servir bien frío con hielo o en tragos refrescantes de verano.',
    images: {
      botella: '/assets/botellas/anana.jpg',
      botellita: '/assets/botellitas/anana.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'frutilla',
    name: 'Frutilla',
    lineId: 'delicias-tropicales',
    shortNote: 'Aroma a frutillas frescas, dulzor amable y nota frutal limpia.',
    description:
      'Elaborado con frutillas seleccionadas de cosecha local. Ofrece un equilibrio delicado entre fruta madura y suavidad artesanal.',
    servingSuggestion: 'Ideal frío solo, con espumante o sobre helado de crema americana.',
    images: {
      botella: '/assets/botellas/frutilla.jpg',
      botellita: '/assets/botellitas/frutilla.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'maracuya',
    name: 'Maracuyá',
    lineId: 'delicias-tropicales',
    shortNote: 'Intenso, aromático y con acidez tropical equilibrada.',
    description:
      'El perfume inconfundible del maracuyá transformado en un licor expresivo, vibrante y de gran frescura en boca.',
    servingSuggestion: 'Servir bien frío, solo con hielo o en coctelería tropical.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'rosella',
    name: 'Rosella',
    lineId: 'delicias-tropicales',
    shortNote: 'Floral, rubí brillante y con acidez delicada de cáliz.',
    description:
      'Infusión artesanal de cálices de rosella cultivada en la región. Resalta por sus notas florales y un toque sutil que recuerda a frutos rojos.',
    servingSuggestion: 'Excelente como aperitivo con hielo y agua tónica o soda.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'durazno',
    name: 'Durazno',
    lineId: 'delicias-tropicales',
    shortNote: 'Suave, aterciopelado y con aroma a fruta de carozo madura.',
    description:
      'Licor delicado de duraznos frescos macerados lentamente, logrando un perfil redondo, dulce y sumamente amable.',
    servingSuggestion: 'Servir fresco en copa pequeña o mezclado con vino blanco frío.',
    images: {
      botella: '/assets/botellas/durazno.jpg',
      botellita: '/assets/botellitas/durazno.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'mango',
    name: 'Mango',
    lineId: 'delicias-tropicales',
    shortNote: 'Pulpa dorada, melosa y profundamente aromática.',
    description:
      'Elaborado con mangos madurados al sol misionero. Un licor sedoso que concentra toda la exuberancia de la fruta tropical.',
    servingSuggestion: 'Servir bien frío con hielo o una rodaja de lima fresca.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'higo',
    name: 'Higo',
    lineId: 'delicias-tropicales',
    shortNote: 'Dulzor meloso, notas tibias de fruta pasa y carácter gourmet.',
    description:
      'Maceración pausada de higos maduros que regala un perfil complejo, aterciopelado y ligeramente especiado al final.',
    servingSuggestion: 'Acompaña de maravilla tablas de quesos, nueces o sobremesas tranquilas.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'uva',
    name: 'Uva',
    lineId: 'delicias-tropicales',
    shortNote: 'Frutal, redondo y con aroma dulce de racimo maduro.',
    description:
      'Licor artesanal de uvas frescas de chacra, con cuerpo amable y recuerdos frutales intensos y nostálgicos.',
    servingSuggestion: 'Servir frío en copa de licor después de las comidas.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'melon',
    name: 'Melón',
    lineId: 'delicias-tropicales',
    shortNote: 'Ligero, refrescante y de perfume dulce y veraniego.',
    description:
      'Elaborado con melón fresco de estación, logrando un licor suave, liviano y muy aromático al servir frío.',
    servingSuggestion: 'Ideal bien helado o con un toque de soda y hojas de menta.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'ciruela',
    name: 'Ciruela',
    lineId: 'delicias-tropicales',
    shortNote: 'Elegante equilibrio entre dulzor de fruta y acidez de piel.',
    description:
      'Macerado artesanal de ciruelas maduras con notas profundas, amables y un final limpio que realza su carácter frutal.',
    servingSuggestion: 'Servir frío solo o en sobremesas junto a tartas frutales.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'fisalis',
    name: 'Fisalis',
    lineId: 'delicias-tropicales',
    shortNote: 'Exótico, agridulce y con sutiles matices cítricos y florales.',
    description:
      'Licor singular elaborado con fisalis (uchuva) de productores locales. Sorprende por su acidez viva y su bouquet frutal único.',
    servingSuggestion: 'Disfrutar bien frío como digestivo o en tragos de autor.',
    images: {
      botella: '/assets/botellas/fisalis.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'carambola',
    name: 'Carambola',
    lineId: 'delicias-tropicales',
    shortNote: 'Fruta estrella misionera, fresca, jugosa y suavemente agridulce.',
    description:
      'Elaborado con carambolas frescas cosechadas en la región. Ofrece un color ámbar cálido y notas frutales delicadas con un toque ácido muy refrescante.',
    servingSuggestion: 'Servir bien frío solo, con hielo o como toque tropical en aperitivos con soda.',
    images: {
      botella: '/assets/botellas/carambola.jpg',
      botellita: '/assets/botellitas/carambola.jpg',
    },
    defaultFormat: 'botella',
  },

  // ==========================================
  // 3. CÍTRICOS DE LA CHACRA
  // ==========================================
  {
    id: 'naranja',
    name: 'Naranja',
    lineId: 'citricos-de-la-chacra',
    shortNote: 'Luminoso, cítrico y con notas dulces de cáscara fresca.',
    description:
      'Elaborado con naranjas recién cosechadas de chacras misioneras. Combina aceites esenciales aromáticos de su piel con la dulzura natural de la fruta.',
    servingSuggestion: 'Servir bien frío solo, con hielo o como base para coctelería cítrica.',
    images: {
      botella: '/assets/botellas/naranja.jpg',
      botellita: '/assets/botellitas/naranja.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'mandarina',
    name: 'Mandarina',
    lineId: 'citricos-de-la-chacra',
    shortNote: 'Perfume dulce de invierno, amable, alegre y fragante.',
    description:
      'Todo el aroma de la mandarina recién pelada en un licor cálido y delicado, elaborado de forma artesanal con fruta de colono.',
    servingSuggestion: 'Excelente frío después de almuerzos y cenas o con un cubo de hielo.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'pomelo',
    name: 'Pomelo',
    lineId: 'citricos-de-la-chacra',
    shortNote: 'Refrescante, levemente amargo y muy aromático.',
    description:
      'Maceración de pomelo fresco que conserva su equilibrio entre frescor cítrico y el amargor elegante propio de la fruta.',
    servingSuggestion: 'Ideal como aperitivo con tónica, hielo y una rodaja de pomelo.',
    images: {
      botella: '/assets/botellas/pomelo.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'limon',
    name: 'Limón',
    lineId: 'citricos-de-la-chacra',
    shortNote: 'Clásico, vivo y perfumado, de paso fresco y limpio.',
    description:
      'Elaborado con limones de chacra mediante maceración cuidadosa de sus cáscaras para extraer todo su perfume cítrico sin asperezas.',
    servingSuggestion: 'Servir bien helado directo de heladera o freezer como digestivo.',
    images: {
      botella: '/assets/botellas/limon.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'kinoto',
    name: 'Kinoto',
    lineId: 'citricos-de-la-chacra',
    shortNote: 'Agridulce, intenso y profundamente tradicional.',
    description:
      'Licor artesanal de kinotos enteros en maceración lenta, rescatando un sabor de tradición familiar con notas de cáscara confitada.',
    servingSuggestion: 'Disfrutar frío o a temperatura fresca en sobremesas.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'lima',
    name: 'Lima',
    lineId: 'citricos-de-la-chacra',
    shortNote: 'Sutil, herbal-cítrico y de frescura sumamente delicada.',
    description:
      'Elaborado con limas frescas de producción local, ofreciendo un perfume cítrico más suave y floral que el limón tradicional.',
    servingSuggestion: 'Servir helado o con agua tónica y hielo en tardes cálidas.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },

  // ==========================================
  // 4. SABORES DE LA TIERRA COLORADA
  // ==========================================
  {
    id: 'menta',
    name: 'Menta',
    lineId: 'sabores-de-la-tierra-colorada',
    shortNote: 'Fresco, herbal y revitalizante, con aroma a hoja recién cortada.',
    description:
      'Maceración artesanal de hojas frescas de menta que entrega un licor natural, refrescante y equilibrado, sin artificialidades.',
    servingSuggestion: 'Perfecto bien frío como digestivo o combinado con chocolate amargo.',
    images: {
      botella: '/assets/botellas/menta.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'te-negro',
    name: 'Té Negro',
    lineId: 'sabores-de-la-tierra-colorada',
    shortNote: 'Ámbar oscuro, notas tostadas suaves y elegancia de hebra misionera.',
    description:
      'Elaborado con té negro misionero de hebras seleccionadas. Despliega un perfil cálido, levemente amaderado y de gran delicadeza aromática.',
    servingSuggestion: 'Servir solo con hielo o con una piel de naranja para realzar sus notas.',
    images: {
      botella: '/assets/botellas/te.jpg',
      botellita: '/assets/botellitas/te.jpg',
    },
    defaultFormat: 'botella',
  },
  {
    id: 'yerba-mate',
    name: 'Yerba Mate',
    lineId: 'sabores-de-la-tierra-colorada',
    shortNote: 'Herbal, terroso y emblemático; el alma de Misiones en copa.',
    description:
      'Nuestra insignia regional: yerba mate misionera macerada artesanalmente para lograr un licor amable, aromático y profundamente identitario.',
    servingSuggestion: 'Disfrutar frío en copa pequeña, con tónica y pomelo o como cierre de asados.',
    images: {
      botella: '/assets/botellas/yerba.jpg',
      botellita: '/assets/botellitas/yerba.jpg',
    },
    defaultFormat: 'botella',
  },

  // ==========================================
  // 5. AROMAS ESPECIADOS
  // ==========================================
  {
    id: 'anis',
    name: 'Anís',
    lineId: 'aromas-especiados',
    shortNote: 'Clásico digestivo, dulce, limpio y muy aromático.',
    description:
      'Infusión artesanal de semillas de anís seleccionadas, logrando un licor cristalino de carácter tradicional y paso suave.',
    servingSuggestion: 'Servir fresco o con una gota de agua fría y hielo después de comer.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'canela',
    name: 'Canela',
    lineId: 'aromas-especiados',
    shortNote: 'Cálido, especiado y envolvente, con notas dulces de rama.',
    description:
      'Macerado lentamente con ramas de canela para obtener un color cobrizo y un aroma tibio que reconforta desde el primer sorbo.',
    servingSuggestion: 'Ideal a temperatura ambiente fresca, junto a manzanas asadas o café.',
    images: {
      botella: '/assets/botellas/canela.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'vainilla',
    name: 'Vainilla',
    lineId: 'aromas-especiados',
    shortNote: 'Delicado, cremoso en aroma y dulzor elegante.',
    description:
      'Licor artesanal perfumado de impronta suave y amable, ideal tanto para disfrutar solo como para acompañar postres.',
    servingSuggestion: 'Servir fresco o verter un toque sobre café, budines o helados.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'clavo-de-olor',
    name: 'Clavo de Olor',
    lineId: 'aromas-especiados',
    shortNote: 'Intenso, balsámico y profundamente especiado.',
    description:
      'Elaborado en pequeños lotes cuidando la proporción justa de clavo de olor para obtener un licor cálido, expresivo y equilibrado.',
    servingSuggestion: 'Disfrutar en dosis pequeñas como digestivo o en tardes frescas.',
    images: {
      botella: '/assets/botellas/clavodeolor.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'jengibre',
    name: 'Jengibre',
    lineId: 'aromas-especiados',
    shortNote: 'Chispeante, levemente picante y muy aromático.',
    description:
      'Maceración de raíz de jengibre fresco que aporta vivacidad, calor amable en boca y un perfil estimulante.',
    servingSuggestion: 'Excelente bien frío con hielo y limón, o en cócteles con cerveza de jengibre.',
    images: {
      botella: '/assets/botellas/jengibre.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },

  // ==========================================
  // 6. CALOR DE INVIERNO
  // ==========================================
  {
    id: 'cafe',
    name: 'Café',
    lineId: 'calor-de-invierno',
    shortNote: 'Notas tostadas intensas, cuerpo amable y final prolongado.',
    description:
      'Licor artesanal elaborado con granos de café tostado, equilibrando el amargor noble del espresso con una dulzura justa.',
    servingSuggestion: 'Servir frío con hielo o junto a postres de tiramisú y tortas.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'chocolate',
    name: 'Chocolate',
    lineId: 'calor-de-invierno',
    shortNote: 'Cacao profundo, textura sedosa y espíritu goloso.',
    description:
      'Un licor cálido y reconfortante pensado para los amantes del cacao. Suave al paladar y con persistente aroma a chocolate artesanal.',
    servingSuggestion: 'Disfrutar fresco solo, en copa de licor o acompañando frutas rojas.',
    images: {
      botella: '/assets/botellas/chocolate.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'dulce-de-leche',
    name: 'Dulce de Leche',
    lineId: 'calor-de-invierno',
    shortNote: 'Cremoso, acaramelado y con toda la calidez de la sobremesa argentina.',
    description:
      'Suave, envolvente y goloso, inspirado en nuestro clásico dulce de leche artesanal para brindar un cierre dulce inolvidable.',
    servingSuggestion: 'Servir bien frío agitado suavemente, solo o sobre bochas de helado.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },

  // ==========================================
  // 7. FRUTAS DE ESTACIÓN
  // ==========================================
  {
    id: 'manzana',
    name: 'Manzana',
    lineId: 'frutas-de-estacion',
    shortNote: 'Fresco, frutado y con sutil dulzor de compota casera.',
    description:
      'Licor elaborado con manzanas seleccionadas de temporada, logrando un sabor limpio, amable y muy equilibrado.',
    servingSuggestion: 'Servir frío solo o acompañado de una ramita de canela.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'pera',
    name: 'Pera',
    lineId: 'frutas-de-estacion',
    shortNote: 'Delicado, floral y de textura jugosa y elegante.',
    description:
      'Maceración pausada de peras maduras de estación. Sorprende por su sutileza aromática y su suavidad en boca.',
    servingSuggestion: 'Ideal frío como digestivo o para acompañar quesos azules y nueces.',
    images: {
      botella: '/assets/botellas/pera.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'coco',
    name: 'Coco',
    lineId: 'frutas-de-estacion',
    shortNote: 'Suave, exótico y con aroma dulce a coco natural.',
    description:
      'Licor de temporada con notas tropicales suaves y envolventes, pensado para disfrutar solo o en combinaciones frescas.',
    servingSuggestion: 'Servir bien frío con hielo o combinar con ananá y frutas tropicales.',
    images: {
      botella: null,
      botellita: null,
    },
    defaultFormat: 'botella',
  },
  {
    id: 'pitaya',
    name: 'Pitaya',
    lineId: 'frutas-de-estacion',
    shortNote: 'Exótico, liviano y de color vibrante con frescor sutil.',
    description:
      'Variedad de estación elaborada con pitaya (fruta del dragón), destacando por su estética cautivante y su perfil frutal delicado.',
    servingSuggestion: 'Servir bien frío en copa cristalina con un hielo grande.',
    images: {
      botella: '/assets/botellas/pitaya.jpg',
      botellita: null,
    },
    defaultFormat: 'botella',
  },
];

export const TOTAL_PRODUCTS = PRODUCTS.length;
export const PRODUCTS_WITH_PHOTO_COUNT = PRODUCTS.filter(
  (p) => Boolean(p.images.botella || p.images.botellita)
).length;
