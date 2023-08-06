/*Research Details Table*/

const researchTable = document.querySelector(".main");

const research = [
  {
    title: "Oracle SQL ",
    authors:
      "Worked on 11g version ",
    conferences:
      "Using for creating deleting, updating and adding tables and views data",
    researchYr:"2021 - Present",
    citebox: "popup1",
    image: "assets/images/research-page/oraclesql.svg",
    citation: {
      vancouver:
        "Oracle database is a relational database management system (RDBMS) from Oracle Corporation. This article will explain a complete overview of the Oracle database, features, history, and editions. Before discussing the oracle, we will first need to know about the database.        ",
    },
    abstract:
      "Oracle SQL Developer is a free, development environment that simplifies the management of Oracle Database in both traditional and Cloud deployments.",
    absbox: "absPopup1",
  },

  {
    title: "HTML and CSS",
    authors:
      "",
    conferences:
      "Used HTML and CSS in UI revamp project for changing and modifying old pages",
    researchYr: "2021 - Present",
    citebox: "popup2",
    image: "assets/images/research-page/12.png",
    citation: {
      vancouver:
        "HTML is the raw data that a webpage is built out of. All the text, links, cards, lists, and buttons are created in HTML. CSS is what adds style to those plain elements. HTML puts information on a webpage, and CSS positions that information, gives it color, changes the font, and makes it look great!",
    },
    abstract:
      "HTML is the standard markup language for Web pages. With HTML you can create your own Website and CSS is the language we use to style an HTML document.",
    absbox: "absPopup2",
  },

  {
    title:
      "Jenkins",
    authors: "Using for creating build on stag. and prod. environments",
    conferences:
      "",
    researchYr: "2021-Present",
    citebox: "popup3",
    image: "assets/images/research-page/Jenkins.png",
    citation: {
      vancouver:
        "Jenkins is an open-source automation tool written in Java with plugins built for continuous integration. Jenkins is used to build and test your software projects continuously making it easier for developers to integrate changes to the project, and making it easier for users to obtain a fresh build.",
    },
    abstract:
      "Jenkins is a self-contained Java-based program, ready to run out-of-the-box, with packages for Windows, Linux, macOS and other Unix-like operating systems.",
    absbox: "absPopup3",
  },

  {
    title:
      "React JS",
    authors:
      "Created a small airlines ticket booking system project during my training period",
    conferences:
      "",
    researchYr: "2021-2022",
    citebox: "popup4",
    image: "assets/images/research-page/11.png",
    citation: {
      vancouver:
        "The React.js framework is an open-source JavaScript framework and library developed by Facebook. It's used for building interactive user interfaces and web applications quickly and efficiently with significantly less code than you would with vanilla JavaScript.",
    },
    abstract:
      "React is a JavaScript library for building user interfaces. React is used to build single-page applications.",
    absbox: "absPopup4",
  },

  {
    title: "Postman",
    authors: "Using for testing API's including their working and perfromance",
    conferences:
      "",
    researchYr: "2022-Present",
    citebox: "popup5",
    image: "assets/images/research-page/17.png",
    citation: {
      vancouver:
        "Postman is an API(application programming interface) development tool which helps to build, test and modify APIs. Almost any functionality that could be needed by any developer is encapsulated in this tool.",
    },
    abstract:
      "Postman is an API platform for building and using APIs. Postman simplifies each step of the API lifecycle and streamlines collaboration so you can create better APIs—faster.",
    absbox: "absPopup5",
  },

  {
    title: "Java 8",
    authors: "Handling Java based project from last two years",
    conferences:"",
    researchYr: "2020-Present",
    citebox: "popup6",
    image: "assets/images/research-page/13.png",
    citation: {
      vancouver:
        "JAVA 8 is a major feature release of JAVA programming language development. Its initial version was released on 18 March 2014. With the Java 8 release, Java provided supports for functional programming, new JavaScript engine, new APIs for date time manipulation, new streaming API, etc.",
    },
    abstract:
      " It is a fast, secure, reliable programming language for coding everything from mobile apps and enterprise software to big data applications and server-side technologies.",
    absbox: "absPopup6",
  },

  {
    title:
      "Putty",
    authors: "Using putty for restarting the stag. and prod. servers",
    conferences:"",
    researchYr: "2021-Present",
    citebox: "popup7",
    image: "assets/images/research-page/14.png",
    citation: {
      vancouver:
        "PuTTY is a terminal emulator application which can act as a client for the SSH, Telnet, rlogin, and raw TCP computing protocols. The word PuTTY has no meaning, though 'tty' is sometimes used to refer to the Unix terminals, as an acronym for 'teletype'",
    },
    abstract:
      "PuTTY is a free Windows app that lets you make a secure connection to another computer. One of the most common uses for PuTTY is to open a secure shell (SSH) connection to a remote Unix server, such as a Linux-based web server.",
    absbox: "absPopup7",
  },
  {
    title:
      "GIT/TortoiseGit",
    authors:
      "Using TortoiseGit and Git Bash for pushing and commiting codes on branches and use GitLab as open source code repository",
    conferences:
      "",
    researchYr: "2020-Present",
    citebox: "popup8",
    image: "assets/images/research-page/15.png",
    citation: {
      vancouver:
        "Git is a distributed version control system that tracks changes in any set of computer files, usually used for coordinating work among programmers",
    },
    abstract:
      "TortoiseGit provides overlay icons showing the file status, a powerful context menu for Git",
    absbox: "absPopup8",
  },

  
  {
    title:
      "JSP/Servlet",
    authors: "Entire frontend logic has been written on JSPs in my current project",
    conferences:
      "",
    researchYr: "2022-Present",
    citebox: "popup7",
    image: "assets/images/research-page/16.png",
    citation: {
      vancouver:
        "Java™ servlets and Java server pages (JSPs) are Java programs that run on a Java application server and extend the capabilities of the Web server. Java servlets are Java classes that are designed to respond to HTTP requests in the context of a Web application.",
    },
    abstract:
      "Servlet is a class that extends the capabilities of the servers and responds to the incoming requests. It can respond to any requests.",
    absbox: "absPopup7",
  },
];
AOS.init();
const fillData = () => {
  let output = "";
  research.forEach(
    ({
      image,
      title,
      authors,
      conferences,
      researchYr,
      citebox,
      citation,
      absbox,
      abstract,
    }) =>
      (output += `
            <tr data-aos="zoom-in-left"> 
                <td class="imgCol"><img src="${image}" class="rImg"></td>
                <td class = "researchTitleName">
                    <div class="img-div">
                        <span class="imgResponsive">
                            <img src="${image}" class="imgRes">
                        </span>
                    </div>
                    <a href="#0" class="paperTitle"> ${title} </a> 
                    <div class = "authors"> ${authors} </div> 
                    
                    <div class="rConferences"> ${conferences} 
                        <div class="researchY">${researchYr}</div>
                    </div>
                    
                    <!--CITE BUTTON-->
                    <div class="d-flex" style="margin-right:5%;">
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${absbox}" aria-expanded="false" aria-controls="${absbox}">
                            ABSTRACT
                        </button>
                
                        <button class="button button-accent button-small text-right button-abstract " type="button" data-toggle="collapse" data-target="#${citebox}" aria-expanded="false" aria-controls="${citebox}">
                            CITE
                        </button>
                    </div>
                    <div id="${absbox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${abstract}    
                        </div>
                    </div>
                    <div id="${citebox}" class="collapse" aria-labelledby="headingTwo" data-parent=".collapse">
                        <div class="card-body">
                            ${citation.vancouver}    
                        </div>
                    </div>
                </td>
            </tr>`)
  );
  researchTable.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", fillData);
