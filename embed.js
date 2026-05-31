const weeks = [
    { date: new Date('2026-06-07 23:59:59'), title: '10th Sunday in Ordinary Time', oldTestament: 'Hosea 5:15-6:6', psalm: 'Psalm 50:7-15', newTestament: 'Romans 4:13-25', gospel: 'Matthew 9:9-13, 18-26', link: 'https://www.biblegateway.com/passage/?search=Hosea%205%3A15-6%3A6%2C%20Psalm%2050%3A7-15%2C%20Romans%204%3A13-25%2C%20Matthew%209%3A9-13%2C%2018-26', notes: '"Ordinary Time" is the part of the church year that isn\'t tied to a major season such as Advent, Christmas, Epiphany, Lent, or Easter.<br/><br/>You might wonder why we\'re starting the count at 10. This is because the count includes the Sundays from earlier this year before Lent.' },
    { date: new Date('2026-06-14 23:59:59'), title: '11th Sunday in Ordinary Time', oldTestament: 'Exodus 19:2-8a', psalm: 'Psalm 100', newTestament: 'Romans 5:1-8', gospel: 'Matthew 9:35-10:8, (9-23)', link: 'https://www.biblegateway.com/passage/?search=Exodus%2019%3A2-8a%2C%20Psalm%20100%2C%20Romans%205%3A1-8%2C%20Matthew%209%3A35-10%3A8%2C%2C%209-23', notes: '' },
    { date: new Date('2026-06-21 23:59:59'), title: '12th Sunday in Ordinary Time', oldTestament: 'Jeremiah 20:7-13', psalm: 'Psalm 69:7-10, (11-15), 16-18', newTestament: 'Romans 6:1b-11', gospel: 'Matthew 10:24-39', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2020%3A7-13%2C%20Psalm%2069%3A7-10%2C%2C%2011-15%2C%2016-18%2C%20Romans%206%3A1b-11%2C%20Matthew%2010%3A24-39', notes: '' },
    { date: new Date('2026-06-28 23:59:59'), title: '13th Sunday in Ordinary Time', oldTestament: 'Jeremiah 28:5-9', psalm: 'Psalm 89:1-4, 15-18', newTestament: 'Romans 6:12-23', gospel: 'Matthew 10:40-42', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2028%3A5-9%2C%20Psalm%2089%3A1-4%2C%2015-18%2C%20Romans%206%3A12-23%2C%20Matthew%2010%3A40-42', notes: '' },
    { date: new Date('2026-07-05 23:59:59'), title: '14rd Sunday in Ordinary Time', oldTestament: 'Zechariah 9:9-12', psalm: 'Psalm 145:8-14', newTestament: 'Romans 7:15-25a', gospel: 'Matthew 11:16-19, 25-30', link: 'https://www.biblegateway.com/passage/?search=Zechariah%209%3A9-12%2C%20Psalm%20145%3A8-14%2C%20Romans%207%3A15-25a%2C%20Matthew%2011%3A16-19%2C%2025-30', notes: '' },
    { date: new Date('2026-07-12 23:59:59'), title: '15rd Sunday in Ordinary Time', oldTestament: 'Isaiah 55:10-13', psalm: 'Psalm 65:(1-8), 9-13', newTestament: 'Romans 8:1-11', gospel: 'Matthew 13:1-9, 18-23', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2055%3A10-13%2C%20Psalm%2065%3A1-8%2C%209-13%2C%20Romans%208%3A1-11%2C%20Matthew%2013%3A1-9%2C%2018-23', notes: '' },
    { date: new Date('2026-07-19 23:59:59'), title: '16rd Sunday in Ordinary Time', oldTestament: 'Isaiah 44:6-8', psalm: 'Psalm 86:11-17', newTestament: 'Romans 8:12-25', gospel: 'Matthew 13:24-30, 36-43', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2044%3A6-8%2C%20Psalm%2086%3A11-17%2C%20Romans%208%3A12-25%2C%20Matthew%2013%3A24-30%2C%2036-43', notes: '' },
    { date: new Date('2026-07-26 23:59:59'), title: '17rd Sunday in Ordinary Time', oldTestament: '1 Kings 3:5-12', psalm: 'Psalm 119:129-136', newTestament: 'Romans 8:26-39', gospel: 'Matthew 13:31-33, 44-52', link: 'https://www.biblegateway.com/passage/?search=1%20Kings%203%3A5-12%2C%20Psalm%20119%3A129-136%2C%20Romans%208%3A26-39%2C%20Matthew%2013%3A31-33%2C%2044-52', notes: '' },
    { date: new Date('2026-08-02 23:59:59'), title: '18rd Sunday in Ordinary Time', oldTestament: 'Isaiah 55:1-5', psalm: 'Psalm 145:8-9, 14-21', newTestament: 'Romans 9:1-5', gospel: 'Matthew 14:13-21', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2055%3A1-5%2C%20Psalm%20145%3A8-9%2C%2014-21%2C%20Romans%209%3A1-5%2C%20Matthew%2014%3A13-21', notes: '' },
    { date: new Date('2026-08-09 23:59:59'), title: '19rd Sunday in Ordinary Time', oldTestament: '1 Kings 19:9-18', psalm: 'Psalm 85:8-13', newTestament: 'Romans 10:5-15', gospel: 'Matthew 14:22-33', link: 'https://www.biblegateway.com/passage/?search=1%20Kings%2019%3A9-18%2C%20Psalm%2085%3A8-13%2C%20Romans%2010%3A5-15%2C%20Matthew%2014%3A22-33', notes: '' },
    { date: new Date('2026-08-16 23:59:59'), title: '20th Sunday in Ordinary Time', oldTestament: 'Isaiah 56:1, 6-8', psalm: 'Psalm 67', newTestament: 'Romans 11:1-2a, 29-32', gospel: 'Matthew 15: (10-20), 21-28', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2056%3A1%2C%206-8%2C%20Psalm%2067%2C%20Romans%2011%3A1-2a%2C%2029-32%2C%20Matthew%2015%3A%2C%2010-20%2C%2021-28', notes: '' },
    { date: new Date('2026-08-23 23:59:59'), title: '21st Sunday in Ordinary Time', oldTestament: 'Isaiah 51:1-6', psalm: 'Psalm 138', newTestament: 'Romans 12:1-8', gospel: 'Matthew 16:13-20', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2051%3A1-6%2C%20Psalm%20138%2C%20Romans%2012%3A1-8%2C%20Matthew%2016%3A13-20', notes: '' },
    { date: new Date('2026-08-30 23:59:59'), title: '22nd Sunday in Ordinary Time', oldTestament: 'Jeremiah 15:15-21', psalm: 'Psalm 26:1-8', newTestament: 'Romans 12:9-21', gospel: 'Matthew 16:21-28', link: 'https://www.biblegateway.com/passage/?search=Jeremiah%2015%3A15-21%2C%20Psalm%2026%3A1-8%2C%20Romans%2012%3A9-21%2C%20Matthew%2016%3A21-28', notes: '' },
    { date: new Date('2026-09-06 23:59:59'), title: '23rd Sunday in Ordinary Time', oldTestament: 'Ezekiel 33:7-11', psalm: 'Psalm 119:33-40', newTestament: 'Romans 13:8-14', gospel: 'Matthew 18:15-20', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2033%3A7-11%2C%20Psalm%20119%3A33-40%2C%20Romans%2013%3A8-14%2C%20Matthew%2018%3A15-20', notes: '' },
    { date: new Date('2026-09-13 23:59:59'), title: '24rd Sunday in Ordinary Time', oldTestament: 'Genesis 50:15-21', psalm: 'Psalm 103:(1-7), 8-13', newTestament: 'Romans 14:1-12', gospel: 'Matthew 18:21-35', link: 'https://www.biblegateway.com/passage/?search=Genesis%2050%3A15-21%2C%20Psalm%20103%3A1-7%2C%208-13%2C%20Romans%2014%3A1-12%2C%20Matthew%2018%3A21-35', notes: '' },
    { date: new Date('2026-09-20 23:59:59'), title: '25th Sunday in Ordinary Time', oldTestament: 'Jonah 3:10-4:11', psalm: 'Psalm 145:1-8', newTestament: 'Philippians 1:21-30', gospel: 'Matthew 20:1-16', link: 'https://www.biblegateway.com/passage/?search=Jonah%203%3A10-4%3A11%2C%20Psalm%20145%3A1-8%2C%20Philippians%201%3A21-30%2C%20Matthew%2020%3A1-16', notes: '' },
    { date: new Date('2026-09-27 23:59:59'), title: '26rd Sunday in Ordinary Time', oldTestament: 'Ezekiel 18:1-4, 25-32', psalm: 'Psalm 25:1-9', newTestament: 'Philippians 2:1-13', gospel: 'Matthew 21:23-32', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2018%3A1-4%2C%2025-32%2C%20Psalm%2025%3A1-9%2C%20Philippians%202%3A1-13%2C%20Matthew%2021%3A23-32', notes: '' },
    { date: new Date('2026-10-04 23:59:59'), title: '27rd Sunday in Ordinary Time', oldTestament: 'Isaiah 5:1-7', psalm: 'Psalm 80:7-15', newTestament: 'Philippians 3:4b-14', gospel: 'Matthew 21:33-46', link: 'https://www.biblegateway.com/passage/?search=Isaiah%205%3A1-7%2C%20Psalm%2080%3A7-15%2C%20Philippians%203%3A4b-14%2C%20Matthew%2021%3A33-46', notes: '' },
    { date: new Date('2026-10-11 23:59:59'), title: '28rd Sunday in Ordinary Time', oldTestament: 'Isaiah 25:1-9', psalm: 'Psalm 23', newTestament: 'Philippians 4:1-9', gospel: 'Matthew 22:1-14', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2025%3A1-9%2C%20Psalm%2023%2C%20Philippians%204%3A1-9%2C%20Matthew%2022%3A1-14', notes: '' },
    { date: new Date('2026-10-18 23:59:59'), title: '29th Sunday in Ordinary Time', oldTestament: 'Isaiah 45:1-7', psalm: 'Psalm 96:1-9, (10-13)', newTestament: '1 Thessalonians 1:1-10', gospel: 'Matthew 22:15-22', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2045%3A1-7%2C%20Psalm%2096%3A1-9%2C%2C%2010-13%2C%201%20Thessalonians%201%3A1-10%2C%20Matthew%2022%3A15-22', notes: '' },
    { date: new Date('2026-10-25 23:59:59'), title: '30th Sunday in Ordinary Time', oldTestament: 'Leviticus 19:1-2, 15-18', psalm: 'Psalm 1', newTestament: '1 Thessalonians 2:1-8', gospel: 'Matthew 22:34-46', link: 'https://www.biblegateway.com/passage/?search=Leviticus%2019%3A1-2%2C%2015-18%2C%20Psalm%201%2C%201%20Thessalonians%202%3A1-8%2C%20Matthew%2022%3A34-46', notes: '' },
    { date: new Date('2026-11-01 23:59:59'), title: '31st Sunday in Ordinary Time', oldTestament: 'Micah 3:5-12', psalm: 'Psalm 43', newTestament: '1 Thessalonians 2:9-13', gospel: 'Matthew 23:1-12', link: 'https://www.biblegateway.com/passage/?search=Micah%203%3A5-12%2C%20Psalm%2043%2C%201%20Thessalonians%202%3A9-13%2C%20Matthew%2023%3A1-12', notes: '' },
    { date: new Date('2026-11-08 23:59:59'), title: '32nd Sunday in Ordinary Time', oldTestament: 'Amos 5:18-24', psalm: 'Psalm 70', newTestament: '1 Thessalonians 4:13-18', gospel: 'Matthew 25:1-13', link: 'https://www.biblegateway.com/passage/?search=Amos%205%3A18-24%2C%20Psalm%2070%2C%201%20Thessalonians%204%3A13-18%2C%20Matthew%2025%3A1-13', notes: '' },
    { date: new Date('2026-11-15 23:59:59'), title: '33rd Sunday in Ordinary Time', oldTestament: 'Zephaniah 1:7, 12-18', psalm: 'Psalm 90:1-8, (9-11), 12', newTestament: '1 Thessalonians 5:1-11', gospel: 'Matthew 25:14-30', link: 'https://www.biblegateway.com/passage/?search=Zephaniah%201%3A7%2C%2012-18%2C%20Psalm%2090%3A1-8%2C%2C%209-11%2C%2012%2C%201%20Thessalonians%205%3A1-11%2C%20Matthew%2025%3A14-30', notes: '' },
    { date: new Date('2026-11-22 23:59:59'), title: 'Reign of Christ - 34th Sunday in Ordinary Time', oldTestament: 'Ezekiel 34:11-16, 20-24', psalm: 'Psalm 95:1-7a', newTestament: 'Ephesians 1:15-23', gospel: 'Matthew 25:31-46', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2034%3A11-16%2C%2020-24%2C%20Psalm%2095%3A1-7a%2C%20Ephesians%201%3A15-23%2C%20Matthew%2025%3A31-46', notes: '' },
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