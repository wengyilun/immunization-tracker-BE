
exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('vaccines').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('vaccines').insert([
        {
           name: 'HepB',
           fullname: 'Hepatitis B',
           num_doses: 4
        },
        {
          name: 'RV',
          fullname: 'Rotavirus',
          num_doses: 3
        },
        {
          name: 'DTaP',
          fullname: 'Diphtheria, Tetanus, Pertussis',
          num_doses: 5
        },
        {
          name: 'Hib',
          fullname: 'Haemophilus influenzae type b',
          num_doses: 4
        },
        {
          name: 'PCV',
          fullname: 'Pneumococcal',
          num_doses: 4
        },
        {
          name: 'IPV',
          fullname: 'Inactivated Poliovirus ',
          num_doses: 5
        },
        {
          name: 'Infuenza',
          fullname: 'Influenza (Flu)',
          num_doses: 4
        },
        {
          name: 'MMR',
          fullname: 'Measles, Mumps, Rubella',
          num_doses: 2
        },
        {
          name: 'Varicella',
          fullname: 'Varicella',
          num_doses: 2
        },
        {
          name: 'Hep A',
          fullname: 'Hepatitis A ',
          num_doses: 1
        }
      ]);
    });
};
