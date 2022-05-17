// the div which contains the classname of "Excuser_result" is assinged to "Excuser_result" by using querySelector
const Excuser_result = document.querySelector(".Excuser_result");
// the button which contains the classname of "Excuser_btn" is assinged to "Excuser_btn" by using querySelector
const Excuser_btn = document.querySelector(".Excuser_btn");
// the div which contains the classname of "FunFact_result" is assinged to "FunFact_result" by using querySelector
const FunFact_result = document.querySelector(".FunFact_result");
// the button which contains the classname of "FunFact_btn" is assinged to "FunFact_btn" by using querySelector
const FunFact_btn = document.querySelector(".FunFact_btn");

// the function named getRandomExcuser is added to fox_btn by using addEventListener
Excuser_btn.addEventListener("click", getRandomExcuser);
// the function named getRandomFunFact is added to fox_btn by using addEventListener
FunFact_btn.addEventListener("click", getRandomFunFact);

// the getRandomFunFact function is created
async function getRandomFunFact() {
  let b = await fetch("https://uselessfacts.jsph.pl/random.json?language=en")
    .then((res) => res.json())
    .then((data) => {
        FunFact_result.innerHTML = `
        <h5> ${data.text} </h5>`;
    })
    .catch(console.log(Error));
}
// the getRandomExcuser function is created
async function getRandomExcuser() {
  let a = await fetch("https://excuser.herokuapp.com/v1/excuse")
    .then((res) => res.json())
    .then((data) => {
        Excuser_result.innerHTML = `
        <h5> ${data[0].excuse} </h5>`;
        
    })
    .catch(console.log(Error));
}


