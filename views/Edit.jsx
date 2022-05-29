const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class Edit extends React.Component {
    render() {
        const product = this.props.shop
        return (
            <DefaultLayout title={`Edit ${product.name}`}>
                <div className="form-container">
                    <form action={`/products/${product._id}?_method=PUT`} method="POST">
                        <label htmlFor="name">Name: <span>*</span></label>
                        <input class="input-txt" type="text" id="name" name="name" defaultValue={product.name} required />

                        <br></br>

                        <label htmlFor="category">Category: <span>*</span></label>
                        <select id="category" name="category" defaultValue={product.category} required>
                            <option value="armor">Armor</option>
                            <option value="weapon">Weapon</option>
                            <option value="potion">Potion</option>
                            <option value="salve">Salve</option>
                            <option value="artifact">Artifact</option>
                        </select>

                        <br></br>

                        <label htmlFor="price">Price: <span>*</span></label>
                        <input class="number input-txt" type="number" id="price" name="price" defaultValue={product.price} required />

                        <br></br>

                        <label htmlFor="stock">How Many Are in Stock? <span>*</span></label>
                        <input class="number input-txt" type="number" id="stock" name="stock" defaultValue={product.stock} required />

                        <br></br>

                        <label htmlFor="desc">Description: <span>*</span></label>
                        <textarea class="input-txt" defaultValue={product.desc} id="desc" name="desc" required></textarea>

                        <br></br>

                        <label htmlFor="image">Edit Photo:</label>
                        <input type="file" id="image" name="image" />

                        <br></br>

                        <input class="buttons" type="submit" value="Update" />
                        <button class="buttons"><a href={`/products`}>Cancel</a></button>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}