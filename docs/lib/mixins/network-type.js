export default {
    data: function () {
        return {
            connectionType: ''
        }
    },
    methods: {
        updateConnectionStatus() {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            if (connection) {
                this.connectionType = connection.type;
            }
        }
    },
    mounted() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            connection.addEventListener('change', this.updateConnectionStatus);
        }
    },
    beforeDestroyed() {
        const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
        if (connection) {
            connection.removeEventListener('change', this.updateConnectionStatus);
        }
    }
};