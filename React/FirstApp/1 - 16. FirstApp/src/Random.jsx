function Random() {
  let randNumber = Math.random() * 100;
  return <h2 >Random# {Math.round(randNumber)}</h2>
}

export default Random;