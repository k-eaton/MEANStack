// var FormData = require('form-data');
var request  = require('request');

request.post('http://localhost:3000/users', 
	{form:{'firstName':'Katrina',
  'lastName' : 'Eaton',
  'email'    : 'katrina.eaton@gmail.com',
  'username' : 'phrynne',
	'password' : 'password'
}}, 
	function(err,httpResponse,body){ 
		if (err) {
	    return console.error('upload failed:', err);
	  }
	  console.log('Upload successful!  Server responded with:', body);
	})
