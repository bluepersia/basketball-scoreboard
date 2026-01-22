

export default class ScoreCol 
{
    score = 0
    el = null
    scoreEl = null
    addOneBtn = null
    addTwoBtn = null
    addThreeBtn = null
    constructor (el)
    {
        this.el = el;
        this.scoreEl = el.querySelector("[data-score]");
        this.addOneBtn = el.querySelector("[data-add-one]");
        this.addTwoBtn = el.querySelector("[data-add-two]");
        this.addThreeBtn = el.querySelector("[data-add-three]");

        this.registerEvents ();
    }

    registerEvents ()
    {
        this.addOneBtn.addEventListener ("click", () => this.setScore (this.score + 1));
        this.addTwoBtn.addEventListener ("click", () => this.setScore (this.score + 2));
        this.addThreeBtn.addEventListener ("click", () => this.setScore (this.score + 3));
    }
    

    setScore (value)
    {
        this.score = value;
        this.scoreEl.textContent = value;
    }
}