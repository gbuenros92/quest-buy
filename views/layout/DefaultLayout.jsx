const React = require('react');

class DefaultLayout extends React.Component {
    render() {
        return (
            <html lang="en">
                <head>
                    <title>{this.props.title}</title>
                    <link rel="stylesheet" href="/css/style.css" />
                </head>

                <body>
                    <div id="logo"></div>

                    {/* NAVIGATION BAR */}
                    <div id="navParent">
                        <nav>

                        </nav>
                    </div>
                    {this.props.children}
                </body>
            </html>

        )
    }
}

module.exports = DefaultLayout;