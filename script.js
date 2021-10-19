import angular from 'angular';

angular.module('checklist', [])

.controller('MainCtrl', function($scope) {

  //Initializing the list object with standard Breeze startup items
  //Defaulted the 'done' element to false so the itema remains undone
  $scope.list = [
  {text:'Start Breeze!', done:true},
  {text:'Add Owner', done:false},
  {text:'Add Property', done:false},
  {text:'Add Bank Account', done:false},
  {text:'Set Up Late Fees', done:false},
  {text:'Add Units', done:false},
  {text:'Add Tenants', done:false},
  {text:'Add Recurring Charges', done:false},
  {text:'Publish Property to RENTCafe', done:false},
  {text:'Add Vendors', done:false},
  {text:'Set Up Beginning Balances', done:false},
  {text:'Enter Existing Security Deposits', done:false},
  ];

  //Function used to push itemText pulled from model to the list object
  $scope.addItem = function(){
    $scope.list.push({text: $scope.itemText, done: false})
  }
});
