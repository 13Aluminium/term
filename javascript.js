// import { CustomOs } from './utils/datastructures.js';

class CustomOs{

    constructor(name, terminalInstance){

        this.terminalInstance = terminalInstance; 

        this.name = name;

        this.fileStructures = {
            root: {}
        }

        terminalInstance.echo("Created OS with name: " + name);

    }

    ls(rel_path='root'){
        let paths = rel_path.split('/');
        alert(paths.length);
        let lookUpInstance = paths.reduce((prev, curr) => prev[curr], this.fileStructures);
        alert(lookUpInstance)
        this.terminalInstance.echo(Object.keys(lookUpInstance).map((val) => {
            return `${typeof lookUpInstance[val] === 'object' ? 'Folder' : 'File'}: ${typeof lookUpInstance[val] === 'object' ? `${Object.entries(lookUpInstance[val]).length  === 0 ? "Empty Space, BOI!!" : Object.entries(lookUpInstance[val]).length} Items` : lookUpInstance[val]}\n`
        }))
    }

    mkdir(rel_path='root', folder_name='Untitled'){
        let paths = rel_path.split('/');

        let currPos = paths.reduce((prev, curr) => prev[curr], this.fileStructures);
        currPos[folder_name] = {};
    }

}

// s = import('./utils/datastructures.js');

var song = 0;

os_instances = {};

