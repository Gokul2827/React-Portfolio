import React, { useState } from 'react';
import figma from './figma.png' ;
import html from './html.png' ;
import css from './css.png' ;
import javascript from './javascript.png' ;
import react from './react.png' ;
import sql from './mysql.png' ;
import './Projects.css'
import js from './projects.json'


function Projects() { 
  function openproj(index,val){
   document.getElementById('cards').innerHTML=''
    document.getElementById('log').style.display="block";

   setLogo(val)
    js.forEach((data)=>{
      if(data){
      let item=''
      if(data.filter_id===index){
        data.products.forEach((val,index)=>{
          item += productView(val,index);
        })
      return(
        document.getElementById('cards').innerHTML=item
      )}
    }else{
      return(
        document.getElementById('cards').innerHTML=`<h3> No Data </h3>`
      )
    }}
  )
    function productView(product,index){
      console.log(product.imgSrc);
      
          return ` 
          <div className='box'> 
              <a target='_blank' href=${product.href}><img src=${product.imgSrc} alt=""/> 
              <h3>${product.name}</h3></a>
          </div>
          `}  
  }
  const [logo,setLogo]=useState()
  return (
    <div className='j1'>
        <div className='heading'><img id='log' alt='' src={logo}></img><h4>Projects</h4> </div>
        <div className='project-title glow'>
            <div className='scroll-left' id='cards'>  
                <img src={figma} alt='logo' onClick={()=>openproj(1,figma)}></img>
                <img src={html} alt='logo' onClick={()=>openproj(2,html)}></img>
                <img src={css} alt='logo' onClick={()=>openproj(3,css)}></img>
                <img src={javascript} alt='logo' onClick={()=>openproj(4,javascript)}></img>
                <img src={react} alt='logo' onClick={()=>openproj(5,react)}></img>
                <img src={sql} alt='logo' onClick={()=>openproj(6,sql)}></img>
                
                
            </div>
        </div>
        

    </div>
  )
}

export default Projects