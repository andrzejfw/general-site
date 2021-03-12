import React, {Component} from 'react';
import PropTypes from "prop-types";
import ScrollAnimation from 'react-animate-on-scroll'

class DomestosCategories extends Component {
    static propTypes = {
      children: PropTypes.instanceOf(Object).isRequired,
      sectionTitle: PropTypes.string.isRequired
    };

    render() {
        const { 
          props: { children, sectionTitle },
        } = this;

        return (
            <section className="domestos-categories-section">
                <ScrollAnimation animateIn="animate__fadeIn" animateOnce="true"><h1>{sectionTitle}</h1></ScrollAnimation>
                <div className="domestos-boxes-section">
                    {children}
                </div>
                    
            </section>
        )
    }
}

export default DomestosCategories;