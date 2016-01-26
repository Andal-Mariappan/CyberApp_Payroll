myApp.controller('employeeController', ['$scope', 'employeeService', '$cordovaSocialSharing', '$location', '$timeout', '$ionicLoading', function($scope, employeeService, $cordovaSocialSharing, $location, $timeout, $ionicLoading) {




     



    // $scope.employeeData = [];

    // employeeService.getEmployeeByEmail().then(function(results) {

    //         $scope.employeeData = results.data;

    //     }, function(error) {
    //         alert(error.data.message);
    //     })
    $scope.shareCard = function() {

        $location.path('/views/captureShareCard');




        $timeout(function() {
            var imageLink;
            console.log('Calling from CapturePhoto');
            navigator.screenshot.save(function(error, res) {
                if (error) {
                    console.error(error);
                } else {
                    console.log('ok', res.filePath); //should be path/to/myScreenshot.jpg
                    //For android
                    imageLink = res.filePath;
                    window.plugins.socialsharing.share(null, null, 'file://' + imageLink, null);

                    //For iOS
                    //window.plugins.socialsharing.share(null, null, imageLink, null)
                    $location.path('/views/capture');

                }
            }, 'jpg', 50, 'myScreenShot');

        }, 300);



    }


    $scope.var = 1;
    $scope.click = function(num) {
        $scope.var = num;
    }



    $scope.chkIn = [{
        chkInDate: "01 December 2015",
        chkInTime: "09:02 AM",
        chkOutTime: "07:28 PM"
    }, {
        chkInDate: "02 December 2015",
        chkInTime: "08:44 AM",
        chkOutTime: "07:59 PM"
    }, {
        chkInDate: "03 December 2015",
        chkInTime: "08:24 AM",
        chkOutTime: "07:38 PM"
    }, {
        chkInDate: "04 December 2015",
        chkInTime: "09:32 AM",
        chkOutTime: ""
    }]

    $scope.leaved = [{
        leaveType: "Sick Leave",
        leaveStartDate: "01 December 2015",
        leaveDetail: "ท้องเสีย"
    }, {
        leaveType: "Personal Leave",
        leaveStartDate: "24 December 2015",
        leaveDetail: "ไปทำใบขับขี่"
    }]

    $scope.request = [{
        leaveType: "Sick Leave",
        leaveStartDate: "15 December 2015",
        leaveDetail: "ไปพบแพทย์เพื่อ Follow Up",
        leaveStatus: "A"
    }, {
        leaveType: "Personal Leave",
        leaveStartDate: "24 December 2015",
        leaveDetail: "ไปทำใบขับขี่",
        leaveStatus: "W"
    }, {
        leaveType: "Personal Leave",
        leaveStartDate: "28 December 2015",
        leaveDetail: "ไปทำบัตรประชาชน",
        leaveStatus: "W"
    }]


    $scope.adjust = [{
        adjustDate: "07 December 2015",
        adjustDetail: "ลืมโทรศัพท์ไว้ที่บ้าน",
        adjustStatus: "R"
    }, {
        adjustDate: "17 December 2015",
        adjustDetail: "on site @true",
        adjustStatus: "A"
    }];

    $scope.empData = [{
        ID : "01",
        Image : "",
        FirstName : "Nuttakrittra",
        LastName : "Phumsawai",
        JobTitle : "Programmer",
        OfficeAddress : "",
        Tel : "0945506035",
        Facebook : "/tingtang.th",
        Line : "tingtang35",
        Email : "tingtang35@gmail.com",
        WorkTimes : "",
        Request :  ""
    }]


    // Chart.js
    $scope.dataSummary = [{
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
    }



}]);
