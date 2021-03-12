import React, {Component} from 'react';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class RexonaCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      sectionTitle: PropTypes.string.isRequired
    };

    render() {
        const { 
          props: { children, sectionTitle },
        } = this;

        return (
            <section className="categories-section">
                <ScrollAnimation animateIn="animate__fadeInLeft" animateOnce="true">
                    <h2>{sectionTitle}</h2>
                </ScrollAnimation>
                <div className="boxes-section">
                    {children}
                </div>
                    
            </section>
        )
    }
}

export default RexonaCategories;