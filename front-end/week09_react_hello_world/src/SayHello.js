
function SayHello(props){
//  const  name = 'Deep'
const myStyle = {
    color : 'blue',
    backgroundColor: 'lightskyblue'
}
 return <h1 style={myStyle}>Hello {props.fname}{props.lname}</h1>
}
export default SayHello;