


const content=document.getElementById("content");
const homebtn=document.getElementById("homebtn");
const aboutbtn= document.getElementById("aboutbtn");



//for category card
function loadhome() {

  document.body.classList.remove("cpp-theme");

 content.innerHTML = `
  <section class="home-section">

    <div class="content-wrapper">

      <h2>Select Semester</h2>

      <div class="categories">

        <div class="card" onclick="loadSemester('sem1')">
          <h3 style="color:#16a34a;">🟢 C Programming</h3>
          <p>Learn core programming fundamentals</p>
        </div>

        <div class="card" onclick="loadSemester('sem2')">
          <h3 style="color:#2563eb;">🔵 C++ Programming</h3>
          <p>Object-oriented programming concepts</p>
        </div>

      </div>

    </div>

  </section>
`;
}

function loadSourceFiles(){
  content.innerHTML=`
  <section class="source">
  <h2> SOURCES FILES</h2>
  <p>
  All the source code files for this assignment are available in the Google Drive folder below.
        You can view, download, or reference them for learning and submission purposes.
        </p>
        <div class="box">
        <a href="https://drive.google.com/drive/folders/1mV882zk5xM-U0M49pBX7hEbOft_cgC1M?usp=sharing" target="_blank" class="link">
        Download Source files
        </a>
        </div>
        <p class="note">
        Note: Make sure you are signed in to access</p>
        <section>
        `;}

function loadAbout(){
    content.innerHTML=`
    <section class="about"
    
    <p>
    <h2> ABOUT THE ASSIGNMENT</h2>

This website showcases my learning journey across first and second semesters, featuring assignments and programs based on C and C++ programming. It covers topics such as input/output, control structures, arrays, functions, and object-oriented programming.

The purpose of this platform is to track my growth, improve problem-solving skills, and present my work through a live, professionally deployed website.</p>
<div class="ack">
<br><h2>Acknowledgement</h2>

<p>
I, <b>Dhruv Goyal</b>, student of <b>BCA–II SEM (A), Roll No. 4313/25</b>, am thankful to<b> Mr. Chetan Gupta</b> for his guidance and support in completing this assignment. I also thank my college and classmates for their help and encouragement.</p>
<div class="submitted">
<b>
<br>Submitted by: Dhruv Goyal
<br>Stream: BCA–II SEM (A)
<br>Roll No.: 4313/25
<br>Submitted to: Mr. Chetan Gupta
<br>Date: 6 April 2026 </b>
</div>
</div>
</section>`;
}

window.loadCategory = function (category, sem) {
  const questions = sem==="sem1"? categories[category]:cppCategories[category];

  if (!questions || questions.length === 0) {
    content.innerHTML = `
      <button class="back-btn" onclick="loadhome()">← Back to Home</button>
      <h2>${category}</h2>
      <h3 style="color:#007BFF; text-align:center;">Questions will be added soon... just waiting for traffic light to be green sooooo much trafficcc</h3>
    `;
    return;
  }

  content.innerHTML = `
    <button class="back-btn" onclick="loadhome()">← Back to Home</button>
    <h2>${category}</h2>
    ${questions
      .map(
        (q, i) => `
        <div class="question">
          <p><strong>Q${i + 1}:</strong> ${q.question}</p>
          <button class="show-btn" onclick="toggleAnswer(this)">Show Answer</button>
          <pre class="answer"></pre>
          <button class="show-btn" onclick="toggleOutput(this)">Show Output</button>
          <pre class="output" style="display:none;"></pre>
        </div>`
      )
      .join("")}
  `;
  document.querySelectorAll('.answer').forEach((pre,i)=>{
    pre.textContent=questions[i].answer;
  });
  
  document.querySelectorAll('.output').forEach((pre,i)=>{
    const qid = questions[i].id;
    pre.textContent = outputs[qid] || "not available";
  
});


window.toggleAnswer=function(button){
    const ans= button.parentElement.querySelector(".answer");
    if(ans.style.display==="block"){
        ans.style.display="none";
        button.textContent="show Answer";
    } else{
        ans.style.display="block";
        button.textContent="Hide Answer";
    }
};


window.toggleOutput = function(button) {
  const output = button.parentElement.querySelector(".output");
  if(output.style.display==="block"){
    output.style.display = "none";
    button.textContent = "Show Output";
  }
  else{
    output.style.display = "block";
    button.textContent = "Hide Output";
  }
  };
}
function loadSemester(sem) {

  // remove previous theme
  document.body.classList.remove("cpp-theme");

  // apply ONLY for C++
  if (sem === "sem2") {
    document.body.classList.add("cpp-theme");
  }

  let data, info;

  if (sem === "sem1") {
    data = categories;
    info = categoryInfo;
  } else {
    data = cppCategories;
    info = cppInfo;
  }

  content.innerHTML = `
    <button class="back-btn" onclick="loadhome()">← Back</button>
    <h2>${sem === "sem1" ? "C Programming" : "C++ Programming"}</h2>

    <div class="categories">
      ${Object.keys(data)
        .map((cat) => {
          const details = info[cat] || {
            desc: "Coming soon..."
          };

          return `
            <div class="card" onclick="loadCategory('${cat}', '${sem}')">
  <img src="${details.image}" alt="${cat}">
  <h3>${cat}</h3>
  <p>${details.desc}</p>
</div>`;
        })
        .join("")}
    </div>
  `;
}
homebtn.addEventListener("click",loadhome);
aboutbtn.addEventListener("click",loadAbout);
document.getElementById("sourcebtn").addEventListener("click",loadSourceFiles);

loadhome();