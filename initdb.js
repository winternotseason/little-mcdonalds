const sql = require('better-sqlite3');
const db = sql('mc.db');

const bugers = [{
    title : '빅맥',
    en_title : 'Big Mac',
    image : '/images/bigmac.png',
    slug : 'big-mac'
},
{
    title : '더블 쿼터 파운더 치즈',
    en_title : 'Double Quarter Pounder with Cheese',
    image : '/images/doublequarter.png',
    slug : 'double-quarter-pounder'
},
{
    title : '쿼터 파운더 치즈',
    en_title : 'Quarter Pounder with Cheese',
    image : '/images/quarter.png',
    slug : 'quarter-pounder'
},
{
    title : '행운버거 골드',
    en_title : 'Prosperity Burger Gold',
    image : '/images/lucky.png',
    slug : 'prosperity-burger-gold'
},{
    title : '맥크리스피 디럭스 버거',
    en_title : 'McCrispy Deluxe Burger',
    image : '/images/mccrispy.png',
    slug : 'mccrispy-deluxe'
}
];

db.prepare(`
CREATE TABLE IF NOT EXISTS mc (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    title TEXT NOT NULL,
    en_title TEXT NOT NULL,
    image TEXT NOT NULL,
    slug TEXT NOT NULL UNIQUE
)`).run();

async function initData() {
    const stmt = db.prepare(`
        INSERT INTO mc VALUES (
           null,
           @title,
           @en_title,
           @image,
           @slug
        )
     `);
  
    for (const burger of bugers) {
      stmt.run(burger);
    }
  }


initData();