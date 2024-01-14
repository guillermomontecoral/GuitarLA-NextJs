import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import styles from '../styles/header.module.css'
import { useRouter } from 'next/router'

function Header() {

  const router = useRouter()

  return (
    <header className={styles.header}>
      <div className={`contenedor ${styles.barra}`}>
        <Link href={'/'}>
          <a>
            <Image src="/img/logo.svg" width={300} height={40} alt='Logotipo GuitarLA' />
          </a>
        </Link>

        <nav className={styles.navegacion}>
          <Link href="/">
            <a className={router.pathname === '/' ? styles.active : ''}>
              Inicio
            </a>
          </Link>
          <Link href="/nosotros">
            <a className={router.pathname === '/nosotros' ? styles.active : ''}>
              Nosotros
            </a>
          </Link>
          <Link href="/tienda">
            <a className={router.pathname === '/tienda' ? styles.active : ''}>
              Tienda
            </a>
          </Link>
          <Link href="/blog">
            <a className={router.pathname === '/blog' ? styles.active : ''}>
              Blog
            </a>
          </Link>
        </nav>
      </div>
    </header>
  )
}

export default Header