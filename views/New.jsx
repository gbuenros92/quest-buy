const React = require('react')
const DefaultLayout = require('./layout/DefaultLayout')

module.exports = class New extends React.Component {
    render() {
        return (
            <DefaultLayout>
                <div id="form-container">
                    <form action="/products" method="POST">
                        <label htmlFor="name">Name:</label>
                        <input type="text" id="name" name="name" required />

                        <br></br>

                        <label htmlFor="category">Category:</label>
                        <select id="category" name="category" required>
                            <option></option>
                            <option value="armor">Armor</option>
                            <option value="weapon">Weapon</option>
                            <option value="potion">Potion</option>
                            <option value="salve">Salve</option>
                            <option value="artifact">Artifact</option>
                        </select>

                        <br></br>

                        <label htmlFor="price">Price:</label>
                        <input type="number" id="price" name="price" required />

                        <br></br>

                        <label htmlFor="stock">How Many Are You Selling?</label>
                        <input type="number" id="stock" name="stock" required />

                        <br></br>

                        <label htmlFor="desc"></label>
                        <textarea placeholder="Write a brief description of the product here" id="desc" name="desc" required></textarea>

                        <br></br>

                        <label htmlFor="image">Upload a Photo:</label>
                        <input type="file" id="image" name="image" />

                        <br></br>

                        <input type="submit" value="Post Your Product"/>
                    </form>
                </div>
            </DefaultLayout>
        )
    }
}