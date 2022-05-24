const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Show extends React.Component {
    render() {
        const product = this.props.shop
        return (
            <DefaultLayout title={`${product.name}`}>
                <div id="show-container">
                    <h3>{product.name}</h3>

                    <div id="prod-img">
                        <img src={`/images/${product.image}`}/>
                    </div>

                    <div id="desc-container">
                        <p id="prod-desc">{product.desc}</p>
                    </div>

                    <button><a href={`/products/${product._id}/edit`}>{`Edit ${product.name}`}</a></button>

                    <form action={`/products/${product._id}?_method=DELETE`} method="POST">
                        <input type="submit" value="Delete" />
                    </form>

                    <button><a href={`/products`}>Back</a></button>
                </div>
            </DefaultLayout>
        )
    }
}