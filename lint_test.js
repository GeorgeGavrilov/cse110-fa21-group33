const helloYou = (name) => {
  let something = name;
  something = 'you' || name;
  console.log(`hello${something}!`);
};

console.log(helloYou);
