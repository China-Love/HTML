var App = new Vue({
    el: '#app',
    data: {
        message: 'Hello Vue!'
    }
})

var app2 = new Vue({
    el: '#app-2',
    data: {
      message: '页面加载于 ' + new Date().toLocaleString()
    }
  })
var app4 = new Vue({
    el: '#app-4',
    data: {
      todos: [
        { text: '学习 JavaScript' },
        { text: '学习 Vue' },
        { text: '整个牛项目' }
      ]
    }
})

var app5 = new Vue({
  el: '#app-5',
  data: {
    message: 'Hello Vue.js!',
    
  },
  methods: {
    reverseMessage: function () {
      this.message = this.message.split('').reverse().join('')
    }
  }
})


var app6 = new Vue({
  el: '#app-6',
  data: {
    message: 'Hello Vue!',
    rawHtml: "<h1>la</h1>"
  }
})


Vue.component('todo-item', {
  props: ['todo'],
  template: '<li>{{ todo.text }}</li>'
})

var app7 = new Vue({
  el: '#app-7',
  data: {
    groceryList: [
      { id: 0, text: '蔬菜' },
      { id: 1, text: '奶酪' },
      { id: 2, text: '随便其它什么人吃的东西' }
    ]
  }
})


new Vue({
  el: "#app-9",
  data: {
    ok:'username'
  },
  methods: {
  toggle: function(todo){
      if(this.ok==='username'){
      this.ok = 'psd'
    }else{
      this.ok = 'username';
    }
  }
  }
})


new Vue({
  el: "#app-10",
  data: {
  items:['a','b','c']
  },
  methods: {
    toggle: function(todo){
        todo.done = !todo.done
    }
  }
  })

  new Vue({
    el: "#app-11",
    data: {
      isOK:'true',
          items:['香蕉','苹果','烤肉'],
      pers:[{
          name:'Kobe',
        age:'40'
      },
      {
          name:'James',
        age:'38'    
      }],
      obj:{
          1:'one',
        2:'two'
      }
    }
  })

  new Vue({
    el:"#app-22",
    data:{
    content:"啦啦啦"
    }
  })