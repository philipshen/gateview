const pages = {
  login: {
    htmlID: '#page-login',
    barButtons: [
      {
        icon: 'settings',
        onClick: () => _showPage(pages.settings)
      }
    ]
  },
  settings: {
    htmlID: '#page-settings',
    title: 'Settings',
    backButtonPage: 'login'
  }
}

$(document).ready(() => {
  _showPage(pages.login)
})

// chrome.identity.getAuthToken({ interactive: true }, token => {
//   console.log(token)
// })

function _showPage(page) {
  _hideAllPages()
  _show(page.htmlID)

  // Title
  const title = page.title || 'Gateview'
  $('#navbar-title').text(title)

  // Back button
  const backButton = $('#navbar-back-button')
  if (page.backButtonPage == null) {
    _hide(backButton)
  } else {
    backButton.off().click(() => _showPage(pages[page.backButtonPage]))
    _show(backButton)
  }

  // Right buttons
  const barButtonContainer = $('#navbar-right-buttons')
  barButtonContainer.empty()
  if (page.barButtons != null) {
    page.barButtons.forEach(button => {
      const buttonEl = $(`
        <button class="icon-button material-icons">
          ${button.icon}
        </button>
      `)

      buttonEl.click(button.onClick)
      barButtonContainer.append(buttonEl)
    })
  }
}

function _hideAllPages() {
  Object.values(pages).forEach(page => _hide(page.htmlID))
}

function _hide(id) {
  const element = $(id)
  element.css('display', 'none')
}

function _show(id) {
  const element = $(id)
  element.css('display', 'block')
}