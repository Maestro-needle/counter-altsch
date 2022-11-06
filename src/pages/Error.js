import React from "react";
import { Link } from "react-router-dom";
// creating an error page component
function Error() {
    return(
        <section>
            <h1>OPPS!</h1>
            <div>
                <p>you just clicked the error button.</p>
                <Link path='/'> go home</Link>
            </div>
        </section>
    );
}

export default Error;