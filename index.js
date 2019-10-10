const { dancersPool, participants } = require('./test')

const findTheDancer = (participants, dancersPool) => {
  // Your code here: 
  
  let okCouples = []
  for (let i of participants) {
    for (let y of participants) {
      if (i.style == y.style && i !== y) {
        okCouples.push(i.style)
      }
    }
  } 
  let notOkCouples = []
  let notOkDancer
  for (let x of participants) {
    if (!okCouples.includes(x.style)) {
      notOkCouples.push(x.style)
      notOkDancer = x.name
    }
  }

  let potential = dancersPool[notOkCouples[0]]

  if (notOkDancer.toUpperCase() == notOkDancer) {
    for (let v = 0; v < potential.length; v++) {
      if(potential[v].toUpperCase() != potential[v]) {
        return potential[v]
      }
    }
  }


}

module.exports = {
  findTheDancer,
};