import Link from 'next/link';
import React from 'react'
import Image from 'next/image';

const Participantes = () => {
  return (
    <div>
      <div className="paginas">
        <Link href="/">Home/Participantes</Link>
      </div>


        <div className="titulo-participantes">
          <h1>Participantes</h1>
        </div>

        <div className="participantes">
          <div className="duda">
              <Image alt="Imagem de Eduarda" src={Duda} />
              <p>Eduarda Tiemi</p>
              <p>
                  <Link href="https://github.com/dudatiemiak">GitHub</Link>
              </p>
              <p>
                  <Link href="https://www.linkedin.com/in/eduarda-tiemi-akamini-machado-6908092b6?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</Link>
              </p>
              <p>Turma: 1TDSPH</p>
              <p>RM: 554756</p>
          </div>

          <div className="gu">
              <Image alt="Imagem de Gustavo" src={Gu} />
              <p>Gustavo Sandrini</p>
              <p>
                  <Link href="https://github.com/gusandrini">GitHub</Link>
              </p>
              <p>
                  <Link href="https://www.linkedin.com/in/gustavo-oliveira-7311ba2ab/">LinkedIn</Link>
              </p>
              <p>Turma: 1TDSPH</p>
              <p>RM: 557505</p>
          </div>

          <div className="vi">
              <Image alt="Imagem de Victor" src={Vi} />
              <p>Victor Agrela</p>
              <p>
                  <Link href="https://github.com/victoragrela">GitHub</Link>
              </p>
              <p>
                  <Link href="https://www.linkedin.com/in/victor-giovani-agrela-4142172a5?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app">LinkedIn</Link>
              </p>
              <p>Turma: 1TDSPH</p>
              <p>RM: 557345</p>
          </div>
        </div>
    </div>
  )
}
export default Participantes;
