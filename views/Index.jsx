const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Index extends React.Component {
    render() {
        // console.log(this.props, 'props')
        const { shop } = this.props
        // console.log(shop, 'shop')
        return (
            <DefaultLayout title="All Products">
                <ul class="prod-list">
                    {
                        shop.map(product => {
                            return (
                                <li key={product._id}>

                                    <div id="prod-container">

                                        <div id="top-bar">
                                            <div id="dropdown-container">
                                                <ul>
                                                    <li id="idx-dropdown">
                                                        <a id="options" href="">•••</a>
                                                        <ul id="idx-menu-options">
                                                            <li><a href={`/products/${product._id}/edit`}>Edit</a></li>
                                                            <li>
                                                                <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                                                    <input id="deleteButton" type="submit" value="Delete" />
                                                                </form>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div id="name-txt">
                                            <h3><a href={`/products/${product._id}`}>{product.name}</a></h3>
                                        </div>

                                        <div id="idx-img"><a href={`/products/${product._id}`}><img src={`/images/${product.image}`} /></a></div>

                                        <div id="idx-desc">
                                            <p id="desc-txt">{product.desc}</p>
                                            <p id="price-txt">Price: {product.price} Silvers</p>
                                        </div>
                                    </div>

                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}