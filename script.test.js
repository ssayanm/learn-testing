const googleSearch = require("./script");

dbMock = ["dog.com", "aflowers.com", "banimals.com", "dogimages.com"];

describe("googleSearch", () => {
  it("this is a silly test", () => {
    expect("hello").toBe("hello");
    //googleSearch("testssss", dbMock);
  });

  it("is searching duckduckdo", () => {
    expect(googleSearch("testtest", dbMock)).toEqual([]);
    expect(googleSearch("d", dbMock)).toEqual(["dog.com", "dogimages.com"]);
  });

  it("work with undefined and null input", () => {
    expect(googleSearch(undefined, dbMock)).toEqual([]);
    expect(googleSearch(null, dbMock)).toEqual([]);
  });

  it("does not return more than 2 matches", () => {
    expect(googleSearch(".com", dbMock).length).toEqual(2);
  });
});
