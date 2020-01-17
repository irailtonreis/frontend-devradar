import React from 'react';
import { MdDeleteForever } from  'react-icons/md';

import './styles.css';
function DevItem({ dev }){
  return(
    <li className="dev-item">
    <header><img src={dev.avatar_url} alt={dev.name}/>
    <div className="user-info">
      <strong>{dev.name}</strong>
      <span>{dev.techs.join(', ')}</span>
    </div>
    </header>
    <p>{dev.bio}</p>
    <a href={`http://github.com/${dev.github_username}`}>Acessar perfil no Github</a>
    <p className="delete"><MdDeleteForever size={25} color="#5A2EA6"/></p>
  </li>
  )
}

export default DevItem;