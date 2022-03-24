import React, { Component } from 'react'
import Carousel from 'react-bootstrap/Carousel'

export default class CarouselBox extends Component {
    render() {
        return (
            <div className='d-flex justify-content-center'>
                <Carousel>
                    <Carousel.Item>
                        <img
                            className='d-flex w-100'
                            src='https://sun9-56.userapi.com/impg/pkrqginU3f0XzDQNOxQNs1Xe-ubA7Sf3yX0zxg/06U8DGQqSp8.jpg?size=1080x1350&quality=95&sign=898abc874dfbf2178dd2901668ccc5ab&type=album'
                            alt='trigan_1'
                        />
                        <Carousel.Caption>
                            <h3>Trigan poster 1</h3>
                            <p>lorem si vi passum parabelum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-flex w-100'
                            src='https://sun9-75.userapi.com/impg/FT0LZKMXFppYw46C38riwRcMGix-X-cOLCGhWw/myxyBV_pjCw.jpg?size=1200x1697&quality=96&sign=b41221adef761f59ea135085ae8903d7&type=album'
                            alt='trigan_2'
                        />
                        <Carousel.Caption>
                            <h3>Trigan poster 2</h3>
                            <p>lorem si vi passum parabelum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                    <Carousel.Item>
                        <img
                            className='d-flex w-100'
                            src='https://sun9-78.userapi.com/impg/3vnbp2UyHk1agnJHsbY0I6W2TXzaJY9dLrgx-g/qBU-7Z6m2y0.jpg?size=896x1267&quality=96&sign=1ad65b97e1c1b9abee34bfe0f9064686&type=album'
                            alt='trigan_3'
                        />
                        <Carousel.Caption>
                            <h3>Trigan poster 3</h3>
                            <p>lorem si vi passum parabelum</p>
                        </Carousel.Caption>
                    </Carousel.Item>
                </Carousel>
            </div>
        )
    }
}
