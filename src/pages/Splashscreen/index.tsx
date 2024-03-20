import { FunctionComponent, useEffect } from "react";
import "./styles.css";
import { useNavigate } from "react-router-dom";

const Desktop: FunctionComponent = () => {
    const navigate = useNavigate()

    useEffect(() => {
        setTimeout(() => {
            navigate("/home")
        }, 2000)
    }, [])

    return (
        <div className={"desktop1"}>
            <img className={"beasier1Icon"} alt="" src="/beasier-1@2x.png" />
        </div>
    );
};

export default Desktop;
