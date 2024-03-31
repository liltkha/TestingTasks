import NumbersValidator from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isAllNumbers tests", () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });
  afterEach(() => {
    numbersValidator = null;
  });

  it("should return true if all elements are numbers", () => {
    expect(numbersValidator.isAllNumbers([1, 2, 3, 4])).to.be.eql(true);
  });

  it("should return false if any element is not a number", () => {
    expect(numbersValidator.isAllNumbers(["a", 2, 3, 4])).to.be.eql(false);
  });

  it("should throw an error if input is not an array", () => {
    expect(() => {
      numbersValidator.isAllNumbers("abc");
    }).to.throw('[abc] is not an array');
  });
});
