import Database from 'better-sqlite3'

const db = 'qollie.db'
const debug = require('debug')('qollie:DB')

// init DB
const dbOpt = { verbose: console.log }
// const dbOpt = { verbose: null }
const sqlite = new Database(db, dbOpt)
sqlite.pragma(`recursive_triggers = ON`)

try {
  // init table
  createArticle()
  createAuthor()
  createCompany()

} catch (error) {
  throw error
}

function createArticle() {
  const sql = `CREATE TABLE IF NOT EXISTS article (
    id INTEGER PRIMARY KEY,
    status TEXT,
    checked TEXT,
    kind TEXT,
    content TEXT,
    anonymous TEXT,
    likes TEXT,
    dislikes TEXT,
    judge TEXT,
    createdAt TEXT,
    category TEXT,
    pros TEXT,
    cons TEXT,
    shareType TEXT,
    isSysDelete TEXT,
    ip TEXT,
    replies TEXT,
    author TEXT,
    FOREIGN KEY("author") REFERENCES "author"("id") ON DELETE SET NULL ON UPDATE CASCADE
  )`
  sqlite.prepare(sql).run()
}

function createAuthor() {
  const sql = `CREATE TABLE IF NOT EXISTS author (
    id INTEGER PRIMARY KEY,
    nickname TEXT,
    picture TEXT,
    showComments TEXT,
    showAvatar TEXT,
  )`
  sqlite.prepare(sql).run()
}