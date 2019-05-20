
exports.up = function(knex, Promise) {
	return knex.schema.createTable('immunization_records', function (tbl) {
		tbl.increments()
		
		tbl.string('received_date', 125)
		.notNullable()
		
		tbl.string('dose_num',125)
		.notNullable()
		
		tbl.string('note', 512)
		
		tbl.integer('patient_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('patients')
		.onDelete('CASCADE')
		.onUpdate('CASCADE')
		
		tbl.integer('clinic_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('clinics')
		.onDelete('Restrict')
		.onUpdate('CASCADE')
		
		
		tbl.integer('vaccine_id')
		.unsigned()
		.notNullable()
		.references('id')
		.inTable('vaccines')
		.onDelete('Restrict')
		.onUpdate('CASCADE')
	})
};

exports.down = function(knex, Promise) {
	return knex.schema.dropTableIfExists('immunization_records')
};
