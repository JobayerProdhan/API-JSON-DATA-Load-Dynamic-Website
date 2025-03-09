

const handleLoadData = () =>{
    fetch('https://jsonplaceholder.typicode.com/todos/1').then(res => console.log(res)).then(data => console.log(data));
}