import Image from 'next/image'
import styles from './page.module.css'
import Link from 'next/link'
// import Dashboard from './dashbord/Dashboard'

export default function Home() {
  return (
    <>
      {/* <Dashboard/> */}
      <Link href={"/dashbord"}>Dashboard</Link>
    </>
  )
}
