const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Show extends React.Component {
    render() {
        const product = this.props.shop
        return (
            <DefaultLayout title={`${product.name}`}>
                <div id="show-container">

                    <div id="left-show">
                        <div id="prod-img">
                            <img src={`/images/${product.image}`} />
                        </div>
                        <p>Currently in Stock: {product.stock}</p>

                        <div id="show-buttons">
                            <button class="buttons"><a href={`/products/${product._id}/edit`}>Edit</a></button>

                            <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                <input class="buttons" id="showDelete" type="submit" value="Delete" />
                            </form>
                        </div>

                        <button class="buttons"><a href={`/products`}>Back</a></button>
                    </div>

                    <div id="right-show">
                        <div id="desc-container">
                            <p id="prod-desc">{product.desc}</p>
                        </div>

                        <div id="buy">
                            <div id="price-container">
                                <h1>Price: </h1><p>{product.price} Silvers</p>
                            </div>

                            <button id="buyButton" className="buttons" hidden={product.stock === 0}>Buy Now</button>
                        </div>

                        {(product.stock === 0) && <h1>Currently out of Stock</h1>}
                    </div>
                </div>
            </DefaultLayout>
        )
    }
}