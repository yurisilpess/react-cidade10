import { useState } from "react"

export default function Home() {

  //Hook-useState- manipula o estado da variavel
  const [produtos, setProdutos]=useState({
    nome:''
  })

  //criando a função handleChange( vai pegar o que passar no input)
  const handleChange=(e)=>{
    setProdutos({...produtos,[e.target.name]:e.target.value})
  }


//criando a função  handleSubmit

const handleSubmit=(e)=>{
  e.preventDefault()
  fetch(`http://localhost:5000/produtos`,{
    method:"post",
    headers:{
      "Content-Type":"application/json",
    },
    body:JSON.stringify(produtos),
  }).then(()=>{
    alert("Produto Cadastraso com sucesso")
  })

}


  return (
    <form onSubmit={handleSubmit}>
        <h1>Cadastro de Produto</h1>
        <p>
          Nome Produto:
          <input 
          type="text"
          name="nome"
          placeholder="Digite o Nome do Produto" 
          onChange={handleChange}
          value={produtos.nome}
        
           />
        </p>

        <p></p>
        <button type="submit">Cadastrar</button>
    </form>
  )
}
