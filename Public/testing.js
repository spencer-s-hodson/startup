// this is for the JS arrays assignment
function arrays() {
    function testAll(input_array, arrowFn) {
        return input_array.every(arrowFn);
    }  
    
    const result = testAll(["hello", "world", "I", "love", "coding"], (array) => array.length > 3);
    console.log(result);
    
}

// this if for the JS objects and classes assignment
class Phone {
    constructor(regEx) {
      // Implement the constructor
      this.regEx = regEx
    }
  
    // Implement the Connected constant getter
    static get Connected() {
        return "connected";
    }
    connect(...numberParts) {
      // Return an object if the number matches the regEx
      // Otherwise thrown an exception
      const id = idParts.join("-")
      const r = this.regEx.test(id)
      if (!r) {
        throw new Error("invalid number")
      }
      return { id: id, result: Phone.Connected }
    }
  }
  
  const phone = new Phone(/\d{3}-\d{3}-\d{4}/);
  
  const calls = [
    { name: 'Li', number: ['333', '333', '3333'] },
    { name: 'Juan', number: ['222', '222', '2222'] },
    { name: 'Meg', number: ['8E26F', '811F'] },
  ];
  
  for (const call of calls) {
    try {
      const { result } = phone.connect(...call.number);
      if (result === Phone.Connected) {
        console.log(`called ${call.name}`);
      }
    } catch (ex) {
      console.log(`${ex.message} for ${call.name}`);
    } finally {
      console.log('done');
    }
  }
  
