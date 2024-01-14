import React from 'react'
import Image from 'next/future/image'
import Layout from '../components/layout'
import styles from '../styles/nosotros.module.css'


function Nosotros() {
  return (
    <Layout
      title={'Nosotros'}
      description={'GuitarLA - Venta de guitarras y blog de música'}>
      <main className='contenedor'>
        <h1 className='heading'>Nosotros</h1>
        <div className={styles.contenido}>
          <Image src='/img/nosotros.jpg' alt='Imagen sobre nosotros' width={1000} height={800}/>
          <div>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ante ex, elementum non eleifend quis, interdum id arcu. Nullam porta nibh non nibh porttitor, id auctor tellus interdum. Nullam sodales nibh ac eros fringilla tristique eget scelerisque quam. Integer nec eros ac ex suscipit suscipit.
            </p>
            <p>
              Donec viverra pretium sapien sit amet pretium. Proin lacinia ornare finibus. Curabitur mattis felis quam. Ut augue tortor, pellentesque luctus tincidunt vehicula, sollicitudin ut ex. Mauris eget felis maximus lectus blandit maximus. Ut dui mauris, tincidunt at lorem at, laoreet consequat dolor.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  )
}

export default Nosotros