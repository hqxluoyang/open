export default {
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