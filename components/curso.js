import React from 'react'
import style from '../styles/curso.module.css'

const Curso = ({curso}) => {
  const {contenido, titulo, imagen} = curso
  return (
    <section className={`${style.curso} curso`}>
      <style jsx>
        {`
        .curso{
          background-image: linear-gradient(to right, rgb(0 0 0 / .65), rgb(0 0 0 / .7)), url(${imagen?.data?.attributes?.url})
        }
        `}
      </style>
      <div className={`contenedor ${style.grid}`}>
        <div className={style.contenido}>
          <h2 className='heading'>
            {titulo}
          </h2>
          <p>
            {contenido}
          </p>
        </div>
      </div>
    </section>
  )
}

export default Curso