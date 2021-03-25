import Home, { HomeTemplateProps } from 'templates/Home'
import bannersMock from 'components/BannerSlider/mock'
import gamesMock from 'components/GameCardSlider/mock'
import highlightMock from 'components/Highlight/mock'

export default function Index(props: HomeTemplateProps) {
  return <Home {...props} />
}

// ATENÇÃO
// os métodos getStatic/getServerSide SÓ FUNCIONAM EM PAGES

// getStaticProps => gerar estático em build time
// export function getStaticProps() {
//   // faz lógica
//   // pode ser buscar dados numa API
//   // fazer calculo/leitura de context

//   // retorno dos dados de
//   return {
//     props: {
//       heading: 'Olha eu aqui',
//     },
//   }
// }

// getServerSideProps => gerar via ssr a cada request
export function getServerSideProps() {
  // faz lógica
  // pode ser buscar dados numa API
  // fazer calculo/leitura de context

  // retorno dos dados de
  return {
    props: {
      banners: bannersMock,
      newGames: gamesMock,
      mostPopularHighlight: highlightMock,
      mostPopularGames: gamesMock,
      upcomingGames: gamesMock,
      upcomingHighlight: highlightMock,
      upcomingMoreGames: gamesMock,
      freeGames: gamesMock,
      freeHighlight: highlightMock,
    },
  }
}
