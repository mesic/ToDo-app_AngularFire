todoApp.controller("ToDoCtrl", function ($scope, FirebaseURL,FirebaseService, $firebase) {
    
    var model = {
        items: []
    };

    //Set Todo-list in sync
    $scope.loading  = true;
    $scope.todos = model;
    $scope.todos.items  = FirebaseService.syncTodos();

    //Loading image
    $scope.todos.items.$loaded().then(function(){
        $scope.loading = false;

    });

    // //Delete a ToDo
    $scope.deleteToDo = function (id) {
       FirebaseService.deleteToDo(id);
    }

    //Add new ToDo
    $scope.addNewItem = function (actionText) {
        FirebaseService.saveToDo(actionText);
    };
});