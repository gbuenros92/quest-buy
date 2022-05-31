const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout title="Post New Product">
                <div class="form-container">
                    <form action="/products" method="POST">
                        <label htmlFor="name">Name: <span>*</span></label>
                        <input class="input-txt" type="text" id="name" name="name" required />

                        <br></br>

                        <label htmlFor="category">Category: <span>*</span></label>
                        <select id="category" name="category" required>
                            <option value="none" selected disabled hidden>Select a Category</option>
                            <option value="armor">Armor</option>
                            <option value="weapon">Weapon</option>
                            <option value="potion">Potion</option>
                            <option value="salve">Salve</option>
                            <option value="artifact">Artifact</option>
                        </select>

                        <br></br>

                        <label htmlFor="price">Price: <span>*</span></label>
                        <input class="number input-txt" type="number" id="price" name="price" required />

                        <br></br>

                        <label htmlFor="stock">How Many Are You Selling? <span>*</span></label>
                        <input class="number input-txt" type="number" id="stock" name="stock" min="1" required />

                        <br></br>

                        <label htmlFor="desc">Description: <span>*</span></label>
                        <textarea class="input-txt" placeholder="Write a brief description of the product here" id="desc" name="desc" required></textarea>

                        <br></br>

                        <label htmlFor="image">Upload a Photo:</label>
                        <input type="file" id="image" name="image" />

                        <br></br>

                        <input class="buttons" type="submit" value="Create New Post"/>
                        <button class="buttons"><a href={`/products`}>Cancel</a></button>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}