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

                    <div id="parent">
                        <nav>
                            <a href="/products">Home</a>
                            <ul>
                                <li id="dropdown">
                                    <a href=''>Our Products</a>
                                    <ul id="dropdown-menu">
                                        <li>Weapons</li>
                                        <li>Armor Pieces</li>
                                        <li>Potions & Salves</li>
                                        <li>Arcane Artifacts</li>
                                    </ul>
                                </li>
                            </ul>

                            <button>New</button>

                            <a href="/products/new">CLICK HERE</a>
                        </nav>

                        <div id="content">
                            {this.props.children}
                        </div>
                    </div>

                </body>
            </html>

        )
    }
}

module.exports = DefaultLayout;