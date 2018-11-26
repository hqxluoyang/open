import OnlineStatusMixin from '../lib/mixins/online-status.js'
import NetworkTypeMixin from '../lib/mixins/network-type.js'
import Separator from '../lib/ui-components/separator.js';
import List from '../lib/ui-components/list.js';

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