$('body').terminal({

    hi: function(){
        console.log(this)
        this.echo('just testing');
    },
    hello: function (what) {
        this.echo('Hello, ' + what +
            '. Welcome to this terminal.')
    },
    docs: function () {
        this.echo('this shows the documentation');
        this.echo("This is an HTML code that creates a web-based terminal-like interface. The code includes two JavaScript files, jquery-3.3.1.min.js and jquery.terminal.min.js, as well as a CSS file jquery.terminal.min.css that are imported from external sources.The body tag contains a terminal function created using the jQuery Terminal plugin that defines several custom commands for the terminal interface.\n The following is a list of the custom commands defined in the code:\nhello: Echoes a greeting message to the user.\ndocs: Echoes a statement about the documentation.\nhelp: Echoes a list of available commands with brief descriptions.\ndir: Echoes a list of all folders.\nopen: Opens a website in a new tab based on the user's input.\nclear: Clears the terminal screen.\ngit: Opens the GitHub profile of a specific user.\nThe terminal function also includes a greetings option that displays a message to the user when the terminal is first opened.")
    },
    help: function () {
        this.echo('this is help statement\n type hello "your name" and see the result')
        this.echo('Type the following commands for more options:');
        this.echo('  clear - Clear the terminal screen.');
        this.echo('  ls - List all files and directories in the current directory.');
        this.echo('  cd - Change the current directory.');
        this.echo('  pwd - Print the current working directory.');
        this.echo('  mkdir - Create a new directory.');
        this.echo('  rm - Remove a file or directory.');
        this.echo('  cp - Copy a file or directory.');
        this.echo('  mv - Move or rename a file or directory.');
        this.echo('  cat - Display the contents of a file.');
        this.echo('  echo - Print text to the terminal.');
        this.echo('  open - Open a website in a new tab.');
    },
    dir: function () {
        this.echo('All folders:\n Semesters');

    },
    resume: function(){
        window.open('resume.pdf');
    },

    open: function (event) {

        this.echo('key pressed   ' + event);
        // window.open(event);
        if (event == 'google') {
            window.open("https://www.google.com");
        }
     
        
        else {
            window.open('https://www.' + event + '.com', '_blank');

        }

//https://github.com/13Aluminium/term.git

    },
    open_docs:function(docs){
        if(docs=="help"){
            this.echo("write tt for timetable\nwrite dsa_prac for dsa practical list\nwrite dbms_prac for dbms practical list\nwrite mpco_prac for mpco practical list\nwrite py_prac for pytohn practical list\n");
        }
        if(docs=="tt"){
            window.open("public/assets/docs/timetable.pdf");
        }
        else if(docs == "dsa_prac"){
            window.open("public/assets/docs/DSA.pdf");
        }
        else if(docs == "dbms_prac"){
            window.open("public/assets/docs/DBMS.pdf");
        }
        else if(docs == "mpco_prac"){
            window.open("public/assets/docs/MPCO.pdf");
        }
        else if(docs == "py_prac"){
            window.open("public/assets/docs/PYTHON.pdf");
        }
        else{
            this.echo("get your text straight you silly human");
        }
        
    },
    clear: function () {
        this.clear();
        this.echo('this will clear all comands');
    },
    comp: function(dir){
        if(dir == 'term'){
            window.open('file:///home/aluminium/term');
        }
    },
    git: function (name) {
        if (name == 'ketul') {
            window.open('https://github.com/ketul-pandya');
        }
        else if (name == 'ayush') {
            window.open('https://github.com/13Aluminium');
        }
        else if(name == 'al_term'){
            window.open('https://github.com/13Aluminium/term')
        }
        else if(name == 'al_port'){
            window.open('https://github.com/13Aluminium/portfolio')
        }
        else if (name == 'kavan') {
            window.open('https://github.com/KavanGandhi');
        }
        else if (name == 'jash') {
            window.open('https://github.com/jashkarangiya ');
        }
        else if (name == 'monk') {
            window.open('https://github.com/krishnanpandya007 ');
        }
        else if (name == 'jinesh') {
            window.open('https://github.com/21-JD ');
        }
        else {
            this.echo("Assuming direct usernamt retry...");
            window.open(`https://github.com/${name}`);
        }

    },
    ayush: function(ayush_var){
        if(ayush_var=='mail'){
            window.open("https://mail.google.com/mail/u/0/#inbox");                    
        }
    },
    exit: function () {
        window.close("self");


       
    },
    stop: function(){
        new Audio().pause();
    },
    play: function(song){

        if(song=='riot'){  
            new Audio().pause();
   
            new Audio('public/assets/audio/Riot.mp3').play();
        }
        else if(song=='Avengers' || 'avengers'){
            new Audio().pause();

            new Audio('public/assets/audio/Avengers.mp3').play();

        }
    },
    ref: function(){
        location.reload();
    },
    day: function(){
        const date = new Date();

let day = date.getDay();
let month = date.getMonth() + 1;
let year = date.getFullYear();

// // This arrangement can be altered based on how we want the date's format to appear.
// let currentDate = `${day}-${month}-${year}`;
// this.echo(currentDate); // "17-6-2022"
switch (day) {
case 1:
this.echo("monday")
break;

case 2:
this.echo("tuesday")
break;

case 3:
this.echo("wednesday")
break;

case 4:
this.echo("thursday")
break;

case 5:
this.echo("friday")
break;

case 6:
this.echo("saturday")
break;

case 7:
this.echo("sunday")
break;


default:
break;
}

    },
    // function pswd(psw){
        
    //     if(psw == 'ajl'){
    //        this.echo("flag3");
    //         return 4;
    //        }
    //    else
    //        return false;
    // },
    // pswd: function(psw){
    //     if(psw == 'ajl'){
    //         this.echo("flag3");
    //          return 4;
    //         }
    //     else
    //         return false;
    // },
   

    explore: function(naam){
        if (naam == null){
        this.echo("type ayush  and password is 1234 rn");
        }
       else if(naam == "ayush"){
            var psw = window.prompt("enter password if you are ayush?");
            
            if(psw == '1234'){
                this.echo("flag2");
                window.open("https://github.com/13Aluminium");
                window.open("https://www.linkedin.com/in/ayushluhar/");
                window.open("https://13aluminium.github.io/portfolio/");
                window.open("https://13aluminium.github.io/Resume");

            }
            else{
                this.echo("wrong password")
            }
        }
    },
    knock :function(knock){
        if (knock == null){
            this.echo("do you even know how to ask for a joke??");
        }
        if (knock =="knock"){
            this.echo("who's there??");
            this.echo("i will get back to you");
        }
    },

    // IO/OS specific operation commands

    create_os: function(name){

        if(name === '' || !name){
            this.error("Hi");
        }
        this.echo('Creating OS...');
        this.pause();
        setTimeout(() => {
            os_instances[name] = new CustomOs(name, this);
            // setting this new Os as default pointer on OSes sync with local storage API
            localStorage.setItem('current_os', name);
            localStorage.setItem('current_path', 'root');
            this.resume();
            this.echo('OS Created!');

        }, 2000)
    },

    alter_os: function(os_name){
        localStorage.setItem('current_os', os_name);
        localStorage.setItem('current_path', 'root');

    },

    ls: function(){
        os_name = localStorage.getItem('current_os');
        curr_path = localStorage.getItem('current_path');

        os_instances[os_name].ls();

    },

    mkdir: function(folder_name){
        os_name = localStorage.getItem('current_os');
        curr_path = localStorage.getItem('current_path');
        os_instances[os_name].mkdir(curr_path, folder_name);

    }

},


    {
        greetings: 'type help to see more options\nwrite open_docs help'
        // greetings: "write opendocs"
    });

