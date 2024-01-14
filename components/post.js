import Image from 'next/future/image'
import Link from 'next/link'
import React from 'react'
import style from '../styles/blog.module.css'
import { formatearFecha } from '../utils/helpers'


const Post = ({post}) => {
  const {contenido, imagen, titulo, url, publishedAt} = post
  return (
    <article>
      <Image src={imagen.data.attributes.formats.medium.url}  alt={`Imagen del blod ${titulo}`} width={600} height={400}/>
      <div className={style.contenido}> 
        <h3>
          {titulo}
        </h3>
        <p className={style.fecha}>
          {formatearFecha(publishedAt)}
        </p>
        <p className={style.resumen}>
          {contenido}
        </p>
        <Link href={`/blog/${url}`}>
        <a className={style.enlace}>
          Leer Post
        </a>
        </Link>
      </div>
    </article>
  )
}

export default Post