export default {
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