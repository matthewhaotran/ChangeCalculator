angular.module('app', []);
angular
	.module('app')
	.controller('mainCtrl', mainCtrl);

function mainCtrl() {
	var vm = this;

    vm.denominations = {
      oneDollar: 100,
      quarter: 25,
      dime: 10,
      nickel: 5,
      penny: 1
    };

    vm.calculate = function (cost, given) {
    vm.amtDue = Math.floor($('#cost').val() * 100);
    vm.amtGiven = Math.floor($('#given').val() * 100);
    vm.change = vm.amtGiven - vm.amtDue;
    vm.dollars = Math.floor(vm.change / vm.denominations.oneDollar);
    vm.change -= (vm.dollars * vm.denominations.oneDollar);
    vm.quarters = Math.floor(vm.change / vm.denominations.quarter);
    vm.change -= (vm.quarters * vm.denominations.quarter);
    vm.dimes = Math.floor(vm.change / vm.denominations.dime);
    vm.change -= (vm.dimes * vm.denominations.dime);
    vm.nickels = Math.floor(vm.change / vm.denominations.nickel);
    vm.change -= (vm.nickels * vm.denominations.nickel);
    vm.pennies = Math.floor(vm.change / vm.denominations.penny);
    vm.change -= (vm.pennies * vm.denominations.penny);
    }

}