import React from 'react'
import MyImage from '../shared/MyImage'


const FooterComponent = () => {
  return (
    <footer className="flex p-2" style={{ backgroundColor: '#1B1B1B' }}>
      <div className='flex gap-7'>
      <MyImage src="/images/logo.png" alt="jewel" width={70} height={70}/>
      <MyImage src="/images/logo1.png" alt="jewel" width={50} height={50}/>
      <MyImage src="/images/logo2.png" alt="jewel" width={70} height={70}/>
      <MyImage src="/images/logo3.png" alt="jewel" width={50} height={50}/>
      <MyImage src="/images/logo4.png" alt="jewel" width={70} height={70}/>
      <MyImage src="/images/logo5.png" alt="jewel" width={70} height={70}/>
      <MyImage src="/images/logo6.png" alt="jewel" width={70} height={70}/>
      <MyImage src="/images/logo6.jpeg" alt="jewel" width={70} height={70}/>
      <MyImage src="/images/logo7.png" alt="jewel" width={70} height={70}/>
      </div>
    </footer>
  )
}

export default FooterComponent