function Hello() {

  var name = 'Imran Younas'
  var UniName = () => {
    return "FAST NU";
  }


  return <div><h3>Hello I am developer {name}.</h3>
    <h4>My University name is {UniName()}</h4>
  </div>
}
export default Hello;