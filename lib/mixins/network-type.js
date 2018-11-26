export default {
    data: function () {
        return {
            connectionType: (navigator.connection || navigator.mozConnection || navigator.webkitConnection).type
        }
    },
    methods: {
        updateConnectionStatus() {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            this.connectionType = connection.type;
        }
    },
    mounted() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        connection.addEventListener('change', this.updateConnectionStatus);
    },
    beforeDestroyed() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        connection.removeEventListener('change', this.updateConnectionStatus);
    }
};