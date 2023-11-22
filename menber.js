function skillsMenber() {
    return {
        restrict: 'E',
        templateUrl: 'modules/skills/views/menber.html',
        controller: 'SkillsMenberController',
        controllerAs: 'vm',
        vinToController: true,
        scope: {
            menber: '='
        }
    };
}