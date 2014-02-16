/**
 * Generating Header-Buttons.
 *
 * Example "Link-Button":
 *
 * `$scope.leftButtons = headerButton.link({
 *   path: '/foo/bar',
 *   label: 'Foobar',
 *   icon: 'ion-ios7-arrow-right'
 *  });`
 */
angular.module('lunchroulette')

.factory('headerButton', ['$location', function ($location) {
  return {

    /**
     * Generates the Link-Button-Object
     *
     * @param  {Object} args         Link-Button-Options
     * @param  {String} [args.path]  The link-target (default: '/')
     * @param  {String} [args.label] The button-label (default: '')
     * @param  {String} [args.icon]  The button-icon as Ionicons-classname (default: 'ion-ios7-arrow-left')
     * @return {Array}               The button-object wrapped inside an array
     */
    link: function link(args) {

      var defaults = {
          path: '/',
          label: '',
          icon: 'ion-ios7-arrow-left'
        },
        opts = angular.extend({}, defaults, args);

      return [{
        type: 'button-positive' + (opts.icon ? ' button-icon' : ''),
        content: (opts.icon ? '<i class="' + opts.icon + '"></i>' : '') + ' ' + (opts.label || ''),
        tap: function tap() {
          $location.path(opts.path);
        }
      }];

    }

  };
}]);