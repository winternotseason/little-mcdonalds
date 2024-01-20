import sql from "better-sqlite3";
const db = sql("mc.db");

export async function getBurgers() {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    // throw new Error('Loading meals failed');
    return db.prepare("SELECT * FROM mc").all();
  }