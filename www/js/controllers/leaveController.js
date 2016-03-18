'use strict';
myApp.controller('leaveController', ['$scope', 'leaveService', '$cordovaCalendar', '$filter',
    '$http', '$stateParams', '$location', '$ionicPopup', '$ionicActionSheet', '$timeout', '$state',

    function($scope, leaveService, $cordovaCalendar, $filter, $http, $stateParams,
        $location, $ionicPopup, $ionicActionSheet, $timeout, $state) {

        var ID;
        var LeaveType;
        $scope.leaveHalf;
        $scope.loadLeaveData = function() {

            var leaveID = $stateParams.ID;
            var LeaveDetial = $stateParams.LeaveDetial;
            var LeaveTypeData = $stateParams.LeaveType;
            var LeaveTime = $stateParams.LeaveTime;
            var LeaveHalf = JSON.parse($stateParams.LeaveHalf);
            var LeaveStartDateTime = $stateParams.LeaveStartDateTime;
            var LeaveEndDateTime = $stateParams.LeaveEndDateTime;

            var setStartDate = LeaveStartDateTime;
            var setEndDate = LeaveEndDateTime;

            ID = leaveID;
            LeaveType = LeaveTypeData;
            $scope.remark = LeaveDetial;
            $scope.startDate = new Date(setStartDate);
            $scope.endDate = new Date(setEndDate);
            $scope.leaveHalf = LeaveHalf;
            $scope.Days = parseInt(LeaveTime);

            if ($scope.leaveHalf) {
                //alert($scope.leaveHalf);
                $scope.toggles = true;
                $scope.data.active = true;
            }

        }

        $scope.startDate = new Date(), 'dd/MM/yyyy';
        $scope.endDate = new Date(), 'dd/MM/yyyy';
        $scope.diffDays = 1;

        $scope.data = {
            active: false
        }

        $scope.LeaveType = function() {
            $scope.LeaveType = LeaveType;
        }

        $scope.deleteLeaveList = function() {
            alert("test");
            location.path('/views/leaveList')
        }

        $scope.toggle = function() {

            $scope.data.active = !$scope.data.active;

        }

        $scope.gotoEmp = function() {

            $location.path('/views/employeeDetail');
        }

        $scope.dateLeave = function(startDate, endDate) {

            //var oneDay = 24 * 60 * 60 * 1000; // hours*minutes*seconds*milliseconds

            $scope.diffDays = parseInt((endDate - startDate) / 86400000 + 1);

            if (endDate < startDate) {

                $scope.diffDays = "Please choose End Date";
            }

        }

        $scope.datas = function(startDate, endDate) {

            if ($scope.data.active) {
                $scope.diffDays = 0;
                return true;
            } else {

                $scope.diffDays = parseInt((endDate - startDate) / 86400000 + 1);

                if (endDate < startDate) {

                    $scope.diffDays = "Please choose End Date";
                }
                return false;
            }

        }


        $scope.sendLeave = function(LeaveType, remark, startDate, endDate, diffDays) {

            var halfDay;

            if ($scope.data.active) {
                halfDay = true;
            } else {
                halfDay = false;
            }

            var leaveData = {

                ID: ID,
                Email: "",
                LeaveType: parseInt(LeaveType),
                LeaveDetial: remark,
                LeaveStartDateTime: startDate,
                LeaveEndDateTime: endDate,
                LeaveHalf: halfDay,
                LeaveTime: diffDays,
                ApproveStatus: "W",
            };

            leaveService.createLeaves(leaveData).then(function(response) {
                //alert("Susscess");

                $ionicPopup.alert({
                    title: 'Success',
                    content: '<div class="text-center"><i class="ion-checkmark-circled" style="font-size: 50px; color: #66FF33; " ></i></div>',
                    buttons: [{
                        text: '<b>OK</b>',
                        type: 'button-positive',
                    }]
                }).then(function(res) {
                    $location.path('/views/employeeDetail');
                });


            }, function(error) {
                alert(error.data.Message);
            });

        }
        $scope.remark = "";

        $scope.saveLeave = function(LeaveType, remark, startDate, endDate, diffDays) {

            var halfDay;

            if ($scope.data.active) {
                halfDay = true;
            } else {
                halfDay = false;
            }

            var leaveData = {

                ID: ID,
                Email: "",
                LeaveType: parseInt(LeaveType),
                LeaveDetial: remark,
                LeaveStartDateTime: startDate,
                LeaveEndDateTime: endDate,
                LeaveHalf: halfDay,
                LeaveTime: diffDays,
                ApproveStatus: "S",
            }

            leaveService.createLeaves(leaveData).then(function(response) {
                //alert("Susscess");

                $ionicPopup.alert({
                    title: 'Success',
                    content: '<div class="text-center"><i class="ion-checkmark-circled" style="font-size: 50px; color: #66FF33; " ></i></div>',
                    buttons: [{
                        text: '<b>OK</b>',
                        type: 'button-positive',
                    }]
                }).then(function(res) {
                    if (!res) {
                        $location.path('/views/leaveList');
                    }
                });

            }, function(error) {
                alert(error.data.Message);
            });

        }

        $scope.check = function(startDate) {

            var checkDate = new Date();
            var resultsDatesInDay = parseInt((startDate - checkDate) / 86400000 + 2);

            if (resultsDatesInDay < 1) {
                return true;
            }
        }

        $scope.showActionSheet = function(getLeavesData) {
            var getLeavesData = getLeavesData;
            // Show the action sheet
            var hideSheet = $ionicActionSheet.show({
                buttons: [
                    { text: '<center><i class="ion-compose"> </i> Edit</center>' },
                    { text: '<center><div class="font-red"><i class="ion-trash-a"> </i> Delete<div></center>' }
                ],
                // destructiveText: '<center><i class="ion-trash-a"> </i> Delete</center>',
                titleText: '<center>Setting</center>',
                // cancelText: 'Cancel',
                cancel: function() {
                    // add cancel code..
                },
                buttonClicked: function(index) {


                    if (index === 0) {

                        $state.go('leaveDraft', {

                            ID: getLeavesData.ID,
                            LeaveDetial: getLeavesData.LeaveDetial,
                            LeaveEndDateTime: getLeavesData.LeaveEndDateTime,
                            LeaveHalf: getLeavesData.LeaveHalf,
                            LeaveStartDateTime: getLeavesData.LeaveStartDateTime,
                            LeaveTime: getLeavesData.LeaveTime,
                            LeaveType: getLeavesData.LeaveType,

                        });

                    } else if (index === 1) {

                        $scope.remark = "";

                        var halfDay;

                        if ($scope.data.active) {
                            halfDay = true;
                        } else {
                            halfDay = false;
                        }


                        var leaveData = {

                            ID: String(getLeavesData.ID)
                        };

                        var aa = JSON.stringify(leaveData);
                        console.log(aa);

                        leaveService.deleteLeaves(leaveData).then(function(response) {
                            alert("Susscess");

                            $ionicPopup.alert({
                                title: 'Success',
                                content: '<div class="text-center"><i class="ion-checkmark-circled" style="font-size: 50px; color: #66FF33; " ></i></div>',
                                buttons: [{
                                    text: '<b>OK</b>',
                                    type: 'button-positive',
                                }]
                            }).then(function(res) {
                                $location.path('/views/leaveList');
                            });


                        }, function(error) {
                            alert(error.data.Message);
                        });
                    }
                },
                destructiveButtonClicked: function(getLeavesData) {


                }
            });

            // For example's sake, hide the sheet after two seconds
            // $timeout(function() {
            //     hideSheet();
            // }, 3000);

        };
        // leaveService.createLeaves().then(function(results) {

        //     $scope.createLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.updateLeavesData().then(function(results) {

        //     $scope.updateLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.approveLeavesData().then(function(results) {

        //     $scope.approveLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.rejectLeavesData().then(function(results) {

        //     $scope.rejectLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        leaveService.getLeavesByEmail().then(function(results) {

            $scope.getLeavesData = results.data;


        })


        // leaveService.deleteLeavesData().then(function(results) {

        //     $scope.deleteLeavesData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.getLeaveDraftsData().then(function(results) {

        //     $scope.getLeaveDraftsData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

        // leaveService.createLeaveDraftsData().then(function(results) {

        //     $scope.createLeaveDraftsData = results.data;

        // }, function(error) {
        //     alert(error.data.message);
        // })

    }
]);
