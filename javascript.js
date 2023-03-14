//https://github.com/13Aluminium/term.git
// import { CustomOs } from './utils/datastructures.js';
// VERSION 3.0 STILL IN BETA
class CustomOs {

  constructor(name, terminalInstance) {

    this.terminalInstance = terminalInstance;

    this.name = name;

    this.fileStructures = {
      root: {}
    }

    terminalInstance.echo("Created OS with name: " + name);

  }

  ls(rel_path = 'root') {
    let paths = rel_path.split('/');
    alert(paths.length);
    let lookUpInstance = paths.reduce((prev, curr) => prev[curr], this.fileStructures);
    alert(lookUpInstance)
    this.terminalInstance.echo(Object.keys(lookUpInstance).map((val) => {
      return `${typeof lookUpInstance[val] === 'object' ? 'Folder' : 'File'}: ${typeof lookUpInstance[val] === 'object' ? `${Object.entries(lookUpInstance[val]).length === 0 ? "Empty Space, BOI!!" : Object.entries(lookUpInstance[val]).length} Items` : lookUpInstance[val]}\n`
    }))
  }

  mkdir(rel_path = 'root', folder_name = 'Untitled') {
    let paths = rel_path.split('/');

    let currPos = paths.reduce((prev, curr) => prev[curr], this.fileStructures);
    currPos[folder_name] = {};
  }

}

// s = import('./utils/datastructures.js');

var song = 0;

os_instances = {};

