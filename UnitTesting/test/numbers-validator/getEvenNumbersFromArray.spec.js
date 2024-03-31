import NumbersValidator from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("getEvenNumbersFromArray tests", () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });
  afterEach(() => {
    numbersValidator = null;
  });

  it("should return an array of even numbers", () => {
    expect(numbersValidator.getEvenNumbersFromArray([1, 2, 3, 4])).to.be.eql([
      2, 4,
    ]);
  });

  it("should throw an error if input is not an array of numbers", () => {
    expect(() => {
      numbersValidator.getEvenNumbersFromArray(["1"]);
    }).to.throw('[1] is not an array of "Numbers"');
  });
});
