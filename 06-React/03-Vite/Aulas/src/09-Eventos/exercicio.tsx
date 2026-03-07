import { useState } from "react"
import type { ChangeEvent } from "react"

export const Formulario = () => {
  const [valor, setValor] = useState<string>("")
  const [resultado, setResultado] = useState<string>("")

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setValor(e.target.value)
  }

  const handleClick = () => {
    setResultado(valor)
  }

  return (
    <div>
      <input 
        type="text" 
        placeholder="Digite algo..." 
        value={valor} 
        onChange={handleChange} 
      />
      <button onClick={handleClick}>Enviar</button>

      {resultado && <p>Você digitou: {resultado}</p>}
    </div>
  )
}