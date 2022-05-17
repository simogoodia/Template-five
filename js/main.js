// Start Our Skills
const skills = document.getElementById("our-skills"),
    progressBar = document.querySelectorAll("#progress-bar");

window.addEventListener("scroll", () => {
    const SkillsOffsetTop = skills.offsetTop;
    const skillsOffsetHeight = skills.offsetHeight;
    const windowY = window.scrollY;
    if(windowY >= SkillsOffsetTop - 200 && windowY <= (SkillsOffsetTop + skillsOffsetHeight)) {
        progressBar.forEach(bar => {
            bar.style.width = bar.getAttribute("data-progress");
            console.log(bar);
        });
    }
});
// End Our Skills
// Start Count Down
const daysEl = document.getElementById("days"),
    hoursEl = document.getElementById("hours"),
    minutesEl = document.getElementById("minutes"),
    secondsEl = document.getElementById("seconds");

setDate();
function setDate() {
    const dateNow = new Date().getTime();
    const dateTo2023 = new Date("Jan 01, 2023 00:00:00").getTime();
    const between = dateTo2023 - dateNow;
    const days = Math.floor(between / (1000 * 60 * 60 * 24));
    const hours  = Math.floor(between % (1000 * 60 * 60 * 24) / (1000 * 60 * 60));
    const minutes  = Math.floor(between % (1000 * 60 * 60) / (1000 * 60));
    const seconds  = Math.floor(between % (1000 * 60) / 1000);
    daysEl.innerHTML = `${days < 10 ? `0${days}` : days}`;
    hoursEl.innerHTML = `${hours < 10 ? `0${hours}` : hours}`;
    minutesEl.innerHTML = `${minutes < 10 ? `0${minutes}` : minutes}`;
    secondsEl.innerHTML = `${seconds < 10 ? `0${seconds}` : seconds}`;
    console.log(between);
}
const interval = setInterval(setDate, 1000);
// End Count Down