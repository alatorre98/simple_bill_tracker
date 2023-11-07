const budgetInput = document.getElementById("budget-box");
const budgetText = document.getElementById("budget-number");
const budgetButton = document.getElementById("budget-button");
const budgetContainer = document.getElementById("budget-input-container");

const moneyText = document.querySelector(".money-text");
const resetButton = document.getElementById("reset-button");
const leftoverMoney = document.getElementById("leftover-money");

const billInput = document.getElementById("bill-input");

const budgetTextChange = () => {
    if(budgetInput.value && budgetInput.value > 0){
        moneyText.style.display = "flex";
        budgetText.innerHTML = `$${budgetInput.value}`;
        leftoverMoney.innerHTML = `$${budgetInput.value}`;
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


resetButton.addEventListener("click", resetBudget);
budgetButton.addEventListener("click", budgetTextChange);

