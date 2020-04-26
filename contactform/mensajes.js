var config = {
	apiKey: "AIzaSyAVvV21l_4tC2tefzBP417pb35GaV3c5aE",
	authDomain: "roqueleal-b7038.firebaseapp.com",
	databaseURL: "https://roqueleal-b7038.firebaseio.com",
	storageBucket: "roqueleal-b7038.appspot.com",
};
firebase.initializeApp(config);
var dbRef = firebase.database().ref().child('comments');
$('#submit').on('click', function(){
	var d = new Date();
	dbRef.push({
		username: $('#username_field').val(),
		comment_body: $('#comment_body_field').val(),
		date: d.getTime()
	});
});
dbRef.on('child_added', function(data){
	var d = new Date(data.val().date);
	$('#comment-area').after('<div class="comment"><p class="username">' + data.val().username + " - " + d.toLocaleString() + '</p><p class="comment_body">' + data.val().comment_body + '</p></div>');
});