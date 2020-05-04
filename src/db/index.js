const path = require('path')
const file = path.resolve(__dirname, '../../data.db') //数据库文件的路径
const sqlite3 = require('sqlite3').verbose()
const db = new sqlite3.Database(file)

db.run(
  "CREATE TABLE IF NOT EXISTS tb_router(id TEXT PRIMARY KEY NOT NULL,time TEXT DEFAULT (datetime('now','localtime')),path TEXT DEFAULT NULL,method TEXT DEFAULT NULL)"
)

module.exports = db
