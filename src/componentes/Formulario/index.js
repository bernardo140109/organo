import Botao from "../Botao";
import CampoTexto from "../CampoTexto";
import ListaSuspensa from "../ListaSuspensa";
import "./Formulario.css";


const Formulario = () => {

  const times = [
    'Programação',
    'Front-End',
    'Data Science',
    'Devops',
    'UX e Design',
    'Mobile',
    'Inovação e Gestão'
  ]

const aoSalvar = (evento) => {
  evento.preventDefault()
  console.log('form foi submetido');
}

  return (
    <section className="formulario">
      <form onSubmit={aoSalvar}>
        <h2 className="nome_form">Preencha os dados para criar o card do colaborador</h2>
        <CampoTexto obrigatorio={true} label="Nome" placeholder="Digite seu nome" />
        <CampoTexto obrigatorio={true} label="Cargo" placeholder="Digite seu cargo" />
        <CampoTexto obrigatorio={true} label="Imagem" placeholder="Digite o endereço da imagem" />
        <ListaSuspensa obrigatorio={true} label="Times" itens={times} />
        <Botao texto="Criar Card"/>
      </form>
    </section>
  );
};

export default Formulario;