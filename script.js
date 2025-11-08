


const content=document.getElementById("content");
const homebtn=document.getElementById("homebtn");
const aboutbtn= document.getElementById("aboutbtn");



//for category card
function loadhome() {
  content.innerHTML = `
    <section class="home-section">
      <h2>Welcome to C Programming Assignments</h2>
      <p>Explore categorized C programs with explanations and working code examples.</p>

      <div class="categories">
        ${Object.keys(categories)
          .map((cat) => {
            const info = categoryInfo[cat] || {
              image: "images/default.jpg",
              desc: "Questions will be added soon...",
            };
            return `
              <div class="card" onclick="loadCategory('${cat}')">
                <img src="${info.image}" alt="${cat}">
                <h3>${cat}</h3>
                <p>${info.desc}</p>
              </div>`;
          })
          .join("")}
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
        <a href="https://drive.google.com/drive/folders/1F_VzP_io58V9B9QYRM15Tlfw6uAz6Mey?usp=drive_link" target="_blank" class="link">
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

This assignment is based on the basics of the C programming language. It includes simple programs on input/output operations, control statements, and logic building. The main objective is to help students understand the syntax and structure of C and improve their programming and problem-solving skills.</p>
<div class="ack">
<br><h2>Acknowledgement</h2>

<p>
I, <b>Dhruv Goyal</b>, student of <b>BCA–1(A), Roll No. 4313/25</b>, am thankful to<b> Mr. Chetan Gupta</b> for his guidance and support in completing this assignment. I also thank my college and classmates for their help and encouragement.</p>
<div class="submitted">
<b>
<br>Submitted by: Dhruv Goyal
<br>Stream: BCA–1(A)
<br>Roll No.: 4313/25
<br>Submitted to: Mr. Chetan Gupta
<br>Date: 7 November 2025 </b>
</div>
</div>
</section>`;
}

window.loadCategory = function (category) {
  const questions = categories[category];

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
        </div>`
      )
      .join("")}
  `;
  document.querySelectorAll('.answer').forEach((pre,i)=>{
    pre.textContent=questions[i].answer;
  });
};


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

homebtn.addEventListener("click",loadhome);
aboutbtn.addEventListener("click",loadAbout);
document.getElementById("sourcebtn").addEventListener("click",loadSourceFiles);

loadhome();