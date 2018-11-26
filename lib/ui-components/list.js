export default { // icon left/right (icon=checkbox/radiobutton/image), slider/progress as secondary only when not in tab
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