import PropTypes from 'prop-types'
import React from 'react'
import pic from '../images/about.jpg'

class Main extends React.Component {
  render() {
    let close = (
      <div
        className="close"
        onClick={() => {
          this.props.onCloseArticle()
        }}
      ></div>
    )

    return (
      <div
        ref={this.props.setWrapperRef}
        id="main"
        style={this.props.timeout ? { display: 'flex' } : { display: 'none' }}
      >
        <article
          id="intro"
          className={`${this.props.article === 'intro' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Intro</h2>
          <p>
            Aenean ornare velit lacus, ac varius enim ullamcorper eu. Proin
            aliquam facilisis ante interdum congue. Integer mollis, nisl amet
            convallis, porttitor magna ullamcorper, amet egestas mauris. Ut
            magna finibus nisi nec lacinia. Nam maximus erat id euismod egestas.
          </p>
          <div className="cards">
            <div className="card">
              <h3>Missão</h3>
              <p>
                Trazer o melhor conteúdo atual para o desenvolvimento do seu
                site e marketing digital, assim melhorando o SEO(mecanismo de busca)
                podendo apresentar resultados através de analises.
              </p>
            </div>
            <div className="card">
              <h3>Visão</h3>
              <p>
                Torna a sua presença web de maneira fácil e objetiva ao qual esperamos
                realizar e assim criando parcerias duradoura.
              </p>
            </div>
            <div className="card">
              <h3>Valores</h3>
              <p>
                Comprometimento;<br />
                Integridade;<br />
                Confiança.<br />
              </p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="work"
          className={`${this.props.article === 'work' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Serviços</h2>
          <div className="cards">
            <div className="card">
              <span className="icon fa-desktop"></span>
              <h3>WEB Sites</h3>
              <p>
                Atuamos no desenvolvimento web voltado para as novas tendencias e mercados
                com o melhor em SEO e Mobile.
              </p>
            </div>
            <div className="card">
            <span className="icon fa-shopping-cart"></span>
              <h3>E-commerce</h3>
              <p>
                Ajudamos você a vender seus produtos com oque há de melhor no universo
                dos E-commerce.
              </p>
            </div>
            <div className="card">
              <span className="icon fa-server"></span>
              <h3>Hospedagem</h3>
              <p>
                Tecnologia de ponta com responsabilidade mantendo seus sites e e-mails
                funcionando sempre.
              </p>
            </div>
            <div className="card">
              <span class="icon fa-search"></span>
              <h3>Suporte</h3>
              <p>
                Conte com nós! Temos um suporte personalizado e com qualidade.
              </p>
            </div>
          </div>
          {close}
        </article>

        <article
          id="about"
          className={`${this.props.article === 'about' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Sobre</h2>
          <span className="image main">
            <img src={pic} alt="" />
          </span>
          <p>
            A WISE Studios traz para seu negócio Marketing, Tecnologia e Design,
            nunca paramos de inovar e buscar novos desafios.
          </p>
          <p>
            Nós queremos transforma sua experiência em RESULTADOS com planejamento,
            comprometimento e Integridade em tudo que fazemos assim fidelizando nossos clientes
            e ajudando a atingir seus objetivos.
          </p>
          <p>
            Seguimos um processo que faz com que tenhamos melhores resultados para assim
            conseguir fazer nossos clientes ter a melhor experiencia.
          </p>
          {close}
        </article>

        <article
          id="contact"
          className={`${this.props.article === 'contact' ? 'active' : ''} ${
            this.props.articleTimeout ? 'timeout' : ''
          }`}
          style={{ display: 'none' }}
        >
          <h2 className="major">Contato</h2>
          <form method="post" action="#">
            <div className="field half first">
              <label htmlFor="name">Nome</label>
              <input type="text" name="name" id="name" />
            </div>
            <div className="field half">
              <label htmlFor="email">E-mail</label>
              <input type="text" name="email" id="email" />
            </div>
            <div className="field">
              <label htmlFor="message">Mensagem</label>
              <textarea name="message" id="message" rows="4"></textarea>
            </div>
            <ul className="actions">
              <li>
                <input type="submit" value="Enviar Mensagem" className="special" />
              </li>
              <li>
                <input type="reset" value="Redefinir" />
              </li>
            </ul>
          </form>
          <ul className="icons">
            <li>
              <a
                href="https://twitter.com/"
                className="icon fa-twitter"
              >
                <span className="label">Twitter</span>
              </a>
            </li>
            <li>
              <a href="https://facebook.com" className="icon fa-facebook">
                <span className="label">Facebook</span>
              </a>
            </li>
            <li>
              <a href="https://instagram.com" className="icon fa-instagram">
                <span className="label">Instagram</span>
              </a>
            </li>
            <li>
              <a
                href="https://wa.me/5547997402365"
                className="icon fa-whatsapp"
              >
                <span className="label">Whatsapp</span>
              </a>
            </li>
            <li>
              <a
                href="https://github.com/wisestudios-com-br"
                className="icon fa-github"
              >
                <span className="label">GitHub</span>
              </a>
            </li>
          </ul>
          {close}
        </article>
      </div>
    )
  }
}

Main.propTypes = {
  route: PropTypes.object,
  article: PropTypes.string,
  articleTimeout: PropTypes.bool,
  onCloseArticle: PropTypes.func,
  timeout: PropTypes.bool,
  setWrapperRef: PropTypes.func.isRequired,
}

export default Main
