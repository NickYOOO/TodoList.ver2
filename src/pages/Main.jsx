import React from 'react'
import Layout from '../components/Layout';
import Header from '../components/Header';
import Form from '../components/Form';
import List from '../components/List';

function Main() {
    // const getData = () => {
    //     return JSON.parse(localStorage.getItem('Main'))
    // }

    // const [toDos, setToDos] = useState(getData())
    // const state = useSelector((state) => {
    //     return state;
    // })

    // useEffect(() => {
    //     window.localStorage.setItem('Main', JSON.stringify(toDos))
    // }, [toDos]);

    // if (toDos == null) {
    //     setToDos([]);
    // }


    return (
        <Layout>
            <Header />
            <Form />
            <List />
        </Layout>
    );
};

export default Main