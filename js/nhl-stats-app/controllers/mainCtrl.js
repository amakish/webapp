var nhlStatsApp = angular.module('nhlStatsApp', []);

nhlStatsApp.factory("Players", function() {
	var Players = {};

	// table data
	Players.data = [
			{
				id: 0,
				name: 'Sidney Crosby',
				team: 'PIT',
				pos: 'C',
				gp: 39,
				g: 20,
				a: 34,
				pts: 54,
				plusminus: 10,
				pim: 24,
				ppg: 6,
				shg: 0,
				gwg: 4,
				sog: 132,
				shtpct: 15.2,
				toiperg: '22:14',
				shftperg: 23.8,
				fopct: 51.4
			},
			{
				id: 1,
				name: 'Patrick Kane',
				team: 'CHI',
				pos: 'R',
				gp: 39,
				g: 22,
				a: 27,
				pts: 49,
				plusminus: 8,
				pim: 12,
				ppg: 9,
				shg: 0,
				gwg: 6,
				sog: 126,
				shtpct: 17.5,
				toiperg: '19:46',
				shftperg: 22.9,
				fopct: 25
			},
			{
				id: 2,
				name: 'Ryan Getzlaf',
				team: 'ANA',
				pos: 'C',
				gp: 36,
				g: 19,
				a: 25,
				pts: 44,
				plusminus: 19,
				pim: 15,
				ppg: 4,
				shg: 0,
				gwg: 6,
				sog: 94,
				shtpct: 20.2,
				toiperg: '20:55',
				shftperg: 25.2,
				fopct: 48.6
			}
		];

		return Players;
});

function PlayersCtrl($scope, Players) {
	
	$scope.players = Players;
	$scope.sort = {
		column: 'pts',
		descending: true
	};

	$scope.changeSorting = function(column) {
	
		var sort = $scope.sort;

		if (sort.column == column) {
			sort.descending = !sort.descending;
		} else {
			sort.column = column;
			sort.descending = false
		}
	
	};
}