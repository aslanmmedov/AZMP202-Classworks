
function Form() {
  return (
        <form> 
            <fieldset className="carform" onSubmit={addToState} >
                    <legend>Car Searching</legend>
                    <input type="text"  id = "name" placeholder = "Car name"/>
                    <input type="number"  id = "name" placeholder = "Price"/>
                    <input type="number"  id = "name" placeholder = "Production year"/>
                    <input type="submit"  id = "submit"/>
            </fieldset>
            
        </form>
  )
}

export default Form