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
      "Time : 11:00 AM - 01:00 PM"
    );
  }
  if (i == 2) {
    change("DAY 1", i, 2, "Workshop", "2M", "200", "Time : 02:00-04:00 PM");
    i = 0;
  }
});

function dayy1(e) {
  day.innerHTML = e.target.textContent;
  counter.innerHTML = "1/2";
  ename.innerHTML = "Opening Ceremony";
  btxt3.innerHTML = "03/10/23";
}

function change(e, i, n, a, b, c, d) {
  day.innerHTML = e;
  counter.innerHTML = {$i}/{$n};
  ename.innerHTML = a;
  btxt1.innerHTML = b;
  btxt2.innerHTML = c;
  stxt3.innerHTML = d;
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
        "Time : 11:00 AM - 01:00 PM"
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
        "Time : 02:00-04:00 PM"
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
        "Time : 08:00 AM - 01:00 PM"
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
        "Time : 02:00 - 04:00 PM"
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
        "Time : 04:00 - 05:00 PM "
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
        "Time :10:00 AM - 04:00 PM"
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
        "Time : 04:30 - 06:30 PM"
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
        "Time : 08:00 AM - 12:00 PM"
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
        "Time : 02:00 - 05:00 PM"
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
        "Time : 05:00 - 06:30 PM"
      );
      i = 0;
    }
  });
});