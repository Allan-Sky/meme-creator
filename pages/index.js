import Head from 'next/head'
import { useState } from 'react'
import styles from '../styles/Home.module.css'

export default function Home() {
  const [name, setName] = useState('')
  const [insta, setinsta] = useState('')
  const [frase, setFrase] = useState('')
  const [meme, setMeme] = useState(false)
  const HandleSubmit = (e) => {
    e.preventDefault()

    setMeme(true)
  }
  return (
    <div className={styles.container}>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className={styles.content}>
        <header className={styles.header}>
          <h1>Meme generator</h1>
        </header>

        <main className={styles.main}>
          <form className={styles.form} onSubmit={(e) => HandleSubmit(e)}>
            <input 
            className={styles.input} 
            name="perfil" 
            placeholder="Nome"
            value={name}
            onChange={(e) => setName(e.target.value)}
            />
            
            <input 
            className={styles.input}  
            name="frase" 
            placeholder="instagram"
            value={insta}
            onChange={(e) => setinsta(e.target.value)}
            />

            <textarea 
            className={styles.textarea} 
            placeholder="texto"
            value={frase}
            onChange={(e) => setFrase(e.target.value)}
            ></textarea>

            <button className={styles.button} type="submit">Criar meme</button>
          </form>
        </main>
      </div>

      {
          meme && (
            <div className={styles.post}>
              <header>
                <img src="https://instagram.fpnz4-1.fna.fbcdn.net/v/t51.2885-19/s150x150/120929127_778697606029321_5775913451656672964_n.jpg?_nc_ht=instagram.fpnz4-1.fna.fbcdn.net&_nc_ohc=kKuWjy-uKr4AX_Imj5T&oh=3710276c1b7be23f259979b7fb84ee5c&oe=5FAAA201" alt="photo"/>
                <div>
                  <strong>{name}</strong>
                  <p>{insta}</p>
                </div>
                </header>

                <p>{frase}</p>

            </div>
          )
        }
    </div>
  )
}
