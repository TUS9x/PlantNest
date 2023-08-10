import { useParams, useSearchParams } from 'react-router-dom';

function ProductionInfor(props) {
    // const [searchParams] = useSearchParams();
    // console.log(searchParams.productionInfor);
    // console.log(props);
    const { productionInfor } = useParams();
    console.log(productionInfor);
    console.log(props);
    return (
        <div>
            <h1> PRODUCTION INFOR PAGE</h1>
            <p> thong tin san pham</p>
            <div>{productionInfor}</div>
        </div>
    );
}

export default ProductionInfor;
