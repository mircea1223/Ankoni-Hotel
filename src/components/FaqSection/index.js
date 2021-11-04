import React from 'react'
import './style.css'
import Collapsible from 'react-collapsible';


const FaqSection = () => {
    return(
        <section className="faq-area section-padding">
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <div className="section-title">
                            <span>FAQ</span>
                            <h2>Frequently Asked Question</h2>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-lg-12">
                      
                        
                    </div>
                </div>
                <Collapsible trigger="Start here">
      <p>
      Do you recommend using a download manager software?
      </p>
      <p>
      Do you recommend using a download manager software?
      </p>
    </Collapsible>
    <Collapsible trigger="Start here">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
    <Collapsible trigger="Start here">
      <p>
        This is the collapsible content. It can be any element or React
        component you like.
      </p>
      <p>
        It can even be another Collapsible component. Check out the next
        section!
      </p>
    </Collapsible>
            </div>
        </section>
    )
}
export default FaqSection;