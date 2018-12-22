const headerData = {
    title: 'Dreamsalive',
    description: 'Let your dreams fly',
    options: []
}



// const user = {
//     name: 'Karamjeet',
//     age: 30,
//     location: 'Delhi'
// }

// const TemplateBody = (
//     <div>
//         <h1>{user.name}</h1>
//         <p>Age: {user.age}</p>
//         <p>Location {user.location}</p>
//     </div>
// );

// const Template = (
//     <div>
//         <TemplateHeader></TemplateHeader>
//         <TemplateBody></TemplateBody>
//     </div>
// );
let counter = 0;
const increment = () => {counter++;render();}
const decrement = () => {counter--;render();}
const reset = () => {counter = 0;render();}

    const addItem = (e) => {
        e.preventDefault();
        const option = e.target.elements.test.value;
        console.log(option);
        if(option){
            headerData.options.push(option);
            e.target.elements.test.value = "";
        }
        //
        render();
    }
    const generateRandomNumber = () => {
        const rand = Math.floor(Math.random() * headerData.options.length);
        alert(headerData.options[rand]);
    }
var appRoot = document.getElementById("app");
let visiblePanel = false;
const toggleVisiblePanel = () => {
    visiblePanel = !visiblePanel;
    render();
}
const render = () =>{
    // const template = (
    //     <div>
    //         <h1>Counter: {counter}</h1>
    //         <button onClick={increment}>+1</button>
    //         <button onClick={decrement}>-1</button>
    //         <button onClick={reset}>reset</button>
    //     </div>
    // );
//     const template = (
//     <div>
//         <h1>{headerData.title}</h1>
//         <p>{headerData.description}</p>
//         {headerData.options.length}
//         <ol>
//             {
//                 headerData.options.map((option, i)=> <li key={i}>{option}</li>)
//             }
//         </ol>
//         <button disabled={headerData.options.length == 0} onClick={generateRandomNumber}>random pick</button>
//         <form onSubmit={addItem}>
//         <input name="test"></input>
//         <button>Add Item</button>
//         </form>
//     </div>
// );
const template = (
    <div>
        <h1>Visibility program</h1>
        <button onClick={toggleVisiblePanel}>{visiblePanel? "Hide Details": "Show detials"}</button>
        {(
            visiblePanel && <div>I am here</div>
        )}
    </div>
);
    ReactDOM.render(template, appRoot);
}

render();