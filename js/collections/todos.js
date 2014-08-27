/**
 * Created by malinovsky on 8/15/2014.
 */

var app = app || {}

var TodoList = Backbone.Collection.extend({
    model: app.Todo,
    localStorage: new Backbone.LocalStorage('todos-backbone'),
    completed: function () {
        return this.where({completed: true});
    },
    remaining: function () {
        return this.where({completed: false});
    },
    nextOrder: function () {
        if (!this.length) {
            return 1
        }
        return this.last().get('order') + 1
    },
    comparator: function (todo) {
        return todo.get('order');
    }
});
app.Todos = new TodoList()
