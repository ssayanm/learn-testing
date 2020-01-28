const googleDatabase = ["dogs.com", "doggy.com", "soup.com"];

const googleSearch = (searchInput, db) => {
  const matches = db.filter(website => {
    return website.includes(searchInput);
  });
  return matches.length > 2 ? matches.slice(0, 2) : matches;
};
//console.log(googleSearch("dogs", googleDatabase));

module.exports = googleSearch;
