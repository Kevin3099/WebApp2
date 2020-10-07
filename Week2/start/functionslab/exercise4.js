fetch("https://jsonplaceholder.typicode.com/todos")
    .then(response => response.json())
    .then(json => {
        const completed = json.filter((todo) => todo.completed
        )
        var n=0
        completed.forEach( (todo, index) => {
        n = index
       })
       console.log(n+1)
     })
    .catch(function(err) { 
        console.log(err);
      });