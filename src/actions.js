export function rnd (value) {
  return {
    type: 'RND',
    value
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