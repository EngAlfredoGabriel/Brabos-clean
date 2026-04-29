import { useState } from "react";
import Agendamento from './agendamento';
import './App.css'
import imgbrabos from "./assets/img-brabos.jpg";
import logoBrabosclean from './assets/logo-brabos-clean.jpeg'
import './index.css'
function App() {
const [mostrarForm, setMostrarForm] = useState(false);
  
return (
    <>
      <header className="header">
        <div className="container nav">
         <div className="logo">
          <img src={logoBrabosclean} alt="Logo Brabos Clean" className="logo-img" />

        <div>
       <h1>Brabos <span>Clean</span></h1>
    <p>Higienização Profissional</p>
  </div>
</div>

          <nav className="menu">
            <a href="#inicio">Início</a>
            <a href="#servicos">Serviços</a>
            <a href="#beneficios">Benefícios</a>
            <a href="#contato">Contato</a>
          </nav>

          <button
          className="btn btn-primary"
          onClick={() => setMostrarForm(true)}
        >
          Agendar Serviço 
        
        {/* FORMULÁRIO (APARECE AO CLICAR) */}
        {mostrarForm && <Agendamento />}
          </button>
        </div>
      </header>

 {mostrarForm && (
  <div className="modal-overlay">
    <div className="modal">

      <button 
        className="fechar"
        onClick={() => setMostrarForm(false)}
      >
        ✕
      </button>

      <h2>Agendar Serviço</h2>
      <p className="sub">Preencha os dados abaixo</p>

      <Agendamento />

    </div>
  </div>
)}
      <main>
        <section className="hero" id="inicio">
          <div className="container hero-grid">
            <div className="hero-content">
              <span className="badge">Atendimento prático • Resultado visível</span>
              <h2>Seu estofado limpo, higienizado e com aparência de novo.</h2>
              <p>
                A Brabos Clean oferece limpeza profissional de estofados com cuidado,
                praticidade e resultado visível para sua casa, escritório ou veículo.
              </p>

              <div className="hero-buttons">
                <a
                  className="btn btn-primary"
                  href="https://wa.me/5561992521659"
                  target="_blank"
                  rel="noreferrer"
                >
                  Chamar no WhatsApp
                </a>
                
                <a className="btn btn-secondary" href="#servicos">
                  Ver serviços
                </a>
              </div>

              <div className="hero-tags">
                <span>Atendimento rápido</span>
                <span>Higienização profissional</span>
                <span>Mais conforto e cuidado</span>
              </div>
            </div>

            <div className="hero-image">
              <img src={imgbrabos} alt="Imagem de um sofá limpo e higienizado" className="hero-img" />
              <div className="hero-image-tags">
              </div>
            </div>
          </div>
        </section>

        <section className="section" id="servicos">
          <div className="container">
            <div className="section-title">
              <span>Serviços especializados</span>
              <h2>Profissionalismo e cuidado em cada detalhe do seu conforto</h2>
              <p>
                Atuamos com higienização técnica e cuidado profissional em diferentes tipos de estofados, 
                promovendo mais limpeza, renovação visual, conforto e bem-estar para o seu ambiente.
              </p>
            </div>

            <div className="grid cards">
              <article className="card">
                <h3>Higienização de sofás</h3>
                <p>Realizamos a higienização profunda de sofás com foco na remoção de sujeiras impregnadas, 
                  poeira, microrganismos e odores, preservando o tecido e devolvendo ao ambiente uma aparência mais limpa, 
                  agradável e renovada.</p>
              </article>

              <article className="card">
                <h3>Higienização de colchões</h3>
                <p>Executamos a higienização de colchões com abordagem técnica voltada à redução de ácaros, 
                  poeira, resíduos e impurezas acumuladas, contribuindo para um ambiente mais saudável, 
                  limpo e adequado ao descanso diário.</p>
              </article>

              <article className="card">
                <h3>Higienização de poltronas</h3>
                <p>Aplicamos um processo cuidadoso de higienização em poltronas e estofados individuais, 
                  com atenção aos detalhes, ao acabamento e à conservação do material, garantindo mais limpeza, 
                  conforto e valorização da peça.</p>
              </article>

              <article className="card">
                <h3>Higienização de cadeiras</h3>
                <p>Realizamos a limpeza técnica de cadeiras estofadas, removendo resíduos, 
                   marcas de uso e sujeiras do dia a dia, com cuidado para manter a integridade do revestimento e 
                   restaurar uma aparência mais limpa e organizada ao ambiente.</p>
              </article>

              <article className="card">
                <h3>Higienização de bancos automotivos</h3>
                <p>     Limpeza técnica de bancos automotivos com remoção de sujeiras impregnadas,
                        manchas, odores e resíduos acumulados pelo uso diário, preservando o
                        revestimento e devolvendo ao interior do veículo uma aparência mais limpa,
                        renovada e confortável.</p>
              </article>

              <article className="card">
                <h3>Higienização de estofados em geral</h3>
                <p>Solução prática para quem busca limpeza, conservação e mais conforto.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section section-alt" id="beneficios">
          <div className="container">
            <div className="section-title">
              <span>Diferenciais</span>
              <h2>A diferença entre limpo e impecável tem nome: Brabos <span>Clean</span></h2>
            </div>

            <div className="grid benefits">
              <article className="card">
                <h3>Visual renovadoa</h3>
                <p>Seu estofado com aparência mais limpa, valorizada e bem cuidada.</p>
              </article>

              <article className="card">
                <h3>Mais saúde e bem-estar</h3>
                <p>Redução de impurezas, odores e resíduos que afetam o conforto do ambiente.</p>
              </article>

              <article className="card">
                <h3>Atendimento sem complicação</h3>
                <p>Agendamento fácil, atendimento profissional e resultado que realmente aparece.</p>
              </article>
            </div>
          </div>
        </section>

        <section className="section cta-section" id="contato">
          <div className="container cta-box">
            <div>
              <span>Solicite seu orçamento</span>
              <h2>Seu estofado merece cuidado profissional de verdade.</h2>
              <p>
                Fale com a Brabos Clean e receba um atendimento rápido, direto e sem enrolação.
              </p>
            </div>

            <a
              className="btn btn-primary"
              href="https://wa.me/5561992521659"
              target="_blank"
              rel="noreferrer"
            >
              Falar no WhatsApp
            </a>
          </div>
        </section>
      </main>

      <footer className="footer">
        <div className="container footer-content">
          <div>
            <h2>Brabos <span>Clean</span></h2>
            <p>Higienização profissional de estofados, cuidado e um atendimento feito
        para quem valoriza qualidade.</p>
          </div>

<div class="rodape-coluna contato">
      <h3>Fale conosco</h3>
      
      <p><span class="icone">📱</span> WhatsApp: (61) 9 9252-1659</p>
      <p><span class="icone">🕒</span> Agendamentos com horário marcado</p>
      <p><span class="icone">📍</span> Brasília e região.</p>
    </div>

    <div class="rodape-coluna servicos">
      <h3>Nossos serviços</h3>
      <ul>
        <li>Sofás</li>
        <li>Poltronas</li>
        <li>Colchões</li>
        <li>Cadeiras</li>
      </ul>
    </div>
  </div>

  <div class="rodape-base">
    <div class="container rodape-base-conteudo">
      <p>© 2026 Brabos Clean — Higienização profissional.</p>
    </div>
  </div>
</footer>
    </>
  )
}

export default App