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
                            <a href='/'>All Products</a>
                            <ul>
                                <li id="dropdown">
                                    <a href=''>Categories</a>
                                    <ul id="dropdown-menu">
                                        <li>Weapons</li>
                                        <li>Armor Pieces</li>
                                        <li>Potions & Salves</li>
                                        <li>Arcane Artifacts</li>
                                    </ul>
                                </li>
                            </ul>

                        </nav>
                    </div>
                    
                    {this.props.children}
                </body>
            </html>

        )
    }
}

module.exports = DefaultLayout;