

const heading = React.createElement("h1",{style : {color : "red",backgroundColor : "black"} },"Hello world");
const heading2 = React.createElement("h2",{style : {color : "red"}},"Namaste React")
const div = React.createElement("div",{},[heading,heading2])

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(div);