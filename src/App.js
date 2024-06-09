
import './App.css';
import Navbar from './Components/Navbar';
import Footer from './Components/Footer';
import Main from './Components/Main';
import { useForm } from "react-hook-form"

function App() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()
  const onSubmit = async(data)=> {
    console.log(data)
    let r = await fetch("http://localhost:5000/",{method:'post',body:JSON.stringify(data)  })
    let res =await r.text()
    console.log(data,res)
  }
  return (
    <>
      <Navbar/>

      <Main/>
      
      <Footer/>
    </>
  );
}

export default App;



