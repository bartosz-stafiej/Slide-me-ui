import React from 'react';
import loginImg from '../../assets/images/login.svg'
import axios from 'axios';

export class Register extends React.Component {
  constructor(props) {
    super(props);

    this.accountData = { }

    this.setTextInputRef = (element, value) => {
      this.textInput[element] = value;
    };

    this.state = {
      email: '',
      password: '',
      password_confirmation: ''
    }
  }  
  
  changeHandler = (element) => {
    this.setState({[element.target.name]: element.target.value})
  }

  submitHandler = (element) => {
    element.preventDefault();
    console.log(this.state)
    const localhostURL = 'http://localhost:3001/users'
    const apiUrl = 'https://slide-me.herokuapp.com/users'

    axios.post(
      localhostURL,
      { "user": this.state }
      )
      .then(response => {
        console.log(response);
      })
      .catch(e => {
        console.log(e);
      })
  }

  render() {
    const { email, password, password_confirmation } = this.state
      return (
          <div className="base-container" ref={this.props.containerRef}>
          <div className="header">Register</div>
          <div className="content">
            <div className="image">
              <img src={loginImg} alt="loginImg.svg" />
            </div>
            <form className="form" onSubmit={this.submitHandler}>
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text" name="email" placeholder="email" 
                  value={email} onChange={this.changeHandler} 
                />
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" name="password" placeholder="password" 
                  value={password} onChange={this.changeHandler}
                />
              </div>
              <div className="form-group">
                <label htmlFor="confirmPassword">Password Confirmation</label>
                <input type="password" name="password_confirmation" placeholder="confirm password" 
                  value={password_confirmation} onChange={this.changeHandler} 
                />
              </div>
            </form>
          </div>
          <div className="footer">
            <button type="submit" className="btn" onClick={this.submitHandler}>
              Register
            </button>
          </div>
        </div>
  
      );
  }
}

export default Register;