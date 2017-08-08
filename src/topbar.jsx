import React from 'react';
function render() {
    return <div className="pd1">
        <span>
            <style dangerouslySetInnerHTML={{__html: "\n\
                * {\n\
                    box-sizing: border-box;\n\
                }\n\
                \n\
                body {\n\
                    margin: 0;\n\
                }\n\
                \n\
                button:hover {\n\
                    cursor: pointer;\n\
                }\n\
                \n\
                a {\n\
                    text-decoration: none;\n\
                    color: inherit;\n\
                }\n\
                \n\
                .pd-hoverable > .pd-onhover {\n\
                    display: none;\n\
                }\n\
                \n\
                .pd-hoverable:hover > * {\n\
                    display: none;\n\
                }\n\
                \n\
                .pd-hoverable:hover > .pd-onhover {\n\
                    display: flex;\n\
                }\n\
                \n\
                \n\
                .pd1-image-4 {\n\
                    width: 400px;\n\
                    height: 111px;\n\
                    flex-shrink: 0;\n\
                    min-width: 400px;\n\
                    min-height: 111px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                }\n\
                \n\
                .pd1-0-0-0-0-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 400px;\n\
                    min-height: 111px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd1-image-9 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 400px;\n\
                    min-height: 112px;\n\
                    padding-top: 1px;\n\
                    padding-bottom: 0px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    background-image: url('https://ucarecdn.com/b2557958-3d9a-473b-ae91-742db1a9e1f5/');\n\
                    background-size: 100% 100%;\n\
                }\n\
                \n\
                .pd1-0-0-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 400px;\n\
                    min-height: 112px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0.3194444444444444;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-misso-5 {\n\
                    flex-shrink: 0;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: #000000;\n\
                    font-size: 14px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.765625px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-1 {\n\
                    min-height: 14px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0.10714285714285714;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-quemsomos-8 {\n\
                    flex-shrink: 0;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: #000000;\n\
                    font-size: 14px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.265625px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-3 {\n\
                    min-height: 14px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-4 {\n\
                    height: 0px;\n\
                    flex-grow: 0.08333333333333333;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-participe-3 {\n\
                    flex-shrink: 0;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: #000000;\n\
                    font-size: 14px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.640625px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-5 {\n\
                    min-height: 14px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-6 {\n\
                    height: 0px;\n\
                    flex-grow: 0.06746031746031746;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-nossoapoio-6 {\n\
                    flex-shrink: 0;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: #000000;\n\
                    font-size: 14px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.265625px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-7 {\n\
                    min-height: 14px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-8 {\n\
                    height: 0px;\n\
                    flex-grow: 0.10119047619047619;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-contato-7 {\n\
                    flex-shrink: 0;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: #000000;\n\
                    font-size: 14px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.65625px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-9 {\n\
                    min-height: 14px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0-10 {\n\
                    height: 0px;\n\
                    flex-grow: 0.32142857142857145;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-0-0-1-0-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 348px;\n\
                    min-height: 14px;\n\
                }\n\
                \n\
                .pd1-rectangle-4 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 348px;\n\
                    min-height: 54px;\n\
                    padding-top: 20px;\n\
                    padding-bottom: 20px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgb(253, 112, 112);\n\
                }\n\
                \n\
                .pd1-0-0-1 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 348px;\n\
                    min-height: 54px;\n\
                    margin-top: 0px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd1-0-0-2 {\n\
                    width: 0px;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd1-topbar-4 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 400px;\n\
                    min-height: 166px;\n\
                    padding-top: 0px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: #FFFFFF;\n\
                }\n\
                \n\
                .pd1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 400px;\n\
                    min-height: 166px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd1 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    min-width: 400px;\n\
                    min-height: 166px;\n\
                    padding-top: 0px;\n\
                    padding-bottom: 0px;\n\
                }\n\
                \n\
                \n\
                "}}/>
        </span>
        <div className="pd1-0">
            <div className="pd1-topbar-4">
                <div className="pd1-0-0-0">
                    <div className="pd1-image-9">
                        <div className="pd1-0-0-0-0-0">
                            <img src="https://ucarecdn.com/b4b7772e-de03-478a-82b4-5580cee1c380/" className="pd1-image-4" /> 
                        </div>
                    </div>
                </div>
                <div className="pd1-0-0-1">
                    <div className="pd1-rectangle-4">
                        <div className="pd1-0-0-1-0-0">
                            <div className="pd1-0-0-1-0-0-0" /> 
                            <a href="#mission" className="pd1-0-0-1-0-0-1">
                                <div className="pd1-misso-5">
                                    <div>Missão</div>
                                    <div></div>
                                </div>
                            </a>
                            <div className="pd1-0-0-1-0-0-2" /> 
                            <a href="#who" className="pd1-0-0-1-0-0-3">
                                <div className="pd1-quemsomos-8">
                                    <div>Quem Somos</div>
                                    <div></div>
                                </div>
                            </a>
                            <div className="pd1-0-0-1-0-0-4" /> 
                            <a href="#participate" className="pd1-0-0-1-0-0-5">
                                <div className="pd1-participe-3">
                                    <div>Participe</div>
                                    <div></div>
                                </div>
                            </a>
                            <div className="pd1-0-0-1-0-0-6" /> 
                            <a href="#supporters" className="pd1-0-0-1-0-0-7">
                                <div className="pd1-nossoapoio-6">
                                    <div>Nosso Apoio</div>
                                    <div></div>
                                </div>
                            </a>
                            <div className="pd1-0-0-1-0-0-8" /> 
                            <a href="#contact" className="pd1-0-0-1-0-0-9">
                                <div className="pd1-contato-7">
                                    <div>Contato</div>
                                    <div></div>
                                </div>
                            </a>
                            <div className="pd1-0-0-1-0-0-10" /> 
                        </div>
                    </div>
                </div>
                <div className="pd1-0-0-2" /> 
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}