import Tabs from '@/components/Tabs'
import Providers from './Providers'
import './globals.css'
import Header from '@/components/header'



const Layout = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <Providers>
        <Header/>
        <Tabs/>
        {children}
        </Providers>
        </body>
    </html>
    
  )
}

export default Layout

