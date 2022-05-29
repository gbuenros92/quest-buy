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
                            <a href="/products">All Products</a>
                            
                            {/* <ul>
                                <li id="dropdown">
                                    <a href=''>By Category</a>
                                    <ul id="dropdown-menu">
                                        <li>Weapons</li>
                                        <li>Armor Pieces</li>
                                        <li>Potions & Salves</li>
                                        <li>Arcane Artifacts</li>
                                    </ul>
                                </li>
                            </ul> */}

                            <a href="/products/new">Post New</a>
                        </nav>

                        <div id="title"><h1>{this.props.title}</h1></div>

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