import Layout from '../components/layout'
import Link from 'next/link'

const Pagina404 = () => {
  return (
    <Layout
    title="Página No Encontrada">
      <p className="error">Página No Encontrada</p>
      <Link href="/">
      <a className='error-enlace'>
        Ir a inicio
      </a>
      </Link>
    </Layout>
  )
}

export default Pagina404