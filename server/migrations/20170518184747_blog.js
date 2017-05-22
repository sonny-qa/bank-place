
exports.up = function(knex, Promise) {

	    return Promise.all([

        knex.schema.createTable('users', function(table) {
            table.increments('uid').primary();
            table.string('First_Name');
            table.string('Last_Name');
            table.string('email');
            table.string('apt_num');
            table.string('address');
            table.timestamps();
        })

 
        
    ])
  
};

exports.down = function(knex, Promise) {

	   return Promise.all([
        knex.schema.dropTable('users')
    ])
  
};
