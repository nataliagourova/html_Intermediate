function operation(){
  const input = {
    option: '',
    amount: 0
  }
  // console.log('obj input: '+ input.option+ input.amount);
  function selection() {
    let operation = prompt("Enter Q to Quit \nEnter W to Withdraw \nEnter D to deposit \nEnter B to view balance").toUpperCase();
    if (operation ==='W'){
      input.option = 'W';
      input.amount = parseFloat(prompt('Enter the amount to withdraw'));
      // console.log('obj input: '+ input.option+ input.amount);
      return input;
    } else if (operation ==='D'){
      input.option = 'D';
      input.amount = parseFloat(prompt('Enter the amount to deposit'));
      // console.log('obj input: '+ input.option+ input.amount);
      if (isNaN(input.amount)){
        alert('invalid entry');
        input.amount =0;
      } else {
        return input;
      }
    } else if (operation ==='B'){
      input.option = 'B';
      alert('You requested your balance');
      return input;
    } else if (operation ==='Q'){
      input.option = 'Q';
      alert('You requested to quit');
      return input;
    } else {
      alert('invalid entry');
    }
  }
  let balance = 0;
  // console.log('input: '+ input.option);
  while(input.option!='Q'){
    switch(input.option) {
      case 'W':
        if (balance<input.amount){
          alert('Insufficient funds for withdrawal');
          break;
        }
        if(balance - input.amount<300){
          alert('Low balance alert! You have $'+balance+' in your account to withdraw.');
          const p = prompt('Would you like to proceed? Enter Y for yes or N for no');
          if (p === 'yes' || p === 'Yes' || p === 'YES' ||p === 'y' || p === 'Y'){
            balance -=input.amount;
            alert('Withdrawal of $'+input.amount+' completed');
            break;
          } else {
            alert('Transaction Cancelled');
          }
        }
        balance -=input.amount;
        // console.log('new balance: '+ balance);
        // alert('Amount withdrawn: $'+ input.amount);
        break;
      case 'D':
        if (balance+input.amount >50000){
          alert ('Unable to deposit $' +input.amount+'\nYou have a cap of $50,000');
          break;
        }
        balance += input.amount;
        // console.log("new balance: " + balance)
        // alert('Amount deposited: $'+ input.amount);
        break;
      case 'B':
        alert('Your balance is: $'+ balance);
        break;
    }
  selection();
  }
  alert('good-bye');
}
