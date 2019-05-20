
exports.up = function(knex, Promise) {
	return knex.schema.createTable('patients', function (tbl) {
		tbl.increments()
		tbl.string('password')
		.notNullable()
		
		tbl.string('email')
		.notNullable()
		.unique()
		
		tbl.string('first_name', 125)
		tbl.string('last_name',125)
		tbl.integer('ss_id')
		tbl.integer('phone')
		tbl.string('avatar')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('patients')
};
