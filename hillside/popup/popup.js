const storageKeys = {
  userInfo: 'com.duo.userInfo'
}

const pages = {
  home: {
    htmlID: '#page-home',
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
    backButtonPage: 'home'
  }
}

$(document).ready(() => {
  _showPage(pages.home)

  // Display cached current user info
  chrome.storage.sync.get([storageKeys.userInfo], data => {
    _displayUserInfo(data[storageKeys.userInfo])
  })

  // Refresh the current user
  getCurrentUser()
    .then(({ user }) => _displayUserInfo(user))
    .catch(console.log)
})

function _displayUserInfo(user) {
  // Cache user info
  let displayName = ''
  let email = ''
  if (user != null) {
    displayName = user.displayName
    email = user.email
  }

  chrome.storage.sync.set({ [storageKeys.userInfo]: {
    displayName, email
  }})

  $('#current-user-name').text(displayName)
  $('#current-user-email').text(email)
}

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