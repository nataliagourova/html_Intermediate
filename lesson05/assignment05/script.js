function input() {
  let operation = prompt("Enter Q to Quit \nEnter W to Withdraw \nEnter D to deposit \nEnter B to view balance").toUpperCase();
  if (operation ==='W'){
    return 'W';
  } else if (operation ==='D'){
    return 'D';
  } else if (operation ==='B'){
    alert('You entered B');
    return 'B';
  } else if (operation ==='Q'){
    alert('You entered Q');
    return 'Q';
  } else {
    prompt ('Invalid entry, please enter Q, W, D or B');
  }
}
function operation(input){
  let balance = 0;
  let amount =0;
  console.log('input: '+ input);
  while(input!='Q'){
    switch(input) {
      case 'W':
        amount = parseFloat(prompt('Enter the amount to withdraw'));
        balance -=amount;
        console.log('new balance: '+ balance);
        alert('Amount withdrawn: '+ amount);
        break;
      case 'D':
        amount = parseFloat(prompt('Enter the amount to deposit'));
        balance += amount;
        console.log("new balance: " + balance)
        alert('Amount deposited: $'+ amount);
        break;
      case 'B':
        alert('Your balance is: $'+balance);
        break;
      default:
        input = alert('Invalid entry');
    }
    input = prompt('Please enter Q, W, D or B').toUpperCase();
  }
  alert('good-bye');
}
