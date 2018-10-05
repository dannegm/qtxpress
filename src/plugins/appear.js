class Appear {
    constructor (os) {
        this.os = os
    }
    activate (el, binding) {
        const mod = binding.modifiers
        const animationType = binding.value

        const wTop = window.scrollY
        const wBottom = wTop + document.documentElement.clientHeight
        const { top, bottom } = el.getBoundingClientRect ()
        const inWindow = top < wBottom && bottom > wTop

        const animateClass = this.os.animateClass || 'animated'
        el.classList.add (animateClass)

        if (inWindow) {
            el.classList.add (animationType)
        } else if (mod.repeat) {
            el.classList.remove(animationType)
        }
    }
}

export default {
    install (Vue, os = {}) {
        const a = new Appear (os)
        Vue.directive ('appear', {
            bind (el, binding) {
                el.classList.add (os.animateClass || 'animated')
            },
            inserted (el, binding) {
                a.activate (el, binding)
                window.addEventListener ('scroll', () => a.activate (el, binding))
            }
        })
    }
}