import Input from "./Input";

const Form = (props) => {
    return ( 

        <form className="form">
        <Input 
              key = "1"
              type = "text"
              placeholder = "username"
        />
        <Input 
              key = "2"
              type = "password"
              placeholder = "password"
        />
        { !props.isRegistered && <Input 
              key = "3"
              type = "password"
              placeholder = "confirm password"
        /> }
        <button type="submit">{ props.isRegistered ? "Login" : "Register" }</button>
      </form>

     );
}
 
export default Form;