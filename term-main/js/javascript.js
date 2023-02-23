var song = 0;

// Main 
$('body').terminal({

        // Testing function
        hi: function() {

            this.echo('just testing');
        },
        // Welcome function

        hello: function(what) {
            this.echo('Hello, ' + what +
                '. Welcome to this terminal.')
        },
        // DOCS function
        docs: function() {
            this.echo('This shows the documentation');
            this.echo("This is an HTML code that creates a web-based terminal-like interface. The code includes two JavaScript files, jquery-3.3.1.min.js and jquery.terminal.min.js, as well as a CSS file jquery.terminal.min.css that are imported from external sources.The body tag contains a terminal function created using the jQuery Terminal plugin that defines several custom commands for the terminal interface.\n The following is a list of the custom commands defined in the code:\nhello: Echoes a greeting message to the user.\ndocs: Echoes a statement about the documentation.\nhelp: Echoes a list of available commands with brief descriptions.\ndir: Echoes a list of all folders.\nopen: Opens a website in a new tab based on the user's input.\nclear: Clears the terminal screen.\ngit: Opens the GitHub profile of a specific user.\nThe terminal function also includes a greetings option that displays a message to the user when the terminal is first opened.")
        },
        // help fucntion
        help: function() {
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
            this.echo('  play - Plays a song (type "play {songname}").');
        },

        // Dir funtion
        dir: function() {
            this.echo('All folders:\n Semesters');
        },

        // Resume Function
        resume: function() {
            window.open('resume.pdf');
        },

        // open function
        open: function(event) {

            this.echo('key pressed   ' + event);
            // window.open(event);
            if (event == 'google') {
                window.open("https://www.google.com");
            } else if (event == 'whatsaap') {
                window.open("wa.link/a0t6vs");

            } else if (event == 'stngs') {
                window.open("app://settings");
            } else if (event == 'h') {
                this.echo("write the site name to open it");
            } else {
                window.open('https://www.' + event + '.com', '_blank');

            }
        },
        // Clear function
        clear: function() {
            this.clear();
            this.echo('this will clear all comands');
        },
        comp: function(dir) {
            if (dir == 'term') {
                window.open('file:///home/aluminium/term');
            }
        },
        // Function for github
        git: function(name) {

            switch (name.toLowerCase()) {
                case 'ketul':
                    window.open('https://github.com/ketul-pandya');
                    break;

                case 'ayush':
                    window.open('https://github.com/13Aluminium');
                    break;

                case 'al_term':
                    window.open('https://github.com/13Aluminium/term');
                    break;

                case 'al_port':
                    window.open('https://github.com/13Aluminium/portfolio');
                    break;

                case 'kavan':
                    window.open('https://github.com/KavanGandhi');
                    break;

                case 'jinesh':
                    window.open('https://github.com/21-JD');
                    break;

                case 'keval':
                    window.open('https://github.com/kevalhingu');
                    break;

                case 'jash':
                    window.open('https://github.com/jashkarangiya');
                    break;

                case 'monk':
                case 'krishnan':
                    window.open('https://github.com/krishnanpandya007');
                    break;

                default:
                    this.echo("Assuming direct username retry...");
                    window.open(`https://github.com/${name}`);
            }

        },
        ayush: function(ayush_var) {
            if (ayush_var == 'mail') {
                window.open("https://mail.google.com/mail/u/0/#inbox");
            }
        },
        // Function to close terminal
        exit: function() {
            window.close("self");
        },
        // Stop function for audio pause
        stop: function() {
            new Audio().pause();
        },
        // Play function for songs
        play: function(song) {

            switch (song.toLowerCase()) {

                case "avengers":
                    new Audio().pause();
                    new Audio('./public/assets/audio/Avengers.mp3').play();
                    break;

                case "riot":
                case "Riot":
                    new Audio().pause();
                    new Audio('./public/assets/audio/Riot.mp3').play();
                    break;

                case "Jash":
                case "jash":
                    new Audio().pause();
                    new Audio('./public/assets/audio/Valo.mp3').play();
                    break;

                default:
                    console.log("HelloWorld");

            }
            //Same problem with this one! 
        },
        // Reload function
        ref: function() {
            location.reload();
        }
    },

    // Hello 

    {
        greetings: 'type help to see more options'
    });