(function() {
	var name = "myApp",
		requires = [];
		myApp = null;

	myApp = angular.module(name, requires);

	myApp.service("addSvc", function(){
		this.add = function(firstNum, secondNum){
			return parseInt(firstNum) + parseInt(secondNum);
		}
	});

	myApp.service("subtractSvc", function(){
		this.subtract = function(firstNum, secondNum){
			return parseInt(firstNum) - parseInt(secondNum);
		}
	});

	myApp.controller("AppCtrl", function(addSvc, subtractSvc){
		this.operator = "+";

		this.setOperation = function(operator){
			this.operator = operator;
		}

		this.calculate = function(firstNum, secondNum) {
			if (this.operator === "+"){
				this.result = addSvc.add(firstNum, secondNum);
			} else if (this.operator === "-") {
				this.result = subtractSvc.subtract(firstNum, secondNum);
			}
		}
	});
}());