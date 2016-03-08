(function() {
  'use strict';

  angular
    .module('event')
    .directive('createEvent', createEvent);

  /** @ngInject */
  function createEvent() {
    var directive = {
      restrict: 'E',
      templateUrl: 'app/components/createEvent/createEvent.html',
      controller: CreateEventController,
      controllerAs: 'event',
      bindToController: true
    };

    return directive;

    /** @ngInject */
    function CreateEventController() {
    }
  }

})();