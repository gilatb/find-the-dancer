require('chai').should();

const { findTheDancer } = require('./index');

participants = [
  { name: "Sarah", style: "Bachata" },
  { name: "Olivia", style: "Merengue" },
  { name: "Roni", style: "Salsa" },
  { name: "NOAH", style: "Tango" },
  { name: "Sophia", style: "Kizomba" },
  { name: "ALBERT", style: "Salsa" },
  { name: "SHIMI", style: "Merengue" },
  { name: "JACOB", style: "Kizomba" },
  { name: "HARRY", style: "Pachanga" },
  { name: "Sarah", style: "Tango" },
  { name: "RICARDO", style: "Bachata" },
];

dancersPool = {
  Bachata: ["JOSE", "XAVIAR", "Mila"],
  Kizomba: [],
  Salsa: ["Maya", "ANTONIO"],
  Merengue: ["ANDRES", "JUAN"],
  Pachanga: ["CARLOS", "Lorenza", "Lola"],
  Tango: ["Monica"]
};

describe('Find the dancer', function () {
  it('Should return the name of the correct dancer', function () {
    findTheDancer(participants, dancersPool).should.equal("Lorenza");
  })

  it('Should be a string', function () {
    findTheDancer(participants, dancersPool).should.be.a('string');
  })

  it('Should not be null', function () {
    findTheDancer(participants, dancersPool).should.not.be.a('null');
  })
});

module.exports = { dancersPool, participants }