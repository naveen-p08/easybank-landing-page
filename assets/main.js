const primaryNavigation = document.querySelector('.primary-navigation')
const overlay = document.querySelector('.overlay')
const mobileToggle = document.querySelector('.mobile-toggle')
const mobileMenu = document.querySelector('.mobile-menu')
const mobileClose = document.querySelector('.mobile-close')
const navItems = document.querySelectorAll('.nav-items')
const body = document.querySelector('body')


let toggleAction = () => {
    //opens and closes the menu list when menu button is clicked
    primaryNavigation.classList.toggle('toggle')
    //opens and closes the background black overlay when menu button is pressed
    overlay.classList.toggle('active')

    //changes the open and close button when clicked
    mobileMenu.classList.toggle('toggle-off')
    mobileClose.classList.toggle('toggle')

    //changes the aria attribute based on whether menu list is open or closed
    if (primaryNavigation.classList.contains('toggle')) {
        primaryNavigation.setAttribute('aria-expanded', true)
    } else {
        primaryNavigation.setAttribute('aria-expanded', false)
    }

    //setting overflow hidden to body so scroll is disabled when menu is open
    if (primaryNavigation.classList.contains('toggle')) {
        body.classList.add('scroll-lock')
    } else {
        body.classList.remove('scroll-lock')
    }
}



//mobile toggle button
mobileToggle.addEventListener('click', () => {
    toggleAction()
})


//menu items
navItems.forEach(items => {
    items.addEventListener('click', () => {
        toggleAction()
    })
});


//closes when clicked outside menu box into overlay
overlay.addEventListener('click', () => {
    toggleAction()
})