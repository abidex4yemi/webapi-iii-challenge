module.exports = {
	development: {
		client: 'sqlite3',
		useNullAsDefault: true,
		connection: {
			filename: `${__dirname}/db/sqlite3/blog.db3`
		},
		pool: {
			afterCreate: (conn, done) => {
				conn.run('PRAGMA foreign_keys = ON', done);
			}
		},
		migrations: {
			directory: `${__dirname}/db/migrations`,
			tableName: 'knex_migrations'
		},
		seeds: {
			directory: `${__dirname}/db/seeds`
		}
	}
};
