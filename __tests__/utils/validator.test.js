const { dateStringValidator } = require("../../utils/validator");

describe("dateValidator", () => {
  it("should be a valid data", () => {
    const value = "2020-08-29";
    const param = { name: "date-field" };
    const validation = dateStringValidator(value, param);

    expect(validation.valid).toBe(true);
  });

  it("cannot be an obect", () => {
    const value = { date: "2020-09-20" };
    const param = { name: "date-field" };
    const validation = dateStringValidator(value, param);

    expect(validation.valid).toBe(false);
    expect(validation.message).toMatch(/date-field/);
  });

  it("cannot be character strings", () => {
    const value = "xyzws";
    const param = { name: "date-field" };
    const validation = dateStringValidator(value, param);

    expect(validation.valid).toBe(false);
    expect(validation.message).toMatch(/date-field/);
  });

  it("cannot be an invalid date field", () => {
    const value = "2019-01-";
    const param = { name: "date-field" };
    const validation = dateStringValidator(value, param);

    expect(validation.valid).toBe(false);
    expect(validation.message).toMatch(/date-field/);
  });

  it("should not be null", () => {
    const value = null;
    const param = { name: "date-field" };
    const validation = dateStringValidator(value, param);

    expect(validation.valid).toBe(false);
    expect(validation.message).toMatch(/date-field/);
  });

  it("should not be a number", () => {
    const value = 2020;
    const param = { name: "date-field" };
    const validation = dateStringValidator(value, param);

    expect(validation.valid).toBe(false);
    expect(validation.message).toMatch(/date-field/);
  });
});
