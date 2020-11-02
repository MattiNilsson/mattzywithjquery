export default class Player{
    constructor(name){
        this.name = name;
        this.score = 0;
        this.dice = 0;
        this.board = {
            aces : false,
            twos : false,
            threes : false,
            fours : false,
            fives : false,
            sixes : false,
            bonus : false,
            pair : false,
            two_pair : false,
            three_of_a_kind : false,
            four_of_a_kind : false,
            small_straight : false,
            large_straight : false,
            full_house : false,
            chance : false,
            yatzy : false
        }
    }
}