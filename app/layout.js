import './globals.css'

import { Nunito } from 'next/font/google'
import NavBar from '../components/nav/NavBar'
import RegisterModal from '../components/modals/RegisterModal'
import ToasterProvider from '../providers/ToasterProvider'
import LoginModal from '../components/modals/LoginModal'
import getCurrentUser from '../actions/getCurrentUser'
export const metadata = {
  title: 'pttkht',
  description: 'pttkht',
}
const font = Nunito({
  subsets: ['latin'],
});

export default async function RootLayout({ children }) {
  const currentUser = await getCurrentUser()
  return (
    <html lang="en">
      <body className={font.className} >
          <ToasterProvider />
          <NavBar currentUser={currentUser} />
          <RegisterModal />
          <LoginModal />
        <div className="pb-20 pt-28">
          {children}
        </div>
      </body>
    </html>
  )
}
