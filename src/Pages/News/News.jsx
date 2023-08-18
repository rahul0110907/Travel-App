import React from 'react'
import nothingImg from '../../assestes/nothing.jpg'
import '../News/News.css'

const News = () => {
  return (
    <div className='news'>
      <img src={nothingImg} alt=''/>
     <h2> We are sorry, We have't new news to show . Please wait for update</h2>
    </div>
  )
}

export default News
