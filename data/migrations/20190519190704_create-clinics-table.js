
exports.up = function(knex, Promise) {
	return knex.schema.createTable('clinics', function (tbl) {
		tbl.increments()
		tbl.string('name')
		.notNullable()
		.unique()
		
		tbl.integer('phone')
		tbl.string('address')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('clinics')
};
