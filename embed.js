console.log('here');

console.log(document.currentScript)
const weeks = [
    { date: new Date('2026-01-11 23:59:59'), title: 'Baptism of the Lord', oldTestament: 'Isaiah 42:1-9', psalm: 'Psalm 29', newTestament: 'Acts 10:34-43', gospel: 'Matthew 3:13-17', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2042%3A1-9%2C%20Psalm%2029%2C%20Acts%2010%3A34-43%2C%20Matthew%203%3A13-17', },
    { date: new Date('2026-01-18 23:59:59'), title: 'Second Sunday after the Epiphany', oldTestament: 'Isaiah 49:1-7', psalm: 'Psalm 40:1-11', newTestament: '1 Corinthians 1:1-9', gospel: 'John 1:29-42', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2049%3A1-7%2C%20Psalm%2040%3A1-11%2C%201%20Corinthians%201%3A1-9%2C%20John%201%3A29-42', },
    { date: new Date('2026-01-25 23:59:59'), title: 'Third Sunday after the Epiphany', oldTestament: 'Isaiah 9:1-4', psalm: 'Psalm 27:1, 4-9', newTestament: '1 Corinthians 1:10-18', gospel: 'Matthew 4:12-23', link: 'https://www.biblegateway.com/passage/?search=Isaiah%209%3A1-4%2C%20Psalm%2027%3A1%2C%204-9%2C%201%20Corinthians%201%3A10-18%2C%20Matthew%204%3A12-23', },
    { date: new Date('2026-02-01 23:59:59'), title: 'Fourth Sunday after the Epiphany', oldTestament: 'Micah 6:1-8', psalm: 'Psalm 15', newTestament: '1 Corinthians 1:18-31', gospel: 'Matthew 5:1-12', link: 'https://www.biblegateway.com/passage/?search=Micah%206%3A1-8%2C%20Psalm%2015%2C%201%20Corinthians%201%3A18-31%2C%20Matthew%205%3A1-12', },
    { date: new Date('2026-02-08 23:59:59'), title: 'Fifth Sunday after the Epiphany', oldTestament: 'Isaiah 58:1-9a (9b-12)', psalm: 'Psalm 112:1-9 (10)', newTestament: '1 Corinthians 2:1-12 (13-16)', gospel: 'Matthew 5:13-20', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2058%3A1-9a%2C%209b-12%2C%20Psalm%20112%3A1-9%2C%2010%2C%201%20Corinthians%202%3A1-12%2C%2013-16%2C%20Matthew%205%3A13-20', },
    { date: new Date('2026-02-15 23:59:59'), title: 'Transfiguration Sunday', oldTestament: 'Exodus 24:12-18', psalm: 'Psalm 2 or Psalm 99', newTestament: '2 Peter 1:16-21', gospel: 'Matthew 17:1-9', link: 'https://www.biblegateway.com/passage/?search=Exodus%2024%3A12-18%2C%20Psalm%202%2C%20Psalm%2099%2C%202%20Peter%201%3A16-21%2C%20Matthew%2017%3A1-9', },
    { date: new Date('2026-02-22 23:59:59'), title: 'First Sunday in Lent', oldTestament: 'Genesis 2:15-17; 3:1-7', psalm: 'Psalm 32', newTestament: 'Romans 5:12-19', gospel: 'Matthew 4:1-11', link: 'https://www.biblegateway.com/passage/?search=Genesis%202%3A15-17;%203%3A1-7%2C%20Psalm%2032%2C%20Romans%205%3A12-19%2C%20Matthew%204%3A1-11', },
    { date: new Date('2026-03-01 23:59:59'), title: 'Second Sunday in Lent', oldTestament: 'Genesis 12:1-4a', psalm: 'Psalm 121', newTestament: 'Romans 4:1-5, 13-17', gospel: 'John 3:1-17 or Matthew 17:1-9', link: 'https://www.biblegateway.com/passage/?search=Genesis%2012%3A1-4a%2C%20Psalm%20121%2C%20Romans%204%3A1-5%2C%2013-17%2C%20John%203%3A1-17%2C%20Matthew%2017%3A1-9', },
    { date: new Date('2026-03-08 23:59:59'), title: 'Third Sunday in Lent', oldTestament: 'Exodus 17:1-7', psalm: 'Psalm 95', newTestament: 'Romans 5:1-11', gospel: 'John 4:5-42', link: 'https://www.biblegateway.com/passage/?search=Exodus%2017%3A1-7%2C%20Psalm%2095%2C%20Romans%205%3A1-11%2C%20John%204%3A5-42', },
    { date: new Date('2026-03-15 23:59:59'), title: 'Fourth Sunday in Lent', oldTestament: '1 Samuel 16:1-13', psalm: 'Psalm 23', newTestament: 'Ephesians 5:8-14', gospel: 'John 9:1-41', link: 'https://www.biblegateway.com/passage/?search=1%20Samuel%2016%3A1-13%2C%20Psalm%2023%2C%20Ephesians%205%3A8-14%2C%20John%209%3A1-41', },
    { date: new Date('2026-03-22 23:59:59'), title: 'Fifth Sunday in Lent', oldTestament: 'Ezekiel 37:1-14', psalm: 'Psalm 130', newTestament: 'Romans 8:6-11', gospel: 'John 11:1-45', link: 'https://www.biblegateway.com/passage/?search=Ezekiel%2037%3A1-14%2C%20Psalm%20130%2C%20Romans%208%3A6-11%2C%20John%2011%3A1-45', },
    { date: new Date('2026-03-29 23:59:59'), title: 'Liturgy of the Passion', oldTestament: 'Isaiah 50:4-9a', psalm: 'Psalm 31:9-16', newTestament: 'Philippians 2:5-11', gospel: 'Matthew 26:14-27:66 or Matthew 27:11-54', link: 'https://www.biblegateway.com/passage/?search=Isaiah%2050%3A4-9a%2C%20Psalm%2031%3A9-16%2C%20Philippians%202%3A5-11%2C%20Matthew%2026%3A14-27%3A66%2C%20Matthew%2027%3A11-54', },
    { date: new Date('2026-04-05 23:59:59'), title: 'Resurrection of the Lord', oldTestament: 'Acts 10:34-43 or Jeremiah 31:1-6', psalm: 'Psalm 118:1-2, 14-24', newTestament: 'Colossians 3:1-4 or Acts 10:34-43', gospel: 'John 20:1-18 or Matthew 28:1-10', link: 'https://www.biblegateway.com/passage/?search=Acts%2010%3A34-43%2C%20Jeremiah%2031%3A1-6%2C%20Psalm%20118%3A1-2%2C%2014-24%2C%20Colossians%203%3A1-4%2C%20Acts%2010%3A34-43%2C%20John%2020%3A1-18%2C%20Matthew%2028%3A1-10', },
    { date: new Date('2026-04-12 23:59:59'), title: 'Second Sunday of Easter', oldTestament: 'Acts 2:14a, 22-32', psalm: 'Psalm 16', newTestament: '1 Peter 1:3-9', gospel: 'John 20:19-31', link: 'https://www.biblegateway.com/passage/?search=Acts%202%3A14a%2C%2022-32%2C%20Psalm%2016%2C%201%20Peter%201%3A3-9%2C%20John%2020%3A19-31', },
    { date: new Date('2026-04-19 23:59:59'), title: 'Third Sunday of Easter', oldTestament: 'Acts 2:14a, 36-41', psalm: 'Psalm 116:1-4, 12-19', newTestament: '1 Peter 1:17-23', gospel: 'Luke 24:13-35', link: 'https://www.biblegateway.com/passage/?search=Acts%202%3A14a%2C%2036-41%2C%20Psalm%20116%3A1-4%2C%2012-19%2C%201%20Peter%201%3A17-23%2C%20Luke%2024%3A13-35', },
    { date: new Date('2026-04-26 23:59:59'), title: 'Fourth Sunday of Easter', oldTestament: 'Acts 2:42-47', psalm: 'Psalm 23', newTestament: '1 Peter 2:19-25', gospel: 'John 10:1-10', link: 'https://www.biblegateway.com/passage/?search=Acts%202%3A42-47%2C%20Psalm%2023%2C%201%20Peter%202%3A19-25%2C%20John%2010%3A1-10', },
    { date: new Date('2026-05-03 23:59:59'), title: 'Fifth Sunday of Easter', oldTestament: 'Acts 7:55-60', psalm: 'Psalm 31:1-5, 15-16', newTestament: '1 Peter 2:2-10', gospel: 'John 14:1-14', link: 'https://www.biblegateway.com/passage/?search=Acts%207%3A55-60%2C%20Psalm%2031%3A1-5%2C%2015-16%2C%201%20Peter%202%3A2-10%2C%20John%2014%3A1-14', },
    { date: new Date('2026-05-10 23:59:59'), title: 'Sixth Sunday of Easter', oldTestament: 'Acts 17:22-31', psalm: 'Psalm 66:8-20', newTestament: '1 Peter 3:13-22', gospel: 'John 14:15-21', link: 'https://www.biblegateway.com/passage/?search=Acts%2017%3A22-31%2C%20Psalm%2066%3A8-20%2C%201%20Peter%203%3A13-22%2C%20John%2014%3A15-21', },
    { date: new Date('2026-05-17 23:59:59'), title: 'Seventh Sunday of Easter', oldTestament: 'Acts 1:6-14', psalm: 'Psalm 68:1-10, 32-35', newTestament: '1 Peter 4:12-14; 5:6-11', gospel: 'John 17:1-11', link: 'https://www.biblegateway.com/passage/?search=Acts%201%3A6-14%2C%20Psalm%2068%3A1-10%2C%2032-35%2C%201%20Peter%204%3A12-14;%205%3A6-11%2C%20John%2017%3A1-11', },
    { date: new Date('2026-05-24 23:59:59'), title: 'Day of Pentecost', oldTestament: 'Acts 2:1-21 or Numbers 11:24-30', psalm: 'Psalm 104:24-34, 35b', newTestament: '1 Corinthians 12:3b-13 or Acts 2:1-21', gospel: 'John 20:19-23 or John 7:37-39', link: 'https://www.biblegateway.com/passage/?search=Acts%202%3A1-21%2C%20Numbers%2011%3A24-30%2C%20Psalm%20104%3A24-34%2C%2035b%2C%201%20Corinthians%2012%3A3b-13%2C%20Acts%202%3A1-21%2C%20John%2020%3A19-23%2C%20John%207%3A37-39', },
    { date: new Date('2026-05-31 23:59:59'), title: 'Trinity Sunday', oldTestament: 'Genesis 1:1-2:4a', psalm: 'Psalm 8', newTestament: '2 Corinthians 13:11-13', gospel: 'Matthew 28:16-20', link: 'https://www.biblegateway.com/passage/?search=Genesis%201%3A1-2%3A4a%2C%20Psalm%208%2C%202%20Corinthians%2013%3A11-13%2C%20Matthew%2028%3A16-20', },
];
function ordinal(n) {
    const s = ["th", "st", "nd", "rd"];
    const v = n % 100;
    return n + (s[(v - 20) % 10] || s[v] || s[0]);
}

function formatDate(date) {
    const weekday = new Intl.DateTimeFormat("en-US", { weekday: "long" }).format(date);
    const day = ordinal(date.getDate());
    return `${weekday}, ${day}`;
}

const now = new Date();
let week;
for (const i in weeks) {
    if (now > weeks[i].date) {
        continue;
    }
    week = weeks[i];
    break;
}

const includesOr =
    week.oldTestament.includes(' or ') ||
    week.psalm.includes(' or ') ||
    week.newTestament.includes(' or ') ||
    week.gospel.includes(' or ');

const otFromActs = week.oldTestament.includes('Acts');

const includesParen =
    week.oldTestament.includes('(') ||
    week.psalm.includes('(') ||
    week.newTestament.includes('(') ||
    week.gospel.includes('(');

const anchorElement = document.currentScript;
anchorElement.insertAdjacentHTML('afterend', `
        <div style="font-family: 'artifex_book', serif">
            <h2>Current Reading</h2>
            <strong>${formatDate(week.date)} &bull; ${week.title}</strong>
            <ul>
                <li>OT: ${week.oldTestament}</li>
                <li>Psalm: ${week.psalm}</li>
                <li>NT: ${week.newTestament}</li>
                <li>Gospel: ${week.gospel}</li>
                <li><p style="margin: 0px"><a target="_blank" href="${week.link}">Read all</a></p></li>
            </ul>
            ${includesOr ? `<p>
                When an “or” appears, it means there are alternate readings.
                The preacher will choose one of them. For personal reading,
                you may choose either option or read both.
            </p>` : ''}
            ${includesParen ? `<p>
                Q: Why are there parenthesis?<br/>
                A: These are optional verses that can be added without overlapping with other
                weeks of the lectionary. The preacher may or may not include them in their sermon.
                For personal reading, you my read them or not.
            </p>` : ''}
            ${otFromActs ? `<p>
                Q: Why is the Old Testament reading from Acts?<br/>
                A: What we've been calling the Old Testament reading is technically called "First Reading".
                It's usually from the Old Testament, but during the Easter season, it shifts to Acts.
                The Old Testament often foreshadows Christ. During the Easter season, the focus shifts to the
                fulfillment of those promises in the New Testament, with Acts showing the
                immediate consequences of the resurrection.
            </p>` : ''}
        </div>
    `);