
exports.up = function(knex, Promise) {
	return knex.schema.createTable('staffs', function (tbl) {
		tbl.increments()
		tbl.string('password')
		.notNullable()
		
		tbl.string('email')
		.notNullable()
		.unique()
		
		tbl.string('first_name', 125)
		tbl.string('last_name',125)
		tbl.string('avatar')
		
		tbl.integer('clinic_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('clinics')
		.onDelete('Restrict')
		.onUpdate('CASCADE')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('staffs')
};
