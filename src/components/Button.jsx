import React from 'react'

function Button(props) {
    const {text,func} = props
    return (
      
              <button onClick={func} className='px-8 py-4 mx-auto rounded-md font-bold border-[2px] border-solid border-blue-400 bg-slate-950 blueShadow duration-200' > 
                  <p>{text}</p>
                
              </button>
     
    )
}

export default Button