
export const CATEGORIES = {
  BASIC: 'Básicas',
  DAILY: 'Diarias',
  PROTECTION: 'Protección',
  PETITION: 'Petición',
  DEVOTION: 'Devociones'
};

export const PRAYERS = [
  {
    id: 'padre-nuestro',
    title: 'Padre Nuestro',
    category: CATEGORIES.BASIC,
    tags: ['fundamentales', 'oración del señor', 'diaria'],
    summary: 'La oración que Jesús nos enseñó, pilar de la fe cristiana.',
    content: [
      'Padre nuestro, que estás en el cielo, santificado sea tu Nombre; venga a nosotros tu reino; hágase tu voluntad en la tierra como en el cielo.',
      'Danos hoy nuestro pan de cada día; perdona nuestras ofensas, como también nosotros perdonamos a los que nos ofenden; no nos dejes caer en la tentación, y líbranos del mal. Amén.'
    ]
  },
  {
    id: 'ave-maria',
    title: 'Ave María',
    category: CATEGORIES.BASIC,
    tags: ['virgen maría', 'rosario', 'fundamentales'],
    summary: 'Plegaria de salutación e intercesión a la Santísima Virgen.',
    content: [
      'Dios te salve, María, llena eres de gracia, el Señor es contigo. Bendita tú eres entre todas las mujeres, y bendito es el fruto de tu vientre, Jesús.',
      'Santa María, Madre de Dios, ruega por nosotros, pecadores, ahora y en la hora de nuestra muerte. Amén.'
    ]
  },
  {
    id: 'san-miguel',
    title: 'Oración a San Miguel Arcángel',
    category: CATEGORIES.PROTECTION,
    tags: ['protección', 'combate espiritual', 'arcángel'],
    summary: 'Oración tradicional para pedir protección contra el mal.',
    content: [
      'San Miguel Arcángel, defiéndenos en la lucha. Sé nuestro amparo contra la perversidad y acechanzas del demonio.',
      'Que Dios manifieste sobre él su poder, es nuestra humilde súplica. Y tú, oh Príncipe de la Milicia Celestial, con el poder que Dios te ha conferido, arroja al infierno a Satanás y a los demás espíritus malignos que vagan por el mundo para la perdición de las almas. Amén.'
    ]
  },
  {
    id: 'oracion-manana',
    title: 'Oración de la Mañana',
    category: CATEGORIES.DAILY,
    tags: ['mañana', 'ofrecimiento', 'inicio del día'],
    summary: 'Entrega tu jornada, tus obras y tus pensamientos a Dios al despertar.',
    content: [
      'Señor, en el silencio de este día que nace, vengo a pedirte paz, sabiduría y fuerza.',
      'Hoy quiero mirar al mundo con ojos llenos de amor; ser paciente, comprensivo, humilde y prudente. Cierra mis oídos a toda calumnia, guarda mi lengua de toda maledicencia y que solo los pensamientos que bendicen permanezcan en mí.',
      'Revísteme de tu belleza, Señor, y que a lo largo de este día yo te revele a los demás. Amén.'
    ]
  },
  {
    id: 'acto-de-contricion',
    title: 'Acto de Contrición',
    category: CATEGORIES.PETITION,
    tags: ['perdón', 'confesión', 'reconciliación'],
    summary: 'Oración de arrepentimiento sincero por las faltas cometidas.',
    content: [
      'Jesús, mi Señor y Redentor, yo me arrepiento de todos los pecados que he cometido hasta hoy, y me pesa de todo corazón, porque con ellos he ofendido a un Dios tan bueno.',
      'Propongo firmemente no volver a pecar y confío en que, por tu infinita misericordia, me has de conceder el perdón de mis culpas y me has de llevar a la vida eterna. Amén.'
    ]
  }
];