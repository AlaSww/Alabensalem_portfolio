const menuItem = document.querySelector('.mobile-item');
const closeMobileItems = document.querySelectorAll('.closeMenu');
const displayMobileMenu = () => {
  menuItem.style.display = 'block';
};
const closeMobileMenu = () => {
  menuItem.style.display = 'none';
};
document.querySelector('.openMenu').addEventListener('click', displayMobileMenu);
closeMobileItems.forEach(((element) => element.addEventListener('click', closeMobileMenu)));
/* Project Detail objects */
const projectDetail = [{
  title: 'Wortcat',
  exprience: ['Open source', 'Mobile dev', '2025'],
  desription: 'A vocabulary app I built while learning German, with translation and a word-guessing game to support language learning.',
  popDescription: 'This is a vocabulary learning app I developed while studying German. It’s designed to help language learners store new words, translate them, and reinforce their memory through an interactive guessing game. Users can add vocabulary entries, view translations, and test themselves with a 20-word random quiz that encourages active recall. Built with Flutter, the app combines clean UI with practical functionality to support daily language learning and progress tracking.',
  technologies: ['flutter', 'hive'],
  popupTech: ['dart', 'hive', 'github'],
  image: './images/Snap1.png',
  imageMobile: './images/Snapshoot1.png',
  imagePopup: './images/Snap1.png',
  imageMobilePopup: './images/Snapshoot1.png',
  seeSource: 'https://github.com/AlaSww/wortcat',
},
{
  title: 'Small company network design',
  exprience: ['Open source', 'Packet tracer', '2023'],
  desription: 'A small company network I built using Cisco Packet Tracer, including basic routing, switching, and device configuration to simulate real-world office connectivity.',
  popDescription: 'I designed and built a small company network using Cisco Packet Tracer, simulating a real-world office environment. The network includes routers, switches, PCs, and printers, all configured to enable secure internal communication and internet access. I set up basic routing, IP addressing, and device configuration to ensure efficient connectivity across departments. This project helped me understand core networking concepts such as subnetting, DHCP, and static routing in a practical, hands-on way.',
  technologies: ['Packet tracer', 'github'],
  popupTech: ['DHCP','VLAN','Networking basics', 'github'],
  image: './images/Snap2.png',
  imageMobile: './images/Snapshoot2.png',
  imagePopup: './images/Snap2.png',
  imageMobilePopup: './images/Snapshoot2.png',
  seeSource: 'https://github.com/AlaSww/-Small-Company-Office-Network',
},
{
  title: 'Banking System',
  exprience: ['Open source', 'Java', '2024'],
  desription: 'A command-line Java application simulating a simple banking system. Features separate admin and user roles, and applies object-oriented programming principles.',
  popDescription: 'A command-line banking application with two roles: Admin and User. Admins can create and manage accounts, while users can log in to view balance, deposit, and withdraw money. Built to practice object-oriented programming and role-based access control, focusing on backend logic and clean code structure.',
  technologies: ['Java', 'OOP', 'terminal'],
  popupTech: ['Java', 'OOP', 'terminal','github'],
  image: './images/Snap3.png',
  imageMobile: './images/Snapshoot3.png',
  imagePopup: './images/Snap3.png',
  imageMobilePopup: './images/Snapshoot3.png',
  seeSource: 'https://github.com/AlaSww/Banking-System',
},

];
/* End of project detail object */

