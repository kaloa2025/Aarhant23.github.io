let day1 = document.querySelector("#day1");
let day2 = document.querySelector("#day2");
let day3 = document.querySelector("#day3");
let day4 = document.querySelector("#day4");
let day = document.querySelector("#day");
let counter = document.querySelector("#counter");
let ename = document.querySelector("#ename");
let enamediv = document.querySelector(".ename");
let nxtbtn = document.querySelector("#nxtbtn");
let btxt1 = document.querySelector("#btxt1");
let btxt2 = document.querySelector("#btxt2");
let btxt3 = document.querySelector("#btxt3");

let stxt3 = document.querySelector("#stxt3");
let desc = document.querySelector("#desc");
let tagline = document.querySelector("#tagline");


var i = 1;
nxtbtn.addEventListener("click", function (e) {
  console.log(i);
  i++;
  if (i == 1) {
    change(
      "DAY 1",
      i,
      2,
      "Opening Ceremony",
      "2M",
      "200",
      "Time : 11:00 AM - 01:00 PM",
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.",
      "Tagline: Opening Ceremony"
    );
  }
  if (i == 2) {
    change(
      "DAY 1",
      i,
      2,
      "Workshop",
      "2M",
      "200",
      "Time : 02:00-04:00 PM",
      `ethical hacking workshop for students , pros and cons , various tools and awareness 
    Learn ethical hacking and cybersecurity in this workshop, covering tools, pros, cons, and cybersecurity awareness.
    `,
      "Tagline: ethical hacking workshop"
    );
    i = 0;
  }
});

function dayy1(e) {
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "Opening Ceremony";
  btxt3.innerHTML = "03/10/23";
  tagline.innerHTML = "Tagline: Opening Ceremony";
  desc.innerHTML =
    "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.";
}


function change(e, i, n, a, b, c, d, f, g) {
  day.innerHTML = e;
  counter.innerHTML = `${i}/${n}`;
  ename.innerHTML = a;
  btxt1.innerHTML = b;
  btxt2.innerHTML = c;
  stxt3.innerHTML = d;
  desc.innerHTML = f;
  tagline.innerHTML = g;
}

day1.addEventListener("click", function (e) {
  var i = 1;
  console.log("hello");
  dayy1(e);
  console.log(e.target);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        2,
        "Opening Ceremony",
        "2M",
        "200",
        "Time : 11:00 AM - 01:00 PM",
        "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Beatae, in ipsa! Culpa totam sint, perferendis voluptate eius blanditiis illum ad voluptatum iure dolore quisquam doloremque impedit autem, reiciendis dolorem maxime.",
        "Tagline: Opening Ceremony"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        2,
        "Workshop",
        "2M",
        "200",
        "Time : 02:00-04:00 PM",
        `ethical hacking workshop for students , pros and cons , various tools and awareness 
    Learn ethical hacking and cybersecurity in this workshop, covering tools, pros, cons, and cybersecurity awareness.
    `,
        "Tagline: ethical hacking workshop"
      );
      i = 0;
    }
  });
});

day2.addEventListener("click", function (e) {
  var i = 1;

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Digital Key Quest";
  btxt3.innerHTML = "04/10/23";
  tagline.innerHTML = "Tagline: Digital key quest";
  desc.innerHTML =
    " Treasure hunt:  Digital Key Quest is a treasure hunt event where you decipher clues, solve puzzles, and unlock digital keys to hidden treasure";
  console.log(e.target.textContent);

  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        3,
        "Digital Key Quest",
        "2M",
        "200",
        "Time : 08:00 AM - 01:00 PM",
        " Treasure hunt  Digital Key Quest is a treasure hunt event where you decipher clues, solve puzzles, and unlock digital keys to hidden treasure",
        "Tagline: Digital key quest"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        3,
        "Workshop",
        "2M",
        "200",
        "Time : 02:00 - 04:00 PM",
        "DRDO Workshop is an exclusive event for future innovators, offering insights into cutting-edge projects, groundbreaking research, and dynamic tech careers.",
        "Tagline: DRDO workshop"
      );
    }
    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Seminar(CTF)",
        "2M",
        "200",
        "Time : 04:00 - 05:00 PM ",
        "Explore Capture the Flag (CTF) in our seminar. Uncover its challenges, puzzles, and cybersecurity scenarios. Learn why it's popular and skill-enhancing. Join us!",
        "Tagline: CTF how is that event and why? "
      );
      i = 0;
    }
  });
});

