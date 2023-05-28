import { useState } from "react";

export default function LoginPage() {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);

    const login = () => {

    };

    return (
        <div className="container-fluid">
            <div className="row">
                <div className="col"></div>
                <div className="col"></div>
                </div>
        </div>
    );
}