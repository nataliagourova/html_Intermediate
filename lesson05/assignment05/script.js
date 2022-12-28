function operation(){
  const input = {
    option: '',
    amount: 0
  }
  console.log('obj input: '+ input.option+ input.amount);
  function selection() {
    let operation = prompt("Enter Q to Quit \nEnter W to Withdraw \nEnter D to deposit \nEnter B to view balance").toUpperCase();
    if (operation ==='W'){
      input.option = 'W';
      input.amount = parseFloat(prompt('Enter the amount to withdraw'));
      console.log('obj input: '+ input.option+ input.amount);
      return input;
    } else if (operation ==='D'){
      input.option = 'D';
      input.amount = parseFloat(prompt('Enter the amount to deposit'));
      console.log('obj input: '+ input.option+ input.amount);
      return input;
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
  console.log('input: '+ input.option);
  while(input.option!='Q'){
    switch(input.option) {
      case 'W':
        balance -=input.amount;
        console.log('new balance: '+ balance);
        alert('Amount withdrawn: '+ input.amount);
        break;
      case 'D':
        balance += input.amount;
        // console.log("new balance: " + balance)
        alert('Amount deposited: $'+ input.amount);
        break;
      case 'B':
        alert('Your balance is: $'+ balance);
        break;
      // default:
      //   alert('iinvalid entry');
      //   break;
    }
    selection();
  }
  alert('good-bye');
}
