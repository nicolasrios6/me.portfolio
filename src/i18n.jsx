import i18next from "i18next";
import { initReactI18next } from "react-i18next";
import translations from './translations.json';

// const resources = {
//     es:{
//         translation:{
//             "Hola": "Hola"
//         }
//     },
//     en:{
//         translation:{
//             "Hola": "Hello"
//         }
//     }
// }

i18next
    .use(initReactI18next)
    .init({
        resources: translations,
        lng: "es", //idioma por defecto
        interpolation:{
            escapeValue: false
        }
    })

export default i18next;