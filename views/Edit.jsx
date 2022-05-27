const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.shop
        return (
            <DefaultLayout title="Edit Product">
                <form action={`/products/${product._id}?_method=PUT`} method="POST">
                    <label htmlFor="name">Name: <span>*</span></label>
                    <input type="text" id="name" name="name" defaultValue={product.name} required />

                    <br></br>

                    <label htmlFor="category">Category: <span>*</span></label>
                    <select id="category" name="category" defaultValue={product.category} required>
                        {/* <option>{product.category}</option> */}
                        <option value="armor">Armor</option>
                        <option value="weapon">Weapon</option>
                        <option value="potion">Potion</option>
                        <option value="salve">Salve</option>
                        <option value="artifact">Artifact</option>
                    </select>

                    <br></br>

                    <label htmlFor="price">Price: <span>*</span></label>
                    <input type="number" id="price" name="price" defaultValue={product.price} required />

                    <br></br>

                    <label htmlFor="stock">How Many Are in Stock? <span>*</span></label>
                    <input type="number" id="stock" name="stock" defaultValue={product.stock} required />

                    <br></br>

                    <label htmlFor="desc">Description: <span>*</span></label>
                    <textarea defaultValue={product.desc} id="desc" name="desc" required></textarea>

                    <br></br>

                    <label htmlFor="image">Edit Photo:</label>
                    <input type="file" id="image" name="image" />

                    <br></br>

                    <input type="submit" value="Update Product"/>
                </form>
            </DefaultLayout>
        )
    }
}