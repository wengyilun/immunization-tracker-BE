
exports.up = function(knex, Promise) {
	return knex.schema.createTable('vaccines', function (tbl) {
		tbl.increments()
		tbl.string('name')
		.notNullable()
		.unique()
		
		tbl.string('fullname')
		.notNullable()
		.unique()
		
		tbl.integer('num_doses')
		.notNullable()
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('vaccines')
};
