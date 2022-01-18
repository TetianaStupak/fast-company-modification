import React, { useState, useEffect, useMemo } from "react";
import CardWrapper from "../../common/Card";
import SmallTitle from "../../common/typografy/smallTitle";

function factorial(n) {
    return n ? n * factorial(n - 1) : 1;
}
function runFactorial(n) {
    console.log("run factorial");
    return factorial(n);
}
const ComplexCalculateExample = () => {
    const [value, setValue] = useState(10);
    const [otherState, setOtherState] = useState(false);

    const buttonColor = useMemo(() => ({
        value: otherState ? "primary" : "secondary"
    }), [otherState]);
    useEffect(() => {
        console.log("render button color");
    }, [buttonColor]);

    const fact = useMemo(() => runFactorial(value), [value]);
    return (
        <>
            <CardWrapper>
                <SmallTitle>Кэширование сложных вычислений</SmallTitle>
                <p>Value:{value}</p>
                <p>Result fact:{fact}</p>
                <button
                    className="ctn btn-primary mx-2"
                    onClick={() => setValue(prevState => prevState + 10)}
                >
                    Increment
                </button>
                <button
                    className="ctn btn-primary mx-2"
                    onClick={() => setValue(prevState => prevState - 10)}
                >
                    Decrement
                </button>
            </CardWrapper>
            <CardWrapper>
                <SmallTitle>Зависимость от сторонних setState</SmallTitle>
                <button
                    className={"ctn mx-2 btn-" + buttonColor.value}
                    onClick={() => setOtherState(prevState => !prevState)}
                >
                    Change Color
                </button>
            </CardWrapper>
        </>
    );
};

export default ComplexCalculateExample;
