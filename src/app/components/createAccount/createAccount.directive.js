(function() {
  'use strict';

  angular
    .module('event')
    .directive('createAccount', createAccount);

  /** @ngInject */
  function createAccount() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/createAccount/createAccount.html',
      controller: CreateAccountController,
      controllerAs: 'account',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CreateAccountController() {
    }
  }

})();