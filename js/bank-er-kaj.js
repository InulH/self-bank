function getInputValue(inputId) {
    const inputField = document.getElementById(inputId);
    const inputAmountText = inputField.value;
    const amountValue = parseFloat(inputAmountText);
    inputField.value = '';
    return amountValue;
}

function updateTotalfield(totalFieldId, newDepositAmount) {
    const totalElement = document.getElementById(totalFieldId);
    const totalText = totalElement.innerText;
    const previousTotal = parseFloat(totalText);

    totalElement.innerText = previousTotal + newDepositAmount;
}
function updateBalance(amount) {
    const balanceTotal = document.getElementById('balance-total');
    const balanceTotalText = balanceTotal.innerText;
    const previousBalanceTotal = parseFloat(balanceTotalText);
    balanceTotal.innerText = previousBalanceTotal + amount;
}
// handle deposit button event
document.getElementById('deposit-btn').addEventListener('click', function () {

    const newDepositAmount = getInputValue('deposit-input')
    if (newDepositAmount > 0) {
        updateBalance(newDepositAmount)
        updateTotalfield('deposit-total', newDepositAmount);
    }



});

// handle withdraw event handler
document.getElementById('withdraw-btn').addEventListener('click', function () {

    const newWithdrawAmount = getInputValue('withdraw-input')
    if (newWithdrawAmount > 0) {
        updateTotalfield('withdraw-total', newWithdrawAmount)
    }


    // update account balance 
    updateBalance(-newWithdrawAmount);
})



