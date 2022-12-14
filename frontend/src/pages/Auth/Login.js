import "./Auth.css";

// Components
import { Link } from "react-router-dom";
import Message from "../../components/Message";

// Hooks
import { useEffect, useState } from "react";
import { useSelector, useDispatch } from 'react-redux';

const Login = () => {

   const [email, setEmail] = useState("");
   const [password, setPassword] = useState("");


  const handleSubmit = (e) => {
    e.preventDefault();
  }

  return (
    <div id="login">
      <h2>ReactGram</h2>
      <p className="subtitle">Faça o login para ver as novidades.</p>
      <form onSubmit={handleSubmit}>
        <input type="text" name="" id="" placeholder="E-mail" onChange={(e) => setEmail(e.target.value)} value={email || ""} />
        <input type="password" name="" id="" placeholder="Senha" onChange={(e) => setPassword(e.target.value)} value={password || ""}/>
        <input type="submit" value="Entrar" />
      </form>
      <p>Não tem uma conta? <Link to="/register">clique aqui.</Link></p>
    </div>
  )
}

export default Login