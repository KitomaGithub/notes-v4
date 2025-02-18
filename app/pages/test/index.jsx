import { useParams } from "react-router"

export function Test(){
    const params = useParams();
    return(
        <>
            <p>
                test {params.testId}
            </p>
        </>
    )
}