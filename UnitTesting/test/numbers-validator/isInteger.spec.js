import NumbersValidator from "../../app/numbers_validator.js";
import { expect } from "chai";

describe("isInteger tests", () => {
  let numbersValidator;

  beforeEach(() => {
    numbersValidator = new NumbersValidator();
  });
  afterEach(() => {
    numbersValidator = null;
  });

  it("should return true for integers", () => {
    expect(numbersValidator.isInteger(5)).to.be.eql(true);
  });

  it("should return false for non-integer numbers", () => {
    expect(numbersValidator.isInteger(5.5)).to.be.equal(false);
  });

  it("should throw an error if input is not a number", () => {
    expect(() => {
      numbersValidator.isInteger("1");
    }).to.throw('[1] is not a number');
  });
});
