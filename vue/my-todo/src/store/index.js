import Vue from 'vue';
import Vuex from 'vuex'

Vue.use(Vuex)

const storage = {
    fetch() {
        const arr = [];

        if (localStorage.length > 0) {
            for (var i = 0; i < localStorage.length; i++) {
                var item = localStorage.key(i);
                arr.push(item)
            }
        }
        return arr;
    }

}

export default new Vuex.Store({
    state: {
        todoItems: storage.fetch() | []
    },
    mutations: {
        addTodoItem: function(state, value) {
            // 데이터를 저장소에 추가
            localStorage.setItem(value, value);
            // 데이터를 뷰 인스턴스의 데이터 속성에 추가 (배열에 추가)
            // this.todoItems.push(value);
            state.todoItems.push(value);
        },
        // removeTodoItem(state, {todoItem, index}){
        // obj로 넘어온 것을 받을 때 위와 같이 받아서 쓸 수 있다.
        // destructuring 이라는 문법임ㅎㅎ
        // },
        removeTodoItem: function(todoItem, index) {
            localStorage.removeItem(todoItem);
            this.todoItems.splice(index, 1);
        },
        clearAllTodoItems: function() {
            localStorage.clear();
            this.todoItems = [];
        }
    },

})