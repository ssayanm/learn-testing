const googleSearch = require("./script");

dbMock = ["dog.com", "aflowers.com", "banimals.com", "dogimages.com"];

it("this is a silly test", () => {
  expect("hello").toBe("hello");
  //googleSearch("testssss", dbMock);
});

it("is searching duckduckdo", () => {
  expect(googleSearch("testtest", dbMock)).toEqual([]);
  expect(googleSearch("d", dbMock)).toEqual(["dog.com", "dogimages.com"]);
});
