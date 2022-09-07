const shuffle = require(".");

const testArray = [2, 11, 37, 42, "string", { some: "object" }];

describe("shuffle", () => {
  it("should shuffle a given array", () => {
    const shuffledArray = shuffle(testArray);
    expect(shuffledArray).toIncludeSameMembers(testArray);
  });

  it.each(["string", {}, 1, null, false, undefined])(
    "should throw if a non-array is passed as a param",
    (argument) => {
      expect(() => shuffle(argument)).toThrowError("Input is not an array");
    }
  );
});
