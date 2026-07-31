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
    title: 'Our Father (Lord\'s Prayer)',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'lord prayer', 'daily', 'fundamental'],
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
    title: 'Glory Be (Doxology)',
    category: CATEGORIES.BASIC,
    tags: ['basic', 'trinity', 'rosary', 'doxology'],
    summary: 'A short hymn of praise to the Holy Trinity.',
    content: [
      'Glory be to the Father, and to the Son, and to the Holy Spirit, as it was in the beginning, is now, and ever shall be, world without end. Amen.'
    ]
  },
  {
    id: 'saint-michael',
    title: 'Saint Michael the Archangel Prayer',
    category: CATEGORIES.PROTECTION,
    tags: ['protection', 'spiritual warfare', 'archangel'],
    summary: 'Traditional prayer seeking protection against evil and spiritual harm.',
    content: [
      'Saint Michael the Archangel, defend us in battle. Be our protection against the wickedness and snares of the devil.',
      'May God rebuke him, we humbly pray; and do thou, O Prince of the Heavenly Host, by the power of God, cast into hell Satan and all the evil spirits who prowl about the world seeking the ruin of souls. Amen.'
    ]
  },
  {
    id: 'morning-prayer',
    title: 'Morning Prayer',
    category: CATEGORIES.DAILY,
    tags: ['daily', 'morning', 'offering', 'start of day'],
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
  }
];