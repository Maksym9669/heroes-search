import data from "./data.json";

export default function filterHeroes(searchTerm, maxResults) {
  return data
    .filter(elem => {
      if (elem.name.toLowerCase().includes(searchTerm.toLowerCase())) {
        return true;
      }
      if (elem.keywords.includes(searchTerm.toLowerCase())) {
        return true;
      }
      return false;
    })
    .slice(0, maxResults);
  //   return (

  //   )
}
