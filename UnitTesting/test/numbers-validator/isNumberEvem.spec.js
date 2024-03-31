import NumbersValidator from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isNumberEven tests", () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });
  afterEach(() => {
    numbersValidator = null;
  });

  it("should return true for even numbers", () => {
    expect(numbersValidator.isNumberEven(2)).to.be.equal(true);
  });

  it("should return false for odd numbers", () => {
    expect(numbersValidator.isNumberEven(3)).to.be.equal(false);
  });

  it("should throw an error if input is not a number", () => {
    expect(() => {
      numbersValidator.isNumberEven("abc");
    }).to.throw('[abc] is not of type "Number" it is of type "string"');
  });
});
