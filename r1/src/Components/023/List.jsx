import { useContext } from "react";
import Row from "./Row";
import TreesProvider from "./TreesProvider";

function List() {

    const { trees } = useContext(TreesProvider);

    return (
        <ul>
        {
            trees.map(t => <Row key={t.id} t={t} />)
        }
        </ul>
    )

}

export default List;