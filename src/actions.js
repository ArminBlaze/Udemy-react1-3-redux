export function rnd () {
  return {
    type: 'RND',
    value: Math.floor( Math.random() * 10 ) + 1
  }
}

export function inc () {
  return {type: 'INC'}
}

//другой вариант - через стрелки. Но его нужно объявить до использования.
// const inc = () => ({type: 'INC'});

export function dec () {
  return {type: 'DEC'}
}