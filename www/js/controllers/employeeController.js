myApp.controller('employeeController', ['$scope', 'employeeService', function($scope, employeeService) {


    // $scope.employeeData = [];

    // employeeService.getEmployeeByEmail().then(function(results) {

    //         $scope.employeeData = results.data;

    //     }, function(error) {
    //         alert(error.data.message);
    //     })

    $scope.var = 1;
    $scope.click = function(num) {
        $scope.var = num;
    }





    // Chart.js
    $scope.data = [{
        value: 14,
        color: '#00DD00',
        highlight: '#00FF00',
        label: 'Work'
    }, {
        value: 3,
        color: '#FF9900',
        highlight: '#FF9900',
        label: 'Leave'
    }, {
        value: 13,
        color: '#BBBBBB',
        highlight: '#DDDDDD',
        label: 'Day'
    }];

    // Chart.js Options
    $scope.options = {

        // Sets the chart to be responsive
        responsive: true,

        //Boolean - Whether we should show a stroke on each segment
        segmentShowStroke: false,

        //String - The colour of each segment stroke
        segmentStrokeColor: '#FFFFFF',

        //Number - The width of each segment stroke
        segmentStrokeWidth: 0,

        //Number - The percentage of the chart that we cut out of the middle
        percentageInnerCutout: 50, // This is 0 for Pie charts

        //Number - Amount of animation steps
        animationSteps: 100,

        //String - Animation easing effect
        animationEasing: 'easeOutBounce',

        //Boolean - Whether we animate the rotation of the Doughnut
        animateRotate: true,

        //Boolean - Whether we animate scaling the Doughnut from the centre
        animateScale: true,

        //String - A legend template
        legendTemplate: '<ul class="tc-chart-js-legend"><% for (var i=0; i<segments.length; i++){%><li><span style="background-color:<%=segments[i].fillColor%>"></span><%if(segments[i].label){%><%=segments[i].label%><%}%></li><%}%></ul>'
    };

}]);
