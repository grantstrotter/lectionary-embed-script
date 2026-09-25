const weeks = [
    // From 26-27 year
    { date: new Date('2026-09-27 23:59:59'), title: '26rd Sunday in Ordinary Time', oldTestament: 'Ezekiel 18:1-4, 25-32', psalm: 'Psalm 25:1-9', newTestament: 'Philippians 2:1-13', gospel: 'Matthew 21:23-32', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2018%3A1-4%2C%2025-32%2C%20Psalm%2025%3A1-9%2C%20Philippians%202%3A1-13%2C%20Matthew%2021%3A23-32', notes: '' },
    { date: new Date('2026-10-04 23:59:59'), title: '27rd Sunday in Ordinary Time', oldTestament: 'Isaiah 5:1-7', psalm: 'Psalm 80:7-15', newTestament: 'Philippians 3:4b-14', gospel: 'Matthew 21:33-46', link: 'https://www.biblegateway.com/passage/?search=Isaiah%205%3A1-7%2C%20Psalm%2080%3A7-15%2C%20Philippians%203%3A4b-14%2C%20Matthew%2021%3A33-46', notes: '' },
    { date: new Date('2026-10-11 23:59:59'), title: '28rd Sunday in Ordinary Time', oldTestament: 'Isaiah 25:1-9', psalm: 'Psalm 23', newTestament: 'Philippians 4:1-9', gospel: 'Matthew 22:1-14', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2025%3A1-9%2C%20Psalm%2023%2C%20Philippians%204%3A1-9%2C%20Matthew%2022%3A1-14', notes: '' },
    { date: new Date('2026-10-18 23:59:59'), title: '29th Sunday in Ordinary Time', oldTestament: 'Isaiah 45:1-7', psalm: 'Psalm 96:1-9, (10-13)', newTestament: '1 Thessalonians 1:1-10', gospel: 'Matthew 22:15-22', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2045%3A1-7%2C%20Psalm%2096%3A1-9%2C%2C%2010-13%2C%201%20Thessalonians%201%3A1-10%2C%20Matthew%2022%3A15-22', notes: '' },
    { date: new Date('2026-10-25 23:59:59'), title: '30th Sunday in Ordinary Time', oldTestament: 'Leviticus 19:1-2, 15-18', psalm: 'Psalm 1', newTestament: '1 Thessalonians 2:1-8', gospel: 'Matthew 22:34-46', link: 'https://www.biblegateway.com/passage/?search=Leviticus%2019%3A1-2%2C%2015-18%2C%20Psalm%201%2C%201%20Thessalonians%202%3A1-8%2C%20Matthew%2022%3A34-46', notes: '' },
    { date: new Date('2026-11-01 23:59:59'), title: '31st Sunday in Ordinary Time', oldTestament: 'Micah 3:5-12', psalm: 'Psalm 43', newTestament: '1 Thessalonians 2:9-13', gospel: 'Matthew 23:1-12', link: 'https://www.biblegateway.com/passage/?search=Micah%203%3A5-12%2C%20Psalm%2043%2C%201%20Thessalonians%202%3A9-13%2C%20Matthew%2023%3A1-12', notes: '' },
    { date: new Date('2026-11-08 23:59:59'), title: '32nd Sunday in Ordinary Time', oldTestament: 'Amos 5:18-24', psalm: 'Psalm 70', newTestament: '1 Thessalonians 4:13-18', gospel: 'Matthew 25:1-13', link: 'https://www.biblegateway.com/passage/?search=Amos%205%3A18-24%2C%20Psalm%2070%2C%201%20Thessalonians%204%3A13-18%2C%20Matthew%2025%3A1-13', notes: '' },
    { date: new Date('2026-11-15 23:59:59'), title: '33rd Sunday in Ordinary Time', oldTestament: 'Zephaniah 1:7, 12-18', psalm: 'Psalm 90:1-8, (9-11), 12', newTestament: '1 Thessalonians 5:1-11', gospel: 'Matthew 25:14-30', link: 'https://www.biblegateway.com/passage/?search=Zephaniah%201%3A7%2C%2012-18%2C%20Psalm%2090%3A1-8%2C%2C%209-11%2C%2012%2C%201%20Thessalonians%205%3A1-11%2C%20Matthew%2025%3A14-30', notes: '' },
    { date: new Date('2026-11-22 23:59:59'), title: 'Reign of Christ - 34th Sunday in Ordinary Time', oldTestament: 'Ezekiel 34:11-16, 20-24', psalm: 'Psalm 95:1-7a', newTestament: 'Ephesians 1:15-23', gospel: 'Matthew 25:31-46', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2034%3A11-16%2C%2020-24%2C%20Psalm%2095%3A1-7a%2C%20Ephesians%201%3A15-23%2C%20Matthew%2025%3A31-46', notes: '' },

    // From 27-28 year
    {date: new Date('2026-11-29 23:59:59'), title: 'First Sunday of Advent', oldTestament: 'Isaiah 64:1-9', psalm: 'Psalm 80:1-7, 17-19', newTestament: '1 Corinthians 1:3-9', gospel: 'Mark 13:24-37', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2064%3A1-9%2C%20Psalm%2080%3A1-7%2C%2017-19%2C%201%20Corinthians%201%3A3-9%2C%20Mark%2013%3A24-37', notes: ''},
    {date: new Date('2026-12-06 23:59:59'), title: 'Second Sunday of Advent', oldTestament: 'Isaiah 40:1-11', psalm: 'Psalm 85:1-2, 8-13', newTestament: '2 Peter 3:8-15a', gospel: 'Mark 1:1-8', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2040%3A1-11%2C%20Psalm%2085%3A1-2%2C%208-13%2C%202%20Peter%203%3A8-15a%2C%20Mark%201%3A1-8', notes: ''},
    {date: new Date('2026-12-13 23:59:59'), title: 'Third Sunday of Advent', oldTestament: 'Isaiah 61:1-4, 8-11', psalm: 'Psalm 126 or Luke 1:46b-55', newTestament: '1 Thessalonians 5:16-24', gospel: 'John 1:6-8, 19-28', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2061%3A1-4%2C%208-11%2C%20Psalm%20126%2C%20Luke%201%3A46b-55%2C%201%20Thessalonians%205%3A16-24%2C%20John%201%3A6-8%2C%2019-28', notes: ''},
    {date: new Date('2026-12-20 23:59:59'), title: 'Fourth Sunday of Advent', oldTestament: '2 Samuel 7:1-11, 16', psalm: 'Luke 1:46b-55 or Psalm 89:1-4, 19-26', newTestament: 'Romans 16:25-27', gospel: 'Luke 1:26-38', link: 'https://www.biblegateway.com/passage/?search=2%20Samuel%207%3A1-11%2C%2016%2C%20Luke%201%3A46b-55%2C%20Psalm%2089%3A1-4%2C%2019-26%2C%20Romans%2016%3A25-27%2C%20Luke%201%3A26-38', notes: ''},
    {date: new Date('2027-01-03 23:59:59'), title: 'Second Sunday after Christmas Day', oldTestament: 'Jeremiah 31:7-14', psalm: 'Psalm 147:12-20', newTestament: 'Ephesians 1:3-14', gospel: 'John 1:(1-9), 10-18', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2031%3A7-14%2C%20Psalm%20147%3A12-20%2C%20Ephesians%201%3A3-14%2C%20John%201%3A1-9%2C%2010-18', notes: ''},
    {date: new Date('2026-12-27 23:59:59'), title: 'First Sunday after Christmas Day', oldTestament: 'Isaiah 61:10-62:3', psalm: 'Psalm 148', newTestament: 'Galatians 4:4-7', gospel: 'Luke 2:22-40', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2061%3A10-62%3A3%2C%20Psalm%20148%2C%20Galatians%204%3A4-7%2C%20Luke%202%3A22-40', notes: ''},
    {date: new Date('2027-01-10 23:59:59'), title: 'Baptism of the Lord', oldTestament: 'Genesis 1:1-5', psalm: 'Psalm 29', newTestament: 'Acts 19:1-7', gospel: 'Mark 1:4-11', link: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-5%2C%20Psalm%2029%2C%20Acts%2019%3A1-7%2C%20Mark%201%3A4-11', notes: ''},
    {date: new Date('2027-01-17 23:59:59'), title: 'Second Sunday after the Epiphany', oldTestament: '1 Samuel 3:1-10, (11-20)', psalm: 'Psalm 139:1-6, 13-18', newTestament: '1 Corinthians 6:12-20', gospel: 'John 1:43-51', link: 'https://www.biblegateway.com/passage/?search=1%20Samuel%203%3A1-10%2C%2C%2011-20%2C%20Psalm%20139%3A1-6%2C%2013-18%2C%201%20Corinthians%206%3A12-20%2C%20John%201%3A43-51', notes: ''},
    {date: new Date('2027-01-24 23:59:59'), title: 'Third Sunday after the Epiphany', oldTestament: 'Jonah 3:1-5, 10', psalm: 'Psalm 62:5-12', newTestament: '1 Corinthians 7:29-31', gospel: 'Mark 1:14-20', link: 'https://www.biblegateway.com/passage/?search=Jonah%203%3A1-5%2C%2010%2C%20Psalm%2062%3A5-12%2C%201%20Corinthians%207%3A29-31%2C%20Mark%201%3A14-20', notes: ''},
    {date: new Date('2027-01-31 23:59:59'), title: 'Fourth Sunday after the Epiphany', oldTestament: 'Deuteronomy 18:15-20', psalm: 'Psalm 111', newTestament: '1 Corinthians 8:1-13', gospel: 'Mark 1:21-28', link: 'https://www.biblegateway.com/passage/?search=Deuteronomy%2018%3A15-20%2C%20Psalm%20111%2C%201%20Corinthians%208%3A1-13%2C%20Mark%201%3A21-28', notes: ''},
    {date: new Date('2027-02-07 23:59:59'), title: 'Transfiguration Sunday', oldTestament: '2 Kings 2:1-12', psalm: 'Psalm 50:1-6', newTestament: '2 Corinthians 4:3-6', gospel: 'Mark 9:2-9', link: 'https://www.biblegateway.com/passage/?search=2%20Kings%202%3A1-12%2C%20Psalm%2050%3A1-6%2C%202%20Corinthians%204%3A3-6%2C%20Mark%209%3A2-9', notes: ''},
    {date: new Date('2027-02-14 23:59:59'), title: 'First Sunday in Lent', oldTestament: 'Genesis 9:8-17', psalm: 'Psalm 25:1-10', newTestament: '1 Peter 3:18-22', gospel: 'Mark 1:9-15', link: 'https://www.biblegateway.com/passage/?search=Genesis%209%3A8-17%2C%20Psalm%2025%3A1-10%2C%201%20Peter%203%3A18-22%2C%20Mark%201%3A9-15', notes: ''},
    {date: new Date('2027-02-21 23:59:59'), title: 'Second Sunday in Lent', oldTestament: 'Genesis 17:1-7, 15-16', psalm: 'Psalm 22:23-31', newTestament: 'Romans 4:13-25', gospel: 'Mark 8:31-38 or Mark 9:2-9', link: 'https://www.biblegateway.com/passage/?search=Genesis%2017%3A1-7%2C%2015-16%2C%20Psalm%2022%3A23-31%2C%20Romans%204%3A13-25%2C%20Mark%208%3A31-38%2C%20Mark%209%3A2-9', notes: ''},
    {date: new Date('2027-02-28 23:59:59'), title: 'Third Sunday in Lent', oldTestament: 'Exodus 20:1-17', psalm: 'Psalm 19', newTestament: '1 Corinthians 1:18-25', gospel: 'John 2:13-22', link: 'https://www.biblegateway.com/passage/?search=Exodus%2020%3A1-17%2C%20Psalm%2019%2C%201%20Corinthians%201%3A18-25%2C%20John%202%3A13-22', notes: ''},
    {date: new Date('2027-03-07 23:59:59'), title: 'Fourth Sunday in Lent', oldTestament: 'Numbers 21:4-9', psalm: 'Psalm 107:1-3, 17-22', newTestament: 'Ephesians 2:1-10', gospel: 'John 3:14-21', link: 'https://www.biblegateway.com/passage/?search=Numbers%2021%3A4-9%2C%20Psalm%20107%3A1-3%2C%2017-22%2C%20Ephesians%202%3A1-10%2C%20John%203%3A14-21', notes: ''},
    {date: new Date('2027-03-14 23:59:59'), title: 'Fifth Sunday in Lent', oldTestament: 'Jeremiah 31:31-34', psalm: 'Psalm 51:1-12 or Psalm 119:9-16', newTestament: 'Hebrews 5:5-10', gospel: 'John 12:20-33', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2031%3A31-34%2C%20Psalm%2051%3A1-12%2C%20Psalm%20119%3A9-16%2C%20Hebrews%205%3A5-10%2C%20John%2012%3A20-33', notes: ''},
    {date: new Date('2027-03-21 23:59:59'), title: 'Liturgy of the Passion', oldTestament: 'Isaiah 50:4-9a', psalm: 'Psalm 31:9-16', newTestament: 'Philippians 2:5-11', gospel: 'Mark 14:1-15:47 or Mark 15:1-39, (40-47)', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2050%3A4-9a%2C%20Psalm%2031%3A9-16%2C%20Philippians%202%3A5-11%2C%20Mark%2014%3A1-15%3A47%2C%20Mark%2015%3A1-39%2C%2C%2040-47', notes: ''},
    {date: new Date('2027-03-28 23:59:59'), title: 'Resurrection of the Lord', oldTestament: 'Acts 10:34-43 or Isaiah 25:6-9', psalm: 'Psalm 118:1-2, 14-24', newTestament: '1 Corinthians 15:1-11 or Acts 10:34-43', gospel: 'John 20:1-18 or Mark 16:1-8', link: 'https://www.biblegateway.com/passage/?search=Acts%2010%3A34-43%2C%20Isaiah%2025%3A6-9%2C%20Psalm%20118%3A1-2%2C%2014-24%2C%201%20Corinthians%2015%3A1-11%2C%20Acts%2010%3A34-43%2C%20John%2020%3A1-18%2C%20Mark%2016%3A1-8', notes: ''},
    {date: new Date('2027-04-04 23:59:59'), title: 'Second Sunday of Easter', oldTestament: 'Acts 4:32-35', psalm: 'Psalm 133', newTestament: '1 John 1:1-2:2', gospel: 'John 20:19-31', link: 'https://www.biblegateway.com/passage/?search=Acts%204%3A32-35%2C%20Psalm%20133%2C%201%20John%201%3A1-2%3A2%2C%20John%2020%3A19-31', notes: ''},
    {date: new Date('2027-04-11 23:59:59'), title: 'Third Sunday of Easter', oldTestament: 'Acts 3:12-19', psalm: 'Psalm 4', newTestament: '1 John 3:1-7', gospel: 'Luke 24:36b-48', link: 'https://www.biblegateway.com/passage/?search=Acts%203%3A12-19%2C%20Psalm%204%2C%201%20John%203%3A1-7%2C%20Luke%2024%3A36b-48', notes: ''},
    {date: new Date('2027-04-18 23:59:59'), title: 'Fourth Sunday of Easter', oldTestament: 'Acts 4:5-12', psalm: 'Psalm 23', newTestament: '1 John 3:16-24', gospel: 'John 10:11-18', link: 'https://www.biblegateway.com/passage/?search=Acts%204%3A5-12%2C%20Psalm%2023%2C%201%20John%203%3A16-24%2C%20John%2010%3A11-18', notes: ''},
    {date: new Date('2027-04-25 23:59:59'), title: 'Fifth Sunday of Easter', oldTestament: 'Acts 8:26-40', psalm: 'Psalm 22:25-31', newTestament: '1 John 4:7-21', gospel: 'John 15:1-8', link: 'https://www.biblegateway.com/passage/?search=Acts%208%3A26-40%2C%20Psalm%2022%3A25-31%2C%201%20John%204%3A7-21%2C%20John%2015%3A1-8', notes: ''},
    {date: new Date('2027-05-02 23:59:59'), title: 'Sixth Sunday of Easter', oldTestament: 'Acts 10:44-48', psalm: 'Psalm 98', newTestament: '1 John 5:1-6', gospel: 'John 15:9-17', link: 'https://www.biblegateway.com/passage/?search=Acts%2010%3A44-48%2C%20Psalm%2098%2C%201%20John%205%3A1-6%2C%20John%2015%3A9-17', notes: ''},
    {date: new Date('2027-05-09 23:59:59'), title: 'Seventh Sunday of Easter', oldTestament: 'Acts 1:15-17, 21-26', psalm: 'Psalm 1', newTestament: '1 John 5:9-13', gospel: 'John 17:6-19', link: 'https://www.biblegateway.com/passage/?search=Acts%201%3A15-17%2C%2021-26%2C%20Psalm%201%2C%201%20John%205%3A9-13%2C%20John%2017%3A6-19', notes: ''},
    {date: new Date('2027-05-16 23:59:59'), title: 'Day of Pentecost', oldTestament: 'Acts 2:1-21 or Ezekiel 37:1-14', psalm: 'Psalm 104:24-34, 35b', newTestament: 'Romans 8:22-27 or Acts 2:1-21', gospel: 'John 15:26-27; 16:4b-15', link: 'https://www.biblegateway.com/passage/?search=Acts%202%3A1-21%2C%20Ezekiel%2037%3A1-14%2C%20Psalm%20104%3A24-34%2C%2035b%2C%20Romans%208%3A22-27%2C%20Acts%202%3A1-21%2C%20John%2015%3A26-27;%2016%3A4b-15', notes: ''},
    {date: new Date('2027-05-23 23:59:59'), title: 'Trinity Sunday', oldTestament: 'Isaiah 6:1-8', psalm: 'Psalm 29', newTestament: 'Romans 8:12-17', gospel: 'John 3:1-17', link: 'https://www.biblegateway.com/passage/?search=Isaiah%206%3A1-8%2C%20Psalm%2029%2C%20Romans%208%3A12-17%2C%20John%203%3A1-17', notes: ''},
    {date: new Date('2027-05-30 23:59:59'), title: '9th Sunday in Ordinary Time', oldTestament: 'Deuteronomy 5:12-15', psalm: 'Psalm 81:1-10', newTestament: '2 Corinthians 4:5-12', gospel: 'Mark 2:23-3:6', link: 'https://www.biblegateway.com/passage/?search=Deuteronomy%205%3A12-15%2C%20Psalm%2081%3A1-10%2C%202%20Corinthians%204%3A5-12%2C%20Mark%202%3A23-3%3A6', notes: '""Ordinary Time"" is the part of the church year that isn\'t tied to a major season such as Advent, Christmas, Epiphany, Lent, or Easter.<br/><br/>You might wonder why we\'re starting the count at 9. This is because the count includes the Sundays from earlier this year before Lent.'},
    {date: new Date('2027-06-06 23:59:59'), title: '10th Sunday in Ordinary Time', oldTestament: 'Genesis 3:8-15', psalm: 'Psalm 130', newTestament: '2 Corinthians 4:13-5:1', gospel: 'Mark 3:20-35', link: 'https://www.biblegateway.com/passage/?search=Genesis%203%3A8-15%2C%20Psalm%20130%2C%202%20Corinthians%204%3A13-5%3A1%2C%20Mark%203%3A20-35', notes: ''},
    {date: new Date('2027-06-13 23:59:59'), title: '11th Sunday in Ordinary Time', oldTestament: 'Ezekiel 17:22-24', psalm: 'Psalm 92:1-4, 12-15', newTestament: '2 Corinthians 5:6-10, (11-13), 14-17', gospel: 'Mark 4:26-34', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2017%3A22-24%2C%20Psalm%2092%3A1-4%2C%2012-15%2C%202%20Corinthians%205%3A6-10%2C%2C%2011-13%2C%2014-17%2C%20Mark%204%3A26-34', notes: ''},
    {date: new Date('2027-06-20 23:59:59'), title: '12th Sunday in Ordinary Time', oldTestament: 'Job 38:1-11', psalm: 'Psalm 107:1-3, 23-32', newTestament: '2 Corinthians 6:1-13', gospel: 'Mark 4:35-41', link: 'https://www.biblegateway.com/passage/?search=Job%2038%3A1-11%2C%20Psalm%20107%3A1-3%2C%2023-32%2C%202%20Corinthians%206%3A1-13%2C%20Mark%204%3A35-41', notes: ''},
    {date: new Date('2027-06-27 23:59:59'), title: '13th Sunday in Ordinary Time', oldTestament: 'Lamentations 3:22-33', psalm: 'Psalm 30', newTestament: '2 Corinthians 8:7-15', gospel: 'Mark 5:21-43', link: 'https://www.biblegateway.com/passage/?search=Lamentations%203%3A22-33%2C%20Psalm%2030%2C%202%20Corinthians%208%3A7-15%2C%20Mark%205%3A21-43', notes: ''},
    {date: new Date('2027-07-04 23:59:59'), title: '14rd Sunday in Ordinary Time', oldTestament: 'Ezekiel 2:1-5', psalm: 'Psalm 123', newTestament: '2 Corinthians 12:2-10', gospel: 'Mark 6:1-13', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%202%3A1-5%2C%20Psalm%20123%2C%202%20Corinthians%2012%3A2-10%2C%20Mark%206%3A1-13', notes: ''},
    {date: new Date('2027-07-11 23:59:59'), title: '15rd Sunday in Ordinary Time', oldTestament: 'Amos 7:7-15', psalm: 'Psalm 85:8-13', newTestament: 'Ephesians 1:3-14', gospel: 'Mark 6:14-29', link: 'https://www.biblegateway.com/passage/?search=Amos%207%3A7-15%2C%20Psalm%2085%3A8-13%2C%20Ephesians%201%3A3-14%2C%20Mark%206%3A14-29', notes: ''},
    {date: new Date('2027-07-18 23:59:59'), title: '16rd Sunday in Ordinary Time', oldTestament: 'Jeremiah 23:1-6', psalm: 'Psalm 23', newTestament: 'Ephesians 2:11-22', gospel: 'Mark 6:30-34, 53-56', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2023%3A1-6%2C%20Psalm%2023%2C%20Ephesians%202%3A11-22%2C%20Mark%206%3A30-34%2C%2053-56', notes: ''},
    {date: new Date('2027-07-25 23:59:59'), title: '17rd Sunday in Ordinary Time', oldTestament: 'Isaiah 44:6-8', psalm: 'Psalm 145:10-18', newTestament: 'Ephesians 3:14-21', gospel: 'John 6:1-21', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2044%3A6-8%2C%20Psalm%20145%3A10-18%2C%20Ephesians%203%3A14-21%2C%20John%206%3A1-21', notes: ''},
    {date: new Date('2027-08-01 23:59:59'), title: '18rd Sunday in Ordinary Time', oldTestament: 'Exodus 16:2-4, 9-15', psalm: 'Psalm 78:23-29', newTestament: 'Ephesians 4:1-16', gospel: 'John 6:24-35', link: 'https://www.biblegateway.com/passage/?search=Exodus%2016%3A2-4%2C%209-15%2C%20Psalm%2078%3A23-29%2C%20Ephesians%204%3A1-16%2C%20John%206%3A24-35', notes: ''},
    {date: new Date('2027-08-08 23:59:59'), title: '19rd Sunday in Ordinary Time', oldTestament: '1 Kings 19:4-8', psalm: 'Psalm 34:1-8', newTestament: 'Ephesians 4:25-5:2', gospel: 'John 6:35, 41-51', link: 'https://www.biblegateway.com/passage/?search=1%20Kings%2019%3A4-8%2C%20Psalm%2034%3A1-8%2C%20Ephesians%204%3A25-5%3A2%2C%20John%206%3A35%2C%2041-51', notes: ''},
    {date: new Date('2027-08-15 23:59:59'), title: '20th Sunday in Ordinary Time', oldTestament: 'Proverbs 9:1-6', psalm: 'Psalm 34:9-14', newTestament: 'Ephesians 5:15-20', gospel: 'John 6:51-58', link: 'https://www.biblegateway.com/passage/?search=Proverbs%209%3A1-6%2C%20Psalm%2034%3A9-14%2C%20Ephesians%205%3A15-20%2C%20John%206%3A51-58', notes: ''},
    {date: new Date('2027-08-22 23:59:59'), title: '21st Sunday in Ordinary Time', oldTestament: 'Joshua 24:1-2a, 14-18', psalm: 'Psalm 34:15-22', newTestament: 'Ephesians 6:10-20', gospel: 'John 6:56-69', link: 'https://www.biblegateway.com/passage/?search=Joshua%2024%3A1-2a%2C%2014-18%2C%20Psalm%2034%3A15-22%2C%20Ephesians%206%3A10-20%2C%20John%206%3A56-69', notes: ''},
    {date: new Date('2027-08-29 23:59:59'), title: '22nd Sunday in Ordinary Time', oldTestament: 'Deuteronomy 4:1-2, 6-9', psalm: 'Psalm 15', newTestament: 'James 1:17-27', gospel: 'Mark 7:1-8, 14-15, 21-23', link: 'https://www.biblegateway.com/passage/?search=Deuteronomy%204%3A1-2%2C%206-9%2C%20Psalm%2015%2C%20James%201%3A17-27%2C%20Mark%207%3A1-8%2C%2014-15%2C%2021-23', notes: ''},
    {date: new Date('2027-09-05 23:59:59'), title: '23rd Sunday in Ordinary Time', oldTestament: 'Isaiah 35:4-7a', psalm: 'Psalm 146', newTestament: 'James 2:1-10, (11-13), 14-17', gospel: 'Mark 7:24-37', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2035%3A4-7a%2C%20Psalm%20146%2C%20James%202%3A1-10%2C%2C%2011-13%2C%2014-17%2C%20Mark%207%3A24-37', notes: ''},
    {date: new Date('2027-09-12 23:59:59'), title: '24rd Sunday in Ordinary Time', oldTestament: 'Isaiah 50:4-9a', psalm: 'Psalm 116:1-9', newTestament: 'James 3:1-12', gospel: 'Mark 8:27-38', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2050%3A4-9a%2C%20Psalm%20116%3A1-9%2C%20James%203%3A1-12%2C%20Mark%208%3A27-38', notes: ''},
    {date: new Date('2027-09-19 23:59:59'), title: '25th Sunday in Ordinary Time', oldTestament: 'Jeremiah 11:18-20', psalm: 'Psalm 54', newTestament: 'James 3:13-4:3, 7-8a', gospel: 'Mark 9:30-37', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2011%3A18-20%2C%20Psalm%2054%2C%20James%203%3A13-4%3A3%2C%207-8a%2C%20Mark%209%3A30-37', notes: ''},
    {date: new Date('2027-09-26 23:59:59'), title: '26rd Sunday in Ordinary Time', oldTestament: 'Numbers 11:4-6, 10-16, 24-29', psalm: 'Psalm 19:7-14', newTestament: 'James 5:13-20', gospel: 'Mark 9:38-50', link: 'https://www.biblegateway.com/passage/?search=Numbers%2011%3A4-6%2C%2010-16%2C%2024-29%2C%20Psalm%2019%3A7-14%2C%20James%205%3A13-20%2C%20Mark%209%3A38-50', notes: ''},
    {date: new Date('2027-10-03 23:59:59'), title: '27rd Sunday in Ordinary Time', oldTestament: 'Genesis 2:18-24', psalm: 'Psalm 8', newTestament: 'Hebrews 1:1-4, 2:5-12', gospel: 'Mark 10:2-16', link: 'https://www.biblegateway.com/passage/?search=Genesis%202%3A18-24%2C%20Psalm%208%2C%20Hebrews%201%3A1-4%2C%202%3A5-12%2C%20Mark%2010%3A2-16', notes: ''},
    {date: new Date('2027-10-10 23:59:59'), title: '28rd Sunday in Ordinary Time', oldTestament: 'Amos 5:6-7, 10-15', psalm: 'Psalm 90:12-17', newTestament: 'Hebrews 4:12-16', gospel: 'Mark 10:17-31', link: 'https://www.biblegateway.com/passage/?search=Amos%205%3A6-7%2C%2010-15%2C%20Psalm%2090%3A12-17%2C%20Hebrews%204%3A12-16%2C%20Mark%2010%3A17-31', notes: ''},
    {date: new Date('2027-10-17 23:59:59'), title: '29th Sunday in Ordinary Time', oldTestament: 'Isaiah 53:4-12', psalm: 'Psalm 91:9-16', newTestament: 'Hebrews 5:1-10', gospel: 'Mark 10:35-45', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2053%3A4-12%2C%20Psalm%2091%3A9-16%2C%20Hebrews%205%3A1-10%2C%20Mark%2010%3A35-45', notes: ''},
    {date: new Date('2027-10-24 23:59:59'), title: '30th Sunday in Ordinary Time', oldTestament: 'Jeremiah 31:7-9', psalm: 'Psalm 126', newTestament: 'Hebrews 7:23-28', gospel: 'Mark 10:46-52', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2031%3A7-9%2C%20Psalm%20126%2C%20Hebrews%207%3A23-28%2C%20Mark%2010%3A46-52', notes: ''},
    {date: new Date('2027-10-31 23:59:59'), title: '31st Sunday in Ordinary Time', oldTestament: 'Deuteronomy 6:1-9', psalm: 'Psalm 119:1-8', newTestament: 'Hebrews 9:11-14', gospel: 'Mark 12:28-34', link: 'https://www.biblegateway.com/passage/?search=Deuteronomy%206%3A1-9%2C%20Psalm%20119%3A1-8%2C%20Hebrews%209%3A11-14%2C%20Mark%2012%3A28-34', notes: ''},
    {date: new Date('2027-11-07 23:59:59'), title: '32nd Sunday in Ordinary Time', oldTestament: '1 Kings 17:8-16', psalm: 'Psalm 146', newTestament: 'Hebrews 9:24-28', gospel: 'Mark 12:38-44', link: 'https://www.biblegateway.com/passage/?search=1%20Kings%2017%3A8-16%2C%20Psalm%20146%2C%20Hebrews%209%3A24-28%2C%20Mark%2012%3A38-44', notes: ''},
    {date: new Date('2027-11-14 23:59:59'), title: '33rd Sunday in Ordinary Time', oldTestament: 'Amos 5:18-24', psalm: 'Daniel 12:1-3 Psalm 16', newTestament: 'Hebrews 10:11-14, (15-18), 19-25', gospel: 'Mark 13:1-8', link: 'https://www.biblegateway.com/passage/?search=Amos%205%3A18-24%2C%20Daniel%2012%3A1-3%20Psalm%2016%2C%20Hebrews%2010%3A11-14%2C%2C%2015-18%2C%2019-25%2C%20Mark%2013%3A1-8', notes: ''},
    {date: new Date('2027-11-21 23:59:59'), title: '34rd Sunday in Ordinary Time', oldTestament: 'Daniel 7:9-10, 13-14', psalm: 'Psalm 93', newTestament: 'Revelation 1:4b-8', gospel: 'John 18:33-37', link: 'https://www.biblegateway.com/passage/?search=Daniel%207%3A9-10%2C%2013-14%2C%20Psalm%2093%2C%20Revelation%201%3A4b-8%2C%20John%2018%3A33-37', notes: ''},
];

function ordinal(number) {
    const suffixes = ["th", "st", "nd", "rd"];
    const lastTwoDigits = number % 100;
    return number + (suffixes[(lastTwoDigits - 20) % 10] || suffixes[lastTwoDigits] || suffixes[0]);
}

function formatDate(date) {
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    const day = ordinal(date.getDate());
    return `${weekday}, ${day}`;
}

let now;
if (
    document.currentScript.dataset.dateOverride &&
    document.currentScript.dataset.dateOverride !== ''
) {
    console.warn('Date override in use');
    now = new Date(document.currentScript.dataset.dateOverride);
} else {
    now = new Date();
}

let currentWeek;
for (const i in weeks) {
    if (now > weeks[i].date) {
        continue;
    }
    currentWeek = weeks[i];
    break;
}

const includesOr =
    currentWeek.oldTestament.includes(' or ') ||
    currentWeek.psalm.includes(' or ') ||
    currentWeek.newTestament.includes(' or ') ||
    currentWeek.gospel.includes(' or ');

const includesParen =
    currentWeek.oldTestament.includes('(') ||
    currentWeek.psalm.includes('(') ||
    currentWeek.newTestament.includes('(') ||
    currentWeek.gospel.includes('(');

const otFromActs = currentWeek.oldTestament.includes('Acts');

document.currentScript.insertAdjacentHTML('afterend', `
    <div style="font-family: 'artifex_book', serif">
        <h2>Current Reading</h2>
        <strong>${formatDate(currentWeek.date)} &bull; ${currentWeek.title}</strong>
        ${currentWeek.notes ? `<p>
            ${currentWeek.notes}
        </p>` : ''}
        <ul>
            <li>OT: ${currentWeek.oldTestament}</li>
            <li>Psalm: ${currentWeek.psalm}</li>
            <li>NT: ${currentWeek.newTestament}</li>
            <li>Gospel: ${currentWeek.gospel}</li>
            <li><p style="margin: 0px"><a target="_blank" href="${currentWeek.link}">Read all</a></p></li>
        </ul>
        ${includesOr ? `<p>
            When an &ldquo;or&rdquo; appears, it means there are alternate readings.
            The preacher will choose one of them. For personal reading,
            you may choose either option or read both.
        </p>` : ''}
        ${includesParen ? `<p>
            Q: Why are there parenthesis?<br/>
            A: These are optional verses that can be added without overlapping with other
            weeks of the lectionary. The preacher may or may not include them in their sermon.
            For personal reading, you my choose to read them or not.
        </p>` : ''}
        ${otFromActs ? `<p>
            Q: Why is the Old Testament reading from Acts?<br/>
            A: What we've been calling the Old Testament reading is technically called &ldquo;First Reading&rdquo;.
            It's usually from the Old Testament, but during the Easter season, it shifts to Acts.
            The Old Testament often foreshadows Christ. During the Easter season, the focus shifts to the
            fulfillment of those promises in the New Testament, with Acts showing the
            immediate consequences of the resurrection.
        </p>` : ''}
    </div>
`);