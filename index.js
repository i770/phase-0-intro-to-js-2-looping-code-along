function writeCards(names, event) {
    let messages = [];
    for (let i = 0; i < names.length; i++) {
      messages.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`);
    }
    return messages;
  }
  
  // Example usage:
  const names = ["Alice", "Bob", "Charlie"];
  const event = "birthday";
  console.log(writeCards(names, event));
  



function countDown(n) {

    while (n >= 0) {
      console.log(n);
      n--;
    }
  }
  
  // Example usage:
  countDown(10);
  