//Arrange
const functions = {
 stringLength: (string) => {
    // Act
     if(string.length >= 1 && string.length <= 10) {
         return string.length;
     } else {
         throw 'The string is too short or too long';
     }
 },

 //Arrange
 reverseString: (string) => {
// Act
    let reverseString = string.split("").reverse().join(""); 
   return reverseString;
}
};

class calculator {
    constructor(num, numb){
        this.num = num;
        this.numb = numb;
    }
    static add (one, two) {
        return one + two;
    }

    static subtract(one, two) {
      return  one - two;
    }
    static divide(one, two){
        return one / two;
    }
    static multiply(one, two){
        return one * two;
    }
}


describe('Addition', () => {
    test('adds 3 and 2', () => {
      expect(calculator.add(3, 2)).toEqual(5);
    });

    test('adds 6 and 4', () => {
        expect(calculator.add(6, 4)).toEqual(10);
      });

      test('adds 6 and 6', () => {
        expect(calculator.add(6, 6)).toEqual(12);
      });
 });
 describe('subtraction', () => {
    test('subtracts 3 from 5', () => {
      expect(calculator.subtract(5, 3)).toEqual(2);
    });

    test('subtracts 10 from 35', () => {
        expect(calculator.subtract(35, 10)).toEqual(25);
      });

      test('subtracts 1 from 5', () => {
        expect(calculator.subtract(5, 1)).toEqual(4);
      });
 });

 describe('division', () => {
    test('divides 60 by 10', () => {
      expect(calculator.divide(60, 10)).toEqual(6);
    });

    test('divides 6 by 2', () => {
        expect(calculator.divide(6, 2)).toEqual(3);
      });

      test('divides 30 by 10', () => {
        expect(calculator.divide(30, 10)).toEqual(3);
      });
});
  
describe('multiplication', () => {
    test('multiplies 5 by 3', () => {
      expect(calculator.multiply(5, 3)).toEqual(15);
    });

    test('multiplies 2 by 8', () => {
        expect(calculator.multiply(2, 8)).toEqual(16);
      });

      test('multiplies 12 by 2', () => {
        expect(calculator.multiply(12, 2)).toEqual(24);
      });
  
  });

  const capitalize = (string) => {
      const str = string.charAt(0).toUpperCase() + string.slice(1);
      return str;
  }
describe('capital', () => {
    it('returns the string with first letter capitalized', () => {
        const string = 'kelly';
    expect(capitalize(string)).toMatch('Kelly');
    })
})

module.exports = functions;

        
    
  