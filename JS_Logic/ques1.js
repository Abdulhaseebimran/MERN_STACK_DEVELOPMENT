// merging two arrays of data fetched from seperate API's into a single list

const names = ['John', 'Paul', 'George', 'Ringo'];
const names2 = ['Ali', 'Ahmed', 'Asad', 'Kashif'];

const fullNames = [...names, ...names2];
console.log(fullNames);