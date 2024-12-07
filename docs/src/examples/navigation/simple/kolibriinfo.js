import { dom } from "../../../kolibri/util/dom.js";
import {
  URI_HASH_UNSTYLED,
  URI_HASH_HOME,
  href,
  URI_HASH_KOLIBRI_INFO,
} from "../../../customize/uriHashes.js";
import { Page } from "../../../kolibri/navigation/page/page.js";

export { KolibriInfoPage };

const PAGE_CLASS = URI_HASH_KOLIBRI_INFO.substring(1); // share between page, content, and style
const ACTIVATION_MS = 1000;
const PASSIVATION_MS = 1000;
const TITLE = "Kolibri Info Page";

/**
 * The Unstyled page comes with a slide-in / slide-out animation.
 * @return { PageType }
 * @constructor
 */
const KolibriInfoPage = () =>
  Page({
    titleText: TITLE,
    activationMs: ACTIVATION_MS,
    passivationMs: PASSIVATION_MS,
    pageClass: PAGE_CLASS,
    styleElement: /** @type { HTMLStyleElement } */ styleElement,
    contentElement: /** @type { HTMLElement }      */ contentElement,
  });

const [contentElement] = dom(`
    <div class="${PAGE_CLASS} falling-letters">
        <h1>${TITLE}</h1>
        <section>
            <p>
                Die Kolibri, commonly known as the hummingbird, is a fascinating bird native to the Americas.
            </p>
            <ul>
                <li><strong>Size:</strong> Hummingbirds are among the smallest birds, with some species measuring just 7.5 cm (3 inches) in length.</li>
                <li><strong>Diet:</strong> They primarily feed on nectar but also consume insects and spiders for protein.</li>
            </ul>
        </section>
        <div class="${PAGE_CLASS}_square"><div>
    </div>
`);

const [styleElement] = dom(`
    <style data-style-id="${PAGE_CLASS}">
        @layer pageLayer { 
            .${PAGE_CLASS} {                      
                 &.activate {
                    --activation-ms:    ${ACTIVATION_MS};
                    animation:          ${PAGE_CLASS}_activation calc(var(--activation-ms) * 1ms) both ease-out;
                    transform-origin: 50% 50%;
                 }         
                 &.passivate {
                    --passivation-ms:   ${PASSIVATION_MS};
                    animation:          ${PAGE_CLASS}_passivation calc(var(--passivation-ms) * 1ms) both ease-in;
                    transform-origin: 50% 50%;
                 }                       
             } 

             /* cannot be nested and must be uniquely named */
             @keyframes ${PAGE_CLASS}_activation {
                from { 
                    transform: translateZ(-3000px) rotateZ(-360deg); 
                    opacity: 0; 
                }
             }  
             @keyframes ${PAGE_CLASS}_passivation {
                from { }
                to { 
                    transform: translateZ(-3000px) rotateZ(360deg); 
                    opacity: 0; 
                }
             }        

            .${PAGE_CLASS}_square {
                width: 100px;
                height: 100px;
                margin: 2rem;
                background-color: coral;
                -webkit-animation: squareToCircle 2s 1s infinite alternate;
            }

            @-webkit-keyframes squareToCircle {
                0% {
                        border-radius: 0 0 0 0;
                        background: coral;
                        transform: rotate(0deg);
                }
                25% {
                        border-radius: 50% 0 0 0;
                        background: darksalmon;
                        transform: rotate(45deg);
                }
                50% {
                        border-radius: 50% 50% 0 0;
                        background: indianred;
                        transform: rotate(90deg);
                }
                75% {
                        border-radius: 50% 50% 50% 0;
                        background: lightcoral;
                        transform: rotate(135deg);
                }
                100% {
                        border-radius: 50% 50% 50% 50%;
                        background: darksalmon;
                        transform: rotate(180deg);
                }
            }  
        }
    </style>
`);