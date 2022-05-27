const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Home extends React.Component {
    render() {
        return (
            <DefaultLayout title="Quest Buy | Home">
                <h1>HOME PAGE</h1>
            </DefaultLayout>
        )
    }
}