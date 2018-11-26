export default {
    data: function () {
        return {
            onlineStatus: navigator.onLine ? "online" : "offline"
        }
    },
    methods: {
        updateOnlineStatus() {
            this.onlineStatus = navigator.onLine ? "online" : "offline";
        }
    },
    mounted() {
        window.addEventListener('online', this.updateOnlineStatus);
        window.addEventListener('offline', this.updateOnlineStatus);
    },
    beforeDestroyed() {
        window.removeEventListener('online', this.updateOnlineStatus);
        window.removeEventListener('offline', this.updateOnlineStatus);
    }
};