const Typography = {
  'fontFamily': '"Open Sans", sans-serif',
  'H1': {
    typeface: 300,
    pixel: '1.7rem'
  },
  'H2': {
    typeface: 600,
    pixel: 17
  },
  'H3': {
    typeface: 400,
    pixel: 14
  },
  'H4': {
    typeface: 400,
    pixel: 14
  },
  'H5': {
    typeface: 600,
    pixel: 14
  },
  'P.PRI': {
    typeface: 400,
    pixel: 17
  },
  'P.SEC': {
    typeface: 400,
    pixel: 14
  },
  'P.THI': {
    typeface: 400,
    pixel: 12
  },
  'P/UL': {
    typeface: 400,
    pixel: 17
  },
  'P.LINK': {
    typeface: 700,
    pixel: 17
  },
  'P.BTN': {
    typeface: 400,
    pixel: 17
  },
};

const Header = {
  template: `<div v-bind:style="headerStyle">
          <div v-bind:style="headerTextStyle">{{ headerText }}</div>
      </div>`,
  data: function () {
    return {
      headerStyle: {
        height: '2.8rem',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'purple'
      },
      headerTextStyle: {
        width: 'calc(100% - 2rem)',
        height: '1.7rem',
        lineHeight: '1.7rem',
        fontWeight: Typography.H1.typeface,
        fontSize: Typography.H1.pixel,
        fontFamily: Typography.fontFamily,
        textAlign: 'center',
        color: '#ffffff'
      }
    }
  },
  props: ['headerText']
};
const SoftwareKey = {
  template: `<div v-bind:style="softkeyStyle">
          <div ref="softkey-left" v-bind:style="softkeyLeftStyle">{{ leftKeyText }}</div>
          <div ref="softkey-center" v-bind:style="softkeyCenterStyle">{{ centerKeyText }}</div>
          <div ref="softkey-right" v-bind:style="softkeyRightStyle">{{ rightKeyText }}</div>
      </div>`,
  props: ['leftKeyText', 'centerKeyText', 'rightKeyText'],
  data: function () {
      return {
          softkeyStyle: {
              height: '3rem',
              width: '100%', // 32rem
              backgroundColor: '#dadada',
              borderTop: '0.1rem solid #ffffff',
              bottom: 0,
              position: 'fixed',
              display: 'flex',
              justifyContent: 'space-between'
          },
          softkeyLeftStyle: {
              display: 'inline',
              paddingLeft: '0.5rem',
              width: '7.2rem',
              textAlign: 'center',
              fontFamily: 'Open Sans',
              fontSize: '1.6rem',
              color: '#323232'
          },
          softkeyCenterStyle: {
              display: 'inline',
              paddingLeft: '0.5rem',
              paddingRight: '0.5rem',
              width: '7.6rem',
              textAlign: 'center',
              fontFamily: 'Open Sans',
              fontWeight: 'bold',
              fontSize: '1.6rem',
              color: '#323232'
          },
          softkeyRightStyle: {
              display: 'inline',
              paddingRight: '0.5rem',
              width: '7.2rem',
              textAlign: 'center',
              fontFamily: 'Open Sans',
              fontSize: '1.6rem',
              color: '#323232'
          }
      }
  },
  methods: {
      left: function () { alert('You click on SoftLeft') },
      center: function () { alert('You click on Enter') },
      right: function () { alert('You click on SoftRight') },
      handleKeyDown(evt) {
          switch (evt.key) {
              case 'SoftLeft':
                  // Action case press left key
                  this.left();
                  break;

              case 'SoftRight':
                  // Action case press right key
                  this.right();
                  break;

              case 'Enter':
                  // Action case press center key
                  this.center();
                  break;
          }
      },
      updateSoftKey(props) {
          const keys = Object.keys(props);

          keys.forEach(function (key) {
              const button = document.getElementById('softkey-' + key);
              button.textContent = props[key].label;
              softkeyCallback[key] = props[key].callback;
          });
      }
  },
  mounted() {
      document.addEventListener('keydown', this.handleKeyDown);
  },
  beforeDestroyed() {
      document.removeEventListener('keydown', this.handleKeyDown);
  }
};
const Page = {
  template: `<div v-bind:style="pageStyle">
              <Header header-text="Hello World"></Header>
              <slot></slot>
              <SoftwareKey left-key-text="back" center-key-text="SELECT" right-key-text="options"></SoftwareKey>
            </div>`,
  data: function () {
    return {
      pageStyle: {
        height: '240px',
        width: '320px',
        backgroundColor: 'blue'
      }
    }
  },
  components: {
    Header,
    SoftwareKey
  }
};

const routes = [
  { path: '/', component: Page }
];
const router = new VueRouter({
  routes
});
const app = new Vue({
  router
}).$mount('#app');