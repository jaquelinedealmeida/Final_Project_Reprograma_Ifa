import React, {useState} from 'react'
 
import Axios from 'axios'
import './styles.css'
 
 
const Autora = () => {
     
     const [perfil, setPerfil] = useState([])
 
     async function getUser () {
        const resposta = await Axios.get('https://my-json-server.typicode.com/jaquelinedealmeida/perfil')
        setPerfil(resposta.data)
      
    } 
        getUser()
     
     return (
        <>
    
            <div className="author">      
 
                <div className="avatar">
                <img src={perfil.avatar_url} alt="imagem usuaria"/>
                <ul className="dados">
                <li>{perfil.name}</li>
                <li>{perfil.bio}</li>
                <li>{perfil.page}</li>
                <li>{perfil.projects}</li>
                <li>{perfil.location}</li>
                </ul>
                </div>
               <div className="Bio">
                  <h2>Sobre Mim</h2>
               </div>
            </div>
         
        </>
     
        )
}
 
export default Autora