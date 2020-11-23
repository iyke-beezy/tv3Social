import React from 'react'
import './styles.scss'
import Logic from '../../utilities'

import DataCapture from '../DataCapture'

//images
// import demo1 from '../../assets/img/demo1/1.jpg'
// import demo2 from '../../assets/img/demo1/2.jpg'
// import demo3 from '../../assets/img/demo1/3.jpg'
// import demo4 from '../../assets/img/demo1/4.jpg'
// import demo7 from '../../assets/img/demo1/7.jpg'
// import demo8 from '../../assets/img/demo1/8.jpg'
// import demo13 from '../../assets/img/demo1/13.jpg'
// import demo14 from '../../assets/img/demo1/14.jpg'
// import demo15 from '../../assets/img/demo1/15.jpg'
// import demo19 from '../../assets/img/demo1/19.jpg'
// import demo20 from '../../assets/img/demo1/20.jpg'
// import demo21 from '../../assets/img/demo1/21.jpg'
// import demo25 from '../../assets/img/demo1/25.jpg'
// import demo26 from '../../assets/img/demo1/26.jpg'

import tv3 from '../../assets/img/tv3.png'
import gmb1 from '../../assets/img/1.PNG'
import gmb2 from '../../assets/img/2.PNG'
import gmb3 from '../../assets/img/3.PNG'
import gmb4 from '../../assets/img/3.jpeg'
import gmb5 from '../../assets/img/4.PNG'
import gmb6 from '../../assets/img/5.jpeg'
import gmb7 from '../../assets/img/6.jpeg'
import gmb8 from '../../assets/img/4.jpeg'
import gmb9 from '../../assets/img/7.jpeg'
import gmb10 from '../../assets/img/winner.jpeg'

import m1 from '../../assets/img/_R5A9310.JPG'
import m2 from '../../assets/img/_R5A9339.JPG'
import m3 from '../../assets/img/_R5A9352.JPG'
import m4 from '../../assets/img/_R5A9353.JPG'
import m5 from '../../assets/img/_R5A9354.JPG'
import m6 from '../../assets/img/_R5A9357.JPG'
import m7 from '../../assets/img/_R5A9366.JPG'
import m8 from '../../assets/img/_R5A9367.JPG'
import m9 from '../../assets/img/_R5A9420.JPG'

import a1 from '../../assets/img/_R57.jpg'
import a2 from '../../assets/img/_R5A.jpg'
import a3 from '../../assets/img/_R5A8.jpg'
import a4 from '../../assets/img/_R5A829.jpg'

import wf1 from '../../assets/img/wf.jpg'
import wf2 from '../../assets/img/wf2.jpg'
import wf3 from '../../assets/img/wf3.jpg'

class Homepage extends React.Component {
    constructor(props) {
        super(props);
        // create a ref to store the cursor and Button DOM element
        this.main = React.createRef();
    }

    state = {
        loading: true
    }

    componentDidMount() {
        new Logic(this.main.current)
    }

    disableLoading = (value) => {
        // console.log(value)
        this.setState({
            loading: value
        })
    }

    render() {
        return (
            <div className="demo-3 loading" ref={this.main}>
                {this.state.loading && <DataCapture setLoading={this.disableLoading} />}

                <main id="main" data-scroll-container>
                    <section id="header" className="content content--fixed">
                        <div className="frame">
                            <div className="frame__title-wrap">
                                <img className="frame__title" style={{ width: 255 }} src={tv3} alt='tv3' />
                            </div>

                        </div>
                    </section>

                    {/* <section className="tiles tiles--perspective tiles--darker">
                        <div className="tiles__wrap">
                            <div className="tiles__line" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo1})` }}>
                                </div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo2})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo4})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb7})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb2})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo8})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo7})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo8})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb4})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb5})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb6})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb7})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo14})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo13})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo14})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo15})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb7})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb8})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb9})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb10})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo20})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo19})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo20})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo21})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb9})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb1})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb10})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo25})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${demo26})` }}></div>
                            </div>
                        </div>
                        <h2 className="tiles__title tiles__title--intro" data-scroll data-scroll-speed="4">Ghana's<br />Most Beautiful</h2>
                    </section> */}
                    <section className="tiles tiles--rotated" id="grid2">
                        <div className="tiles__wrap">
                            <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img"></div>
                                <div className="tiles__line-img"></div>
                                <div className="tiles__line-img"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb1})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb2})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb9})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb5})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb6})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb6})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb8})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb5})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb8})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb9})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb7})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb4})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb5})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb1})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb9})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb10})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb7})` }}></div>
                                <div className="tiles__line-img"></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid2" data-scroll-direction="horizontal">
                                <div className="tiles__line-img"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb9})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb4})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${gmb3})` }}></div>
                                <div className="tiles__line-img"></div>
                                <div className="tiles__line-img"></div>
                            </div>
                        </div>
                    </section>

                    <section className="content content--feature">
                        <p className="content__breakout content__breakout--big" data-scroll data-scroll-speed="3" data-scroll-direction="horizontal"></p>
                        <p className="content__breakout content__breakout--medium" data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal"></p>
                    </section>
                    <section className="content content--numbered">
                        <p className="content__text" data-scroll data-scroll-speed="2">The conservation of novelty is simply that, over time, the universe has become more complicated. New levels of complexity become the foundations for yet deeper levels of complexity. And this phenomenon of the production and conservation of what I call novelty is not something which goes on only in the biological domain or only in the cultural domain or only in the domain of physics. It is a trans-categorical impulse in reality, meaning: it’s everywhere. <em>Everywhere!</em></p>
                    </section>

                    <section className="tiles tiles--columns" id="grid3">
                        <div className="tiles__wrap">
                            <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid3" data-scroll-direction="vertical">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m1})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m2})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m3})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid3" data-scroll-direction="vertical">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m4})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m8})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m6})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="1" data-scroll-target="#grid3" data-scroll-direction="vertical">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m7})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m9})` }}></div>
                            </div>
                            <div className="tiles__line" data-scroll data-scroll-speed="-1" data-scroll-target="#grid3" data-scroll-direction="vertical">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m5})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${m1})` }}></div>
                            </div>
                        </div>
                        <h2 className="tiles__title tiles__title--right tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">Mentor</h2>
                    </section>

                    <section className="tiles tiles--oneline" id="grid3">
                        <div className="tiles__wrap">
                            <div className="tiles__line" data-scroll data-scroll-speed="-2" data-scroll-target="#grid3" data-scroll-direction="horizontal">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a1})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a2})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a3})` }}></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }}></div>
                            </div>
                        </div>
                        <h2 className="tiles__title tiles__title--left tiles__title--full tiles__title--alt" data-scroll data-scroll-speed="2">Empowerment</h2>
                    </section>

                    <section className="tiles tiles--fixed">
                        <div className="tiles__wrap">
                            <div className="tiles__line">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="3" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="1" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal"></div>
                            </div>
                            <div className="tiles__line">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="3" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="1" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal"></div>
                            </div>
                            <div className="tiles__line">
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="3" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="2" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="1" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-1" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-2" data-scroll-direction="horizontal"></div>
                                <div className="tiles__line-img" style={{ backgroundImage: `url(${a4})` }} data-scroll data-scroll-speed="-3" data-scroll-direction="horizontal"></div>
                            </div>
                        </div>
                    </section>

                    <section className="content">
                        <a className="backtop" data-scroll data-scroll-speed="4">Back to the top</a>
                        <div className="frame frame--footer">
                        </div>
                    </section>
                </main>
            </div>

        )
    }
}

export default Homepage