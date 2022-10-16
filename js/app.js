// rotate arrows
const tablesArrows = document.querySelectorAll('[data-card-widget="collapse"]')
tablesArrows.forEach((el) => {
    el.addEventListener('click', () => {
        el.querySelector('.tables-arrow').classList.toggle('rotate-180')
    })
})

const dropdownsArrows = document.querySelectorAll('[data-toggle="dropdown"]')
dropdownsArrows.forEach((el) => {
    el.addEventListener('click', () => {
      if(el.querySelector('.tables-arrow'))  el.querySelector('.tables-arrow').classList.toggle('rotate-180')
    })
})

//data for pagination
const paginationBoxes = document.querySelectorAll('.pagination-box')
paginationBoxes.forEach((el) => {
    const items = el.querySelector('.dropdown-menu').querySelectorAll('.dropdown-item')
    items.forEach((val) => {
        val.addEventListener('click', (e) => {
            let value = e.target.innerText
            el.querySelector('.items-per-page').innerText = value
            el.querySelector('.per-page').innerText = value
            el.querySelector('.tables-arrow').classList.remove('rotate-180')

        })
    })

})

//
let documentWidth = document.documentElement.clientWidth
document.addEventListener('DOMContentLoaded', () => {
    showCardBody()
    if(documentWidth>1024) {
        showRightMenu()
    }
})

window.addEventListener('resize', () => {
    documentWidth = document.documentElement.clientWidth
    showCardBody()
    if(documentWidth>1024) {
        showRightMenu()
    }
})
const backArrows = document.querySelectorAll('.back-arrow')
const cards = document.querySelectorAll('.card')
const tablesHeaders = document.querySelectorAll('.tables-header')
const tablesTitles = document.querySelectorAll('.card-title')

function showCardBody() {
    if (document.documentElement.clientWidth < 768) {
        tablesTitles.forEach((el) => {
            if (!el.classList.contains('not-link-box')) {
                el.addEventListener('click', (e) => {
                    if (document.documentElement.clientWidth >= 768) {
                    } else {
                        let newEl = el.parentNode.parentNode.parentNode
                        //console.log('newel=',newEl)
                        newEl.classList.add('card-mobile-open')
                        if (newEl.querySelector('.card-body')) newEl.querySelector('.card-body').classList.remove('md-hidden')
                        if (newEl.querySelector('.card-title-box')) newEl.querySelector('.card-title-box').classList.add('title-fixed-top')
                        if (newEl.querySelector('.back-arrow')) newEl.querySelector('.back-arrow').classList.remove('d-none')
                        if (newEl.querySelector('.link-arrow')) {
                            newEl.querySelector('.link-arrow').style.cssText = 'display: none !important'
                        }
                        if (document.querySelector('.header-buttons-section')) document.querySelector('.header-buttons-section').style.cssText = 'display: none !important'

                        window.scrollTo(0, 0);

                        cards.forEach((elem) => {
                            if (!elem.classList.contains('card-mobile-open')) {
                                elem.style.cssText = 'display: none !important'
                            }
                            elem.classList.remove('collapsed-card')
                        })
                    }
                })
            }
        })

    } else {
        cards.forEach((elem) => {
            elem.style.cssText = ''
            elem.classList.remove('card-mobile-open')
            if (elem.querySelector('.card-body') && !elem.querySelector('.card-body').classList.contains('not-hidden')) {
                elem.querySelector('.card-body').classList.add('md-hidden')
                elem.querySelector('.card-body').style.cssText = ''
            }
            if (elem.querySelector('.card-title-box')) elem.querySelector('.card-title-box').classList.remove('title-fixed-top')
            if (elem.querySelector('.back-arrow')) elem.querySelector('.back-arrow').classList.add('d-none')
            if (elem.querySelector('.link-arrow')) {
                elem.querySelector('.link-arrow').style.cssText = ''
            }
            if (document.querySelector('.header-buttons-section')) document.querySelector('.header-buttons-section').style.cssText = ''
        })
    }
}

// back
backArrows.forEach((val) => {
    val.addEventListener('click', () => {
        const cards2 = document.querySelectorAll('.card')
        cards2.forEach((el) => {
            el.classList.remove('card-mobile-open')
            if (el.querySelector('.card-body')) el.querySelector('.card-body').classList.add('md-hidden')
            if (el.querySelector('.card-title-box')) el.querySelector('.card-title-box').classList.remove('title-fixed-top')
            if (el.querySelector('.back-arrow')) el.querySelector('.back-arrow').classList.add('d-none')
            if (el.querySelector('.link-arrow')) el.querySelector('.link-arrow').style.cssText = ''
            el.style.cssText = ''
            if (document.querySelector('.header-buttons-section')) document.querySelector('.header-buttons-section').style.cssText = ''
        })
    })
})


//open-appointment-window Notary description page
if(document.querySelector('.open-appointment-window')) {
    document.querySelector('.open-appointment-window').addEventListener('click', () => {
        document.querySelector('.right-table-menu').classList.add('d-flex')
        document.querySelector('.right-table-menu').classList.remove('d-none')
        document.querySelector('.wrapper').classList.add('overflow-x-hidden')
        document.querySelector('body').style.cssText = 'overflow: hidden'

    })
}
if(document.querySelector('.close-right-table-menu')) {
    document.querySelector('.close-right-table-menu').addEventListener('click', () => {
        document.querySelector('.right-table-menu').classList.remove('d-flex')
        document.querySelector('.right-table-menu').classList.add('d-none')
        document.querySelector('.wrapper').classList.remove('overflow-x-hidden')
      document.querySelector('body').style.cssText = ''

    })
}

function showRightMenu(){
    const rightMenu = document.querySelector('.right-table-menu')
    if(rightMenu){
        let hoverBox=  document.querySelector('[data-index="opacity"]')
        rightMenu.addEventListener('mouseover',()=>{
            document.querySelector('.modal-black').classList.add('show')
            document.querySelector('.modal-black').classList.remove('notary-description')
            hoverBox.classList.add('opacity-focus')
        })
        rightMenu.addEventListener('mouseout',()=>{
            document.querySelector('.modal-black').classList.remove('show')
            document.querySelector('.modal-black').classList.add('notary-description')
            hoverBox.classList.remove('opacity-focus')
        })

    }
}

/// subscribed notary booking request open close tabs
if(document.querySelector('.tab-links')) {
    const tabLinks = document.querySelector('.tab-links')
    const linksInBox = tabLinks.querySelectorAll('[role]')
    const tabsCards = document.querySelectorAll('.tabs-card')
    linksInBox.forEach(el=>{
       el.addEventListener('click',()=> {
           linksInBox.forEach(e => e.classList.remove('active'))
           el.classList.add('active')
           let linkIndex = el.dataset.index
           if (linkIndex !== 'show-all'){
               if (document.querySelector(`#${linkIndex}`)) {
                   tabsCards.forEach(e => e.classList.remove('active'))
                   document.querySelector(`#${linkIndex}`).classList.add('active')
               }
       }else if(linkIndex === 'show-all'){
               tabsCards.forEach(e => e.classList.add('active'))
           }
       })
   })
}