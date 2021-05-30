function List({ listItems }) {

    const items = listItems
    const arr = items.map((item) => {
        return (
            <li key={item}>{item}</li>
        )
    })
    return <ul>{arr}</ul>
}

export default List