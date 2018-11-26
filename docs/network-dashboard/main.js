const OnlineStatusMixin = {
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
const NetworkTypeMixin = {
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

const Separator = {
    template: `<div v-bind:style="separatorStyle">{{ separatorContent}}</div>`,
    props: ['separatorContent'],
    data: function () {
        return {
            separatorStyle: {
                fontFamily: 'Open Sans',
                fontSize: '1.4rem',
                color: '#6a6a6a',
                backgroundColor: '#f0f0f0',
                width: '100%',
                height: '2.4rem',
                boxSizing: 'border-box',
                paddingLeft: '1rem',
                paddingRight: '1rem'
            }
        }
    }
};
const List = { // icon left/right (icon=checkbox/radiobutton/image), slider/progress as secondary only when not in tab
    template: `<div v-bind:style="listStyle">
                    <div v-bind:style="primaryTextStyle">{{ primaryText }}</div>
                    <div v-bind:style="secondaryTextStyle">{{ secondaryText }}</div>
                </div>`,
    props: ['primaryText', 'secondaryText'],
    data: function () {
        return {
            listStyle: {
                height: '6rem',
                width: '100%',
                padding: '1rem',
                boxSizing: 'border-box'
            },
            primaryTextStyle: {
                fontFamily: 'Open Sans',
                fontSize: '1.7rem',
                color: '#323232'
            },
            secondaryTextStyle: {
                fontFamily: 'Open Sans',
                fontSize: '1.4rem',
                color: '#6a6a6a'
            }
        }
    }
};
const NetworkDashboardPage = {
    mixins: [NetworkTypeMixin, OnlineStatusMixin],
    template: `<div>
                <Separator separator-content="Network Dashboard"></Separator>
                <List :primary-text="onlineStatus" :secondary-text="connectionType" class="items" tabIndex="1"></List>
            </div>`,
    components: {
        List,
        Separator
    }
};

const routes = [
    { path: '/', component: NetworkDashboardPage }
];
const router = new VueRouter({
    routes
});
const app = new Vue({
    router
}).$mount('#app');