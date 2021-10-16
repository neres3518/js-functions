// NOTE: caso a string possuir espaço, o hash gerado vai ser negativo
const generate = str => {
  var hash = 0, i, str;
  if (str.length === 0) return hash;
  for (i = 0; i < str.length; i++) {
    chr   = str.charCodeAt(i);
    hash  = ((hash << 5) - hash) + chr;
    hash |= 0; // Convert to 32bit integer
  }
  return hash;
  // return (parseInt(hash) < 0) ? hash * -1 : hash ; //--> para sempre gerar positivo (diminui a segurança)
};

console.log(generate('aaa aa'));
