import React, { useEffect, useState } from 'react'
import NavBar from '../layout/Navbar';
import { makeStyles } from '@material-ui/core/styles'
import { Collapse, CssBaseline, IconButton } from '@material-ui/core'
import Down from "@material-ui/icons/ArrowDownward";
import placeTovisit from '../placeTovisit';



function OHome() {

    const [checked, setChecked] = useState(false);

    useEffect(() => {

        setChecked(true)


    }, []);




    return (

        <div >


            <NavBar />


            <div className="uHome"  >

                <Collapse in={checked}
                    style={{ transformOrigin: '0 0 0' }}
                    {...(checked ? { timeout: 2000 } : {})} >


                    <div className="container" >

                        <h1 className="title" >
                            Welcome to  <span className="colorText"  >  Shoppify   </span>
                        </h1>
                        <br />
                        <br />
                        <br />

                        <IconButton   >
                            <Down style={{ fontSize: '8rem', color: 'aqua' }} />

                        </IconButton>


                    </div>
                </Collapse>


       

            </div>

          


        </div>

    )
}

export default OHome