day3.addEventListener("click", function (e) {
  var i = 1;

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "MUN Security Council";
  btxt3.innerHTML = "05/10/23";
  tagline.innerHTML = "Tagline: MUN";
  desc.innerHTML =
    "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.";

  console.log(e.target.textContent);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        2,
        "MUN Security Council",
        "2M",
        "200",
        "Time :10:00 AM - 04:00 PM",
        "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.",
        "Tagline: MUN"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        2,
        "Open Mic",
        "2M",
        "200",
        "Time : 04:30 - 06:30 PM",
        "Model UN conference on cybersecurity, exploring urgent threats and solutions through diplomacy and negotiation. Delegates will assume the roles of UN member state representatives, debating and drafting resolutions to fortify global cyber defenses.",
        "Tagline: OPEN MIC"
      );
      i = 0;
    }
  });
});

day4.addEventListener("click", function (e) {
  var i = 1;

  console.log("hello2");
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/3";
  ename.innerHTML = "Imposter Hunt";
  btxt3.innerHTML = "06/10/23";
  tagline.innerHTML = "Tagline: Imposter Among Us - Hunt or BeHunted!";
  desc.innerHTML =
    "Imposter Hunt: Among Us in Real Life – a groundbreaking, never-before-seen experience Real-life Among Us event where you gather clues, uncover imposters, and work as a team to survive.";

  console.log(e.target.textContent);
  nxtbtn.addEventListener("click", function () {
    console.log(i);
    i++;
    if (i == 1) {
      change(
        e.target.textContent,
        i,
        3,
        "Imposter Hunt",
        "2M",
        "200",
        "Time : 08:00 AM - 12:00 PM",
        "Imposter Hunt: Among Us in Real Life – a groundbreaking, never-before-seen experience Real-life Among Us event where you gather clues, uncover imposters, and work as a team to survive.",
        "Tagline: Imposter Among Us - Hunt or BeHunted!"
      );
    }
    if (i == 2) {
      change(
        e.target.textContent,
        i,
        3,
        "Catch The Flag",
        "2M",
        "200",
        "Time : 02:00 - 05:00 PM",
        "Immersive cybersecurity competition testing your skills and knowledge, with heart-pounding scenarios and insights from top experts.        ",
        "Tagline: Catch the flag and be a hero"
      );
    }
    if (i == 3) {
      change(
        e.target.textContent,
        i,
        3,
        "Closing Ceremony",
        "2M",
        "200",
        "Time : 05:00 - 06:30 PM",
        "lorem ipsum dolor sit amet, consectetur adipiscing lorem, sed diam nonumy lore lore lorem.",
        "Tagline: Closing ceremony"
      );
      i = 0;
    }
  });
});


function showd1()
{
    var s=document.getElementById("show1");
    if(s.style.display==="none")
    {
        s.style.display="block";
    }
    else
    {
        s.style.display="none";
    }
}
function showd2()
{
    var s=document.getElementById("show2");
    if(s.style.display==="none")
    {
        s.style.display="block";
    }
    else
    {
        s.style.display="none";
    }
}
function showd3()
{
    var s=document.getElementById("show3");
    if(s.style.display==="none")
    {
        s.style.display="block";
    }
    else
    {
        s.style.display="none";
    }
}
function showd4()
{
    var s=document.getElementById("show4");
    if(s.style.display==="none")
    {
        s.style.display="block";
    }
    else
    {
        s.style.display="none";
    }
}