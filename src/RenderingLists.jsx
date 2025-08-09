function RenderingLists() {
    const products = [
        {title: 'Apple', price: 1.2},
        {title: 'Banana', price: 0.5},
    ];

    const listItems = products.map((product, index) => {
        return (
            <li key={index}>
                {product.title} - ${product.price.toFixed(2)}
            </li>
        );
    });
}