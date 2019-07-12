/**
 * User Query builder
 * 
 * @param {object} knex
 * 
 * @returns {object} {get, getById, getUserPosts, insert, update, remove}
 */
export const createUserQueryBuilder = knex => {
	function getAll() {
		return knex('users');
	}

	function getUserById(id) {
		return knex('users')
			.where({ id })
			.first();
	}

	function getUserPosts(userId) {
		return knex('posts as p')
			.join('users as u', 'u.id', 'p.user_id')
			.select('p.id', 'p.text', 'u.name as posteknexy')
			.where('p.user_id', userId);
	}

	function insert(user) {
		return knex('users')
			.insert(user)
			.then(ids => {
				return getUserById(ids[0]);
			});
	}

	function update(id, changes) {
		return knex('users')
			.where({ id })
			.update(changes);
	}

	function remove(id) {
		return knex('users')
			.where('id', id)
			.del();
	}

	return {
		getAll,
		getUserById,
		getUserPosts,
		insert,
		update,
		remove,
		name: 'User'
	};
};
