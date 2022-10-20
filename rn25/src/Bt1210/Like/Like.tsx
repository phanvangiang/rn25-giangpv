import React, { useState } from 'react'

function like() {
  const [like, setlike] = useState(20)
  const [dislike, setdislike] = useState(2)
  
  const [likeactive, setlikeactive] = useState(false)
  const [dislikeactive, setdislikeactive] = useState(false)

  function likef(){
    if (likeactive) {
      setlikeactive(false)
      setlike(like-1)
    }
    // else {
    //   setlikeactive(true)
    //   setlike(like +1)
    //   if (dislikeactive){
    //     setdislikeactive(false)
    //     setlike(like +1)
    //     setdislike(dislike -1)
    //   }

    // }

  }
  function dislikef(){
    if (dislikeactive) {
      setdislikeactive(false)
      setdislike(like-1)
    }
    // else {
    //   setdislikeactive(true)
    //   setdislike(like +1)
    //   if (likeactive){
    //     setlikeactive(false)
    //     setdislike(dislike +1)
    //     setlike(like -1)
    //   }

    // }
  }
  return (
    <div className='like'>
      <div></div>
      <button onClick ={likef}>Like {like} </button>
      <button onClick = {dislikef}>Dislike {dislike} </button>

    </div>
  )
}



export default like