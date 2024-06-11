// Define the collectiveWisdom object
const collectiveWisdom = {
    signInfo: ['star', 'moon', 'sun', 'comet', 'planet', 'galaxy'],
    fortuneOutput: ['terrible luck', 'bad luck', 'ok luck', 'good luck', 'great luck', 'amazing luck'],
    advice: ['go out and eat', 'not read this', 'play more', 'trust no one', 'stay positive', 'take a walk']
  };
  
  // Function to generate a random number
  function generateRandomNumber(num) {
    return Math.floor(Math.random() * num);
  }
  
  // Function to generate personal message
  function generateMessage() {
    let personalMessage = [];
    for (let prop in collectiveWisdom) {
      let optionIdx = generateRandomNumber(collectiveWisdom[prop].length);
      switch (prop) {
        case 'signInfo':
          personalMessage.push(`Your sign right now is: "${collectiveWisdom[prop][optionIdx]}".`);
          break;
        case 'fortuneOutput':
          personalMessage.push(`You are having: "${collectiveWisdom[prop][optionIdx]}".`);
          break;
        case 'advice':
          personalMessage.push(`You should: "${collectiveWisdom[prop][optionIdx]}".`);
          break;
        default:
          personalMessage.push('There is not enough info.');
      }
    }
    return personalMessage;
  }
  
  // Function to format and display the message
  function displayMessage() {
    const personalMessage = generateMessage();
    const formattedMessage = personalMessage.join('\n');
    document.getElementById('message').innerText = formattedMessage;
  }
  