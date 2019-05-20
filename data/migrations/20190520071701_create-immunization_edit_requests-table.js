
exports.up = function(knex, Promise) {
	return knex.schema.createTable('immunization_edit_requests', function (tbl) {
		tbl.increments()
		
		tbl.date('note')
		
		tbl.integer('clinic_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('clinic')
		.onDelete('RESTRICT')
		.onUpdate('CASCADE')
		
		tbl.integer('vaccine_dose_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('vaccine_doses_schedules')
		.onDelete('CASCADE')
		.onUpdate('CASCADE')
		
		
		tbl.integer('patient_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('clinic')
		.onDelete('CASCADE')
		.onUpdate('CASCADE')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('immunization_edit_requests')
};
