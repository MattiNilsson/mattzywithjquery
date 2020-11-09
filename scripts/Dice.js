import { prefabDice } from "./util.js";

export default class Dice{
  constructor(){
    this.diceCollection = prefabDice();
    this.createDice();
    this.start();
    this.avalibleScores = [{
      Aces : {avalible: false, score: 0},
    },{
      Twos : {avalible: false, score: 0},
    },{
      Threes : {avalible: false, score: 0},
    },{
      Fours : {avalible: false, score: 0},
    },{
      Fives : {avalible: false, score: 0},
    },{
      Sixes : {avalible: false, score: 0},
    }, ]
    console.log(this.avalibleScores);
  }

  start(){
    $(".roll").click(() => {this.rollDice()});
  }

  createDice(){
    $(".dice").empty();
    for(let i = 0; i < 5; i++){
      let num = this.diceCollection[i].nr;
      let img = this.diceCollection[i].locked ? `images/inverted-dice-${num}.svg` : `images/dice-six-faces-${num}.svg`
      $(".dice").append(`
        <img class="dice-${i} die" src=${img}>
      `)
      $(`.dice-${i}`).click(() => this.lockDice(i))
    }
  }

  lockDice(i){
    this.diceCollection[i].locked = !this.diceCollection[i].locked;
    let nr = this.diceCollection[i].nr;
    let img = this.diceCollection[i].locked ? `images/inverted-dice-${nr}.svg` : `images/dice-six-faces-${nr}.svg`
    $(`.dice-${i}`).attr("src", img)
  }

  rollDice(){
    const rerole = (i, real) => {
      if(!this.diceCollection[i].locked){
        let num = Math.floor(Math.random() * 6);
        this.diceCollection[i].nr = num + 1;
        if(!real){
          $(`.dice-${i}`).attr("src", `images/dice-six-faces-${num + 1}.svg`).css({
            position: "relative",
          })
          $(`.dice-${i}`).animate({
            top: num * 5 + 35 + "px",
          }, 100)
        }else{
          $(`.dice-${i}`).attr("src", `images/dice-six-faces-${num + 1}.svg`).css({
            position: "relative",
          })
          $(`.dice-${i}`).animate({
            top: 0,
          }, 100)
        }
        
      }
    }

    for(let i = 0; i < 5; i++){ 
      let interval = setInterval(() => {
        rerole(i, false)
      }, 100)
      setTimeout(() => {
        console.log("end")
        clearInterval(interval);
        rerole(i, true)
      }, 1000 + ((i + 1) * 120))
    }
    console.log(this.diceCollection)
  }

  avalibleTableScores(){
    
  }
}