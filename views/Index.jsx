const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Index extends React.Component {
    render() {
        // console.log(this.props, 'props')
        const { shop } = this.props
        // console.log(shop, 'shop')
        return (
            <DefaultLayout title="Index">
                <a href="/products/new">CLICK HERE</a>
                <ul>
                    {
                        shop.map(product => {
                            return (
                                <li key={product._id}>
                                    <p>Product Name: <a href={`/products/${product._id}`}>{product.name}</a></p>
                                    <p>Category: {product.category}</p>
                                    <p>Price: {product.price}</p>
                                    <p>Number in stock: {product.stock}</p>
                                    <p>Description: {product.desc}</p>
                                    <img src={`/images/${product.image}`}/>

                                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                                        <input type="submit" value="Delete" />
                                    </form>

                                    <button><a href={`/products/${product._id}/edit`}>Edit</a></button>
                                </li>
                            )
                        })
                    }
                </ul>
            </DefaultLayout>
        )
    }
}