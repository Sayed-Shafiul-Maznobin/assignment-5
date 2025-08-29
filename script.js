// heart count related
let heart = 0;
let coin = 100;
document.getElementById("heartAmount").innerText = heart;
document.getElementById("coinAmount").innerText = coin;
let heartClick1 = document.querySelectorAll("#heartClick");
for (let single of heartClick1) {
  single.addEventListener("click", function () {
    heart += 1;
    document.getElementById("heartAmount").innerText = heart;
  });
}

const Call = document.querySelectorAll(".callBtn");

for (let single of Call) {
  single.addEventListener("click", function () {
    if (coin < 20) {
      alert("Your coin amount is less than 20 . So you cannot call now.");

      return;
    }

    coin -= 20;
    document.getElementById("coinAmount").innerText = coin;

    let name =
      single.parentElement.parentElement.getElementsByClassName("serviceName");
    for (let single of name) {
      name1 = single.innerText;
    }
    // console.log(name1);

    let number =
      single.parentElement.parentElement.getElementsByClassName(
        "serviceNumber"
      );
    for (let single1 of number) {
      number1 = single1.innerText;
    }
    console.log(name1, number1);
    alert("Calling   " + name1 + "      " + number1);
  });
}
