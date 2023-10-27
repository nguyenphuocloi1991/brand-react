import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle';
import { Container, Row, Col,Image } from 'react-bootstrap';

export default () => {

    return (
        <>
            <Container>
             
                <Row>
                   <Col sm={12}>
                    <div className='title-manager'>
                            <h6>WELCOME</h6>
                            <h2>Introducing Olema, a modern creative theme ideal for showcasing your projects in an original and authentic manner.</h2>
                    </div>
                   </Col>
                </Row>
                <Row>
                    <Col sm={3}>
                    <div className='item-group'>
                        <div className='image-thum'>
                            <a href='#'>
                            <img src='https://olema.qodeinteractive.com/wp-content/uploads/2020/08/landing-img-21.jpg' width="100%"/>
                            </a>
                        </div>
                        <div className='title-item'>
                            <h3>
                                <a href='#'>
                            Interactive Links
                                </a>
                            </h3>
                        </div>
                    </div>    
                    </Col>
                    <Col sm={3}>
                    <div className='item-group'>
                        <div className='image-thum'>
                            <a href='#'>
                            <img src='https://olema.qodeinteractive.com/wp-content/uploads/2020/08/landing-img-21.jpg' width="100%"/>
                            </a>
                        </div>
                        <div className='title-item'>
                            <h3>
                                <a href='#'>
                            Interactive Links
                                </a>
                            </h3>
                        </div>
                    </div>    
                    </Col>
                    <Col sm={3}>
                    <div className='item-group'>
                        <div className='image-thum'>
                            <a href='#'>
                            <img src='https://olema.qodeinteractive.com/wp-content/uploads/2020/08/landing-img-21.jpg' width="100%"/>
                            </a>
                        </div>
                        <div className='title-item'>
                            <h3>
                                <a href='#'>
                            Interactive Links
                                </a>
                            </h3>
                        </div>
                    </div>    
                    </Col>
                    <Col sm={3}>
                    <div className='item-group'>
                        <div className='image-thum'>
                            <a href='#'>
                            <img src='https://olema.qodeinteractive.com/wp-content/uploads/2020/08/landing-img-21.jpg' width="100%"/>
                            </a>
                        </div>
                        <div className='title-item'>
                            <h3>
                                <a href='#'>
                            Interactive Links
                                </a>
                            </h3>
                        </div>
                    </div>    
                    </Col>
                    
                </Row>
              
            </Container>


        </>
    )
}