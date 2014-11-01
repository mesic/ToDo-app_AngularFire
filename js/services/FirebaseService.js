todoApp.service('FirebaseService', function (FirebaseURL, $firebase) {
    
    //Initialize Firebase with custom URL for Todos
    var fb = new Firebase(FirebaseURL + "/todos");
    var sync = $firebase(fb); 

    //Get all ToDos and keep them in sync
    this.syncTodos = function () {
        return sync.$asArray();
    }

    //Save ToDo
    this.saveToDo = function (action) {
        return sync.$push({
            "action": action, 
            "done":false
        });
    }

    //Delete ToDo
    this.deleteToDo = function (id) {
        sync.$remove(id);
    }
});