import Topbar from './topbar';
import Profile from './profile';
import Bottombar from './bottombar';
import React from 'react';
function render() {
    return <div className="pd0">
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
                .pd0-topbar-9 {\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 400px;\n\
                    min-height: 166px;\n\
                }\n\
                \n\
                .pd0-0-0-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 400px;\n\
                    min-height: 166px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0-bemvindxaorugbyxchange-2 {\n\
                    flex-shrink: 0;\n\
                    min-height: 46px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: rgb(15, 14, 14);\n\
                    font-size: 44px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.25px;\n\
                }\n\
                \n\
                .pd0-0-0-1-0-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 642px;\n\
                    min-height: 46px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-image-3 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 642px;\n\
                    min-height: 373px;\n\
                    padding-top: 164px;\n\
                    padding-bottom: 163px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    background-image: url('https://ucarecdn.com/0c1efff1-8dce-4741-8399-3fd813117d84/');\n\
                    background-size: cover;\n\
                    background-position: center;\n\
                }\n\
                \n\
                .pd0-0-0-1 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 642px;\n\
                    min-height: 373px;\n\
                    margin-top: 1px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-2-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-misso-2 {\n\
                    flex-shrink: 0;\n\
                    min-height: 46px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 44px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.40625px;\n\
                }\n\
                \n\
                .pd0-0-0-2-1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 152px;\n\
                    min-height: 46px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-rectangle2 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 152px;\n\
                    min-height: 65px;\n\
                    padding-top: 9px;\n\
                    padding-bottom: 10px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(253, 112, 112, 0.33);\n\
                }\n\
                \n\
                .pd0-0-0-2-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-2 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 152px;\n\
                    min-height: 65px;\n\
                    margin-top: 0px;\n\
                }\n\
                \n\
                .pd0-nossamissomentorareauxiliarnaeducaodejogadorasderugbyqueestonoensinofundamentalparaqueconsigambolsas-atletanasmelhoresuniversidadesdosestadosunidosnbspqueremosensinaramulheresjovensqueorugbypodeserummeioparaalcanardiversosobjetivosinclusiveosrelacionadosnbspeducaonbsp-0 {\n\
                    width: 767px;\n\
                    flex-shrink: 0;\n\
                    min-width: 767px;\n\
                    min-height: 155px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\
                    color: rgb(192, 35, 35);\n\
                    font-size: 23px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                }\n\
                \n\
                .pd0-0-0-3 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 767px;\n\
                    min-height: 155px;\n\
                    margin-top: 30px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-image-9 {\n\
                    height: 359px;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-height: 359px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    background-image: url('https://ucarecdn.com/bd7c53cd-6a21-4a96-ae97-94b9bc0c493e/');\n\
                    background-size: cover;\n\
                    background-position: center;\n\
                }\n\
                \n\
                .pd0-0-0-4 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-height: 359px;\n\
                    margin-top: 50px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-5-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-quemsomos-5 {\n\
                    flex-shrink: 0;\n\
                    min-height: 46px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 44px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.40625px;\n\
                }\n\
                \n\
                .pd0-0-0-5-1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 273px;\n\
                    min-height: 46px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-rectangle3 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 273px;\n\
                    min-height: 70px;\n\
                    padding-top: 9px;\n\
                    padding-bottom: 15px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(253, 112, 112, 0.33);\n\
                }\n\
                \n\
                .pd0-0-0-5-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-5 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 273px;\n\
                    min-height: 70px;\n\
                    margin-top: 0px;\n\
                }\n\
                \n\
                .pd0-profile-4 {\n\
                    width: 345px;\n\
                    flex-shrink: 0;\n\
                    min-width: 345px;\n\
                    min-height: 640px;\n\
                }\n\
                \n\
                .pd0-profile-2 {\n\
                    width: 345px;\n\
                    flex-shrink: 0;\n\
                    min-width: 345px;\n\
                    min-height: 640px;\n\
                    margin-left: 45px;\n\
                }\n\
                \n\
                .pd0-0-0-6 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 735px;\n\
                    min-height: 640px;\n\
                    margin-top: 34px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-profile-3 {\n\
                    width: 345px;\n\
                    flex-shrink: 0;\n\
                    min-width: 345px;\n\
                    min-height: 640px;\n\
                }\n\
                \n\
                .pd0-profile-5 {\n\
                    width: 345px;\n\
                    flex-shrink: 0;\n\
                    min-width: 345px;\n\
                    min-height: 640px;\n\
                    margin-left: 45px;\n\
                }\n\
                \n\
                .pd0-0-0-7 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 735px;\n\
                    min-height: 640px;\n\
                    margin-top: 0px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-image-4 {\n\
                    height: 413px;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-height: 413px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    background-image: url('https://ucarecdn.com/4aab8153-292c-4cda-8b98-397abe2767c4/');\n\
                    background-size: cover;\n\
                    background-position: center;\n\
                }\n\
                \n\
                .pd0-0-0-8 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-height: 413px;\n\
                    margin-top: 33px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-9-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-participe-3 {\n\
                    flex-shrink: 0;\n\
                    min-height: 46px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 44px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: left;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.59375px;\n\
                }\n\
                \n\
                .pd0-0-0-9-1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 206px;\n\
                    min-height: 46px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-rectangle4 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 206px;\n\
                    min-height: 70px;\n\
                    padding-top: 13px;\n\
                    padding-bottom: 11px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(253, 112, 112, 0.33);\n\
                }\n\
                \n\
                .pd0-0-0-9-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-9 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 206px;\n\
                    min-height: 70px;\n\
                    margin-top: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-10-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0.51;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-nbspparaparticiparprimeirocertifique-sedequevocseencaixanosrequisitosdoprograma1 {\n\
                    width: 767px;\n\
                    flex-shrink: 0;\n\
                    min-width: 767px;\n\
                    min-height: 465px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\
                    color: rgb(192, 35, 35);\n\
                    font-size: 23px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                }\n\
                \n\
                .pd0-0-0-10-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0.49;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-10 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 767px;\n\
                    min-height: 465px;\n\
                    margin-top: 31px;\n\
                }\n\
                \n\
                .pd0-0-0-11-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0.5040322580645161;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-07 {\n\
                    width: 617px;\n\
                    flex-shrink: 0;\n\
                    min-width: 617px;\n\
                    min-height: 124px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\
                    color: rgb(192, 35, 35);\n\
                    font-size: 23px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                }\n\
                \n\
                .pd0-0-0-11-1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 619px;\n\
                    min-height: 124px;\n\
                    padding-left: 0px;\n\
                    padding-right: 2px;\n\
                }\n\
                \n\
                .pd0-rectangle7 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-shrink: 0;\n\
                    min-width: 619px;\n\
                    min-height: 171px;\n\
                    padding-top: 18px;\n\
                    padding-bottom: 29px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(253, 112, 112, 0.23);\n\
                }\n\
                \n\
                .pd0-0-0-11-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0.4959677419354839;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-11 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 619px;\n\
                    min-height: 171px;\n\
                    margin-top: 447px;\n\
                }\n\
                \n\
                .pd0-0-0-12-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0.5041322314049587;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-paraquaisquerdvidassobreoprocessoouproblemascomainscriofavorenviarumemailparacontatorugbyxchangecombrnbsp-7 {\n\
                    width: 625px;\n\
                    flex-shrink: 0;\n\
                    min-width: 625px;\n\
                    min-height: 93px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\
                    color: rgb(192, 35, 35);\n\
                    font-size: 23px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                }\n\
                \n\
                .pd0-0-0-12-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0.49586776859504134;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-12 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 625px;\n\
                    min-height: 93px;\n\
                    margin-top: 44px;\n\
                }\n\
                \n\
                .pd0-image-5 {\n\
                    height: 242px;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-height: 242px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                }\n\
                \n\
                .pd0-0-0-13 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 1px;\n\
                    min-height: 242px;\n\
                    margin-top: 49px;\n\
                    padding-left: 0px;\n\
                    padding-right: 1px;\n\
                }\n\
                \n\
                .pd0-0-0-14-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-nossoapoio-8 {\n\
                    flex-shrink: 0;\n\
                    min-height: 46px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 44px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.40625px;\n\
                }\n\
                \n\
                .pd0-0-0-14-1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 273px;\n\
                    min-height: 46px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-rectangle5 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 273px;\n\
                    min-height: 70px;\n\
                    padding-top: 14px;\n\
                    padding-bottom: 10px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(253, 112, 112, 0.33);\n\
                }\n\
                \n\
                .pd0-0-0-14-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-14 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 273px;\n\
                    min-height: 70px;\n\
                    margin-top: 0px;\n\
                }\n\
                \n\
                .pd0-divulgaremosnossasparceriasembreveparanosapoiarmandeumemailparaapoiorugbyxchangecombr-6 {\n\
                    width: 631px;\n\
                    flex-shrink: 0;\n\
                    min-width: 631px;\n\
                    min-height: 188px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 36px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                }\n\
                \n\
                .pd0-0-0-15 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 631px;\n\
                    min-height: 188px;\n\
                    margin-top: 48px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-image-40 {\n\
                    height: 363px;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-height: 363px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                }\n\
                \n\
                .pd0-0-0-16 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-height: 363px;\n\
                    margin-top: 101px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-17-0 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-contato-5 {\n\
                    flex-shrink: 0;\n\
                    min-height: 46px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Copperplate, 'Copperplate Gothic Light', fantasy;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 44px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                    padding-right: 0.640625px;\n\
                }\n\
                \n\
                .pd0-0-0-17-1-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 184px;\n\
                    min-height: 46px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-rectangle6 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 184px;\n\
                    min-height: 70px;\n\
                    padding-top: 12px;\n\
                    padding-bottom: 12px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(253, 112, 112, 0.33);\n\
                }\n\
                \n\
                .pd0-0-0-17-2 {\n\
                    height: 0px;\n\
                    flex-grow: 0;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-0-0-17 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 184px;\n\
                    min-height: 70px;\n\
                    margin-top: 0px;\n\
                }\n\
                \n\
                .pd0-sevoctemalgumadvidasugestoouachaquedeveserconsideradamesmonoestandodentrodospr-requisitosmandeumemailparacontatorugbyxchangecombr-4 {\n\
                    width: 658px;\n\
                    flex-shrink: 0;\n\
                    min-width: 658px;\n\
                    min-height: 144px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: rgba(0,0,0,0);\n\
                    font-family: Futura, 'Trebuchet MS', Arial, sans-serif;\n\
                    color: rgb(148, 18, 18);\n\
                    font-size: 27px;\n\
                    letter-spacing: 0px;\n\
                    font-weight: normal;\n\
                    font-style: normal;\n\
                    text-decoration: none;\n\
                    text-align: center;\n\
                    word-wrap: break-word;\n\
                }\n\
                \n\
                .pd0-0-0-18 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 658px;\n\
                    min-height: 144px;\n\
                    margin-top: 27px;\n\
                    justify-content: center;\n\
                }\n\
                \n\
                .pd0-0-0-19 {\n\
                    width: 0px;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-height: 0px;\n\
                }\n\
                \n\
                .pd0-bottombar-1 {\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 194px;\n\
                    min-height: 97px;\n\
                }\n\
                \n\
                .pd0-0-0-20 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-shrink: 0;\n\
                    min-width: 194px;\n\
                    min-height: 97px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0-main-9 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 767px;\n\
                    min-height: 100vh;\n\
                    padding-top: 0px;\n\
                    padding-bottom: 0px;\n\
                    border-radius: 0px;\n\
                    cursor: auto;\n\
                    background: #FFFFFF;\n\
                }\n\
                \n\
                .pd0-0 {\n\
                    display: flex;\n\
                    flex-direction: row;\n\
                    flex-grow: 1;\n\
                    flex-basis: 0px;\n\
                    min-width: 767px;\n\
                    min-height: 5749px;\n\
                    padding-left: 0px;\n\
                    padding-right: 0px;\n\
                }\n\
                \n\
                .pd0 {\n\
                    display: flex;\n\
                    flex-direction: column;\n\
                    min-width: 767px;\n\
                    min-height: 5749px;\n\
                    padding-top: 0px;\n\
                    padding-bottom: 0px;\n\
                }\n\
                \n\
                \n\
                "}}/>
        </span>
        <div className="pd0-0">
            <div className="pd0-main-9">
                <div className="pd0-0-0-0">
                    <div className="pd0-topbar-9">
                        <Topbar /> 
                    </div>
                </div>
                <div className="pd0-0-0-1">
                    <div id={'mission'} className="pd0-image-3">
                        <div className="pd0-0-0-1-0-0">
                            <div className="pd0-bemvindxaorugbyxchange-2">
                                <div>Bem Vindx ao rugbyXchange!</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="pd0-0-0-2">
                    <div className="pd0-0-0-2-0" /> 
                    <div className="pd0-rectangle2">
                        <div className="pd0-0-0-2-1-0">
                            <div className="pd0-misso-2">
                                <div>Missão</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pd0-0-0-2-2" /> 
                </div>
                <div className="pd0-0-0-3">
                    <div className="pd0-nossamissomentorareauxiliarnaeducaodejogadorasderugbyqueestonoensinofundamentalparaqueconsigambolsas-atletanasmelhoresuniversidadesdosestadosunidosnbspqueremosensinaramulheresjovensqueorugbypodeserummeioparaalcanardiversosobjetivosinclusiveosrelacionadosnbspeducaonbsp-0">
                        <div>Nossa missão é mentorar e auxiliar na educação de jogadoras de rugby que estão no ensino fundamental para que consigam bolsas-atleta nas melhores universidades dos Estados Unidos.&amp;nbsp;Queremos ensinar a mulheres jovens que o rugby pode ser um meio para alcançar diversos objetivos, inclusive os relacionados à&amp;nbsp;educação.&amp;nbsp;</div>
                        <div></div>
                    </div>
                </div>
                <div className="pd0-0-0-4">
                    <div id={'who'} className="pd0-image-9" /> 
                </div>
                <div className="pd0-0-0-5">
                    <div className="pd0-0-0-5-0" /> 
                    <div className="pd0-rectangle3">
                        <div className="pd0-0-0-5-1-0">
                            <div className="pd0-quemsomos-5">
                                <div>Quem Somos</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pd0-0-0-5-2" /> 
                </div>
                <div className="pd0-0-0-6">
                    <div className="pd0-profile-4">
                        <Profile bio={"Taciana já praticou futebol, basquete, vôlei, triathlon, muay-thai e jiu-jitsu, mas se apaixonou quando começou a jogar rugby no fim do seu primeiro ano de Bioengenharia na Universidade de Harvard. Lá ela teve contato com atletas recrutados para diversas modalidades em universidades nos EUA. Hoje trabalha com engenharia de tecidos, mas acredita no poder do esporte para transformar vidas e dar acesso à educação."} name={"Taciana Pereira"} image_url={"https://ucarecdn.com/19976a93-1c48-40d9-b099-b2d8a5786dee/"} /> 
                    </div>
                    <div className="pd0-profile-2">
                        <Profile bio={"Taciana já praticou futebol, basquete, vôlei, triathlon, muay-thai e jiu-jitsu, mas se apaixonou quando começou a jogar rugby no fim do seu primeiro ano de Bioengenharia na Universidade de Harvard. Lá ela teve contato com atletas recrutados para diversas modalidades em universidades nos EUA. Hoje trabalha com engenharia de tecidos, mas acredita no poder do esporte para transformar vidas e dar acesso à educação."} name={"Isadora Cerullo"} image_url={"https://ucarecdn.com/c65cc8ae-17d6-4f7d-abe1-db65a6485508/"} /> 
                    </div>
                </div>
                <div className="pd0-0-0-7">
                    <div className="pd0-profile-3">
                        <Profile bio={"Ana começou a jogar rugby aos 22 anos, pelo Urutau (Curitiba/PR). Desde então não conseguiu mais largar o esporte por seus valores cativantes e se envolveu em diversas atividades extra-campo, tendo sido Diretora e Presidente do clube. Advogada formada e pós-graduada pela PUC-PR, acredita que o esporte é uma ferramente chave para o empoderamento feminino."} name={"Ana Cassia Sato Campos"} image_url={"https://ucarecdn.com/35833982-69ec-486b-a556-7023c6861277/"} /> 
                    </div>
                    <div className="pd0-profile-5">
                        <Profile bio={"Taciana já praticou futebol, basquete, vôlei, triathlon, muay-thai e jiu-jitsu, mas se apaixonou quando começou a jogar rugby no fim do seu primeiro ano de Bioengenharia na Universidade de Harvard. Lá ela teve contato com atletas recrutados para diversas modalidades em universidades nos EUA. Hoje trabalha com engenharia de tecidos, mas acredita no poder do esporte para transformar vidas e dar acesso à educação."} name={"Marjorie Yu Enia"} image_url={"https://ucarecdn.com/19976a93-1c48-40d9-b099-b2d8a5786dee/"} /> 
                    </div>
                </div>
                <div className="pd0-0-0-8">
                    <div id={'participate'} className="pd0-image-4" /> 
                </div>
                <div className="pd0-0-0-9">
                    <div className="pd0-0-0-9-0" /> 
                    <div className="pd0-rectangle4">
                        <div className="pd0-0-0-9-1-0">
                            <div className="pd0-participe-3">
                                <div>Participe</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pd0-0-0-9-2" /> 
                </div>
                <div className="pd0-0-0-10">
                    <div className="pd0-0-0-10-0" /> 
                    <div className="pd0-nbspparaparticiparprimeirocertifique-sedequevocseencaixanosrequisitosdoprograma1">
                        <div>&amp;nbsp;Para participar, primeiro certifique-se de que você se encaixa nos requisitos do programa:1. Você está no 8o ou 9o ano do ensino fundamental em uma escola do ensino público, ou tem 100% de bolsa em uma escola particular;2. Você joga rugby;3. Você tem um desempenho escolar com média acima de 8;4. Você é motivada e está disposta a trabalhar muito para conseguir o que quer.Obs.: Não é necessário falar inglês para participar do programa.Se você se enquadra nesses pré-requisitos, preencha este formulário e envie os seguintes documentos para o email contato@rugbyxchange.com.br (assunto &quot;Seu Nome Completo - Inscrição&quot;):1. Carta de recomendação de umx treinadorx, preferencialmente falando sobre sua atitude e desempenho no esporte;2. Carta de recomendação de umx profressorx, preferencialmente falando sobre seu desempenho acadêmico;3. Histórico escolar a partir do 7o ano.&amp;nbsp;As fases de seleção são as seguintes:</div>
                        <div></div>
                    </div>
                    <div className="pd0-0-0-10-2" /> 
                </div>
                <div className="pd0-0-0-11">
                    <div className="pd0-0-0-11-0" /> 
                    <div className="pd0-rectangle7">
                        <div className="pd0-0-0-11-1-0">
                            <div className="pd0-07">
                                <div>07/08/2017 - 15/09/2017: Período de inscrições25/09: Anúncio das aprovadas para a segunda fase26/09 - 13/10: Período de entrevista das finalistas20/10: Anúncio das escolhidas para o rugbyXchange</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pd0-0-0-11-2" /> 
                </div>
                <div className="pd0-0-0-12">
                    <div className="pd0-0-0-12-0" /> 
                    <div className="pd0-paraquaisquerdvidassobreoprocessoouproblemascomainscriofavorenviarumemailparacontatorugbyxchangecombrnbsp-7">
                        <div>Para quaisquer dúvidas sobre o processo ou problemas com a inscrição, favor enviar um email para contato@rugbyxchange.com.br.&amp;nbsp;</div>
                        <div></div>
                    </div>
                    <div className="pd0-0-0-12-2" /> 
                </div>
                <div className="pd0-0-0-13">
                    <img src="https://ucarecdn.com/59d1a840-2ccd-4de3-a3e9-ecc0744cbcf2/" id={'supporters'} className="pd0-image-5" /> 
                </div>
                <div className="pd0-0-0-14">
                    <div className="pd0-0-0-14-0" /> 
                    <div className="pd0-rectangle5">
                        <div className="pd0-0-0-14-1-0">
                            <div className="pd0-nossoapoio-8">
                                <div>Nosso Apoio</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pd0-0-0-14-2" /> 
                </div>
                <div className="pd0-0-0-15">
                    <div className="pd0-divulgaremosnossasparceriasembreveparanosapoiarmandeumemailparaapoiorugbyxchangecombr-6">
                        <div>Divulgaremos nossas parcerias em breve!Para nos apoiar, mande um email para apoio@rugbyxchange.com.br</div>
                        <div></div>
                    </div>
                </div>
                <div className="pd0-0-0-16">
                    <img src="https://ucarecdn.com/14a19e14-9a66-4a04-8669-6e9a33d257af/" id={'contact'} className="pd0-image-40" /> 
                </div>
                <div className="pd0-0-0-17">
                    <div className="pd0-0-0-17-0" /> 
                    <div className="pd0-rectangle6">
                        <div className="pd0-0-0-17-1-0">
                            <div className="pd0-contato-5">
                                <div>Contato</div>
                                <div></div>
                            </div>
                        </div>
                    </div>
                    <div className="pd0-0-0-17-2" /> 
                </div>
                <div className="pd0-0-0-18">
                    <div className="pd0-sevoctemalgumadvidasugestoouachaquedeveserconsideradamesmonoestandodentrodospr-requisitosmandeumemailparacontatorugbyxchangecombr-4">
                        <div>Se você tem alguma dúvida, sugestão ou acha que deve ser considerada mesmo não estando dentro dos pré-requisitos, mande um email para contato@rugbyxchange.com.br</div>
                        <div></div>
                    </div>
                </div>
                <div className="pd0-0-0-19" /> 
                <div className="pd0-0-0-20">
                    <div className="pd0-bottombar-1">
                        <Bottombar color={"grey"} /> 
                    </div>
                </div>
            </div>
        </div>
    </div>;
};

export default function(props) {
    return render.apply({props: props});
}