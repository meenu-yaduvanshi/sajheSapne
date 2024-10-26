import Nav from "./Nav"
import '../styles/powerOfLearning.css'
import Footer from './Footer';


function PowerOfLearning() {
    return (
        <>
            <Nav />
            <div id="learning-main-parent">
                <img src="https://placehold.co/280x200" alt="" />
                <h1 className="banner">Sapna Centre, Where Rural Women Build Confidence & Careers</h1>

                <div className="sections" id="section-2">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Power Of Learning</h2>
                    <button className="new-one">button</button>
                </div>

                <div className="sections" id="section-3">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we" id="local-culture">Sapna Centre: Global Learning In Local Cultures</h2>
                    <button className="new-one">Open a Sapna Centre</button>
                </div>

                <div className="sections" id="section-4">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Breaking Stereotypes, Skills Beyond <br />Silai-Kadai-Bunai</h2>
                    <button className="new-one">Donate</button>
                </div>

                <div className="sections" id="section-5">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Learning To Change The Inner Reality</h2>
                    <button className="new-one">Our Learning Products</button>
                </div>

                <div className="sections" id="section-6">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Life & Career Advise By Rural Women: Sapnewaali Ki Seekh</h2>
                </div>

                <div className="sections" id="section-7">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we">Measure What Matters</h2>
                    <button className="new-one">Donate</button>
                </div>

                <div className="sections" id="section-8">
                    <img src="https://placehold.co/280x200" alt="" />
                    <h2 className="h2-we" id="product-made">Product Made In Rural India</h2>
                    <button className="new-one">Order Now</button>
                </div>

                <div className="sections" id="section-9">
                    <h2 className="h2-we">People Love Our Product</h2>
                    <img src="https://placehold.co/280x200" alt="" />
                </div>

            </div>
            <Footer/>
        </>
    )
}

export default PowerOfLearning