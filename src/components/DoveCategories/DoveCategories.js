import React, {Component} from 'react';
import PropTypes from "prop-types";

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
            <section className="dove-categories-section">
                <h2>{sectionTitle}</h2>
                <div className="dove-boxes-section">
                    {children}
                </div>
                    
            </section>
        )
    }
}

export default DoveCategories;