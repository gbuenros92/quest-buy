const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Index extends React.Component {
    render() {
        // console.log(this.props, 'props')
        const { shop } = this.props
        // console.log(shop, 'shop')
        return (
            <DefaultLayout title="All Products">
                <a href="/products/new">CLICK HERE</a>
                <ul>
                    {
                        shop.map(product => {
                            return (
                                <li key={product._id}>

                                    <div id="prod-container">

                                        <div class="prod" id="idx-name">
                                            <div id="name-txt">
                                                <h2><a href={`/products/${product._id}`}>{product.name}</a></h2>
                                            </div>

                                            <div id="dropdown-container">
                                                <ul>
                                                    <li id="idx-dropdown">
                                                        <a href="">•••</a>
                                                        <ul id="idx-menu-options">
                                                            <li>Edit</li>
                                                            <li>Delete</li>
                                                        </ul>
                                                    </li>
                                                </ul>
                                            </div>
                                        </div>

                                        <div class="prod" id="idx-img"><img src={`/images/${product.image}`} /></div>

                                        <div class="prod" id="idx-desc">
                                            <p id="desc-txt">{product.desc}</p>
                                            <p id="stock-txt">Number in stock: {product.stock}</p>
                                        </div>

                                        <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                            <input type="submit" value="Delete" />
                                        </form>

                                        <button><a href={`/products/${product._id}/edit`}>Edit</a></button>
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