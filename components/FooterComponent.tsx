import React from 'react'

const FooterComponent = () => {
  return (
    <footer className="bg-grey-500 text-black p-2">
      <p className="text-center text-size-sm">© {new Date().getFullYear()} KLADY. BE A STATE OF THE ART</p>
    </footer>
  )
}

export default FooterComponent