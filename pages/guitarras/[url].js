import Image from 'next/future/image'
import style from '../../styles/guitarras.module.css'
import Layout from '../../components/layout'

const Producto = ({ guitarra }) => {

  const { descripcion, nombre, imagen, precio } = guitarra[0].attributes

  return (
    <Layout
    title={`Guitarra ${nombre}`}>
      <div className={style.guitarra}>
        <Image src={imagen.data.attributes.url} alt={`Imagen de la guitarra ${nombre}`} width={200} height={150} />

        <div className={style.contenido}>
          <h3>{nombre}</h3>
          <p>{descripcion}</p>
          <p className={style.precio}>U$S {precio}</p>
        </div>
      </div>
    </Layout>
  )
}

export default Producto

export async function getStaticPaths() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras`)
  const { data } = await respuesta.json()

  const paths = data.map(guitarra => ({
    params: {
      url: guitarra.attributes.url
    }
  }))

  console.log(paths)

  return {
    paths,
    fallback: false 
  }
}

export async function getStaticProps({ params: { url } }) {

  const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
  const { data: guitarra } = await respuesta.json()

  return {
    props: {
      guitarra
    }
  }
}


// export async function getServerSideProps({query : {url}}) {


//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?filters[url]=${url}&populate=imagen`)
//   const { data:guitarra } = await respuesta.json()

//   return {
//     props: {
//       guitarra
//     }
//   }
// }