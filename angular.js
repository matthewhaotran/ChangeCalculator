angular.module('app', []);
angular
	.module('app')
	.controller('mainCtrl', mainCtrl);

function mainCtrl() {
	var vm = this;
    vm.message = 'Hello, Cohort 12! If you can see this, Angular is working!';

    vm.denominations = {
      oneDollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1
    };

    vm.amtDue = $('#cost').val();
    vm.amtGiven = $('#given').val();
    
}