import React, {Component} from 'react';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll';

class DoveCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      sectionTitle: PropTypes.string.isRequired
    };

    render() {
        const { 
          props: { children, sectionTitle },
        } = this;

        return (
            <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true" delay="700">
                <section className="dove-categories-section">
                        <div className="h2-div">
                            <h2>{sectionTitle}</h2>
                        </div>
                    <div className="dove-boxes-section">
                        {children}
                    </div>
                </section>
            </ScrollAnimation>
        )
    }
}

export default DoveCategories;