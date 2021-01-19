
let questions = [
  {
    id: 1,
    question: "How many countries,areas or territories are suffering from novel coronavirus outbreak in the world ?",
    answer: "More than 200",
    options: [
      "More than 50",
      "More than 100",
      "More than 150",
      "More than 200"
    ]
  },
  {
    id: 2,
    question: "From where coronavirus got its name?",
    answer: "Due to their crown like projections",
    options: [
      "Due to their leaf like projections",
      "Due to their crown like projections",
      "Due to their surface structure of bricks",
      "None of these"
    ]
  },
  {
    id: 3,
    question: "In a study, which cells are found in COVID-19 patients 'bode-well' for long term immunity?",
    answer: "T-cell",
    options: [
      "P-cell",
      "D-cell",
      "T-cell",
      "Endothelial cell"
    ]
  },
  {
    id: 4,
    question: "Name the vaccine that is jointly developed by the German company BioNtech and US pharma giant Pfizer for COVID-19.",
    answer: "BNT162",
    options: [
      "BNT162",
      "PICOVACC",
      "Both A and B",
      "Neither A nor B"
    ]
  },
  {
    id: 5,
    question: "Name a clinical trial in which blood is transfused from recovered COVID-19 patients to a coronavirus patient who is in critical condition.",
    answer: "Plasma Therapy",
    options: [
      "Solidarity",
      "Remdesivir",
      "Hydroxychloroquine",
      "Plasma Therapy"
    ]
  },
  {
    id: 6,
    question: "In which age-group the COVID-19 spreads?",
    answer: "All the above are correct",
    options: [
      "COVID-19 occurs in all age-groups",
      "Coronavirus infection is mild in children",
      "Old person and people with pre-existing medical conditions are at high risk to develop serious illness",
      "All the above are correct"
    ]
  },
  {
    id: 7,
    question: "What is Coronavirus?",
    answer: "Both A and B are correct",
    options: [
      "It belongs to the family of Nidovirus",
      "It is a large family of viruses",
      "Both A and B are correct",
      "Only A is correct"
    ]
  },
  {
    id: 8,
    question: "Name the vaccine that is jointly developed by the German company BioNtech and US pharma giant Pfizer for COVID-19",
    answer: "COVID-19",
    options: [
      "COVn-19",
      "COnVID-19",
      "COVID-19",
      "ConV-20"
    ]
  },
  {
    id: 9,
    question: "The first case of Coronavirus was identified in?",
    answer: "Wuhan, Hubei",
    options: [
      "Tianjin",
      "Beijing",
      "Wuhan, Hubei",
      "Shanghai"
    ]
  },
  {
    id: 10,
    question: "WHich of the following diseases are related to Coronavirus?",
    answer: "Both A and B",
    options: [
      "MERS",
      "SARS",
      "Both A and B",
      "Neither A nor B"
    ]
  },
  {
    id: 11,
    question: "Mild symptoms of novel coronavirus are:",
    answer: "All the above",
    options: [
      "Fever",
      "Cough",
      "Shortness of breath",
      "All the above"
    ]
  }
];

let question_count = 0;
let points = 0;

window.onload = function() {
  show(question_count);

};

function next() {

   
  // if the question is last then redirect to final page
  if (question_count == questions.length - 1) {
    sessionStorage.setItem("time", time);
    clearInterval(mytime);
    location.href = "end.html";
  }
  console.log(question_count);

  let user_answer = document.querySelector("li.option.active").innerHTML;
  // check if the answer is right or wrong
  if (user_answer == questions[question_count].answer) {
    points += 10;
    sessionStorage.setItem("points", points);
  }
  console.log(points);

  question_count++;
  show(question_count);
}

function show(count) {
  let question = document.getElementById("questions");
  let [first, second, third, fourth] = questions[count].options;

  question.innerHTML = `
  <h2>Q${count + 1}. ${questions[count].question}</h2>
   <ul class="option_group">
  <li class="option">${first}</li>
  <li class="option">${second}</li>
  <li class="option">${third}</li>
  <li class="option">${fourth}</li>
</ul> 
  `;
  toggleActive();
}

function toggleActive() {
  let option = document.querySelectorAll("li.option");
  for (let i = 0; i < option.length; i++) {
    option[i].onclick = function() {
      for (let i = 0; i < option.length; i++) {
        if (option[i].classList.contains("active")) {
          option[i].classList.remove("active");
        }
      }
      option[i].classList.add("active");
    };
  }
}