$('body').terminal({
  //*************************************************************
  //VERSION 1 : FULLY FUNCTIONAL TILL NOW
  //*************************************************************

  //$ 'hi' FUNCTION NO ARGUMENTS REQUIRED
  //$$ THIS COMMAND IS JUST FOR TESTING THE SITE RUNNABLITY
  hi: function () {
    console.log(this)
    this.echo('just testing');
  },

  //$ 'hello' FUNCTION STRING ARGUMENT REQUIRED
  //$$ THIS COMMAND IS JUST FOR FUN
  //$$$ I THINK THIS IS THE FOUNDATION OF CEREBLELUM.JS IF THAT FUNCTION WILL BE ROLLED OUT
  hello: function (what) {
    this.echo('Hello, ' + what +
      '. Welcome to this terminal.')
  },

  //$ 'docs' FUNCTION DOESNT REQUIRE ANY ARGUMENT 
  //$$ THIS COMMAND IS FOR SHOWING THE DOCUMENTION
  //$$$ THIS COMMAND WILL REDIRECT YOU TO DOCUMENTATION.HTML IF IT WILL BE CREATED 
  docs: function () {
    this.echo('this shows the documentation');
    this.echo("This is an HTML code that creates a web-based terminal-like interface. The code includes two JavaScript files, jquery-3.3.1.min.js and jquery.terminal.min.js, as well as a CSS file jquery.terminal.min.css that are imported from external sources.The body tag contains a terminal function created using the jQuery Terminal plugin that defines several custom commands for the terminal interface.\n The following is a list of the custom commands defined in the code:\nhello: Echoes a greeting message to the user.\ndocs: Echoes a statement about the documentation.\nhelp: Echoes a list of available commands with brief descriptions.\ndir: Echoes a list of all folders.\nopen: Opens a website in a new tab based on the user's input.\nclear: Clears the terminal screen.\ngit: Opens the GitHub profile of a specific user.\nThe terminal function also includes a greetings option that displays a message to the user when the terminal is first opened.")
  },

  //$ 'help' FUNCTION DOESNT REQUIRE ANY ARGUMENT 
  //$$ THIS COMMAND IS FOR SHOWING THE ALL THE COMMANDS
  //$$$ THIS FUNCTION IS AN EVER CHANGING FUNCTION, SO I AM THINKING OF CREATING A NEW JS FILE FOR THIS SO IT WILL ME LESS OF A
  //$$$ DRAG TO UPDATE IT
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


  //$ 'open' FUNCTION DOES REQUIRE AN ARGUMENT 
  //$$ THIS COMMAND IS FOR REDIRECTING TO THE SITE FROM SITENAME AS AN ARGUMENT
  //$$$ CONSTRAINT IN THIS FIUCNTION IS THAT IF THE SITE HAS ANY OTHER URL STRUCTURE THEN IT WILL BE NOT ABLE TO OPEN IT
  open: function (event) {

    this.echo('key pressed   ' + event);
    // window.open(event);
    if (event == 'google') {
      window.open("https://www.google.com");
    }
    else {
      window.open('https://www.' + event + '.com', '_blank');

    }

  },

  //$ 'clear' FUNCTION DOESNT REQUIRE ANY ARGUMENT 
  //$$ THIS COMMAND IS FOR CLEARING ALL THE PREVIOUS COMMANDS
  //$$$ THE OPPOSITE OF THIS COMMAND IS YET TO BE IMPLEMENTED, THAT COMMAND IS HISTORY BUT THATS NOT POSSIBLE W/O DATASTRUCTURE 
  //$$$ IF WE CREATE A DATASTRUCTURE THE SITE WONT BE STATIC SITE AFTER THAT SO GITHUB PAGES WOULDNT BE ABLE TO HOST IT
  clear: function () {
    this.clear();
    this.echo('this will clear all comands');
  },


  //$ 'git' FUNCTION DOES REQUIRE AN ARGUMENT AS A USER NAME OF GITHUB 
  //$$ THIS COMMAND IS FOR REDIRECTING TO THE GITHUB USERNAME's HOMEPAGE
  //$$$ CONSTRAINT IN THIS FIUCNTION IS THAT IF THE USER NAME ISN'T SPELLED CORRECTLY YOU MAY NO GET DESIRED RESULTS
  git: function (name) {
    if (name == 'ketul') {
      window.open('https://github.com/ketul-pandya');
    }
    else if (name == 'ayush') {
      window.open('https://github.com/13Aluminium');
    }
    else if (name == 'leet_ayush'){
      window.open("https://leetcode.com/13Aluminium/");
    }
    else if (name == 'al_term') {
      window.open('https://github.com/13Aluminium/term')
    }
    else if (name == 'al_port') {
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

  //$ 'exit' FUNCTION DOESN'T REQUIRE ANY ARGUMENT 
  //$$ THIS COMMAND IS FOR CLOSEING THE 'TERMINAL FOR EVERYONE' SITE
  //$$$ CONSTRAINT IN THIS FIUCNTION IS THAT IT ONLY WORKS SOMETIME AND FOR THE LOVE OF GOD I HAVE TRIED TO FIGURE IT OUT AND FAILED
  //$$$ REAPETEDLY
  exit: function () {
    window.close("self");
  },

  //$ 'play' FUNCTION DOES REQUIRE AN ARGUMENT AS A NAME OF A SONG
  //$$ THIS COMMAND IS FOR REDIRECTING YOU TO YOUTUBE MUSIC AND IT WILL SEARCH THAT SONG FOR YOU IF YOU TYPE LIB IT WILL TAKE YOU TO 
  //$$ YOUR SAVED PLAYLISTS
  //$$$ CONSTRAINT IN THIS FUNCTION IS THAT IT CANT DIRECTLY PLAY THAT SONG ON YOUTUBE MUSIC BUT I AM TRYING TO FIND THAT API
  play: function (song) {

    if (song == 'lib') {
      window.open("https://music.youtube.com/library");
    }
    else {
      // this.echo("flag");
      window.open(`https://music.youtube.com/search?q=${song}`);

    }
  },
  //$ 'ref' FUNCTION DOESNT REQUIRE ANY ARGUMENT 
  //$$ THIS COMMAND IS FOR RELOADING THE WEBPAGE
  //$$$ CONSTRAINT IN THIS FIUCNTION IS THAT IT HAS NO CONSTRAINTS!!! HEH! I GOT YOU THERE, DIDN'T I??
  ref: function () {
    location.reload();
  },
  //$ 'day' FUNCTION DOESNT REQUIRE ANY ARGUMENT 
  //$$ THIS COMMAND WILL GIVE YOU THE CURRENT DAY
  //$$$ I HAD SOME DIFFERENT USE OF THIN FUNCTION IN MY MIND, BUT I NEED TO WORK ON THAT!!
  // day: function () {
  //   const date = new Date();
  //   let day = date.getDay();
  //   let month = date.getMonth() + 1;
  //   let year = date.getFullYear();
  //   // // This arrangement can be altered based on how we want the date's format to appear.
  //   // let currentDate = `${day}-${month}-${year}`;
  //   // this.echo(currentDate); // "17-6-2022"
  //   switch (day) {
  //     case 1:
  //       this.echo("monday")
  //       break;

  //     case 2:
  //       this.echo("tuesday")
  //       break;

  //     case 3:
  //       this.echo("wednesday")
  //       break;

  //     case 4:
  //       this.echo("thursday")
  //       break;

  //     case 5:
  //       this.echo("friday")
  //       break;

  //     case 6:
  //       this.echo("saturday")
  //       break;

  //     case 7:
  //       this.echo("sunday")
  //       break;

  //     default:
  //       break;
  //   }

  // },
  //###############################################################################
  //VERSION 1 : COMPLETED DONT WRITE ANY MORE COMMANDS OR CHANGES IN IT
  //###############################################################################




  //*************************************************************
  //VERSION 2 : FULLY FUNCTIONAL TILL NOW
  //*************************************************************
  explore: function (naam) {
    if (naam == null) {
      this.echo("type ayush  and password is 1234 rn");
    }
    else if (naam == "ayush") {
      var psw = window.prompt("enter password if you are ayush?");

      if (psw == '1234') {
        this.echo("flag2");
        window.open("https://github.com/13Aluminium");
        window.open("https://www.linkedin.com/in/ayushluhar/");
        window.open("https://13aluminium.github.io/portfolio/");
        window.open("https://13aluminium.github.io/Resume");

      }
      else {
        this.echo("wrong password")
      }
    }
  },
  knock: function (knock) {
    if (knock == null) {
      this.echo("do you even know how to ask for a joke??");
    }
    if (knock == "knock") {
      this.echo("who's there??");
      this.echo("i will get back to you");
    }
  },

  open_docs: function (docs) {

    switch (docs) {
      case ("help"):
        this.echo("write tt for timetable\nwrite dsa_prac for dsa practical list\nwrite dbms_prac for dbms practical list\nwrite mpco_prac for mpco practical list\nwrite py_prac for pytohn practical list\nwrite dbms_ppt and write the chp you want in the promt\n");
        break;
      case ("tt"):
        window.open("public/assets/docs/timetable.pdf");
        break;
      case ("guide_for_fools"):
        window.open("public/assets/docs/guide_for_fools.pdf");
        break;
      case ("dsa_prac"):
        window.open("public/assets/docs/DSA.pdf");
        break;
        break;
      case ("dbms_prac"):
        window.open("public/assets/docs/DBMS.pdf");
        break;
      case ("mpco_prac"):
        window.open("public/assets/docs/MPCO.pdf");
        break;
      case ("py_prac"):
        window.open("public/assets/docs/PYTHON.pdf");
        break;
      case ("dbms_ppt"):
        var chp = window.prompt("which chapter do you want, puny human??");
        switch (chp) {
          case "1":
            window.open("public/assets/docs/dbms_ppts/01.pdf");
            break;
          case "2":
            window.open("public/assets/docs/dbms_ppts/02.pdf");
            break;
          case "3":
            window.open("public/assets/docs/dbms_ppts/03.pdf");
            break;
          case "4":
            window.open("public/assets/docs/dbms_ppts/04.pdf");
            break;
          case "5":
            window.open("public/assets/docs/dbms_ppts/05.pdf");
            break;
          case "6":
            window.open("public/assets/docs/dbms_ppts/06.pdf");
            break;
          case "explode":
            window.open("public/assets/docs/dbms_ppts/01.pdf");

            window.open("public/assets/docs/dbms_ppts/02.pdf");

            window.open("public/assets/docs/dbms_ppts/03.pdf");

            window.open("public/assets/docs/dbms_ppts/04.pdf");

            window.open("public/assets/docs/dbms_ppts/06.pdf");

            window.open("public/assets/docs/dbms_ppts/05.pdf");

            break;
          case "course":
            this.echo("\n1 Introductory concepts of DBMS:\n\tIntroduction and applications of DBMS,\n\tPurpose of database\n\tData Independence, Database System architecture- levels\n\tMappings, Database users and DBA");
            this.echo("2 Relational Model:\n\tStructure of Relational Databases\n\tDatabase Schema, Schema Diagram\n\tDomains , Relations, Relational Query Languages\n\tRelational Operations");
            this.echo("3 Entity-Relationship model:\n\tBasic concepts, Design process,\n\tConstraints, Keys, Design issues,\n\tE-R diagrams, Weak Entity Sets\n\tExtended E-R features- Generalization, Specialization, Aggregation\n\tReduction to E-R database schema");
            this.echo("4 Formal Relational Query Languages:\n\tThe relational Algebra\n\tThe Tuple Relational Calculus\n\tThe Domain Relational Calculus");
            this.echo("5 Relational Database Design:\n\tFunctional Dependency–definition, Trivial and Non-Trivial FD \n\tClosure of FD set, Closure of attributes, Irreducible set of FD\n\tNormalization – 1NF, 2NF,3NF\n\tDecomposition using FD- Dependency Preservation");
            this.echo("6 Transaction & Recovery Management:\n\tTransaction Management\n\tTransaction concepts, Properties of Transactions\n\tSerializability of transactions\n\tTesting for Serializability, Conflict & View Serializability");
            this.echo("Practical's:\n\tConcepts of Practical 1 to 9 from practical List");
            break;

          default:
            this.echo("write the chapters present in only this internal!!");
            break;
        }
        break;

      default:
        this.echo("get your text straight you silly human!!!");
        break;

    }
  },
  attack: function (x) {
    if (x <= 50) {
      for (let index = 1; index <= x; index++) {

        window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
      }
    }
    else if (x>50){
      psswd=window.prompt("what is the password");
      if(psswd=="boom"){
        for (let index = 1; index <= x; index++) {

          window.open("https://www.youtube.com/watch?v=dQw4w9WgXcQ");
        }
      }

    }


    else
      this.echo("dont you have any shame");

  },

  //###############################################################################
  //VERSION 2 : NOT-COMPLETED WELCOMED TO WRITE ANY MORE COMMANDS OR CHANGES IN IT
  //###############################################################################





  //*************************************************************
  // VERSION 3 BEATS ::IO/OS specific operation commands
  //*************************************************************


  create_os: function (name) {

    if (name === '' || !name) {
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

    }, 5000)
  },

  alter_os: function (os_name) {
    localStorage.setItem('current_os', os_name);
    localStorage.setItem('current_path', 'root');

  },

  ls: function () {
    os_name = localStorage.getItem('current_os');
    curr_path = localStorage.getItem('current_path');

    os_instances[os_name].ls();

  },

  mkdir: function (folder_name) {
    os_name = localStorage.getItem('current_os');
    curr_path = localStorage.getItem('current_path');
    os_instances[os_name].mkdir(curr_path, folder_name);

  }

},


  {
    greetings: 'type help to see more options\nwrite open_docs help for seeing our new feature'
    // greetings: "write opendocs"
  });

