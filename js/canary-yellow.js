(() => {
  if (!window.location.href.includes("gallery.canary---yellow.com")) return false

  if (!window.location.href.includes("/cart")) {
    return false
  }

  let interval = setInterval(findTerms, 50)

  function findTerms() {
    const form = document.querySelector(`form[action="/cart"]`)

    if (form) {
      const terms = form.querySelectorAll(`label[for*="agree"], label[for*="terms"]`)
      if (terms) {
        clearInterval(interval)

        for (let i = 0; i < terms.length; i++) {
          const term = terms[i]
          term.click()
        }
      }
    }
  }
})()
