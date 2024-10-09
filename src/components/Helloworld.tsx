import Hellorobot from "../assets/hello-world-robot.gif";

export function Helloworld() {
    return (
        <>
            <div>
                <img src={Hellorobot} />
            </div>
            <div>
                <h1>
                    HELLO WORLD!
                </h1>
            </div>
        </>
    );
}
