// assets/js/data.js

export const CATEGORIES = {
  BASIC: 'Basic',
  DAILY: 'Daily',
  PROTECTION: 'Protection',
  PETITION: 'Petition',
  DEVOTION: 'Devotions'
};

export const PRAYERS = [
  {
    id: 'our-father',
    title: 'Our Father',
    subtitle: 'Lord\'s Prayer',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'lord prayer', 'daily', 'fundamental'],
    icon: './assets/images/icons/prayer1.png',
    popular: true,
    summary: 'The prayer taught by Jesus Christ Himself, foundation of Christian faith.',
    content: [
      'Our Father, Who art in heaven, hallowed be Thy name; Thy kingdom come; Thy will be done on earth as it is in heaven.',
      'Give us this day our daily bread; and forgive us our trespasses as we forgive those who trespass against us; and lead us not into temptation, but deliver us from evil. Amen.'
    ]
  },
  {
    id: 'hail-mary',
    title: 'Hail Mary',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'virgin mary', 'rosary', 'fundamental'],
    icon: './assets/images/icons/nativity.png',
    popular: true,
    summary: 'Traditional Catholic prayer asking for the intercession of the Blessed Virgin Mary.',
    content: [
      'Hail Mary, full of grace, the Lord is with thee. Blessed art thou among women, and blessed is the fruit of thy womb, Jesus.',
      'Holy Mary, Mother of God, pray for us sinners, now and at the hour of our death. Amen.'
    ]
  },
  {
    id: 'hail-holy-queen',
    title: 'Hail, Holy Queen (Salve Regina)',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'virgin mary', 'rosary', 'salve regina'],
    summary: 'A Marian hymn and prayer traditionally recited at the end of the Rosary.',
    content: [
      'Hail, Holy Queen, Mother of Mercy, our life, our sweetness, and our hope. To thee do we cry, poor banished children of Eve. To thee do we send up our sighs, mourning and weeping in this valley of tears.',
      'Turn then, most gracious advocate, thine eyes of mercy toward us, and after this our exile, show unto us the blessed fruit of thy womb, Jesus.',
      'O clement, O loving, O sweet Virgin Mary. Pray for us, O holy Mother of God, that we may be made worthy of the promises of Christ. Amen.'
    ]
  },
  {
    id: 'glory-be',
    title: 'Glory Be',
    subtitle: 'Doxology',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'trinity', 'rosary', 'doxology'],
    icon: './assets/images/icons/pigeon.png',
    popular: true,
    summary: 'A short hymn of praise to the Holy Trinity.',
    content: [
      'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.'
    ]
  },
  {
    id: 'the-angelus',
    title: 'The Angelus (Ángelus)',
    category: CATEGORIES.PROTECTION,
    tags: ['protection', 'spiritual warfare', 'archangel'],
    icon: './assets/images/icons/angel.png',
    popular: true,
    summary: 'A short prayer recited in memory of the Annunciation of Christ',
    content: [
      'V. The Angel of the Lord declared unto Mary.',
      'R. And she conceived of the Holy Spirit.',
      'Hail Mary...',
      'V. Behold the handmaid of the Lord.',
      'R. Be it done unto me according to thy word.',
      'Hail Mary...',
      'V. And the Word was made flesh.',
      'R. And dwelt among us.',
      'Hail Mary...',
      'V. Pray for us, O Holy Mother of God.',
      'R. That we may be made worthy of the promises of Christ.',
      'Let us pray.',
      'Pour forth, we beseech Thee, O Lord, Thy grace into our hearts; that we, to whom the Incarnation of Christ Thy Son was made known by the message of an angel, may by His Passion and Cross be brought to the glory of His Resurrection. Through the same Christ our Lord Amen.'
    ]
  },
{
  id: 'chaplet-of-the-divine-mercy',
  title: 'Chaplet of the Divine Mercy',
  category: CATEGORIES.PROTECTION,
  tags: ['mercy', 'jesus', 'chaplet', 'devotion', 'forgiveness'],
  icon: './assets/images/icons/rosary.png',
  popular: true,
  summary: 'A powerful prayer given to St. Faustina to implore God’s mercy for the whole world',
  content: [
    'In the name of the Father, and of the Son, and of the Holy Spirit. Amen.',
    'Optional Opening Prayers:',
    'You expired, Jesus, but the source of life gushed forth for souls, and the ocean of mercy opened up for the whole world. O Fount of Life, unfathomable Divine Mercy, envelop the whole world and empty Yourself out upon us.',
    'O Blood and Water, which gushed forth from the Heart of Jesus as a fount of mercy for us, I trust in You! (Repeat 3 times)',
    'The Our Father.',
    'The Hail Mary.',
    'The Apostles\' Creed',
    'On the large beads before each decade (The Eternal Father):',
    'Eternal Father, I offer You the Body and Blood, Soul and Divinity of Your Dearly Beloved Son, Our Lord, Jesus Christ, in atonement for our sins and those of the whole world.',
    'On the 10 small beads of each decade:',
    'For the sake of His sorrowful Passion, have mercy on us and on the whole world.',
    'Concluding Prayer (Repeat 3 times):',
    'Holy God, Holy Mighty One, Holy Immortal One, have mercy on us and on the whole world.',
    'Optional Closing Prayer:',
    'Eternal God, in whom mercy is endless and the treasury of compassion — inexhaustible, look kindly upon us and increase Your mercy in us, that in difficult moments we might not despair nor become despondent, but with great confidence submit ourselves to Your holy will, which is Love and Mercy itself. Amen.'
  ]
},
  {
    id: 'morning-prayer',
    title: 'Morning Prayer',
    category: CATEGORIES.DAILY,
    tags: ['daily', 'morning', 'offering', 'start of day'],
    icon: './assets/images/icons/alarm.png',
    popular: true,
    summary: 'Dedicate your day, actions, and intentions to God upon waking.',
    content: [
      'O Jesus, through the Immaculate Heart of Mary, I offer You my prayers, works, joys, and sufferings of this day for all the intentions of Your Sacred Heart.',
      'In union with the Holy Sacrifice of the Mass throughout the world, I offer them for the salvation of souls, the forgiveness of sins, and the reunion of all Christians. Amen.'
    ]
  },
  {
    id: 'act-of-contrition',
    title: 'Act of Contrition',
    category: CATEGORIES.PETITION,
    tags: ['petition', 'forgiveness', 'confession', 'repentance'],
    icon: './assets/images/icons/heart.png',
    popular: true,
    summary: 'A prayer expressing sorrow for sins and a commitment to amendment.',
    content: [
      'O my God, I am heartily sorry for having offended Thee, and I detest all my sins because of Thy just punishments, but most of all because they offend Thee, my God, Who art all good and deserving of all my love.',
      'I firmly resolve, with the help of Thy grace, to sin no more and to avoid the near occasions of sin. Amen.'
    ]
  },
  {
    id: 'fatima-prayer',
    title: 'Fatima Prayer (O My Jesus)',
    category: CATEGORIES.DEVOTION,
    tags: ['devotion', 'fatima', 'rosary', 'mercy'],
    summary: 'Prayer revealed by Our Lady of Fátima, recited after each decade of the Rosary.',
    content: [
      'O my Jesus, forgive us our sins, save us from the fires of hell, lead all souls to Heaven, especially those most in need of Thy mercy. Amen.'
    ]
  },  {
    id: 'saint-michael',
    title: 'Saint Michael the Archangel Prayer',
    category: CATEGORIES.PROTECTION,
    tags: ['protection', 'spiritual warfare', 'archangel'],
    icon: './assets/images/icons/cross.png',
    popular: true,
    summary: 'Traditional prayer seeking protection against evil and spiritual harm.',
    content: [
      'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil.',
      'May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.'
    ]
  },
  {
    id: 'creed',
    title: "Apostles' Creed",
    subtitle: 'Credo de los Apóstoles',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'creed', 'rosary', 'fundamental'],
    icon: './assets/images/icons/cross.png',
    popular: false, // En 'false' para que no desplace las 5 oraciones fijas del Home
    summary: 'A brief normative summary of Christian belief used in Catholic liturgy and prayer.',
    content: [
      'I believe in God, the Father almighty, Creator of heaven and earth.',
      'And in Jesus Christ, His only Son, our Lord, who was conceived by the Holy Spirit, born of the Virgin Mary, suffered under Pontius Pilate, was crucified, died and was buried;',
      'He descended into hell; on the third day He rose again from the dead; He ascended into heaven, and is seated at the right hand of God the Father almighty; from there He will come to judge the living and the dead.',
      'I believe in the Holy Spirit, the holy Catholic Church, the communion of saints, the forgiveness of sins, the resurrection of the body, and life everlasting. Amen.'
    ]
  }

];