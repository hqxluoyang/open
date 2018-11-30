const DPadListViewMixin = {
    data: function () {
        return {
            currentIndex: 1
        }
    },
    methods: {
        handleKeydownEvent(e) {
            const nav = (move) => {
                const next = this.currentIndex + move;
                const items = document.querySelectorAll('.items');
                const targetElement = items[next];
                targetElement.focus();
            }

            switch (e.key) {
                case 'ArrowUp':
                    nav(-1);
                    break;
                case 'ArrowDown':
                    nav(1);
                    break;
                case 'ArrowRight':
                    nav(1);
                    break;
                case 'ArrowLeft':
                    nav(-1);
                    break;
            }
        }
    },
    mounted() {
        document.activeElement.addEventListener('keydown', this.handleKeydownEvent);

        const items = document.querySelectorAll('.items');
        if (items) {
            const targetElement = items[0];
            targetElement.focus();
        }
    },
    beforeDestroyed() {
        document.activeElement.removeEventListener('keydown', this.handleKeydownEvent);
    }
};
export default {
    template: `<div v-bind:style="listViewStyle"><slot></slot></div>`,
    mixins: [DPadListViewMixin],
    data: function () {
        return {
            listViewStyle: {
                height: '100%',
                width: '100%',
                overflowY: 'auto'
            }
        }
    }
};