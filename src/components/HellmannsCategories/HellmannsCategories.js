import React, {Component} from 'react';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll'

class HellmannsCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      sectionTitle: PropTypes.string.isRequired
    };

    render() {
        const { 
          props: { children, sectionTitle },
        } = this;

        return (
            <section className="hellmanns-categories-section">
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" delay="800">
                    <h2>{sectionTitle}</h2>
                </ScrollAnimation>
                <ScrollAnimation animateIn="animate__fadeInUp" animateOnce="true" delay="1200">
                <div className="hellmanns-boxes-section">
                    {children}
                </div>
                </ScrollAnimation>
                    
            </section>
        )
    }
}

export default HellmannsCategories;