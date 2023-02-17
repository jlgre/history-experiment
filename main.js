const hello = (name) => {
  return name ? `hello ${name}` : 'hello';
}

console.log(hello());
console.log(hello('luke'));
