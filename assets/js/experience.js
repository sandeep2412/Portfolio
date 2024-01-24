AOS.init();

//  Work experience cards

const experiencecards = document.querySelector(".experience-cards");
const exp = [
  {
    title: "Solution Developer",
    cardImage: "assets/images/experience-page/infoaxon.jpg",
    place: "Infoaxon",
    time: "(May, 2021 - present)",
    desp: "<li>Use Java technology to add functionalities to existing applications.</li><li>Conduct user requirements analysis to design and program application and deliver support for system enhancement.</li><li>Play a pivotal role as a part of core team of UI revamp project </li>",
  },
  {
    title: "Buisness Development Associate Intern",
    cardImage: "assets/images/experience-page/Worthitt.png",
    place: "Worth ITT",
    time: "(Mar2019 - May, 2019)",
    desp: "<li>Collborating with institutes for buisness scalability </li><li>Organized various drives and events </li><li>Helped them to boost their growth and sales by developing business strategies.</li>",
  },
  
];

const showCards2 = () => {
  let output = "";
  exp.forEach(
    ({ title, cardImage, place, time, desp }) =>
      (output += `        
    <div class="col gaap" data-aos="fade-up" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="400"> 
      <div class="card card1">
        <img src="${cardImage}" class="featured-image"/>
        <article class="card-body">
          <header>
            <div class="title">
              <h3>${title}</h3>
            </div>
            <p class="meta">
              <span class="pre-heading">${place}</span><br>
              <span class="author">${time}</span>
            </p>
            <ol>
              ${desp}
            </ol>
          </header>
        </article>
      </div>
    </div>
      `)
  );
  experiencecards.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards2);

// Volunteership Cards

const volunteership = document.querySelector(".volunteership");
const volunteershipcards = [
  {
    title: "Liferay Front-End developer",
    cardImage: "assets/images/experience-page/liferay.jpg",
    description:
      "Certified DXP 7.2 Front End Developer -2022",
  },
  {
    title: "Becon IIT Delhi ",
    cardImage: "assets/images/experience-page/IIT delhi.png",
    description:
      "One day Internship in Business development at IIT Delhi -2019",
  },
  {
    title: "Microsoft Technology Associate",
    cardImage: "assets/images/experience-page/microsoft.png",
    description:
      "Completed Intorduction to Programming in Python -2019",
  },
 
];

const showCards = () => {
  let output = "";
  volunteershipcards.forEach(
    ({ title, cardImage, description }) =>
      (output += `        
      <div class="card volunteerCard" data-aos="fade-down" data-aos-easing="linear" data-aos-delay="100" data-aos-duration="600" style="height: 550px;width:400px">
      
      <img src="${cardImage}" height="250" width="65" class="card-img" style="border-radius:10px">
      <div class="content">
          <h2 class="volunteerTitle">${title}</h2><br>
          <p class="copy">${description}</p></div>
      
      </div>
      `)
  );
  volunteership.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards);

// Hackathon Section

const hackathonsection = document.querySelector(".hackathon-section");
const mentor = [
  {
    title: " Writer's World India",
    subtitle: "Founder",
    image: "assets/images/experience-page/writers world india.jpg",
    desp: "Writer's world india is an NGO founded by me back in 2017 to provide a platform to budding writer's by orgainising competitions and events all over india ",
    href: "https://www.signalhire.com/companies/writers-world-india",
  },
  {
    title: "Inshaad",
    subtitle: "Event Manager",
    image: "assets/images/experience-page/inshaad.jpg",
    desp: "Organized 2 big literature festival in delhi in last 3 years",
    href: "https://www.zaubacorp.com/company/INSHAAD-FOUNDATION/U85300MH2021NPL373889",
  },
  
  {
    title: "The Girl Imprints ",
    subtitle: "Community Head",
    image: "assets/images/experience-page/image24.png",
    desp: "Handled all the responsibilites related to events ,ngo drives and hiring ",
    href: "https://www.instagram.com/p/CDNwxBCFfuF/",
  },

  {
    title: "Nojoto",
    subtitle: "Representative",
    image: "assets/images/experience-page/image27.jpg",
    desp: "Represented Nojoto in many colleges events",
    href: "https://nojoto.com/",
  },

  {
    title: "Delhi Poetry Club",
    subtitle: "Event Planner",
    image: "assets/images/experience-page/DPC.jpg",
    desp: "Organised more than 30 events in 2 years for this community in delhi",
    href: "",
  },
 
  {
    title: "Penned Peeps ",
    subtitle: "Coordinator",
    image: "assets/images/experience-page/penned peeps.jpg",
    desp: "Worked as an event coordinator back in 2018",
    href: "https://nojoto.com/",
  },
 
  {
    title: "Kaavyechaupal sanskarshala",
    subtitle: "Marketing Expert",
    image: "assets/images/experience-page/image25.png",
    desp: "Worked as a marketing head and handled all the social media platforms",
    href: "",
  },
 
 
];

const showCards3 = () => {
  let output = "";
  mentor.forEach(
    ({ title, image, subtitle, desp, href }) =>
      (output += `  
      <div class="blog-slider__item swiper-slide">
        <div class="blog-slider__img">
            <img src="${image}" alt="">
        </div>
        <div class="blog-slider__content">
          <div class="blog-slider__title">${title}</div>
          <span class="blog-slider__code">${subtitle}</span>
          <div class="blog-slider__text">${desp}</div>
          <a href="${href}" class="blog-slider__button">Read More</a>   
        </div>
      </div>
      `)
  );
  hackathonsection.innerHTML = output;
};
document.addEventListener("DOMContentLoaded", showCards3);
