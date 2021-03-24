import Home from 'templates/Home'

export default function Index(props: any) {
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
      heading: 'Olha eu aqui 1234 ssr',
    },
  }
}
