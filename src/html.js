import React from "react"
import PropTypes from "prop-types"

export default function HTML(props) {
  return (
    <html {...props.htmlAttributes}>
      <head>
        <meta charSet="utf-8" />
        <meta httpEquiv="x-ua-compatible" content="ie=edge" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, shrink-to-fit=no"
        />
        {props.headComponents}
      </head>
      <body {...props.bodyAttributes}>
        {props.preBodyComponents}
        <div
          key={`body`}
          id="___gatsby"
          dangerouslySetInnerHTML={{ __html: props.body }}
        />
        {props.postBodyComponents}
        <script async type="text/javascript" src="https://www.googletagmanager.com/gtag/js?id=G-5ZPXPLJTPH"></script>
        <script data-name="googleanalitycs" data-type="application/javascript" type="opt-in" dangerouslySetInnerHTML={{ __html:
            `
          window.dataLayer = window.dataLayer || [];
          function gtag(){
            dataLayer.push(arguments)
          }
          gtag('js', new Date());
      
          gtag('config', 'G-5ZPXPLJTPH');
        `}} />
        <script dangerouslySetInnerHTML={{ __html:
          `
          var klaroConfig = {
            version: 1,
            elementID: 'klaro',
            htmlTexts: false,
            embedded: false,
            groupByPurpose: false,
            storageMethod: 'cookie',
            cookieName: 'klaro',
            cookieExpiresAfterDays: 365,
            default: false,
            mustConsent: false,
            acceptAll: true,

            hideDeclineAll: false,

            hideLearnMore: false,

            noticeAsModal: true,

            disablePoweredBy: true,

            translations: {
              en: {
                consentModal: {
                  title: 'Services we would like to use',
                  description: 'test description',
                },
                consentNotice:  {
                  description: "here is test description",
                  learnMore: "Configure cookies",
                },
                decline: 'Deactivate all',
                ok: 'Accept',
                acceptAll: 'Accept all',
                acceptSelected: 'Accept selected',
              },
              fr: {
                consentModal: {
                  title: 'Services que nous souhaitons utiliser',
                  description: 'Ici, vous pouvez ??valuer et personnaliser les services que nous souhaitons utiliser sur ce site Web. Tu es responsable! Veuillez activer ou d??sactiver les services ?? votre convenance. Ici, vous pouvez s??lectionner le service que nous souhaitons utiliser sur ce site Web. Mais vous d??cidez.',
                },
                consentNotice:  {
                  description: "Nous utilisons nos propres cookies et des cookies tiers (Google), des cookies analytiques / de performance / de mesure pour am??liorer l???utilisation et le contenu de notre site Web et pour analyser le trafic Web. Vous pouvez changer d'avis plus tard dans la politique de cookies.",
                  learnMore: "Configurer les cookies",
                },
                decline: 'D??sactiver tout',
                ok: 'Accepter',
                acceptAll: 'Accepter tout',
                acceptSelected: 'Accepter les s??lectionn??s',
              },
              es: {
                consentModal: {
                  title: 'Servicios que nos gustar??a utilizar',
                  description: 'Aqu?? puede evaluar y personalizar los servicios que nos gustar??a utilizar en este sitio web. ??Usted est?? a cargo! Habilite o deshabilite los servicios como considere oportuno. Aqu?? puedes seleccionar el servicio que nos gustar??a utilizar en este sitio web. Pero t?? decides.',
                },
                consentNotice:  {
                  description: "Utilizamos cookies propias y de terceros (Google), t??cnicas y de an??lisis de uso y medici??n para mejorar la usabilidad y contenidos de nuestra web y para analizar el tr??fico web. Podr??s cambiar de opini??n m??s adelante en la pol??tica de cookies.",
                  learnMore: "Configurar cookies",
                },
                decline: 'Desactivar todos',
                ok: 'Aceptar',
                acceptAll: 'Aceptar todo',
                acceptSelected: 'Aceptar seleccionados',
              },
              
            },

            services: [
                {
                    name: 'googleanalitycs',
                    title: 'Google Analytics',
                    purposes: ['analytics'],
                    cookies: [ /^_ga_.*$/, '_ga'],
                },
            ],
          };
          `}} />
        <script defer type="text/javascript" src="https://cdn.kiprotect.com/klaro/v0.7.4/klaro-no-css.js"></script>

      </body>
    </html>
  )
}

HTML.propTypes = {
  htmlAttributes: PropTypes.object,
  headComponents: PropTypes.array,
  bodyAttributes: PropTypes.object,
  preBodyComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}
