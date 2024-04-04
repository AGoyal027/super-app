import React, { useState } from "react";
import bgImage from "../../assets/image 13.png"
import styles from "./Registration.module.css"

function Registration() {
    const [name, setName] = useState();
    const [username, setUsername] = useState();
    const [email, setEmail] = useState();
    const [mobile, setMobile] = useState();
    const [shareData, setShareData] = useState(false);

    const handleSubmit = () => {
        console.log({ name, username, email, mobile, shareData });
    }

    return (
        <div className={styles.page}>
            <div className={styles.left}>
                <h1>Discover new things on <br /> Superapp</h1>
                <img src={bgImage} className={bgImage} alt="background" />
            </div>
            <div className={styles.right}>
                <div>
                    <h2>Super app</h2>
                    <h3>Create your new account</h3>
                </div>
                <div>
                    <input type="text" placeholder="Name" value={name}
                        onChange={(e) => setName(e.target.value)}
                    />
                    <br />
                    <input type="text" placeholder="UserName" value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                    <br />
                    <input type="email" placeholder="Email" value={email}
                        onChange={(e) => setEmail(e.target.value)}
                    />
                    <br />
                    <input type="tel" placeholder="Mobile" value={mobile}
                        onChange={(e) => setMobile(e.target.value)}
                    />
                    <br />
                    <div>
                        <input type="checkbox" value={shareData}
                            onChange={(e) => setShareData(true)}
                        />
                        <label htmlFor="">Share my registration data with Superapp</label>
                    </div>
                    <button onClick={handleSubmit}>SIGN UP</button>
                </div>
                <div>
                    {/* <button onClick={handleSubmit}>SIGN UP</button> */}
                    <p>
                        By clicking on Sign up. you agree to Superapp <span>Terms and Conditions of Use</span>
                    </p>
                    <p>
                        To learn more about how Superapp collects, uses, shares and protects your personal data please head Superapp <span>Privacy Policy</span>
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Registration