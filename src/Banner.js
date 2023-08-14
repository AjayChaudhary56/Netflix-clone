import React from 'react'
import './Banner.css'
const Banner = () => {


  function truncate(string,n){
    return string?.length > n  ? string.substr(0,n-1)+'...': string
  }
  return (
    <header className='banner' style={{
        // backgroundImage: `url('https://raw.githubusercontent.com/thatanjan/netflix-clone-yt/youtube/media//banner.jpg')`,
        backgroundImage: `url('https://wallpapercave.com/wp/wp2832050.png')`,
        backgroundSize:"cover",
        backgroundPosition:"center center",
    }}>
        <div className='banner_contents'>
            <h1 className='banner_title'>Movie Name</h1> 
            <div className='banner_buttons'>
              <button className='banner_button'>Play</button>
              <button className='banner_button'>My List</button>
            </div>
            <div className="banner_description">
             {truncate(` This is a test description
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Officiis qui perspiciatis doloribus molestias laborum provident               
              necessitatibus id illo ipsum, alias quia facilis iusto aliquam modi dignissimos sunt? Esse, vitae alias!
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint nostrum, dolorem voluptatibus animi velit dignissimos magnam 
              nulla dolore veniam ad quas ex. Delectus architecto expedita ipsam itaque hic maxime ex!`,150)}
            </div>
            <div className="banner-fadeBottom"/>

           
            </div>
    </header>
  )
}

export default Banner