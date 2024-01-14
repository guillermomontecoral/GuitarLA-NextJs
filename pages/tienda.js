import React from 'react'
import Layout from '../components/layout'
import Guitarras from '../components/guitarras'
import style from '../styles/grid.module.css'

function Tienda({ guitarras }) {

  return (
    <Layout
      title={'Tienda Virtual'}
      description={'Tienda virtual, venta de guitarras, instrumentos, GuitarLA'}>
      <main className='contenedor'>
        <h1 className='heading'>
          Nuestra Coleccion
        </h1>

        <div className={style.grid}>
          {guitarras?.map(guitarra => (
            <Guitarras
              key={guitarra.id}
              guitarra={guitarra.attributes}
            />
          ))}
        </div>
      </main>
    </Layout>
  )
}

export default Tienda

// export async function getStaticProps(){
//   const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
//   const {data: guitarras} = await respuesta.json()

//   return{
//     props:{
//       guitarras
//     }
//   }
// }

export async function getServerSideProps() {
  const respuesta = await fetch(`${process.env.API_URL}/guitarras?populate=*`)
  const { data: guitarras } = await respuesta.json()

  return {
    props: {
      guitarras
    }
  }
}