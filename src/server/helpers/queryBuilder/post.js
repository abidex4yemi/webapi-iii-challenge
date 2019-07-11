/**
 * Post Query builder
 * 
 * @param {object} knex
 * 
 * @returns {object} {get, getById, insert, update, remove}
 */
export const createPostQueryBuilder = knex => {
	function getAll() {
		return knex('posts');
	}

	function getPostById(id) {
		return knex('posts')
			.where({ id })
			.first();
	}

	function insert(post) {
		return knex('posts')
			.insert(post)
			.then(ids => {
				return getPostById(ids[0]);
			});
	}

	function update(id, changes) {
		return knex('posts')
			.where({ id })
			.update(changes);
	}

	function remove(id) {
		return knex('posts')
			.where('id', id)
			.del();
	}

	return {
		getAll,
		getPostById,
		insert,
		update,
		remove,
		name: 'Post'
	};
};
