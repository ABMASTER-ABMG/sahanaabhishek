// initialize firebase
var firebaseConfig = {
    apiKey: "AIzaSyDwS9RaKuR-HpM1pr1YcHToeIKTsC8hhJw",
    authDomain: "testpro1-3188a.firebaseapp.com",
    databaseURL: "https://testpro1-3188a-default-rtdb.firebaseio.com",
    projectId: "testpro1-3188a",
    storageBucket: "testpro1-3188a.appspot.com",
    messagingSenderId: "440227591250",
    appId: "1:440227591250:web:1c5ee01aa5a26de86f9b8b"
};
firebase.initializeApp(firebaseConfig);

// reference messages collection
var messagesRef = firebase.database().ref('messages');

document.getElementById('contactformm').addEventListener('submit', submitForm);

// submit form

function submitForm(e){
    e.preventDefault();

    // get values
    var name = getInputVal('name');
    var email = getInputVal('email');
    var emailful = getInputVal('emailful');
    var subject = getInputVal('subject');
    var message = getInputVal('message');

    // save message
    saveMessage(name, email, emailful, subject, message);

    // show alert
    document.querySelector('.alert').style.display = 'block';

    // hide alert after 3sec
    setTimeout(function(){
        document.querySelector('.alert').style.display = 'none';
    },3000);

    // clear form
    document.getElementById('contactformm').reset();
}

// function to  get form values
function getInputVal(id){
    return document.getElementById(id).value;
}

// save the messages to firebase
function saveMessage(name, email, emailful, subject, message){
    var newMessagesRef = messagesRef.push();
    newMessagesRef.set({
        name: name,
        email: email,
        emailful: emailful,
        subject: subject,
        message: message
    });
}
