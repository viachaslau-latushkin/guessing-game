class GuessingGame {
    constructor() {
    	this.result = 0;
    	return this;
	}

    setRange(min, max) {
		this.min = min;
		this.max = max;
		this.result =  Math.ceil(this.max / 2);
		return this;
    }

    guess() {
    	return this.result;
    }

    lower() {
    	this.max = this.result;
    	this.result = Math.ceil((this.min + this.max) / 2);
    }

    greater() {
    	this.min = this.result;
		this.result = Math.ceil((this.min + this.max) / 2);
    }
}

module.exports = GuessingGame;