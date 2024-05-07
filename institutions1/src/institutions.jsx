function institutions (props) {
const institutionStyle = {
  backgroundColor: "maroon",
  margin: "2px", 
  border: "5px solid white",
  color: "white"


}

return (<div style={institutionStyle}>
   <h3> Institutions I have attended</h3>
   <h2>Name: {props.name}</h2>
   <h2>Dates: {props.date}</h2>
   <p>Description: <ul>{props.description}</ul></p>


</div>
)





}

export default institutions;