/* Populate object to html elements when the page loads */
for (let i = 0; i < projectDetail.length; i += 1) {
  let tech = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li><a href="#" class="canopy">${projectDetail[i].exprience[k]}</a></li>` : `<li><a href="#">${projectDetail[i].exprience[k]}</a></li>`;
    if (k !== projectDetail[i].exprience.length - 1) experienceList += '<li><a href="#"><img src="./images/Counter.png" alt="dot"></a></li>';
  }
  document.querySelector('#portfolio').innerHTML += `<div class="main-container">
  <div class="grid-item" id="work-1">
    <div class="flex-item1"><img src="${projectDetail[i].imageMobile} " height="300" alt="my project"></div>
    <div class="desk-item1"><img src="${projectDetail[i].image} " height="450" width="600" alt="my tonic project"></div>
    <div class="desk-col">
      <div class="flex-item2">
        <h2>${projectDetail[i].title}</h2>
      </div>
      <div class="flex-item2-desk">
        <h2>${projectDetail[i].title}</h2>
      </div>
      <div class="flex-item3">
        <ul class="inner-element">
          ${experienceList}
        </ul>
      </div>
      <div class="flex-item4">
        <p>${projectDetail[i].desription}</p>
      </div>
      <div class="flex-item5">
        <ul class="inner-flex-item">
        ${tech}
        </ul>
      </div>
      <div class="flex-item6"><button data-index="${i}" class="see-project">See project</button></div>
    </div>
  </div>`;
}
/* End of project detail population when the pages loads */

/* Display Popup modal */

const popupModal = document.querySelector('#portfolioPopup');
const displayPopupModal = (i) => {
  let tech = '';
  let techPop = '';
  let experienceList = '';

  for (let j = 0; j < projectDetail[i].technologies.length; j += 1) {
    tech += `<li class="technology"><a href="#">${projectDetail[i].technologies[j]}</a></li>`;
  }

  for (let j = 0; j < projectDetail[i].popupTech.length; j += 1) {
    techPop += `<li class="lang-group" id="mobile">${projectDetail[i].popupTech[j]}</li>`;
  }

  for (let k = 0; k < projectDetail[i].exprience.length; k += 1) {
    experienceList += (k === 0) ? `<li class="list-main">${projectDetail[i].exprience[k]}</li>` : `<li class="titles-item">${projectDetail[i].exprience[k]}</li>`;
  }
  document.querySelector('#portfolioPopup').innerHTML = `
  <div class="works-flex">
      <div>
        <div class="works-flex-pop">
          <h3 class="intro-text-works">${projectDetail[i].title}</h3>
          <span> <a onclick="closePopupModal()" href="" class="close-popup">X</a></span>
      </div>
      <ul class="works-flex-item titles-container">
      ${experienceList}
      </ul>
      </div>
      <div class="works-flex-item work-image">
          <img src="${projectDetail[i].imageMobilePopup}" class="flex-item1" alt="${projectDetail[i].title} project screenshot"/>
          <img src="${projectDetail[i].imagePopup}" class="desk-item1 alt="${projectDetail[i].title} project screenshot"/>
      </div>
      <div class="project-tags">
          <div class="work-description">
            <p class="works-flex-item works-description">
              ${projectDetail[i].popDescription}
            </p>
          </div>
          <div class="tags">
              <ul class="lang-container mobile">
              ${tech}
              </ul>
              <ul class="lang-container">
              ${techPop}
              </ul>
              <div class="btn-tags">
                <a href="${projectDetail[i].seeSource}" class="btn-see-project">See Source
                  <i class="fa fa-github-square" aria-hidden="true"></i>
                </a>
            </div>
          </div>
      </div>
      </div>
  `;
  popupModal.style.display = 'block';
};
document.querySelectorAll('.see-project').forEach((row) => row.addEventListener('click', () => displayPopupModal(row.getAttribute('data-index'))));

const closeModal = document.querySelector('#portfolioPopup');
const closePopupModal = () => {
  closeModal.style.display = 'none';
};
/* End of display popup modal */

/* Contact Form validation */
// eslint-disable-next-line no-useless-escape
const regex = '[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$';
document.querySelector('#form').addEventListener('submit', (e) => {
  for (let i = 0; i < e.target.length; i += 1) {
    if (e.target[i].classList.contains('form-control')) {
      if (e.target[i].value === '') {
        // e.target[i].nextElementSibling.style.display = 'block';
        e.target[i].parentElement.nextElementSibling.innerText = `Please enter your ${e.target[i].getAttribute('placeholder')}`;
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'input' && e.target[i].value.length > e.target[i].getAttribute('maxlength')) {
        e.target[i].parentElement.nextElementSibling.innerText = `The maximum number of character is ${e.target[i].getAttribute('maxlength')}`;
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'email' && e.target[i].value !== e.target[1].value.toLowerCase()) {
        e.target[i].parentElement.nextElementSibling.innerText = 'Please enter your email in lowercase';
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else if (e.target[i].type === 'email' && regex.test(e.target[i].value) !== e.target[i].value) {
        e.target[i].parentElement.nextElementSibling.textContent = 'Please enter a valid email address';
        e.target[i].parentElement.nextElementSibling.style.color = 'red';
        e.preventDefault();
      } else {
        e.target[i].parentElement.nextElementSibling.style.display = 'none';
        e.target[i].parentElement.nextElementSibling.innerText = '';
      }
    }
  }
});
/* End of Contact Form Validation */
