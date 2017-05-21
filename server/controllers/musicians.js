var config      = require('../knexfile.js');  
var env         = 'development';  
var knex        = require('knex')(config[env]);
var Mailgun = require('mailgun').Mailgun;
var mg = new Mailgun('dkey-26f26c48d6f0aa5b7766890e8d9f8d92');




exports.add = function(req,res) {
	var test = {type:(req.body.email),color: 'pink', location: 'east', install_date: '2014-04-28'}
	//var test = "(type, color, location, install_date) VALUES ('slide', 'blue', 'south', '2014-04-28')"

	knex.insert(test).into('playground').then(function(id){
		console.log('ok')
		return test
	}).then(function(test){
	//res.send(200)
	// mg.sendText('example@example.com', ['Recipient 1 <sonny.abc@gmail.com>'],
 //  	'This is the subject',
 //  	JSON.stringify(test),
 //  	'noreply@example.com', {},

 //  	function(err) {
 //    if (err) console.log('Oh noes: ' + err);
 //    else     {console.log('Success'); };
	// 	});

	}).finally(function() {
		res.send(200)
  
});
	
};
