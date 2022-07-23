import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

const Header = () => {

  const [info, setInfo] = useState('');
  const [title, setTitle] = useState('/');
  const [voTitle, setVoTitle] = useState ('/');
  const [overview, setOverview] = useState('/');

  return (
    <section>
    <nav className="nav--container">
    <NavLink to={title}>
      <span className="nav--link">Title</span>
    </NavLink>
    <NavLink to={voTitle}>
      <span className="nav--link">V.O. Title</span>
    </NavLink>
    <NavLink to={overview}>
      <span className="nav--link">Overview</span>
    </NavLink>
    </nav>

    <form>
      <label>
        Introduce el nombre de una película:
        <input type="text" name="name" value={info} onChange={(e) => 
        {
          setInfo(e.target.value)
          if(e.target.value === ''){
            setTitle('/')
            setVoTitle('/')
            overview('/')
          } else {
            setTitle('/title/' + e.target.value)
            setVoTitle('/title_original/' + e.target.value)
            setOverview('/overview/' + e.target.value)
          }
        }
        
        }/>
      </label>
    </form>
    </section>
  )
}

export default Header;