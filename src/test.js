import string from './css.js'

const player = {
    id: undefined,
    time: 0,
    ui: {
        demo1: document.querySelector('#demo1'),
        demo2: document.querySelector('#demo2')
    },
    n: 1,
    events: {
        '#btnPause': 'pause',
        '#btnPlay': 'play',
        '#btnSlow': 'slow',
        '#btnNormal': 'normal',
        '#btnFast': 'fast',
        '#btnImmediate': 'immediate'
    },
    init: () => {
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.bindEvents()
        player.play()
    },
    bindEvents: () => {
        for (let key in player.events) {
            if (player.events.hasOwnProperty(key)) {
                const value = player.events[key]  //方法值pause、play、slow
                document.querySelector(key).onclick = player[value]
            }
        }
    },
    run: () => {
        player.n += 1;
        if (player.n > string.length) {
            window.clearInterval(player.id)
            return
        }
        player.ui.demo1.innerText = string.substr(0, player.n)
        player.ui.demo2.innerHTML = string.substr(0, player.n)
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    },
    play: () => {
        window.clearInterval(player.id)
        player.id = setInterval(player.run, player.time)
    },
    pause: () => {
        window.clearInterval(player.id)
    },
    slow: () => {
        player.pause()
        player.time = 30
        player.play()
    },
    normal: () => {
        player.pause()
        player.time = 15
        player.play()
    },
    fast: () => {
        player.pause()
        player.time = 0
        player.play()
    },
    immediate: () => {
        player.pause()
        player.ui.demo1.innerText = string
        player.ui.demo2.innerHTML = string
        player.ui.demo1.scrollTop = player.ui.demo1.scrollHeight
    }
}

player.init()


