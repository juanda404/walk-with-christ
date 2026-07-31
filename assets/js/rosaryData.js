export const MYSTERIES = {
  JOYFUL: {
    id: 'joyful',
    name: 'Joyful Mysteries',
    days: [1, 6], // 1: Monday, 6: Saturday (JavaScript Date.getDay())
    dayNames: 'Mondays & Saturdays',
    description: 'Focus on the Incarnation and the early life of Jesus Christ.',
    items: [
      {
        order: 1,
        title: 'The Annunciation',
        fruit: 'Humility',
        scripture: 'Luke 1:26-38',
        reflection: 'The Angel Gabriel announces to Mary that she will bear the Son of God, and Mary humbly accepts God’s will.'
      },
      {
        order: 2,
        title: 'The Visitation',
        fruit: 'Love of Neighbor',
        scripture: 'Luke 1:39-56',
        reflection: 'Mary visits her cousin Elizabeth, who is pregnant with John the Baptist, demonstrating selflessness and charity.'
      },
      {
        order: 3,
        title: 'The Nativity',
        fruit: 'Poverty of Spirit',
        scripture: 'Luke 2:1-20',
        reflection: 'Jesus Christ is born in a humble stable in Bethlehem, bringing light and hope to the world.'
      },
      {
        order: 4,
        title: 'The Presentation in the Temple',
        fruit: 'Obedience',
        scripture: 'Luke 2:22-38',
        reflection: 'Mary and Joseph present the infant Jesus in the Temple of Jerusalem in obedience to the Law of Moses.'
      },
      {
        order: 5,
        title: 'The Finding of Jesus in the Temple',
        fruit: 'Joy in Finding Jesus',
        scripture: 'Luke 2:41-52',
        reflection: 'After searching for three days, Mary and Joseph find the young Jesus teaching among the elders in the Temple.'
      }
    ]
  },
  SORROWFUL: {
    id: 'sorrowful',
    name: 'Sorrowful Mysteries',
    days: [2, 5], // 2: Tuesday, 5: Friday
    dayNames: 'Tuesdays & Fridays',
    description: 'Focus on the Passion and death of Our Lord Jesus Christ.',
    items: [
      {
        order: 1,
        title: 'The Agony in the Garden',
        fruit: 'Sorrow for Sin',
        scripture: 'Matthew 26:36-46',
        reflection: 'Jesus prays in the Garden of Gethsemane, accepting the cup of suffering for the salvation of humanity.'
      },
      {
        order: 2,
        title: 'The Scourging at the Pillar',
        fruit: 'Purity & Mortification',
        scripture: 'Matthew 27:26',
        reflection: 'Jesus is brutally scourged at the pillar by the Roman soldiers, enduring bodily torment for our sins.'
      },
      {
        order: 3,
        title: 'The Crowning with Thorns',
        fruit: 'Moral Courage',
        scripture: 'Matthew 27:27-31',
        reflection: 'Jesus is mocked as King of the Jews and crowned with sharp thorns, enduring humiliation in silence.'
      },
      {
        order: 4,
        title: 'The Carrying of the Cross',
        fruit: 'Patience in Suffering',
        scripture: 'John 19:16-17',
        reflection: 'Jesus carries His heavy cross through the streets of Jerusalem up to Mount Calvary.'
      },
      {
        order: 5,
        title: 'The Crucifixion and Death of Jesus',
        fruit: 'Final Perseverance',
        scripture: 'Luke 23:33-46',
        reflection: 'Jesus is nailed to the Cross and dies after three hours of agony, forgiving His executioners.'
      }
    ]
  },
  GLORIOUS: {
    id: 'glorious',
    name: 'Glorious Mysteries',
    days: [0, 3], // 0: Sunday, 3: Wednesday
    dayNames: 'Wednesdays & Sundays',
    description: 'Focus on the triumph of Christ over sin and death, and the glory of Heaven.',
    items: [
      {
        order: 1,
        title: 'The Resurrection',
        fruit: 'Faith',
        scripture: 'Mark 16:1-8',
        reflection: 'Jesus rises gloriously from the dead on the third day, fulfilling the Scriptures and defeating death.'
      },
      {
        order: 2,
        title: 'The Ascension',
        fruit: 'Hope',
        scripture: 'Acts 1:6-11',
        reflection: 'Forty days after His Resurrection, Jesus ascends into Heaven in the sight of His Apostles.'
      },
      {
        order: 3,
        title: 'The Descent of the Holy Spirit',
        fruit: 'Wisdom & Love of God',
        scripture: 'Acts 2:1-4',
        reflection: 'The Holy Spirit descends upon Mary and the Apostles in the Upper Room in tongues of fire.'
      },
      {
        order: 4,
        title: 'The Assumption of Mary',
        fruit: 'Grace of a Happy Death',
        scripture: 'Revelation 12:1',
        reflection: 'At the end of her earthly life, the Blessed Virgin Mary is taken body and soul into heavenly glory.'
      },
      {
        order: 5,
        title: 'The Coronation of Mary',
        fruit: 'Trust in Mary’s Intercession',
        scripture: 'Luke 1:48-49',
        reflection: 'Mary is crowned Queen of Heaven and Earth by her Son, becoming our advocate and loving Mother.'
      }
    ]
  },
  LUMINOUS: {
    id: 'luminous',
    name: 'Luminous Mysteries (Mysteries of Light)',
    days: [4], // 4: Thursday
    dayNames: 'Thursdays',
    description: 'Focus on the public ministry and revelations of Jesus Christ.',
    items: [
      {
        order: 1,
        title: 'The Baptism in the Jordan',
        fruit: 'Openness to the Holy Spirit',
        scripture: 'Matthew 3:13-17',
        reflection: 'Jesus is baptized by John in the Jordan River, and the voice of the Father proclaims Him as His beloved Son.'
      },
      {
        order: 2,
        title: 'The Wedding at Cana',
        fruit: 'To Jesus through Mary',
        scripture: 'John 2:1-11',
        reflection: 'At Mary’s request, Jesus performs His first miracle, turning water into wine at the wedding feast.'
      },
      {
        order: 3,
        title: 'The Proclamation of the Kingdom',
        fruit: 'Repentance & Trust in God',
        scripture: 'Mark 1:14-15',
        reflection: 'Jesus calls all people to repentance and announces the coming of the Kingdom of God.'
      },
      {
        order: 4,
        title: 'The Transfiguration',
        fruit: 'Desire for Holiness',
        scripture: 'Matthew 17:1-8',
        reflection: 'Jesus is transfigured in glory on Mount Tabor before Peter, James, and John.'
      },
      {
        order: 5,
        title: 'The Institution of the Eucharist',
        fruit: 'Adoration & Gratitude',
        scripture: 'Matthew 26:26-30',
        reflection: 'At the Last Supper, Jesus offers His Body and Blood under the species of bread and wine.'
      }
    ]
  }
};

/**
 * Helper function: Returns the mystery corresponding to the current day of the week
 * @returns {Object} The mystery object matching today's date
 */
export function getTodayMystery() {
  const currentDay = new Date().getDay(); // 0 (Sunday) to 6 (Saturday)
  return Object.values(MYSTERIES).find(m => m.days.includes(currentDay)) || MYSTERIES.JOYFUL;
}