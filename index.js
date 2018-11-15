// COMPONENTS

// TODO: Progress, Slider, Input, Toast

export const Header = {
    template: `<div v-bind:style="headerStyle">
                    <div v-bind:style="headerTextStyle">{{ headerText }}</div>
                </div>`,
    data: function () {
        return {
            headerStyle: {
                // height: '28px',
                height: '2.8rem',
                width: '100%',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: 'purple'
            },
            headerTextStyle: {
                width: 'calc(100% - 2rem)',
                // height: '17px',
                height: '1.7rem',
                // lineHeight: '17px',
                lineHeight: '1.7rem',
                fontFamily: 'Open Sans',
                textAlign: 'center',
                color: '#ffffff'
            }
        }
    },
    props: ['headerText']
}; // <kai-header header-texts="asdf"></kai-header>

export const Tab = {
    template: `<div v-bind:style="headerStyle">
            <div v-for="(value,key,index) in tabs" v-bind:style="index!==0?headerButtonStyle:headerButtonStyleFirst" v-on:click="setSelectedTab">{{ value }}</div>
        </div>`,
    data: function () {
        return {
            headerStyle: {
                height: '3rem',
                width: '100%',
                overflowX: 'auto',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'flex-start',
                alignItems: 'center',
                flexWrap: 'nowrap',
                backgroundColor: '#f0f0f0',
            },
            headerButtonStyle: {
                paddingTop: '0.2rem',
                paddingBottom: '0.2rem',
                paddingLeft: '1.5rem',
                whiteSpace: 'nowrap',
                fontFamily: 'Open Sans',
                fontSize: '1.4rem',
                color: '#aaaaaa'
            },
            headerButtonStyleFirst: {
                paddingTop: '0.2rem',
                paddingBottom: '0.2rem',
                paddingLeft: '1rem',
                fontFamily: 'Open Sans',
                fontSize: '1.4rem',
                color: '#323232'
            },
            selection: null
        }
    },
    props: ['tabs'],
    methods: {
        setSelection(index) {
            this.selection = index;
        }
    }
}; //  <kai-tab v-bind:tabs="tabs"></kai-tab>
// tabs:['Tab One','Tab Two','Tab Three','Tab Four']

export const SoftwareKey = { // doc not clear of style https://developer.kaiostech.com/first-app/softkeys
    template: `<div v-bind:style="softkeyStyle">
                    <div ref="softkey-left" v-bind:style="softkeyLeftStyle">{{ leftKeyText }}</div>
                    <div ref="softkey-center" v-bind:style="softkeyCenterStyle">{{ centerKeyText }}</div>
                    <div ref="softkey-right" v-bind:style="softkeyRightStyle">{{ rightKeyText }}</div>
                </div>`,
    props:['leftKeyText','centerKeyText','rightKeyText'],
    data:function(){
        return {
            softkeyStyle:{// doing
                height:'3rem',
                width:'100%',
                backgroundColor:'#dadada',
                borderTop:'0.1rem solid #ffffff'
            },
            softkeyLeftStyle:{
                display:'inline',
                paddingLeft:'0.5rem',
                width:'7.2rem',
                textAlign:'center',
                fontFamily:'Open Sans',
                fontSize:'1.6rem',
                color:'#323232'
            },
            softkeyCenterStyle:{
                display:'inline',
                paddingLeft:'0.5rem',
                paddingRight:'0.5rem',
                width:'7.6rem',
                textAlign:'center',
                fontFamily:'Open Sans',
                fontWeight:'bold',
                fontSize:'1.6rem',
                color:'#323232'
            },
            softkeyRightStyle:{
                display:'inline',
                paddingRight:'0.5rem',
                width:'7.2rem',
                textAlign:'center',
                fontFamily:'Open Sans',
                fontSize:'1.6rem',
                color:'#323232'
            }
        }
    },
    methods: {
        left: function () { console.log('You click on SoftLeft') },
        center: function () { console.log('You click on Enter') },
        right: function () { console.log('You click on SoftRight') },
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
        // updateSoftKey({
        //     left: {
        //         label: 'Left text',
        //         callback: function(){ /* Code */ }
        //     },
        //     center: {
        //         label: 'Center text',
        //         callback: function(){ /* Code */ }
        //     },
        //     right: {
        //         label: 'Right text',
        //         callback: function(){ /* Code */ }
        //     }
        // });
    },
    mounted() {
        document.addEventListener('keydown', this.handleKeyDown);
    },
    beforeDestroyed() {
        document.removeEventListener('keydown', this.handleKeyDown);
    }
}; // <kai-softwarekey left-key-text="back" center-key-text="SELECT" right-key-text="options"></kai-softwarekey>

