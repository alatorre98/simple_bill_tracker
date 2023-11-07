const budgetInput = document.getElementById("budget-box");
const budgetText = document.getElementById("budget-number");
const budgetButton = document.getElementById("budget-button");
const budgetContainer = document.getElementById("budget-input-container");

const moneyText = document.querySelector(".money-text");
const resetButton = document.getElementById("reset-button");
const leftoverMoney = document.getElementById("leftover-money");

const billInput = document.getElementById("bill-input");
const billContainer = document.getElementById("bill-container");
const billName = document.getElementById("bill-name");
const billAmount = document.getElementById("bill-amount");
const billEnter = document.getElementById("bill-button");

const checkBill = document.querySelectorAll(".circle");

let leftoverInteger = 0;


const budgetTextChange = () => {
    if(budgetInput.value && budgetInput.value > 0){
        moneyText.style.display = "flex";
        budgetText.innerHTML = `$${budgetInput.value}`;
        leftoverMoney.innerHTML = `$${budgetInput.value}`;
        leftoverInteger = parseInt(budgetInput.value);
        budgetContainer.style.display = "none";
        billInput.style.display = "flex";
    }
    else{
        alert("Please enter a valid budget");
    }
    
};

const resetBudget = () => {
    moneyText.style.display = "";
    budgetContainer.style.display = "";
    billInput.style.display = "";
    budgetInput.value = "";
};

const addBill = () => {
    if(billName.value && (billAmount.value && billAmount.value > 0)){
        let billItem = document.createElement("li");
        billItem.innerHTML = `${billName.value} ($${billAmount.value})`;
        billContainer.appendChild(billItem);
        let deleteSpan = document.createElement("span");
        deleteSpan.innerHTML = "\u00d7";
        billItem.appendChild(deleteSpan);

        leftoverInteger -= parseInt(billAmount.value);
        leftoverMoney.innerHTML = `$${leftoverInteger}`;
    }
    else {
        alert("Please enter a valid bill");
    }
    billAmount.value = "";
    billName.value = "";
};



billContainer.addEventListener("click", function(event){
    if(event.target.tagName === "LI"){
        event.target.classList.toggle("checked");
    }
    else if(event.target.tagName === "SPAN"){
        event.target.parentElement.remove();
    }
}, false);


resetButton.addEventListener("click", resetBudget);
budgetButton.addEventListener("click", budgetTextChange);
billEnter.addEventListener("click", addBill);
