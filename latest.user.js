// ==UserScript==
// @name          SABY Customizer GitHub Page
// @namespace     saby-customizer
// @version       0.0.2
// @author        IgorNovozhilov
// @description   Персональная настройка saby приложений для решения повседневных задач, и не только...
// @homepage      https://n.sbis.ru/saby-customizer
// @icon
// @icon64
// @supportURL    https://n.sbis.ru/saby-customizer/forum
// @include       https://sbis.ru/*
// @include       https://*.sbis.ru/*
// @include       https://saby.ru/*
// @include       https://*.saby.ru/*
// @include       https://tensor.ru/*
// @include       https://*.tensor.ru/*
// @run-at        document-end
// @grant         unsafeWindow
// @noframes
// ==/UserScript==
/* global unsafeWindow */
(({ document }) => {
  const script = document.createElement('script')

  script.id = 'saby-customizer-userscript'
  script.type = 'module'
  script.src = 'https://cdn.jsdelivr.net/npm/saby-customizer@0.0.0-pre.1/userscript.min.js'
  script.setAttribute('version', '0.0.0-pre.1.test')

  document.documentElement.appendChild(script)
})(
  // @ts-ignore
  unsafeWindow
)
