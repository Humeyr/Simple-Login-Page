import './App.css';
import Button from './components/button/Button';
import Form from './components/form/Form';
import Input from './components/input/Input';
import {useState} from 'react';


function App() {
  const [user, setUser] = useState ({name:'',  password:''});
  const handleChange = (e)=> {
    if(e.target.type === 'text'){
      setUser({...user, name: e.target.value });
      console.log(user)
    }else if (e.target.type === 'password'){
      setUser({...user, password: e.target.value });
      console.log(user)

    }
    
  };
  const handleClick = () => {
    if (user.name === ""){
      alert("Kullanici adi bos birakilamaz");
    }else if(user.password === ""){
      alert("Sifre bos birakilamaz");
    }else{
      alert("Kullanici adi:"+ user.name + " " + "Sifreniz" + user.password);
    }
  };
  return (
    <div className="App">
    <h2>Giris Formu</h2>
    <Form>
      <Input 
        type={"text"} 
        value={user.name}
        placeHolder={'Kullanici adi'} 
        onChange={handleChange} />
      <Input 
        type={"password"} 
        value={user.password}
        placeHolder={'Sifre'}
        onChange={handleChange}/>
      <Button onClick={handleClick}/>
    </Form>
   
  
      
    </div>
  );
}

export default App;