export const List = {
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
}; // <kai-list primary-text="Hello World" secondary-text="Hello World Description"></kai-list>

export const Separator = {
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
                paddingLeft: '1rem',
                paddingRight: '1rem'
            }
        }
    }
}; // <kai-separator separator-content="Hello World"></kai-separator>

export const Checkbox = {
    template: `<div v-bind:class="listStyle">
                    <div v-bind:class="primaryText"></div>
                    <div v-bind:class="secondaryText"></div>
                </div>`,
    props: ['primaryText', 'secondaryText'],
    data: function () {
        return {
            listStyle: {
                height: '6rem',
                width: '100%',
                padding: '1rem',
                boxSizing: 'box-border'
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
}

export const Progress = {}

export const Slider = {}

export const Button = {
    template: `<div v-bind:style="buttonStyle">
                  <div v-bind:style="buttonContentStyle">{{ buttonText }}</div>
                </div>`,
    props: ['buttonText'],
    data: function () {
        return {
            buttonStyle: {
                height: '3.6rem',
                width: '100%',
                paddingLeft: '1rem',
                paddingRight: '1rem',
                boxSizing: 'border-box',
                color: 'white',
                lineHeight: '3.6rem',
                fontSize: '1.7rem',
                fontFamily: 'Open Sans',
                textAlign: 'center',
            },
            buttonContentStyle: {
                backgroundColor:'purple',
                borderRadius: '0.2rem'
            }
        }
    }
}; // need better doc... is this like header? What's GS20?

export const Input = {};

export const OptionMenu = { // apparently selected and unselected styles, no font specified in doc..
    template: `<div v-bind:style="optionMenuStyle">{{optionText}}</div>`,
    props: ['optionText'],
    data: function () {
        return {
            optionMenuStyle: {
                height: '4.8rem',
                padding: '1rem',
                fontFamily:'Open Sans',
                fontSize:'1.4rem'
            }
        }
    }
}; // <kai-option option-text="Mine Option"></kai-option>

export const ValueSelector = { // doc has way too little...
    template: `<div v-bind:style="valueSelectorsStyle">
                <div v-bind:style="dayStyle"></div>
                <div v-bind:style="monthStyle"></div>
                <div v-bind:style="yearStyle"></div>
              </div>`,
    data: function () {
        return {
            valueSelectorsStyle: {
                marginTop: '1.5rem',
                marginBottom: '1.5rem'
            },
            dayStyle: {},
            monthStyle: {},
            yearStyle: {}
        }
    },
    mounted() {
        const date = new Date()
        // set current date
    }
};

export const Dialog = {
    // TODO: text wrap?
    template: `<div v-bind:style="dialogStyle">
                    <slot></slot>
                </div>`,
    data: function () {
        return {
            dialogStyle: {
                height: '100%',
                width: '100%',
                padding: '1rem'
            }
        }
    }
}; // <kai-dialog>Stuff</kai-dialog>

export const Toast = {};

// MIXINS
export const NetworkMixin = {
    methods: {
        updateConnectionStatus() {
            const connection = navigator.connection || navigator.mozConnection || navigator.webkitConnection;
            const type = connection.type;
            console.log("Connection type changed from " + type + " to " + connection.type);
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

export const DPadMixin = {
    methods: {
        handleKeydownEvent(e) {
            const nav = (move) => {
                const next = currentIndex + move;
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
    },
    beforeDestroyed() {
        document.activeElement.removeEventListener('keydown', this.handleKeydownEvent);
    }
};