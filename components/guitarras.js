import React from 'react'
import Image from 'next/future/image'
import Link from 'next/link'
import style from '../styles/guitarras.module.css'

function Guitarras ({guitarra}) {
  
const {descripcion, nombre, imagen, precio, url} = guitarra

  return (
    <div className={style.guitarra}>
      <Image src={imagen.data.attributes.formats.medium.url} alt={`Imagen de la guitarra ${nombre}`} width={200} height={150}/>

      <div className={style.contenido}>
        <h3>{nombre}</h3>
        <p className={style.descripcion}>{descripcion}</p>
        <p className={style.precio}>U$S {precio}</p>
        <Link href={`/guitarras/${url}`}>
        <a className={style.enlace}>
          Ver producto
        </a>
        </Link>
      </div>
    </div>
  )
}

export default Guitarras